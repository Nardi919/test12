import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { queryClient } from "@/lib/queryClient";
import { Comment } from "@shared/schema";
import { addNews, deleteNews, NewsItem, news } from "@/data/news";
import { Upload, Image, Plus, X, Trash2 } from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@radix-ui/react-select'

// Komponent për publikimin e lajmeve
interface PublishNewsFormState {
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  content: string;
  image: string;
  author: string;
  tags: string;
}

// Komponenti i faqes së administratorit
const Admin = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const [activeTab, setActiveTab] = useState<string>("messages");

  // State për formën e lajmeve
  const [newsForm, setNewsForm] = useState<PublishNewsFormState>({
    title: "",
    category: "Njoftim",
    categoryColor: "#26a69a",
    description: "",
    content: "",
    image: "",
    author: "Admin",
    tags: ""
  });
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [mediaPreview, setMediaPreview] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State for new calendar event
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    eventType: "activity",
    eventDate: new Date().toISOString().split("T")[0]
  });

  // Funksion për formatimin e datës
  const formatDate = (dateString: Date) => {
    return format(new Date(dateString), "dd MMMM yyyy, HH:mm");
  };

  // Marrja e mesazheve nga API me autentifikim bazik
  const { data: comments, isLoading, error } = useQuery<{success: boolean, data: Comment[]}>({
    queryKey: ['/api/comments'],
    enabled: isAuthenticated, // Marrja e të dhënave vetëm nëse përdoruesi është i autentifikuar
    refetchInterval: 30000, // Rifreskimi i të dhënave çdo 30 sekonda
    refetchOnMount: true,
    queryFn: async () => {
      const credentials = btoa('admin:admin123');
      const response = await fetch('/api/comments', {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gabim në marrjen e të dhënave');
      }

      return response.json();
    }
  });

  // Funksioni për autentifikim
  const handleLogin = () => {
    // Fjalëkalimi i administratorit - në një aplikacion real ky do të ishte në server
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Autentifikimi me sukses",
        description: "Ju tani keni qasje në panelin e administratorit.",
        variant: "default",
      });
    } else {
      toast({
        title: "Gabim në autentifikim",
        description: "Fjalëkalimi i dhënë nuk është i saktë.",
        variant: "destructive",
      });
    }
  };

  // Funksioni për dalje nga sistemi
  const handleLogout = () => {
    // Lirimi i URL-ve të objekteve për imazhet
    mediaPreview.forEach(url => URL.revokeObjectURL(url));

    // Reset të gjitha të dhënat
    setIsAuthenticated(false);
    setPassword("");
    setSelectedComment(null);
    setActiveTab("messages");
    setSelectedImages([]);
    setMediaPreview([]);

    // Reset forma e lajmit
    setNewsForm({
      title: "",
      category: "Njoftim",
      categoryColor: "#26a69a",
      description: "",
      content: "",
      image: "",
      author: "Admin",
      tags: ""
    });
  };

  // Funksion për përditësimin e formës së lajmeve
  const handleNewsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewsForm(prev => ({ ...prev, [name]: value }));
  };

  // Funksioni për ngarkimin e imazheve me server-side storage
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Shto imazhet në listën lokale
      const files = Array.from(e.target.files);
      setSelectedImages(prev => [...prev, ...files]);

      // Krijoj URL-të për paraqitjen paraprakisht të imazheve
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setMediaPreview(prev => [...prev, ...newPreviews]);

      try {
        // Për çdo file, ngarkoje në server dhe merr URL-të e ruajtura
        const uploadPromises = files.map(async (file) => {
          // Lexoj file si base64
          const reader = new FileReader();
          const fileDataPromise = new Promise<string>((resolve) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });

          const fileData = await fileDataPromise;

          // Dërgoj të dhënat në server
          const response = await fetch('/api/upload-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fileName: file.name,
              fileType: file.type,
              fileData: fileData
            })
          });

          if (!response.ok) {
            throw new Error('Gabim në ngarkimin e imazhit në server');
          }

          // Merr URL e kthyer nga serveri
          const result = await response.json();
          return result.url;
        });

        // Prit që të gjitha ngarkimet të përfundojnë
        const uploadedUrls = await Promise.all(uploadPromises);

        // Nëse nuk është përcaktuar ende një imazh kryesor, përdor imazhin e parë të ngarkuar
        if (!newsForm.image && uploadedUrls.length > 0) {
          setNewsForm(prev => ({
            ...prev,
            image: uploadedUrls[0],
          }));

          toast({
            title: "Imazhi u ngarkua me sukses",
            description: "Imazhi u ruajt në server dhe mund të përdoret për lajmin.",
            variant: "default"
          });
        }
      } catch (error) {
        console.error('Gabim në ngarkimin e imazhit:', error);
        toast({
          title: "Gabim në ngarkimin e imazhit",
          description: "Ndodhi një gabim gjatë ngarkimit të imazhit. Ju lutem provoni përsëri.",
          variant: "destructive"
        });
      }
    }
  };

  // Funksioni për heqjen e imazhit
  const removeImage = (index: number) => {
    // Lirim i URL-së së objektit për të shmangur rrjedhjet e memories
    URL.revokeObjectURL(mediaPreview[index]);

    // Heqje nga lista e imazheve dhe parapamjeve
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setMediaPreview(prev => prev.filter((_, i) => i !== index));

    // Nëse imazhi i hequr ishte imazhi kryesor, zgjidh një imazh tjetër ose boshatis fushën
    if (newsForm.image === mediaPreview[index]) {
      const newMediaPreview = [...mediaPreview];
      newMediaPreview.splice(index, 1);

      setNewsForm(prev => ({
        ...prev,
        image: newMediaPreview.length > 0 ? newMediaPreview[0] : "",
      }));
    }
  };

  // Funksioni për publikimin e lajmit të ri
  const handlePublishNews = () => {
    setIsSubmittingNews(true);

    try {
      // Përgatit të dhënat e lajmit
      const currentDate = new Date();
      const formattedDate = format(currentDate, "dd MMMM yyyy");

      // Përdor URL-në e imazhit aktual - nuk duhet të jetë blob: më pasi e kemi ngarkuar tashmë në server
      let finalImageUrl = newsForm.image;

      // Kontrollo nëse imazhi është ende URL i brendshëm i objektit (e cila ndodh nëse ngarkimi API dështoi)
      if (newsForm.image.startsWith('blob:')) {
        console.warn('Imazhi ende përdor URL lokale blob:, që mund të shkaktojë probleme!');

        // Në këtë rast, përdorim një URL të jashtëm të sigurt
        finalImageUrl = `https://placehold.co/600x400/26a69a/ffffff?text=${encodeURIComponent(newsForm.title)}`;
      }

      const newNewsItem: Omit<NewsItem, "id"> = {
        title: newsForm.title,
        category: newsForm.category,
        categoryColor: newsForm.categoryColor,
        date: formattedDate,
        description: newsForm.description,
        content: newsForm.content,
        image: finalImageUrl, // Përdor URL-në e përpunuar
        author: newsForm.author,
        tags: newsForm.tags.split(',').map(tag => tag.trim())
      };

      // Shto lajmin e ri
      addNews(newNewsItem);

      // Lirimi i URL-ve të objekteve për imazhet
      mediaPreview.forEach(url => URL.revokeObjectURL(url));

      // Reset forma dhe të dhënat e mediave
      setNewsForm({
        title: "",
        category: "Njoftim",
        categoryColor: "#26a69a",
        description: "",
        content: "",
        image: "",
        author: "Admin",
        tags: ""
      });
      setSelectedImages([]);
      setMediaPreview([]);

      toast({
        title: "Lajmi u publikua me sukses",
        description: "Lajmi i ri tani është i disponueshëm në seksionin e lajmeve.",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Gabim në publikimin e lajmit",
        description: "Ndodhi një gabim. Ju lutemi provoni përsëri.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingNews(false);
    }
  };

  return (
    <>
      {/* Header i faqes - Dark Mode */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-teal-400">Zona Administrative</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Qasje në folderin privat të mesazheve të kontaktit.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Seksioni i autentifikimit */}
          {!isAuthenticated ? (
            <Card className="bg-gray-800 border-gray-700 shadow-lg text-white">
              <CardHeader>
                <CardTitle className="text-teal-400">Qasje në Mesazhet Private</CardTitle>
                <CardDescription className="text-gray-300">
                  Kjo zonë është e mbrojtur. Ju lutem vendosni fjalëkalimin për të parë mesazhet e kontaktit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Fjalëkalimi
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Vendosni fjalëkalimin"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin} className="bg-teal-600 hover:bg-teal-700 text-white">
                  Kyçu
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <>
              {/* Header dhe butoni për dalje */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-2xl font-bold text-teal-400">
                  Paneli i Administratorit
                </h2>
                <Button onClick={handleLogout} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Dilni
                </Button>
              </div>

              {/* Tabs për seksionet e ndryshme */}
              <Tabs defaultValue="messages" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
                <TabsList className="grid grid-cols-4 bg-gray-800">
                  <TabsTrigger value="messages" className="data-[state=active]:bg-gray-700 data-[state=active]:text-teal-400">
                    Mesazhet
                  </TabsTrigger>
                  <TabsTrigger value="news" className="data-[state=active]:bg-gray-700 data-[state=active]:text-teal-400">
                    Publiko Lajme
                  </TabsTrigger>
                  <TabsTrigger value="manage-news" className="data-[state=active]:bg-gray-700 data-[state=active]:text-teal-400">
                    Menaxho Lajmet
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="data-[state=active]:bg-gray-700 data-[state=active]:text-teal-400">
                    Kalendari
                  </TabsTrigger>
                </TabsList>

                {/* Tab për mesazhet */}
                <TabsContent value="messages" className="mt-4">
                  {/* Pamja e detajuar e një mesazhi të zgjedhur */}
                  {selectedComment ? (
                    <Card className="mb-8 bg-gray-800 border-gray-700 shadow-lg text-white">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-teal-400">{selectedComment.subject}</CardTitle>
                            <CardDescription className="mt-1 text-gray-300">
                              Nga: {selectedComment.name} ({selectedComment.email})
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="bg-gray-700 text-teal-400 border-teal-500">
                            {formatDate(selectedComment.createdAt)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="p-4 bg-gray-700 rounded-lg">
                          <p className="whitespace-pre-wrap text-gray-100">{selectedComment.message}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedComment(null)}
                          className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        >
                          Kthehu te lista
                        </Button>
                      </CardFooter>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {isLoading ? (
                        <p className="text-center py-8 text-gray-300">Duke ngarkuar mesazhet...</p>
                      ) : error ? (
                        <div className="text-center py-8">
                          <p className="text-red-400 mb-2">
                            Gabim në marrjen e mesazheve. Ju lutem provoni përsëri.
                          </p>
                          <Button 
                            onClick={() => queryClient.invalidateQueries({queryKey: ['/api/comments']})}
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          >
                            Provo përsëri
                          </Button>
                        </div>
                      ) : !comments?.data.length ? (
                        <p className="text-center py-8 text-gray-300">
                          Nuk ka asnjë mesazh ende. Mesazhet e dërguara nga forma e kontaktit do të shfaqen këtu.
                        </p>
                      ) : (
                        <>
                          <p className="text-gray-300 mb-2">
                            Totali i mesazheve: <b>{comments.data.length}</b>
                          </p>
                          {comments.data
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                            .map((comment) => (
                              <Card key={comment.id} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer shadow-md" onClick={() => setSelectedComment(comment)}>
                                <CardHeader className="pb-2">
                                  <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg text-teal-400">{comment.subject}</CardTitle>
                                    <Badge variant="outline" className="text-xs border-teal-500 text-teal-400">
                                      {formatDate(comment.createdAt)}
                                    </Badge>
                                  </div>
                                  <CardDescription className="text-gray-300">
                                    Nga: {comment.name} ({comment.email})
                                  </CardDescription>
                                </CardHeader>
                                <CardContent className="pb-4">
                                  <p className="text-gray-300 line-clamp-2">
                                    {comment.message}
                                  </p>
                                </CardContent>
                              </Card>
                            ))}
                        </>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Tab për publikimin e lajmeve */}
                <TabsContent value="news" className="mt-4">
                  <Card className="bg-gray-800 border-gray-700 shadow-lg text-white">
                    <CardHeader>
                      <CardTitle className="text-teal-400">Publiko Lajm të Ri</CardTitle>
                      <CardDescription className="text-gray-300">
                        Plotësoni formularin më poshtë për të publikuar një lajm të ri në faqen e shkollës.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Titulli */}
                        <div className="space-y-2">
                          <label htmlFor="title" className="text-sm font-medium text-gray-300">
                            Titulli i Lajmit*
                          </label>
                          <Input
                            id="title"
                            name="title"
                            value={newsForm.title}
                            onChange={handleNewsInputChange}
                            placeholder="Vendosni titullin e lajmit"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            required
                          />
                        </div>

                        {/* Kategoria */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="category" className="text-sm font-medium text-gray-300">
                              Kategoria
                            </label>
                            <Input
                              id="category"
                              name="category"
                              value={newsForm.category}
                              onChange={handleNewsInputChange}
                              placeholder="p.sh. Njoftim, Projekt, etj."
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            />
                          </div>

                          {/* Ngjyra e kategorisë */}
                          <div className="space-y-2">
                            <label htmlFor="categoryColor" className="text-sm font-medium text-gray-300">
                              Ngjyra e Kategorisë
                            </label>
                            <div className="flex items-center space-x-2">
                              <Input
                                id="categoryColor"
                                name="categoryColor"
                                type="color"
                                value={newsForm.categoryColor}
                                onChange={handleNewsInputChange}
                                className="w-12 h-10 bg-gray-700 border-gray-600"
                              />
                              <Input
                                name="categoryColor"
                                value={newsForm.categoryColor}
                                onChange={handleNewsInputChange}
                                className="bg-gray-700 border-gray-600 text-white"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Përshkrimi i shkurtër */}
                        <div className="space-y-2">
                          <label htmlFor="description" className="text-sm font-medium text-gray-300">
                            Përshkrimi i Shkurtër*
                          </label>
                          <Textarea
                            id="description"
                            name="description"
                            value={newsForm.description}
                            onChange={handleNewsInputChange}
                            placeholder="Përshkrim i shkurtër që do të shfaqet në listën e lajmeve"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[80px]"
                            required
                          />
                        </div>

                        {/* Përmbajtja e plotë */}
                        <div className="space-y-2">
                          <label htmlFor="content" className="text-sm font-medium text-gray-300">
                            Përmbajtja e Plotë
                          </label>
                          <Textarea
                            id="content"
                            name="content"
                            value={newsForm.content}
                            onChange={handleNewsInputChange}
                            placeholder="Përmbajtja e plotë e lajmit"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[150px]"
                          />
                        </div>

                        {/* Media (Imazhet/Videot) */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">
                            Media (Foto dhe Imazhe)*
                          </label>

                          {/* Ngarkimi i imazheve */}
                          <div className="grid grid-cols-1 gap-3">
                            {/* Zona e ngarkimit të imazheve */}
                            <div
                              className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:border-teal-500 transition-colors cursor-pointer bg-gray-700"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                              />
                              <div className="flex flex-col items-center justify-center py-4 text-center">
                                <Upload className="w-12 h-12 text-gray-400 mb-2" />
                                <p className="text-gray-300 font-medium">Kliko për të shtuar imazhe</p>
                                <p className="text-gray-400 text-sm mt-1">ose tërhiq dhe lësho këtu</p>
                              </div>
                            </div>

                            {/* URL-ja e imazhit (fushë opsionale) */}
                            <div className="mt-3">
                              <label htmlFor="image" className="text-sm font-medium text-gray-300 block mb-1">
                                Ose vendos URL-në e imazhit
                              </label>
                              <Input
                                id="image"
                                name="image"
                                value={newsForm.image}
                                onChange={handleNewsInputChange}
                                placeholder="https://example.com/image.jpg"
                                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              />
                            </div>

                            {/* Paraqitja e imazheve */}
                            {mediaPreview.length > 0 && (
                              <div className="mt-4">
                                <p className="text-sm text-gray-300 mb-2">Imazhet e ngarkuara:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                  {mediaPreview.map((src, index) => (
                                    <div key={index} className="relative group">
                                      <img
                                        src={src}
                                        alt={`Imazhi ${index + 1}`}
                                        className={`w-full h-24 object-cover rounded-md cursor-pointer ${
                                          newsForm.image === src ? "ring-2 ring-teal-500" : ""
                                        }`}
                                        onClick={() => setNewsForm(prev => ({ ...prev, image: src }))}
                                      />
                                      <button
                                        type="button"
                                        className="absolute top-1 right-1 bg-gray-800 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          removeImage(index);
                                        }}
                                      >
                                        <X className="w-4 h-4" />
                                      </button>
                                      {newsForm.image === src && (
                                        <div className="absolute bottom-1 right-1 bg-teal-600 text-white text-xs rounded-full p-1">
                                          Kryesor
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Paraqitja e imazhit nga URL */}
                            {newsForm.image && mediaPreview.indexOf(newsForm.image) === -1 && (
                              <div className="mt-2 p-2 bg-gray-700 rounded-lg">
                                <p className="text-xs text-gray-400 mb-2">Imazhi kryesor:</p>
                                <img 
                                  src={newsForm.image} 
                                  alt="Imazhi kryesor" 
                                  className="w-full h-40 object-cover rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x200?text=Imazhi+nuk+u+gjet";
                                  }} 
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Autori */}
                        <div className="space-y-2">
                          <label htmlFor="author" className="text-sm font-medium text-gray-300">
                            Autori
                          </label>
                          <Input
                            id="author"
                            name="author"
                            value={newsForm.author}
                            onChange={handleNewsInputChange}
                            placeholder="p.sh. Admin, Drejtoria, etj."
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          />
                        </div>

                        {/* Etiketat */}
                        <div className="space-y-2">
                          <label htmlFor="tags" className="text-sm font-medium text-gray-300">
                            Etiketat (ndani me presje)
                          </label>
                          <Input
                            id="tags"
                            name="tags"
                            value={newsForm.tags}
                            onChange={handleNewsInputChange}
                            placeholder="p.sh. Mjedisi, Projekt, Kombëtar"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          />
                          {newsForm.tags && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {newsForm.tags.split(',').map((tag, index) => (
                                <Badge key={index} className="bg-teal-800 text-white">
                                  {tag.trim()}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={handlePublishNews} 
                        disabled={isSubmittingNews || !newsForm.title || !newsForm.description || !newsForm.image}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        {isSubmittingNews ? "Duke publikuar..." : "Publiko Lajmin"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Tab për menaxhimin e lajmeve */}
                <TabsContent value="manage-news" className="mt-4">
                  <Card className="bg-gray-800 border-gray-700 shadow-lg text-white">
                    <CardHeader>
                      <CardTitle className="text-teal-400">Menaxho Lajmet</CardTitle>
                      <CardDescription className="text-gray-300">
                        Këtu mund të shikoni dhe fshini lajmet e publikuara.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {news.length === 0 ? (
                          <p className="text-center py-8 text-gray-300">
                            Nuk ka asnjë lajm të publikuar ende.
                          </p>
                        ) : (
                          <>
                            <p className="text-gray-300 mb-2">
                              Totali i lajmeve: <b>{news.length}</b>
                            </p>
                            <div className="grid gap-4">
                              {news.map((item) => (
                                <Card key={item.id} className="bg-gray-700 border-gray-600 shadow-md">
                                  <div className="flex items-start p-4">
                                    <div className="w-24 h-24 flex-shrink-0 mr-4 overflow-hidden rounded-md">
                                      <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          (e.target as HTMLImageElement).src = `https://placehold.co/600x400/26a69a/ffffff?text=${encodeURIComponent(item.title.substring(0, 20))}`;
                                        }}
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-teal-400">{item.title}</h3>
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                          onClick={() => {
                                            if (window.confirm('Jeni i sigurt që dëshironi të fshini këtë lajm?')) {
                                              const success = deleteNews(item.id);
                                              if (success) {
                                                toast({                                                  title: "Lajmi u fshi me sukses",
                                                  variant: "default"
                                                });
                                              } else {
                                                toast({
                                                  title: "Gabim në fshirjen e lajmit",
                                                  description: "Ndodhi një problem gjatë fshirjes së lajmit",
                                                  variant: "destructive"
                                                });
                                              }
                                            }
                                          }}
                                        >
                                          <Trash2 className="h-5 w-5" />
                                        </Button>
                                      </div>
                                      <div className="flex items-center mt-1">
                                        <Badge 
                                          style={{ backgroundColor: item.categoryColor }} 
                                          className="mr-2 text-white"
                                        >
                                          {item.category}
                                        </Badge>
                                        <span className="text-sm text-gray-300">{item.date}</span>
                                      </div>
                                      <p className="text-gray-300 mt-2 line-clamp-2">{item.description}</p>
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="calendar" className="mt-4">
                  <Card className="bg-gray-800 border-gray-700 shadow-lg text-white">
                    <CardHeader>
                      <CardTitle className="text-teal-400">Menaxho Kalendarin</CardTitle>
                      <CardDescription className="text-gray-300">
                        Këtu mund të shtoni dhe menaxhoni ngjarjet në kalendarin shkollor.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <label htmlFor="eventTitle" className="text-sm font-medium text-gray-300">
                              Titulli i Ngjarjes*
                            </label>
                            <Input
                              id="eventTitle"
                              placeholder="p.sh. Mbledhje e Stafit"
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              value={newEvent.title}
                              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="eventDescription" className="text-sm font-medium text-gray-300">
                              Përshkrimi*
                            </label>
                            <Textarea
                              id="eventDescription"
                              placeholder="Përshkrimi i detajuar i ngjarjes"
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              value={newEvent.description}
                              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="eventType" className="text-sm font-medium text-gray-300">
                              Lloji i Ngjarjes*
                            </label>
                            <Select
                              value={newEvent.eventType}
                              onValueChange={(value: string) => setNewEvent({ ...newEvent, eventType: value })}
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                                <SelectValue placeholder="Zgjidhni llojin" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="test">Test</SelectItem>
                                <SelectItem value="trip">Ekskursion</SelectItem>
                                <SelectItem value="holiday">Pushim</SelectItem>
                                <SelectItem value="exam">Provim</SelectItem>
                                <SelectItem value="meeting">Mbledhje</SelectItem>
                                <SelectItem value="event">Event Shkollor</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="eventDate" className="text-sm font-medium text-gray-300">
                              Data*
                            </label>
                            <Input
                              id="eventDate"
                              type="date"
                              className="bg-gray-700 border-gray-600 text-white"
                              value={newEvent.eventDate}
                              onChange={(e) => setNewEvent({ ...newEvent, eventDate: e.target.value })}
                            />
                          </div>

                          <Button 
                            className="bg-teal-600 hover:bg-teal-700 text-white mt-4"
                            onClick={async () => {
                              try {
                                const response = await fetch('/api/calendar-events', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=' // admin:admin123 in base64
                                  },
                                  body: JSON.stringify(newEvent),
                                });

                                if (!response.ok) {
                                  throw new Error('Failed to create event');
                                }

                                const data = await response.json();
                                if (data.success) {
                                  toast({
                                    title: "Ngjarja u shtua me sukses  :D",
                                    description: "Ngjarja e re u shtua në kalendar.",
                                    variant: "default",
                                  });

                                  // Reset form
                                  setNewEvent({
                                    title: "",
                                    description: "",
                                    eventType: "activity",
                                    eventDate: new Date().toISOString().split("T")[0]
                                  });
                                }
                              } catch (error) {
                                console.error('Error adding event:', error);
                                toast({
                                  title: "Gabim",
                                  description: "Ndodhi një gabim gjatë shtimit të ngjarjes.  :'<",
                                  variant: "destructive",
                                });
                              }
                            }}
                          >
                            Shto Ngjarjen
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Admin;
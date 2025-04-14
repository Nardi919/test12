import { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface StaffPhotoUploadProps {
  onPhotoUploaded: (url: string) => void;
  currentPhoto?: string;
}

export default function StaffPhotoUpload({ onPhotoUploaded, currentPhoto }: StaffPhotoUploadProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhoto || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Krijoj URL për paraqitje paraprakisht
      const objectUrl = URL.createObjectURL(file);
      
      // Nëse ka URL paraprake, lirojë atë për të shmangur rrjedhjet e memories
      if (previewUrl && !previewUrl.startsWith('http')) {
        URL.revokeObjectURL(previewUrl);
      }
      
      setPreviewUrl(objectUrl);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      toast({
        title: "Gabim",
        description: "Ju lutemi zgjidhni një imazh për ngarkimin",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Lexoj file si base64
      const reader = new FileReader();
      const fileDataPromise = new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(selectedImage);
      });
      
      const fileData = await fileDataPromise;
      
      // Dërgoj të dhënat në server
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: selectedImage.name,
          fileType: selectedImage.type,
          fileData: fileData
        })
      });
      
      if (!response.ok) {
        throw new Error('Gabim në ngarkimin e fotos');
      }
      
      // Merr URL-në e kthyer nga serveri
      const result = await response.json();
      
      // Thirrja e callback për të njoftuar komponentin prind
      onPhotoUploaded(result.url);
      
      toast({
        title: "Sukses",
        description: "Fotoja u ngarkua me sukses",
        variant: "default"
      });
      
      // Pastrim i URL-së së paraqitjes nëse nuk është URL serveri
      if (previewUrl && !previewUrl.startsWith('http')) {
        URL.revokeObjectURL(previewUrl);
      }
      
      // Përditësimi i paraqitjes me URL-në e serverit
      setPreviewUrl(result.url);
      setSelectedImage(null);
      
      // Reset input file
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Gabim në ngarkimin e fotos:', error);
      toast({
        title: "Gabim",
        description: "Ndodhi një problem gjatë ngarkimit të fotos. Provoni përsëri.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    // Lirim i URL-së së objektit për të shmangur rrjedhjet e memories
    if (previewUrl && !previewUrl.startsWith('http')) {
      URL.revokeObjectURL(previewUrl);
    }
    
    setPreviewUrl(null);
    setSelectedImage(null);
    
    // Reset input file
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Njoftoj komponentin prind
    onPhotoUploaded('');
  };

  return (
    <div className="space-y-4">
      <div 
        className="border-2 border-dashed border-gray-600 rounded-lg p-4 hover:border-teal-500 transition-colors cursor-pointer bg-gray-700"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileSelect}
        />
        <div className="flex flex-col items-center justify-center py-4 text-center">
          <Upload className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-gray-300 font-medium">Kliko për të zgjedhur foto</p>
          <p className="text-gray-400 text-sm mt-1">ose tërhiq dhe lësho këtu</p>
        </div>
      </div>
      
      {previewUrl && (
        <Card className="overflow-hidden bg-gray-700 border-gray-600">
          <CardContent className="p-0 relative">
            <img 
              src={previewUrl} 
              alt="Paraparje e fotos" 
              className="w-full h-56 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/400x400/26a69a/ffffff?text=Foto`;
              }}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}
      
      <div className="flex space-x-2 justify-end">
        <Button
          type="button"
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
          onClick={handleClear}
          disabled={!previewUrl || isUploading}
        >
          Pastro
        </Button>
        <Button
          type="button"
          variant="default"
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={handleUpload}
          disabled={!selectedImage || isUploading}
        >
          {isUploading ? "Duke ngarkuar..." : "Ngarko foton"}
        </Button>
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Diversity() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Pyetje për programin e diversitetit",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Gabim në formë",
        description: "Ju lutem plotësoni të gjitha fushat e kërkuara.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Mesazhi u dërgua me sukses!",
          description: "Faleminderit për mesazhin tuaj. Do t'ju kontaktojmë së shpejti.",
          variant: "default"
        });
        
        setFormState({
          name: "",
          email: "",
          subject: "Pyetje për programin e diversitetit",
          message: ""
        });
        
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Diçka shkoi keq.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Gabim në dërgim",
        description: error instanceof Error ? error.message : "Ndodhi një gabim gjatë dërgimit të mesazhit. Ju lutemi provoni përsëri.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lista e aktiviteteve për promovimin e diversitetit
  const diversityActivities = [
    {
      id: 1,
      title: "Java e Kulturave të Ndryshme",
      description: "Një javë dedikuar kulturave dhe traditave të ndryshme ku nxënësit ndajnë dhe eksplorojnë trashëgiminë e tyre kulturore.",
      icon: "🌍"
    },
    {
      id: 2,
      title: "Programi i Mentorimit Gjithëpërfshirës",
      description: "Nxënësit me nevoja të veçanta mentorrohen nga bashkëmoshatarët për të krijuar një mjedis mbështetës dhe gjithëpërfshirës.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Klubet e Diversitetit",
      description: "Klube dedikuar dialogut ndërkulturor, gjuhëve të ndryshme, dhe historisë së komuniteteve të ndryshme.",
      icon: "🗣️"
    },
    {
      id: 4,
      title: "Seminare Antidiskriminimi",
      description: "Seminare dhe trajnime periodike për nxënësit dhe stafin rreth parandalimit të diskriminimit dhe promovimit të gjithëpërfshirjes.",
      icon: "📚"
    }
  ];

  // Parimet e shkollës për diversitetin
  const diversityPrinciples = [
    "Respektimi i dallimeve kulturore, etnike, fetare dhe individuale",
    "Krijimi i një mjedisi gjithëpërfshirës ku secili ndihet i vlerësuar",
    "Promovimi i dialogut dhe komunikimit ndërkulturor",
    "Edukimi për tolerancën dhe respektin reciprok",
    "Lufta ndaj diskriminimit dhe paragjykimeve",
    "Vlerësimi i kontributeve të ndryshme që secili individ sjell në komunitetin shkollor"
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Respektimi i Diversitetit" 
            subtitle="Një shkollë për të gjithë, ku secili nxënës vlerësohet për atë që është"
          />
          
          <motion.div 
            className="mt-8 bg-[#121212] rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#c0c0c0] mb-6">
              Në Gjimnazin "Abdulla Keta", diversiteti shihet si një pasuri dhe një forcë. Ne besojmë se çdo nxënës
              ka vlera dhe kontribute unike në komunitetin tonë shkollor. Programi ynë i respektimit të diversitetit 
              synon të krijojë një mjedis të sigurt, gjithëpërfshirës dhe respektues për të gjithë, pavarësisht 
              prejardhjes, gjinisë, aftësive, besimit fetar apo identitetit.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Vizioni ynë për Diversitetin</h3>
                <p className="text-[#c0c0c0] mb-6">
                  Vizioni ynë është të ndërtojmë një komunitet shkollor ku të gjithë nxënësit ndiejnë se i përkasin, 
                  vlerësohen dhe respektohen. Ne synojmë t'i pajisim të rinjtë tanë me njohuritë dhe aftësitë për të 
                  jetuar në një shoqëri të larmishme dhe globale, duke promovuar vlerat e tolerancës, respektit reciprok dhe
                  solidaritetit.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4 mt-8">Parimet tona</h3>
                <ul className="space-y-3 text-[#c0c0c0]">
                  {diversityPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#26a69a] mr-2">✓</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-inner h-full flex flex-col justify-center">
                <blockquote className="text-[#c0c0c0] italic border-l-4 border-[#26a69a] pl-4 mb-6">
                  "Diversiteti nuk është vetëm pranimi i dallimeve, por edhe celebrimi i tyre. 
                  Ne besojmë se nxënësit tanë mësojnë më shumë nga njëri-tjetri kur vijnë nga 
                  përvoja dhe perspektiva të ndryshme."
                </blockquote>
                <p className="text-white font-semibold">- Drejtoria e Gjimnazit "Abdulla Keta"</p>
                
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <div className="text-3xl mb-2">🌈</div>
                    <div className="text-[#c0c0c0]">Gjithëpërfshirje</div>
                  </div>
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <div className="text-3xl mb-2">🤲</div>
                    <div className="text-[#c0c0c0]">Respekt</div>
                  </div>
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <div className="text-3xl mb-2">💪</div>
                    <div className="text-[#c0c0c0]">Barazi</div>
                  </div>
                  <div className="bg-[#121212] p-3 rounded-lg">
                    <div className="text-3xl mb-2">❤️</div>
                    <div className="text-[#c0c0c0]">Empati</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Aktivitetet për promovimin e diversitetit */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Aktivitetet për Promovimin e Diversitetit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diversityActivities.map((activity, index) => (
                <motion.div 
                  key={activity.id}
                  className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-[#c0c0c0]">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Programi i diversitetit në shifra */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Programi ynë në Shifra</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-[#26a69a] text-4xl font-bold mb-2">20+</div>
                <div className="text-white font-medium">Komunitete Kulturore</div>
                <p className="text-[#c0c0c0] text-sm mt-2">të përfaqësuara në shkollën tonë</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-[#7e57c2] text-4xl font-bold mb-2">15</div>
                <div className="text-white font-medium">Aktivitete Vjetore</div>
                <p className="text-[#c0c0c0] text-sm mt-2">dedikuar diversitetit dhe gjithëpërfshirjes</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-[#ff5722] text-4xl font-bold mb-2">100%</div>
                <div className="text-white font-medium">Akses i Barabartë</div>
                <p className="text-[#c0c0c0] text-sm mt-2">në të gjitha programet dhe aktivitetet</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-[#4caf50] text-4xl font-bold mb-2">95%</div>
                <div className="text-white font-medium">Nxënës të Kënaqur</div>
                <p className="text-[#c0c0c0] text-sm mt-2">me mjedisin e gjithëpërfshirjes në shkollë</p>
              </motion.div>
            </div>
          </div>
          
          {/* Sekcioni i kontaktit për pyetje rreth programit të diversitetit */}
          <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <SectionHeading 
                title="Keni pyetje për programin tonë?" 
                subtitle="Na kontaktoni për të mësuar më shumë rreth iniciativave tona për diversitetin dhe gjithëpërfshirjen"
              />
              
              <div className="mt-8 bg-[#121212] rounded-xl p-8 shadow-lg">
                {isSuccess ? (
                  <motion.div 
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Faleminderit për mesazhin!</h3>
                    <p className="text-[#c0c0c0] mb-4">Mesazhi juaj është dërguar me sukses dhe do të merret përgjigjje së shpejti.</p>
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      className="bg-[#26a69a] hover:bg-[#2bbbad] text-white"
                    >
                      Dërgo një mesazh tjetër
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white font-medium">Emri juaj</label>
                        <Input 
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Shkruani emrin tuaj"
                          className="bg-[#1d1d1d] border-[#333] focus:border-[#26a69a] text-white"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white font-medium">Email</label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="Shkruani email-in tuaj"
                          className="bg-[#1d1d1d] border-[#333] focus:border-[#26a69a] text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white font-medium">Tema</label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder="Tema e pyetjes"
                        className="bg-[#1d1d1d] border-[#333] focus:border-[#26a69a] text-white"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white font-medium">Mesazhi juaj</label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Shkruani pyetjen ose kërkesën tuaj për informacion rreth programit të diversitetit"
                        className="bg-[#1d1d1d] border-[#333] focus:border-[#26a69a] text-white min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-[#26a69a] hover:bg-[#2bbbad] text-white"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Duke dërguar...
                          </span>
                        ) : "Dërgo Mesazhin"}
                      </Button>
                    </div>
                  </form>
                )}
                
                <div className="mt-6 p-4 bg-[#1d1d1d] rounded-lg border border-[#333] text-[#c0c0c0]">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#26a69a] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-sm">
                      Të gjitha pyetjet dhe mesazhet tuaja ruhen në bazën e të dhënave të shkollës dhe monitorohen nga stafi ynë. 
                      Do të merrni një përgjigje në email brenda 2-3 ditëve të punës.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
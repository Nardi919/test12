import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function MaturaShtetrore() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Pyetje për Maturën Shtetërore",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
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
          description: "Pyetja juaj për Maturën Shtetërore u ruajt në databazë dhe do të shqyrtohet nga stafi i shkollës së shpejti.",
          variant: "default"
        });
        
        setFormState({
          name: "",
          email: "",
          subject: "Pyetje për Maturën Shtetërore",
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
  const maturaSubjects = [
    {
      id: 1,
      name: "Gjuhë Shqipe dhe Letërsi",
      icon: "📚",
      description: "Provim i detyrueshëm për të gjithë nxënësit. Vlerëson aftësitë gjuhësore dhe njohuritë letrare."
    },
    {
      id: 2,
      name: "Matematikë",
      icon: "🔢",
      description: "Provim i detyrueshëm për të gjithë nxënësit. Vlerëson njohuritë matematikore dhe aftësinë e zgjidhjes së problemeve."
    },
    {
      id: 3,
      name: "Gjuhë e Huaj",
      icon: "🌍",
      description: "Provim i detyrueshëm për të gjithë nxënësit. Nxënësit mund të zgjedhin mes anglishtes, frëngjishtes, gjermanishtes ose italishtes."
    },
    {
      id: 4,
      name: "Lëndë me Zgjedhje",
      icon: "🔍",
      description: "Provim me zgjedhje bazuar në profilin e nxënësit. Mund të jetë Fizikë, Kimi, Biologji, Histori, Gjeografi, etj."
    }
  ];

  const importantDates = [
    {
      id: 1,
      date: "Mars 2025",
      event: "Regjistrimi përfundimtar për provimet",
      description: "Afati i fundit për t'u regjistruar në provimet e Maturës Shtetërore."
    },
    {
      id: 2,
      date: "2025",
      event: "Periudha e provimeve",
      description: "Periudha kur do të zhvillohen të gjitha provimet e Maturës Shtetërore."
    },
    {
      id: 3,
      date: "2025",
      event: "Shpallja e rezultateve",
      description: "Data kur rezultatet e provimeve do të jenë të disponueshme për nxënësit."
    },
    {
      id: 4,
      date: "2025",
      event: "Aplikimi në universitet",
      description: "Periudha për aplikim në universitetet shqiptare bazuar në rezultatet e Maturës."
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Testet Model",
      description: "Teste të ngjashme me ato të Maturës për të gjitha lëndët.",
      icon: "📝",
      link: "#"
    },
    {
      id: 2,
      title: "Udhëzuesi i Maturës",
      description: "Udhëzime zyrtare për procedurat dhe rregullat e provimeve.",
      icon: "📋",
      link: "#"
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Kur dhe ku duhet të regjistrohem për Maturën Shtetërore?",
      answer: "Regjistrimi për Maturën Shtetërore bëhet në shkollën tuaj gjatë muajit Shkurt-Mars. Ju duhet të plotësoni një formular regjistrimi dhe të dorëzoni dokumentet e kërkuara në sekretarinë e shkollës."
    },
    {
      id: 2,
      question: "Çfarë dokumentesh nevojiten për regjistrimin në Maturën Shtetërore?",
      answer: "Për regjistrimin në Maturën Shtetërore nevojiten: Kartë identiteti, formular regjistrimi i plotësuar, foto personale, dhe një tarifë administrative që paguhet në shkollë."
    },
    {
      id: 3,
      question: "Si mund të di sallën dhe vendin ku do të zhvilloj provimin?",
      answer: "Informacioni për sallën dhe vendin e provimit publikohet në shkollën tuaj një javë para fillimit të provimeve. Gjithashtu, mund të kontrolloni në platformën online të Maturës duke përdorur ID-në tuaj të nxënësit."
    },
    {
      id: 4,
      question: "Çfarë duhet të kem me vete ditën e provimit?",
      answer: "Ditën e provimit duhet të keni me vete: Kartën e identitetit, lejen e hyrjes në provim që merret nga shkolla, stilolapsa me ngjyrë blu, dhe një orë dore (telefoni nuk lejohet)."
    },
    {
      id: 5,
      question: "Çfarë ndodh nëse nuk kaloj një provim të Maturës?",
      answer: "Nëse nuk kaloni një provim, keni të drejtë ta ripërsërisni atë në sesionin e dytë që zakonisht zhvillohet në Gusht. Nëse nuk kaloni përsëri, duhet të prisni vitin e ardhshëm akademik për ta riprovuar."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Matura Shtetërore" 
            subtitle="Informacione dhe udhëzime për përgatitjen dhe kryerjen e provimeve të Maturës Shtetërore"
          />
          
          <motion.div 
            className="mt-8 bg-[#121212] rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#c0c0c0] mb-6">
              Matura Shtetërore është një proces vlerësimi kombëtar për nxënësit që përfundojnë arsimin e mesëm në Shqipëri. 
              Rezultatet e Maturës Shtetërore janë thelbësore për pranimin në universitete dhe përcaktimin e karrierës akademike të nxënësve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Objektivat kryesore:</h3>
                <ul className="space-y-3 text-[#c0c0c0]">
                  <li className="flex items-start">
                    <span className="text-[#26a69a] mr-2">✓</span>
                    <span>Vlerësimi i njohurive dhe aftësive të përfituara gjatë arsimit të mesëm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#26a69a] mr-2">✓</span>
                    <span>Sigurimi i një standardi kombëtar për vlerësimin e nxënësve</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#26a69a] mr-2">✓</span>
                    <span>Krijimi i një baze objektive për pranimin në arsimin e lartë</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#26a69a] mr-2">✓</span>
                    <span>Nxitja e cilësisë në procesin mësimor në shkollat e mesme</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Përfitimet:</h3>
                <ul className="space-y-3 text-[#c0c0c0]">
                  <li className="flex items-start">
                    <span className="text-[#7e57c2] mr-2">✓</span>
                    <span>Lehtëson hyrjen në universitetet brenda dhe jashtë vendit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7e57c2] mr-2">✓</span>
                    <span>Rrit mundësitë për të fituar bursa studimi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7e57c2] mr-2">✓</span>
                    <span>Krijon një pasqyrë të qartë të nivelit akademik të nxënësit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7e57c2] mr-2">✓</span>
                    <span>Përgatit nxënësit për sfidat e arsimit të lartë</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Provimet e Maturës */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Provimet e Maturës Shtetërore</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maturaSubjects.map((subject, index) => (
                <motion.div 
                  key={subject.id}
                  className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{subject.name}</h3>
                  <p className="text-[#c0c0c0]">{subject.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Datat e Rëndësishme */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Datat e Rëndësishme</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#2d2d2d] transform md:translate-x-0 translate-x-4"></div>
              
              <div className="space-y-12">
                {importantDates.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="md:w-1/2 pl-10 md:pl-0 md:pr-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#26a69a] rounded-full border-4 border-[#121212] transform md:translate-x-[-50%] translate-x-0"></div>
                      
                      <div className={`bg-[#121212] p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="text-[#26a69a] font-bold mb-2">{item.date}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.event}</h3>
                        <p className="text-[#c0c0c0]">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Burimet dhe Materialet */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Burimet dhe Materialet</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div 
                  key={resource.id}
                  className="bg-[#121212] rounded-xl p-6 shadow-lg text-center h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-[#c0c0c0] mb-4">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="inline-flex items-center text-[#26a69a] hover:text-[#2bbbad] font-medium"
                  >
                    Shiko Materialet
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Sekcioni i pyetjeve për Maturën Shtetërore */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Keni pyetje për Maturën?" 
              subtitle="Dërgoni mesazhin tuaj dhe stafi ynë do t'ju kontaktojë së shpejti me informacion të detajuar"
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
                  <p className="text-[#c0c0c0] mb-4">Pyetja juaj është dërguar me sukses dhe do të merret përgjigjje së shpejti.</p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#26a69a] hover:bg-[#2bbbad] text-white"
                  >
                    Dërgo një pyetje tjetër
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
                      placeholder="Shkruani pyetjen ose kërkesën tuaj për informacion rreth Maturës Shtetërore"
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
                      ) : "Dërgo Pyetjen"}
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
                    Të gjitha pyetjet dhe mesazhet tuaja ruhen në bazën e të dhënave të shkollës dhe monitorohen nga stafi ynë. Do të merrni një përgjigje në email brenda 2-3 ditëve të punës.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useParams } from "wouter";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function maturashtetrore() {
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
      date: "2025",
      event: "Regjistrimi përfundimtar për provimet",
      description: "Afati i fundit për t'u regjistruar në provimet e Maturës Shtetërore."
    },
    {
      id: 2,
      date: "",
      event: "Periudha e provimeve",
      description: "Periudha kur do të zhvillohen të gjitha provimet e Maturës Shtetërore."
    },
    {
      id: 3,
      date: " Qershor 2025",
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
          
          {/* Pyetjet e Shpeshta */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Pyetjet e Shpeshta (FAQ)</h2>
            
            <motion.div 
              className="bg-[#121212] rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="divide-y divide-[#2d2d2d]">
                {faqs.map((faq, index) => (
                  <details 
                    key={faq.id}
                    className="py-5 group" 
                    open={index === 0}
                  >
                    <summary className="flex justify-between items-center font-medium cursor-pointer text-white">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-[#c0c0c0] mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Kontakti */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Keni Pyetje Shtesë?</h2>
            
            <div className="bg-[#121212] rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Na Kontaktoni</h3>
                  <p className="text-[#c0c0c0] mb-6">
                    Nëse keni pyetje ose nevojë për sqarime rreth Maturës Shtetërore, 
                    mos hezitoni të na kontaktoni përmes formave të mëposhtme.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#26a69a] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-[#c0c0c0]">abdullaketa@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#26a69a] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Telefon</h4>
                        <p className="text-[#c0c0c0]">+355 x xxx xxxx</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#26a69a] bg-opacity-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Adresa</h4>
                        <p className="text-[#c0c0c0]">Rruga 4 Bashkim Kodra, Tiranë</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Konsultim i Personalizuar</h3>
                  <p className="text-[#c0c0c0] mb-6">
                    Plotësoni formularin e mëposhtëm për të caktuar një konsultim me një nga këshilltarët tanë të Maturës.
                  </p>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[#c0c0c0] text-sm font-medium mb-2">Emri</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                          placeholder="Emri juaj"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-[#c0c0c0] text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                          placeholder="Email-i juaj"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-[#c0c0c0] text-sm font-medium mb-2">Tema</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                        placeholder="Tema e kërkesës"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-[#c0c0c0] text-sm font-medium mb-2">Mesazhi</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                        placeholder="Shkruani mesazhin tuaj këtu..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-[#26a69a] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Dërgo Kërkesën
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
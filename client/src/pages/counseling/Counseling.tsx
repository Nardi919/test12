import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Counseling() {
  const [activeTab, setActiveTab] = useState<"psychological" | "career">("psychological");
  
  const psychologicalServices = [
    {
      id: 1,
      title: "Këshillim Individual",
      icon: "👤",
      description: "Seanca private me psikologun e shkollës për të diskutuar çështje personale, emocionale dhe të shëndetit mendor."
    },
    {
      id: 2,
      title: "Terapi në Grup",
      icon: "👥",
      description: "Seanca në grup të vogla për nxënës me interesa ose sfida të ngjashme, duke ndihmuar në zhvillimin e aftësive sociale dhe mbështetjes reciproke."
    },
    {
      id: 3,
      title: "Menaxhimi i Stresit",
      icon: "🧘",
      description: "Programe të dedikuara për të ndihmuar nxënësit të përballojnë stresin e shkollës, provimeve dhe presionin social."
    },
    {
      id: 4,
      title: "Ndërgjegjësim për Shëndetin Mendor",
      icon: "🧠",
      description: "Seminare dhe aktivitete që promovojnë ndërgjegjësimin për shëndetin mendor dhe reduktojnë stigmën rreth tij."
    }
  ];
  
  const careerServices = [
    {
      id: 1,
      title: "Orientim Profesional",
      icon: "🧭",
      description: "Vlerësim i interesave, aftësive dhe potencialit të nxënësve për të identifikuar rrugët e mundshme të karrierës."
    },
    {
      id: 2,
      title: "Planifikim i Karrierës",
      icon: "📝",
      description: "Asistencë në krijimin e një plani zhvillimi për karrierën, duke përfshirë objektivat afatshkurtra dhe afatgjata."
    },
    {
      id: 3,
      title: "Përgatitje për Universitet",
      icon: "🎓",
      description: "Këshillim për aplikimet në universitet, bursa, dhe strategji për përgatitjen e provimeve pranuese."
    },
    {
      id: 4,
      title: "Lidhje me Industrinë",
      icon: "🏢",
      description: "Organizim i vizitave në kompani, praktikave profesionale dhe takimeve me profesionistë të fushave të ndryshme."
    }
  ];
  
  const counselors = [
    {
      id: 1,
      name: "Dr. Elona Mato",
      position: "Psikologe Klinike",
      image: "https://i.pravatar.cc/300?img=5",
      specialization: "Shëndeti Mendor i Adoleshentëve",
      schedule: "E Hënë, E Mërkurë: 09:00 - 15:00",
      education: "Doktoraturë në Psikologji Klinike, Universiteti i Tiranës"
    },
    {
      id: 2,
      name: "Msc. Artan Gjika",
      position: "Këshilltar Karriere",
      image: "https://i.pravatar.cc/300?img=12",
      specialization: "Orientim Profesional dhe Planifikim Karriere",
      schedule: "E Martë, E Enjte: 10:00 - 16:00",
      education: "Master në Këshillim Karriere, Universiteti i Londrës"
    },
    {
      id: 3,
      name: "Dr. Rina Haklaj",
      position: "Psikologe Edukative",
      image: "https://i.pravatar.cc/300?img=32",
      specialization: "Vështirësi në të Nxënë dhe Përshtatje Sociale",
      schedule: "E Premte: 09:00 - 17:00",
      education: "Doktoraturë në Psikologji Edukative, Universiteti i Vjenës"
    }
  ];
  
  const faqs = [
    {
      id: 1,
      question: "Si mund të caktoj një takim me psikologun e shkollës?",
      answer: "Mund të caktoni një takim duke plotësuar formularin online në këtë faqe, duke dërguar email në counseling@abdullaketa.edu.al, ose duke vizituar zyrën e këshillimit gjatë orarit të punës. Për situata urgjente, mund të kontaktoni drejtpërdrejt numrin e telefonit të shërbimit të këshillimit: 044 123 456."
    },
    {
      id: 2,
      question: "A janë seancat e këshillimit konfidenciale?",
      answer: "Po, të gjitha seancat e këshillimit janë rreptësisht konfidenciale. Informacioni i ndarë gjatë seancave nuk do të ndahet me stafin e shkollës, prindërit apo nxënësit e tjerë pa pëlqimin tuaj. Përjashtime bëhen vetëm në raste kur ekziston një rrezik i qartë për sigurinë tuaj apo të të tjerëve."
    },
    {
      id: 3,
      question: "Sa shpesh mund të takohem me këshilltarin e karrierës?",
      answer: "Nxënësit mund të caktojnë takime të rregullta me këshilltarin e karrierës sipas nevojave individuale. Zakonisht, takimet fillestare janë një herë në javë ose në dy javë, dhe më pas mund të rregullohen sipas planit të zhvillimit të karrierës së secilit nxënës."
    },
    {
      id: 4,
      question: "A mund të më ndihmojë psikologu me ankthin para provimeve?",
      answer: "Absolutisht! Psikologët tanë ofrojnë mbështetje të specializuar për menaxhimin e ankthit para provimeve. Ata do t'ju mësojnë teknika relaksimi, strategji studimi efektive, dhe metoda për të kontrolluar mendimet negative që lidhen me performancën akademike."
    },
    {
      id: 5,
      question: "Si mund të më ndihmojë këshilltari i karrierës me aplikimin në universitet?",
      answer: "Këshilltari i karrierës ofron mbështetje gjatë gjithë procesit të aplikimit në universitet, duke përfshirë: zgjedhjen e programeve të studimit të përshtatshme, përgatitjen e CV-së dhe letrës së motivimit, strategji për provimet pranuese, informacion për bursat e disponueshme, dhe përgatitje për intervistat."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Shërbimi i Këshillimit" 
            subtitle="Mbështetje psikologjike dhe orientim në karrierë për nxënësit"
          />
          
          <motion.div 
            className="mt-8 bg-[#121212] rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#c0c0c0] mb-6">
              Gjimnazi "Abdulla Keta" ofron një program gjithëpërfshirës këshillimi për të mbështetur mirëqenien 
              emocionale dhe zhvillimin profesional të nxënësve. Psikologët dhe këshilltarët tanë të kualifikuar 
              ofrojnë një hapësirë të sigurt ku nxënësit mund të diskutojnë sfidat personale, shqetësimet akademike 
              dhe planet për të ardhmen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Mbështetje Individuale</h3>
                  <p className="text-[#c0c0c0] text-sm">Seanca private këshillimi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e57c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Orientim në Karrierë</h3>
                  <p className="text-[#c0c0c0] text-sm">Planifikim dhe zhvillim</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff5722] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Seminare dhe Workshope</h3>
                  <p className="text-[#c0c0c0] text-sm">Aktivitete në grup</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Service Tabs */}
          <div className="mt-16">
            <div className="flex border-b border-[#2d2d2d]">
              <button 
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "psychological" 
                    ? "text-[#26a69a] border-b-2 border-[#26a69a]" 
                    : "text-[#c0c0c0] hover:text-white"
                }`}
                onClick={() => setActiveTab("psychological")}
              >
                Këshillim Psikologjik
              </button>
              <button 
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "career" 
                    ? "text-[#7e57c2] border-b-2 border-[#7e57c2]" 
                    : "text-[#c0c0c0] hover:text-white"
                }`}
                onClick={() => setActiveTab("career")}
              >
                Orientim në Karrierë
              </button>
            </div>
            
            <div className="mt-8">
              {activeTab === "psychological" ? (
                <div>
                  <div className="bg-[#121212] rounded-xl p-8 shadow-lg mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Shërbimi i Këshillimit Psikologjik</h3>
                    <p className="text-[#c0c0c0] mb-6">
                      Shërbimi ynë i këshillimit psikologjik synon të mbështesë mirëqenien emocionale dhe mendore të nxënësve tanë. 
                      Ne ofrojmë një hapësirë të sigurt, konfidenciale ku nxënësit mund të diskutojnë shqetësimet e tyre personale, 
                      të zhvillojnë strategji përballimi dhe të ndërtojnë një bazë të fortë për shëndetin mendor.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Objektivat tona:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Identifikimi dhe adresimi i sfidave emocionale dhe të sjelljes</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Zhvillimi i aftësive për përballimin e stresit dhe ankthit</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Përmirësimi i vetëdijes emocionale dhe menaxhimi i emocioneve</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Ndihma në konfliktet ndërpersonale dhe zhvillimin e marrëdhënieve të shëndetshme</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Kur të kontaktoni një psikolog:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Ndryshime të vazhdueshme në gjendjen shpirtërore ose sjelljen</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Vështirësi të vazhdueshme në përqendrim ose performancë akademike</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Ndjenja të vazhdueshme të trishtimit, ankthit ose stresit</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Izolim social ose vështirësi në marrëdhënie me moshatarët</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {psychologicalServices.map((service, index) => (
                      <motion.div 
                        key={service.id}
                        className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-[#c0c0c0]">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-[#121212] rounded-xl p-8 shadow-lg mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Orientim dhe Këshillim në Karrierë</h3>
                    <p className="text-[#c0c0c0] mb-6">
                      Shërbimi ynë i orientimit në karrierë ndihmon nxënësit të eksplorojnë opsionet e karrierës, 
                      të identifikojnë potencialin e tyre dhe të zhvillojnë një plan për të arritur qëllimet e tyre 
                      profesionale. Ne ofrojmë mbështetje gjithëpërfshirëse në zgjedhjen e profesionit dhe përgatitjen 
                      për arsimin e lartë.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Procesi ynë:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-[#c0c0c0]">
                            <div className="w-6 h-6 bg-[#7e57c2] bg-opacity-20 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <span className="text-[#7e57c2] text-sm font-bold">1</span>
                            </div>
                            <span>Vlerësim i interesave, aftësive dhe vlerave personale</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <div className="w-6 h-6 bg-[#7e57c2] bg-opacity-20 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <span className="text-[#7e57c2] text-sm font-bold">2</span>
                            </div>
                            <span>Eksplorim i opsioneve të karrierës dhe kurseve universitare</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <div className="w-6 h-6 bg-[#7e57c2] bg-opacity-20 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <span className="text-[#7e57c2] text-sm font-bold">3</span>
                            </div>
                            <span>Zhvillim i aftësive për tregun e punës (CV, intervista)</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <div className="w-6 h-6 bg-[#7e57c2] bg-opacity-20 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <span className="text-[#7e57c2] text-sm font-bold">4</span>
                            </div>
                            <span>Përgatitje për aplikimet në universitet dhe bursa</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Burimet që ofrojmë:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7e57c2] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Bibliotekë me materiale orientuese dhe informacion për universitetet</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7e57c2] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Platformë online me teste vlerësuese të interesave dhe aftësive</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7e57c2] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Rrjet kontaktesh me universitete dhe profesionistë në fusha të ndryshme</span>
                          </li>
                          <li className="flex items-start text-[#c0c0c0]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7e57c2] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Programe praktike dhe vizita në kompani dhe institucione</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {careerServices.map((service, index) => (
                      <motion.div 
                        key={service.id}
                        className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-[#c0c0c0]">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Counselors */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Ekipi Ynë i Këshillimit</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {counselors.map((counselor, index) => (
                <motion.div 
                  key={counselor.id}
                  className="bg-[#121212] rounded-xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={counselor.image} 
                      alt={counselor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{counselor.name}</h3>
                    <p className={`${
                      counselor.position.includes("Psikolog") ? "text-[#26a69a]" : "text-[#7e57c2]"
                    } font-medium mb-3`}>{counselor.position}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-start mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[#c0c0c0] text-sm">{counselor.specialization}</span>
                      </div>
                      
                      <div className="flex items-start mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#c0c0c0] text-sm">{counselor.schedule}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <span className="text-[#c0c0c0] text-sm">{counselor.education}</span>
                      </div>
                    </div>
                    
                    <button 
                      className={`w-full py-2 px-4 rounded-md transition-colors ${
                        counselor.position.includes("Psikolog") 
                          ? "bg-[#26a69a] hover:bg-opacity-90 text-white" 
                          : "bg-[#7e57c2] hover:bg-opacity-90 text-white"
                      }`}
                    >
                      Cakto një Takim
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Appointment Form */}
          <div className="mt-16">
            <div className="bg-[#121212] rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Cakto një Takim</h2>
                  <p className="text-[#c0c0c0] mb-6">
                    Plotësoni formularin e mëposhtëm për të caktuar një takim me një nga specialistët tanë 
                    të këshillimit. Do t'ju kontaktojmë brenda 24 orëve për të konfirmuar takimin tuaj.
                  </p>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[#c0c0c0] text-sm font-medium mb-2">Emri i Plotë</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                          placeholder="Emri juaj i plotë"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="class" className="block text-[#c0c0c0] text-sm font-medium mb-2">Klasa</label>
                        <select 
                          id="class" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent"
                        >
                          <option value="">Zgjidhni klasën</option>
                          <option value="10A">Klasa 10-A</option>
                          <option value="10B">Klasa 10-B</option>
                          <option value="10C">Klasa 10-C</option>
                          <option value="11A">Klasa 11-A</option>
                          <option value="11B">Klasa 11-B</option>
                          <option value="11C">Klasa 11-C</option>
                          <option value="12A">Klasa 12-A</option>
                          <option value="12B">Klasa 12-B</option>
                          <option value="12C">Klasa 12-C</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-[#c0c0c0] text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                          placeholder="Email-i juaj"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-[#c0c0c0] text-sm font-medium mb-2">Telefon</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                          placeholder="Numri i telefonit"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="counselor" className="block text-[#c0c0c0] text-sm font-medium mb-2">Specialisti</label>
                      <select 
                        id="counselor" 
                        className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent"
                      >
                        <option value="">Zgjidhni specialistin</option>
                        <option value="elona">Dr. Elona Mato (Psikologe Klinike)</option>
                        <option value="artan">Msc. Artan Gjika (Këshilltar Karriere)</option>
                        <option value="rina">Dr. Rina Haklaj (Psikologe Edukative)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-[#c0c0c0] text-sm font-medium mb-2">Arsyeja e Takimit</label>
                      <textarea 
                        id="reason" 
                        rows={4} 
                        className="w-full bg-[#1e1e1e] border border-[#2d2d2d] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#26a69a] focus:border-transparent" 
                        placeholder="Përshkruani shkurtimisht arsyen e takimit..."
                      ></textarea>
                    </div>
                    
                    <p className="text-[#c0c0c0] text-sm">
                      <span className="text-[#ff5722]">*</span> Të gjitha informacionet që ndani në këtë formular janë konfidenciale.
                    </p>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-[#26a69a] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Dërgo Kërkesën
                    </button>
                  </form>
                </div>
                
                <div className="bg-[#121212] hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Counseling Session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Pyetje të Shpeshta</h2>
            
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
          
          {/* Resources */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Burime të Dobishme</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Libra dhe Udhëzues</h3>
                <ul className="space-y-2 text-[#c0c0c0]">
                  <li>• Menaxhimi i Stresit për Adoleshentë</li>
                  <li>• Udhëzuesi për Zgjedhjen e Karrierës</li>
                  <li>• Teknika Studimi Efektive</li>
                  <li>• Komunikimi Pozitiv dhe Zgjidhja e Konflikteve</li>
                </ul>
                <div className="mt-4">
                  <a href="#" className="text-[#26a69a] hover:underline">Shiko bibliotekën e plotë</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e57c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Video dhe Podcast</h3>
                <ul className="space-y-2 text-[#c0c0c0]">
                  <li>• Seria e Videove "Mirëqenia Emocionale"</li>
                  <li>• Podcasti "Përgatitja për Universitet"</li>
                  <li>• Udhëzues Video për CV dhe Intervista</li>
                  <li>• Webinare mbi Profesionet e së Ardhmes</li>
                </ul>
                <div className="mt-4">
                  <a href="#" className="text-[#7e57c2] hover:underline">Shiko të gjitha videot</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#ff5722] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Lidhje të Jashtme</h3>
                <ul className="space-y-2 text-[#c0c0c0]">
                  <li>• Portali Kombëtar i Orientimit në Karrierë</li>
                  <li>• Platforma e Universiteteve Evropiane</li>
                  <li>• Qendra Kombëtare e Shëndetit Mendor</li>
                  <li>• Forumi i Nxënësve Ekselentë</li>
                </ul>
                <div className="mt-4">
                  <a href="#" className="text-[#ff5722] hover:underline">Shiko të gjitha lidhjet</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
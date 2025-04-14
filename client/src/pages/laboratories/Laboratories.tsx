import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Laboratories() {
  const laboratories = [
    {
      id: 1,
      name: "Laboratori i Fizikës",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Laborator modern me pajisje për eksperimente në mekanikë, elektromagnetizëm, optikë dhe fizikë moderne.",
      equipment: [
        "Aparat të mekanikës për studimin e lëvizjes",
        "Pajisje për eksperimente në elektromagnetizëm",
        "Pajisje optike për studimin e dritës dhe lenteve",
        "Pajisje për studimin e energjisë dhe termofizikës"
      ],
      schedule: "E Mërkurë dhe E Premte, 10:00 - 13:00"
    },
    {
      id: 2,
      name: "Laboratori i Kimisë",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Laborator i pajisur plotësisht për eksperimente kimike, me fokus në kimi organike, inorganike dhe analitike.",
      equipment: [
        "Set i plotë reagentësh kimikë",
        "Pajisje distilimi dhe ekstraktimi",
        "Spektrometër dhe mikroskop kimik",
        "Pajisje për kimi organike dhe eksperimente të sigurisë"
      ],
      schedule: "E Martë dhe E Enjte, 10:00 - 13:00"
    },
    {
      id: 3,
      name: "Laboratori i Biologjisë",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      description: "Laborator i specializuar për studimin e organizmave të gjalla, histologjisë, anatomisë dhe fiziologjisë.",
      equipment: [
        "Mikroskopë me rezolucion të lartë",
        "Modele anatomike të sistemeve të ndryshme",
        "Pajisje për eksperimente në biologji molekulare",
        "Materiale për diseksion dhe studim praktik"
      ],
      schedule: "E Hënë dhe E Mërkurë, 14:00 - 17:00"
    },
    {
      id: 4,
      name: "Laboratori i Informatikës",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Laborator kompjuterik modern me softuerë programimi, modelimi dhe simulimi për zhvillimin e projekteve digjitale.",
      equipment: [
        "Kompjuterë të pajisur me softuerë të specializuar",
        "Pajisje për programim hardware (Arduino, Raspberry Pi)",
        "Softuerë për modelim 3D dhe simulim",
        "Pajisje për rrjete kompjuterike dhe projekte IoT"
      ],
      schedule: "Çdo ditë, 09:00 - 17:00"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Energjia e Rinovueshme",
      laboratory: "Laboratori i Fizikës",
      students: "Klasa 12-A",
      description: "Studim dhe ndërtim i modeleve të vogla të paneleve diellore dhe gjeneratorëve me erë për të kuptuar konvertimin e energjisë.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      id: 2,
      title: "Analiza e Ujit të Pijshëm",
      laboratory: "Laboratori i Kimisë",
      students: "Klasa 11-B",
      description: "Analizë e cilësisë së ujit në burime të ndryshme duke përdorur metoda kimike dhe krahasuar rezultatet me standardet.",
      image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Biodiversiteti Urban",
      laboratory: "Laboratori i Biologjisë",
      students: "Klasa 10-C",
      description: "Studim i biodiversitetit në zonat urbane të qytetit, me identifikim dhe katalogim të specieve bimore dhe shtazore.",
      image: "https://images.unsplash.com/photo-1535981767287-35259dbf7d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Aplikacion për Monitorimin e Mjedisit",
      laboratory: "Laboratori i Informatikës",
      students: "Klasa 12-B",
      description: "Zhvillim i një aplikacioni për smartphone që mbështet mbledhjen dhe analizimin e të dhënave mjedisore nga komuniteti.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Laboratoret Tona" 
            subtitle="Ambiente moderne për mësimin praktik dhe eksperimentimin shkencor"
          />
          
          <motion.div 
            className="mt-8 bg-[#121212] rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#c0c0c0] mb-6">
              Gjimnazi "Abdulla Keta" krenohet me laboratoret e tij moderne që ofrojnë një mjedis optimal për
              eksperimentimin praktik dhe zbatimin e njohurive teorike. Këto ambiente janë projektuar për të nxitur 
              kureshtjen shkencore dhe kreativitetin e nxënësve nëpërmjet mësimit empirik.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#26a69a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">4 Laboratore</h3>
                  <p className="text-[#c0c0c0] text-sm">Pajisje të avancuara</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7e57c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">20+ Protokolle</h3>
                  <p className="text-[#c0c0c0] text-sm">Eksperimente të strukturuara</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff5722] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Staf i Kualifikuar</h3>
                  <p className="text-[#c0c0c0] text-sm">Pedagogë me përvojë</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2196f3] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2196f3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Projekte Inovative</h3>
                  <p className="text-[#c0c0c0] text-sm">Inkurajim i kreativitetit</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Laboratoret */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Laboratoret e Shkollës</h2>
            
            <div className="space-y-12">
              {laboratories.map((lab, index) => (
                <motion.div 
                  key={lab.id}
                  className="bg-[#121212] rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={lab.image} 
                        alt={lab.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4">{lab.name}</h3>
                      <p className="text-[#c0c0c0] mb-6">{lab.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Pajisjet Kryesore</h4>
                        <ul className="space-y-2">
                          {lab.equipment.map((item, i) => (
                            <li key={i} className="flex items-start text-[#c0c0c0]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#26a69a] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7e57c2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[#c0c0c0]">Orari: {lab.schedule}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Rregullat e Sigurisë */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Rregullat e Sigurisë në Laboratore</h2>
            
            <motion.div 
              className="bg-[#121212] rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Rregulli të Përgjithshme të Sigurisë</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Mbani gjithmonë syzet mbrojtëse gjatë eksperimenteve kimike dhe fizike.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Vishni këmishë me mëngë të gjata dhe pantallona të gjata në laborator.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Mos hani, pini ose përdorni kozmetikë në laborator.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Lani duart para se të dilni nga laboratori.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5722] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Raportoni menjëherë çdo aksident ose dëmtim të pajisjeve.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Procedurat e Emergjencës</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2196f3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Njihni vendndodhjen e alarmit të zjarrit, fikëses dhe kutisë së ndihmës së parë.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2196f3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Në rast zjarri, evakuoni menjëherë ambientet sipas planit të evakuimit.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2196f3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Për djegie nga kimikatet, shpëlani zonën e prekur me ujë për të paktën 15 minuta.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2196f3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Në rast aksidenti, njoftoni menjëherë personelin mbikëqyrës dhe ndiqni udhëzimet.</span>
                    </li>
                    <li className="flex items-start text-[#c0c0c0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2196f3] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Numrat e emergjencës janë të afishuara në hyrje të çdo laboratori.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Projektet aktuale */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Projektet Aktuale në Laboratoret Tona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-[#121212] rounded-xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#26a69a] font-medium">{project.laboratory}</span>
                      <span className="text-[#c0c0c0] text-sm">{project.students}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-[#c0c0c0]">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16">
            <motion.div 
              className="bg-gradient-to-r from-[#121212] to-[#1e1e1e] rounded-xl p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Dëshironi të Vizitoni Laboratoret Tona?</h2>
              <p className="text-[#c0c0c0] mb-8 max-w-3xl mx-auto">
                Ftojmë nxënësit, prindërit dhe të interesuarit të vizitojnë laboratoret 
                tona moderne. Organizojmë vizita të rregullta për të demonstruar projektet 
                dhe pajisjet tona të avancuara.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-[#26a69a] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Rezervo një Vizitë
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-[#2d2d2d] text-white font-medium rounded-md hover:bg-[#3d3d3d] transition-colors"
                >
                  Mëso më Shumë
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
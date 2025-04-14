import { motion } from "framer-motion";
import { CardWithIcon } from "@/components/ui/card-with-icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#26a69a] mb-6 font-montserrat">Rreth Gjimnazit Tonë</h2>
            <p className="text-light mb-6 leading-relaxed">Gjimnazi "Abdulla Keta" është një nga institucionet arsimore më të spikatura në Tiranë me një traditë të gjatë në përgatitjen e brezave të rinj për një të ardhme të suksesshme.</p>
            <p className="text-light mb-6 leading-relaxed">Me një staf të kualifikuar mësimdhënësish dhe me programe moderne studimi, shkolla jonë synon të përgatisë nxënës të aftë për sfidat e botës bashkëkohore.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <CardWithIcon 
                icon={<i className="fas fa-user-graduate text-[#26a69a]"></i>}
                title="Staf i Kualifikuar"
                description="Mësimdhënës me eksperiencë"
              />
              <CardWithIcon 
                icon={<i className="fas fa-award text-[#26a69a]"></i>}
                title="Rezultate të Larta"
                description="Performancë e shkëlqyer akademike"
              />
              <CardWithIcon 
                icon={<i className="fas fa-book-open text-[#26a69a]"></i>}
                title="Kurrikulë Moderne"
                description="Programe bashkëkohore"
              />
              <CardWithIcon 
                icon={<i className="fas fa-globe text-[#26a69a]"></i>}
                title="Projekte Ndërkombëtare"
                description="Partneritete të shumta"
              />
            </div>
            
            <motion.a 
              href="#sections" 
              className="inline-block bg-[#7e57c2] hover:bg-opacity-80 text-white px-6 py-3 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-arrow-right mr-2"></i>Zbulo më shumë
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592066575452-e37e7f0bbe86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ndërtesa e gjimnazit" 
                className="w-full h-auto rounded-lg transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">Gjimnazi "Abdulla Keta"</h3>
                <p className="text-[#c0c0c0]">Themeluar në vitin 1999 </p>
              </div>
            </div>
            
            {/* Floating stats */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#1e1e1e] px-6 py-4 rounded-lg shadow-lg transform rotate-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="flex items-center">
                <i className="fas fa-users text-[#26a69a] text-2xl mr-3"></i>
                <div>
                  <h4 className="text-white font-bold text-xl">181</h4>
                  <p className="text-[#c0c0c0] text-sm">Nxënës Aktivë</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-[#1e1e1e] px-6 py-4 rounded-lg shadow-lg transform -rotate-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center">
                <i className="fas fa-trophy text-[#7e57c2] text-2xl mr-3"></i>
                <div>
                  <h4 className="text-white font-bold text-xl">X</h4>
                  <p className="text-[#c0c0c0] text-sm">Çmime dhe Trofe</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionCard } from "@/components/ui/section-card";
import { sections } from "@/data/sections";

export default function Sections() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[#1e1e1e] z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Seksionet e Shkollës" 
            subtitle="Eksploro seksionet e ndryshme që shkolla jonë ofron për nxënësit, prindërit dhe komunitetin"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <SectionCard
                key={index}
                section={section}
              />
            ))}
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Shërbime Mbështetëse</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-book text-[#26a69a] text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Biblioteka Digjitale</h4>
                <p className="text-[#c0c0c0] mb-4">Qasje në libra elektronikë, revista dhe burime të tjera akademike për nxënësit.</p>
                <a href="/library/digital-library" className="text-[#26a69a] hover:underline flex items-center text-sm">
                  Shiko më shumë <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </motion.div>
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-graduation-cap text-[#7e57c2] text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Këshillim Karriere</h4>
                <p className="text-[#c0c0c0] mb-4">Shërbime orientimi për zgjedhjen e universitetit dhe planifikimin e karrierës.</p>
                <a href="#" className="text-[#7e57c2] hover:underline flex items-center text-sm">
                  Shiko më shumë <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </motion.div>
              
              
              
              <motion.div 
                className="bg-[#121212] rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-[#F44336] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-first-aid text-[#F44336] text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Mbështetje Psikologjike</h4>
                <p className="text-[#c0c0c0] mb-4">Shërbime këshillimi dhe mbështetje emocionale për nxënësit.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
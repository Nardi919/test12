import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kalendari Shkollor</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Shiko të gjitha aktivitetet, pushimet, dhe ngjarjet gjatë vitit shkollor</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-[#26a69a] bg-opacity-10 p-6 rounded-full">
              <Calendar className="w-16 h-16 text-[#26a69a]" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Kalendari i Plotë i Aktiviteteve</h3>
              <p className="text-gray-400 mb-6 max-w-xl">
                Akseso kalendarin shkollor për të parë të gjitha ngjarjet e ardhshme, pushimet zyrtare, 
                dhe afatet e provimeve për vitin akademik. Planifiko pjesëmarrjen tënde në aktivitetet shkollore.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-[#26a69a] mr-2"></div>
                  <span>Aktivitete</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Pushime</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span>Provime</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/calendar" className="bg-[#26a69a] hover:bg-[#2bbbad] text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Shiko Kalendarin
                </Link>
                <Link href="/news" className="bg-transparent hover:bg-white/10 text-[#26a69a] border border-[#26a69a] px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Aktivitetet e Fundit
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
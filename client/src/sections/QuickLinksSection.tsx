import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function QuickLinksSection() {
  const [_, setLocation] = useLocation();
  
  return (
    <section className="py-16 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Qasje e Shpejtë</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Eksploro seksionet kryesore të shkollës sonë</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <div 
              className="w-full h-full cursor-pointer" 
              onClick={() => setLocation("/about")}
            >
              <div className="w-12 h-12 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-school text-[#26a69a] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rreth Shkollës</h3>
              <p className="text-gray-400 text-sm mb-4">Mëso rreth historisë, misionit dhe vizionit të gjimnazit "Abdulla Keta".</p>
              <span className="text-[#26a69a] text-sm flex items-center">
                Lexo më shumë <i className="fas fa-arrow-right ml-2"></i>
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <div 
              className="w-full h-full cursor-pointer" 
              onClick={() => setLocation("/sections")}
            >
              <div className="w-12 h-12 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-th-large text-[#7e57c2] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Seksionet</h3>
              <p className="text-gray-400 text-sm mb-4">Eksploro seksionet e ndryshme akademike dhe shërbimet e shkollës sonë.</p>
              <span className="text-[#7e57c2] text-sm flex items-center">
                Lexo më shumë <i className="fas fa-arrow-right ml-2"></i>
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <div 
              className="w-full h-full cursor-pointer" 
              onClick={() => setLocation("/news")}
            >
              <div className="w-12 h-12 bg-[#4CAF50] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-newspaper text-[#4CAF50] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lajme & Njoftime</h3>
              <p className="text-gray-400 text-sm mb-4">Lajmet e fundit, njoftimet dhe eventet e ardhshme të shkollës sonë.</p>
              <span className="text-[#4CAF50] text-sm flex items-center">
                Lexo më shumë <i className="fas fa-arrow-right ml-2"></i>
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <div 
              className="w-full h-full cursor-pointer" 
              onClick={() => setLocation("/schedule")}
            >
              <div className="w-12 h-12 bg-[#FF9800] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-calendar-alt text-[#FF9800] text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Orari i Lëndëve</h3>
              <p className="text-gray-400 text-sm mb-4">Shiko orarin e lëndëve për secilën klasë dhe ditët e javës.</p>
              <span className="text-[#FF9800] text-sm flex items-center">
                Lexo më shumë <i className="fas fa-arrow-right ml-2"></i>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
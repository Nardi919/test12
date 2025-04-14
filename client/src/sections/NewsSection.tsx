import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { NewsCard } from "@/components/ui/news-card";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Lajmet e Fundit" 
          subtitle="Gjithmonë në korent me lajmet dhe ngjarjet më të fundit në shkollën tonë"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              id={item.id}
              category={item.category}
              categoryColor={item.categoryColor}
              date={item.date}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="/news" 
            className="inline-block bg-primary hover:bg-opacity-80 text-white border border-[#26a69a] px-6 py-3 rounded-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-newspaper mr-2"></i>Shiko të gjitha lajmet
          </motion.a>
        </div>
      </div>
      
      {/* Matura 2025 Banner */}
      <div className="container mx-auto mt-24 px-4 md:px-6">
        <motion.div 
          className="relative overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7e57c2] to-[#26a69a] opacity-90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Matura 2025" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
            <div className="text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Matura 2025
              </motion.h2>
              <motion.p 
                className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Përgatitu për sukses! Informacione të rëndësishme dhe udhëzime për nxënësit që do të japin provimet e Maturës Shtetërore në 2025.
              </motion.p>
              <motion.a 
                href="/matura-shtetrore" 
                className="bg-white text-[#7e57c2] hover:bg-opacity-80 px-6 py-3 rounded-md transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <i className="fas fa-info-circle mr-2"></i>Zbulo më shumë
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

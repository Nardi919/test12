import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselItems = [
  {
    title: "Gjimnazi 'Abdulla Keta'",
    subtitle: "Ndërtojmë të ardhmen përmes arsimit cilësor dhe vlerave të qëndrueshme",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    btnText: "Eksploro Shkollën",
    btnLink: "#sections"
  },
  {
    title: "Edukimi Modern",
    subtitle: "Metodologji bashkëkohore dhe mjedise frymëzuese për të nxënit",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    btnText: "Zbulo Kurrikulën",
    btnLink: "#sections"
  },
  {
    title: "Talente & Arritje",
    subtitle: "Zhvillojmë potencialin e plotë të nxënësve tanë",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    btnText: "Shiko Sukseset",
    btnLink: "#news"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, []);
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
      <div className="carousel h-full">
        <div className="relative h-full w-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
              <img 
                src={carouselItems[currentIndex].image} 
                alt={carouselItems[currentIndex].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-4">
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {carouselItems[currentIndex].title}
                  </motion.h2>
                  <motion.p 
                    className="text-xl md:text-2xl text-light mb-8 max-w-3xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {carouselItems[currentIndex].subtitle}
                  </motion.p>
                  <motion.div 
                    className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <a 
                      href={carouselItems[currentIndex].btnLink} 
                      className="bg-[#26a69a] hover:bg-opacity-80 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                    >
                      {carouselItems[currentIndex].btnText}
                    </a>
                    <a 
                      href="#contact" 
                      className="bg-transparent border-2 border-white hover:border-[#26a69a] text-white hover:text-[#26a69a] px-6 py-3 rounded-md transition-all duration-300"
                    >
                      Na Kontaktoni
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Carousel Controls */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1e1e1e] bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-30 transition-all duration-300"
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1e1e1e] bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-30 transition-all duration-300"
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {carouselItems.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
}

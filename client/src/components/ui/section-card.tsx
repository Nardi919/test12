import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionItem } from "@/data/sections";
import { Link } from 'wouter'; // Named import instead of default

interface SectionCardProps {
  section: SectionItem;
}

export function SectionCard({ section }: SectionCardProps) {
  const { title, description, icon, image, type, contentTitle, contentItems, activities, contentLink, buttonText, description2, schedule, trophies } = section;
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      className="section-card bg-[#121212] rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-50"></div>
        <div className="absolute top-4 right-4 bg-[#121212] p-3 rounded-lg">
          <i className={`${icon} card-icon text-[#26a69a] text-2xl`}></i>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#c0c0c0] mb-4">{description}</p>
        <button 
          className="w-full bg-[#2d2d2d] hover:bg-[#26a69a] text-white py-2 px-4 rounded-md transition-colors duration-300 text-left flex justify-between items-center"
          onClick={toggleContent}
        >
          <span>Shiko më shumë</span>
          <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="bg-[#2d2d2d] rounded-md mt-4 p-6"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-white font-bold mb-3">{contentTitle}</h4>

              {description2 && (
                <p className="text-[#c0c0c0] mb-3">{description2}</p>
              )}

              {type === "list" && contentItems && (
                <ul className="text-[#c0c0c0] space-y-2 mb-4">
                  {contentItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-[#26a69a] mr-2"></i> {item}
                    </li>
                  ))}
                </ul>
              )}

              {type === "files" && contentItems && (
                <ul className="text-[#c0c0c0] space-y-2 mb-4">
                  {contentItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-file-pdf text-red-500 mr-2"></i> {item}
                    </li>
                  ))}
                </ul>
              )}

              {type === "activities" && activities && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="bg-[#121212] p-3 rounded-lg text-center">
                      <i className={`${activity.icon} text-[#7e57c2] text-2xl mb-2`}></i>
                      <p className="text-[#c0c0c0] text-sm">{activity.name}</p>
                    </div>
                  ))}
                </div>
              )}

              {trophies && (
                <p className="text-[#c0c0c0] mb-3">{trophies}</p>
              )}

              {schedule && (
                <div className="flex items-center bg-[#121212] p-3 rounded-lg">
                  <i className="fas fa-clock text-[#26a69a] mr-3"></i>
                  <div>
                    <h5 className="text-white font-medium">{schedule.title}</h5>
                    <p className="text-[#c0c0c0] text-sm">{schedule.time}</p>
                  </div>
                </div>
              )}

              {contentLink && (
                <Link href="/calendar" className="text-[#26a69a] hover:underline">
                  {contentLink} <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              )}

              {buttonText && (
                <a href="https://smip.al" className="bg-[#7e57c2] hover:bg-opacity-80 text-white py-2 px-4 rounded-md inline-block transition-all duration-300">
                  <i className="fas fa-sign-in-alt mr-2"></i>{buttonText}
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
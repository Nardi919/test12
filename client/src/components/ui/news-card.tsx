import { motion } from "framer-motion";

interface NewsCardProps {
  id?: number;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export function NewsCard({ id, category, categoryColor, date, title, description, image }: NewsCardProps) {
  return (
    <motion.div 
      className="section-card bg-[#121212] rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          className={`absolute top-4 left-4 bg-${categoryColor} text-white text-sm font-medium px-3 py-1 rounded-md z-20`}
          style={{ backgroundColor: categoryColor }}
        >
          {category}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-50"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <i className="fas fa-calendar-alt text-[#26a69a] mr-2"></i>
          <span className="text-[#c0c0c0] text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#c0c0c0] mb-4">{description}</p>
        <a href={id ? `/news/${id}` : "#"} className="text-[#26a69a] hover:underline flex items-center">
          Lexo më shumë 
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
}


import { motion } from "framer-motion";
import { Link } from "wouter";
import { news } from "@/data/news";

export default function News() {
  return (
    <div className="min-h-screen bg-[#121212] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Lajmet dhe Njoftimet</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((newsItem) => (
            <motion.div
              key={newsItem.id}
              className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-sm font-semibold rounded-full text-white"
                    style={{ backgroundColor: newsItem.categoryColor }}
                  >
                    {newsItem.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-[#26a69a] text-sm mb-2">{newsItem.date}</p>
                <h3 className="text-xl font-semibold mb-3 text-white">{newsItem.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{newsItem.description}</p>
                <Link href={`/news/${newsItem.id}`} className="inline-block">
                  <span className="text-[#26a69a] hover:text-[#2bbbad] transition-colors duration-300 flex items-center">
                    Lexo më shumë
                    <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

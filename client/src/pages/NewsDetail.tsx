
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { news } from "@/data/news";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Lajmi nuk u gjet</h2>
        <Link href="/news">
          <a className="text-blue-600 hover:text-blue-800">Kthehu tek lajmet</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/news" className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Kthehu tek lajmet
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-[400px] relative">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span
              className="px-4 py-2 text-sm font-semibold rounded-full text-white"
              style={{ backgroundColor: newsItem.categoryColor }}
            >
              {newsItem.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-gray-500 mb-4">{newsItem.date}</p>
          <h1 className="text-3xl font-bold mb-6">{newsItem.title}</h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              {newsItem.description}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              
            
            </p>
            <p className="text-gray-700 leading-relaxed">
              
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

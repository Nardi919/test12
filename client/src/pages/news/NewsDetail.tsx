import { useParams } from "wouter";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { news } from "@/data/news";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find((item) => item.id === Number(id));
  
  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Lajmi nuk u gjet</h2>
            <p className="text-gray-400 mb-8">Lajmi që po kërkoni nuk ekziston ose mund të jetë hequr.</p>
            <a 
              href="/news" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#26a69a] text-white hover:bg-opacity-90 transition-colors"
            >
              Kthehu tek lajmet
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-8">
            <a 
              href="/news" 
              className="text-[#26a69a] hover:text-[#2bbbad] inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Kthehu tek lajmet
            </a>
          </div>
          
          <motion.div 
            className="bg-[#121212] rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-[400px] overflow-hidden">
              <img 
                src={newsItem.image} 
                alt={newsItem.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span 
                  className="text-xs font-semibold px-3 py-1 rounded-full mr-3"
                  style={{ backgroundColor: newsItem.categoryColor, color: "#fff" }}
                >
                  {newsItem.category}
                </span>
                <span className="text-[#c0c0c0] text-sm">{newsItem.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{newsItem.title}</h1>
              
              <div className="text-[#c0c0c0] space-y-6">
                <p>{newsItem.description}</p>
                
              </div>
              
              <div className="mt-8 pt-8 border-t border-[#2d2d2d] flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src="https://sanket-165.github.io/farmagram/profile.jpg" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Admin</div>
                    <div className="text-[#c0c0c0] text-sm">Stafi i Shkollës</div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-[#c0c0c0] hover:bg-[#3d3d3d] transition-colors">
                    <svg xmlns="https://sanket-165.github.io/farmagram/profile.jpg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-[#c0c0c0] hover:bg-[#3d3d3d] transition-colors">
                    <svg xmlns="https://sanket-165.github.io/farmagram/profile.jpg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-[#c0c0c0] hover:bg-[#3d3d3d] transition-colors">
                    <svg xmlns="https://sanket-165.github.io/farmagram/profile.jpg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-16">
            <SectionHeading 
              title="Lajme të Ngjashme" 
              subtitle="Lajme të tjera që mund t'ju interesojnë"
            />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.filter(item => item.id !== newsItem.id).slice(0, 3).map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="bg-[#121212] rounded-xl overflow-hidden shadow-lg h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span 
                        className="text-xs font-semibold px-2 py-1 rounded-full mr-3"
                        style={{ backgroundColor: item.categoryColor, color: "#fff" }}
                      >
                        {item.category}
                      </span>
                      <span className="text-[#c0c0c0] text-xs">{item.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                    
                    <p className="text-[#c0c0c0] text-sm mb-4 line-clamp-3">{item.description}</p>
                    
                    <a 
                      href={`/news/${item.id}`} 
                      className="text-[#26a69a] hover:text-[#2bbbad] font-medium inline-flex items-center"
                    >
                      Lexo më shumë
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
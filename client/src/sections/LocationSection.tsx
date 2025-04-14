import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import React from "react";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 relative bg-[#1e1e1e]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Vendndodhja e Shkollës" 
          subtitle="Na gjeni lehtësisht në qendër të Tiranës"
        />

        <motion.div 
          className="bg-[#121212] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-[400px] relative flex">
            <div className="w-full md:w-1/2 space-y-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2077421711064!2d19.864224676944565!3d41.33326447131745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIwJzAwLjAiTiAxOcKwNTEnNTYuMCJF!5e0!3m2!1sen!2sus!4v1632309735946!5m2!1sen!2sus" 
                className="w-full h-[400px] border-0 rounded-lg" 
                allowFullScreen={true} 
                loading="lazy"
                title="Vendndodhja e Shkollës"
              ></iframe>
            </div>
            <motion.div 
              className="absolute top-6 left-6 bg-[#121212] p-6 rounded-lg shadow-lg max-w-xs md:w-1/2 md:ml-8 md:static"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">Gjimnazi "Abdulla Keta"</h3>
              <div className="space-y-3 text-[#c0c0c0]">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#26a69a] mr-3 mt-1"></i>
                  <p>Rruga Bashkim Kodra, Tiranë, Shqipëri<br/></p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt text-[#26a69a] mr-3"></i>
                  <p>+355 x xxx xxxx</p>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-[#26a69a] mr-3"></i>
                  <p>abdullaketa@gmail.com</p>
                </div>
              </div>
              <hr className="border-gray-700 my-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white mb-1">Orari i Shkollës</h4>
                  <p className="text-[#c0c0c0] text-sm">E Hënë - E Premte: 08:00 - 14:00</p>
                </div>
                <a 
                  href="https://goo.gl/maps/SPGJZPTSHgZ1iBcb9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#26a69a] hover:text-white transition-colors"
                >
                  <i className="fas fa-directions text-2xl"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
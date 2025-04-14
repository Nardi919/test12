import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionCard } from "@/components/ui/section-card";
import { sections } from "@/data/sections";

export default function SchoolSectionsSection() {
  return (
    <section id="sections" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[#1e1e1e] z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Seksionet e Shkollës" 
          subtitle="Eksploro seksionet e ndryshme që shkolla jonë ofron për nxënësit, prindërit dhe komunitetin"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {sections.map((section, index) => (
            <SectionCard
              key={index}
              section={section}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

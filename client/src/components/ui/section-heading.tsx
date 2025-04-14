import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-16`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-[#26a69a] mb-4 font-montserrat"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-[#c0c0c0] max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

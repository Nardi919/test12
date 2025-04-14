import { motion } from "framer-motion";

interface ContactInfoCardProps {
  icon: string;
  title: string;
  details: string;
}

export function ContactInfoCard({ icon, title, details }: ContactInfoCardProps) {
  return (
    <motion.div 
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#2d2d2d] p-3 rounded-lg mr-4">
        <i className={`${icon} text-[#26a69a]`}></i>
      </div>
      <div>
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-[#c0c0c0]">{details}</p>
      </div>
    </motion.div>
  );
}

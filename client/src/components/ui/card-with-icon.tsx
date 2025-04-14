import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardWithIconProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function CardWithIcon({ icon, title, description, className = "" }: CardWithIconProps) {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-[#2d2d2d] p-3 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-[#c0c0c0] text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

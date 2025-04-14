import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SchoolLogoProps {
  className?: string;
  size?: "small" | "medium" | "large" | "xlarge";
  animated?: boolean;
  withShadow?: boolean;
  floating?: boolean;
  pulse?: boolean;
  colorEffect?: boolean;
}

export default function SchoolLogo({ 
  className = "", 
  size = "medium", 
  animated = true,
  withShadow = false,
  floating = false,
  pulse = false,
  colorEffect = false
}: SchoolLogoProps) {
  
  const [isVisible, setIsVisible] = useState(true);
  
  // Define size classes based on the size prop
  const sizeClasses = {
    small: "w-8 h-7",
    medium: "w-14 h-11",
    large: "w-20 h-16",
    xlarge: "w-48 h-42"
  };
  
  // Shadow style
  const shadowStyle = withShadow ? {
    filter: 'drop-shadow(0 0 12px rgba(38, 166, 154, 0.8))'
  } : {};
  
  // Animation config
  const hoverAnimation = animated ? {
    scale: 1.5,
    rotate: [0, -8, 8, 0],
    transition: { duration: 0.5 }
  } : {};
  
  // Floating animation
  const floatingAnimation = floating ? {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  } : {};
  
  // Pulse animation
  const pulseAnimation = pulse ? {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  } : {};
  
  // Color effect animation
  useEffect(() => {
    if (colorEffect) {
      const interval = setInterval(() => {
        setIsVisible(prev => !prev);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [colorEffect]);
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ 
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      animate={{
        ...floatingAnimation,
        ...pulseAnimation
      }}
    >
      <motion.img
        src="https://i.imgur.com/WzQYOFg.png"
        alt="Gjimnazi Abdulla Keta Logo"
        className={`${sizeClasses[size]} transition-all duration-500`}
        whileHover={hoverAnimation}
        style={{
          ...shadowStyle,
          filter: colorEffect ? 
            `drop-shadow(0 0 12px ${isVisible ? 'rgba(38, 166, 154, 0.8)' : 'rgba(64, 75, 186, 0.8)'})`
            : shadowStyle.filter || 'none',
        }}
      />
    </motion.div>
  );
}
import { motion } from "framer-motion";
import SchoolLogo from "../SchoolLogo";

interface LogoAnimationProps {
  className?: string;
  position?: "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "small" | "medium" | "large" | "xlarge";
  opacity?: number;
  withRotation?: boolean;
}

/**
 * A component that displays an animated school logo that can be positioned in different parts of a section
 */
export function LogoAnimation({
  className = "",
  position = "top-right",
  size = "large",
  opacity = 0.15,
  withRotation = true
}: LogoAnimationProps) {
  // Determine position classes
  const positionClasses = {
    "left": "left-0 top-1/2 -translate-y-1/2",
    "right": "right-0 top-1/2 -translate-y-1/2",
    "top": "top-0 left-1/2 -translate-x-1/2",
    "bottom": "bottom-0 left-1/2 -translate-x-1/2",
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0"
  };

  // Animation variants
  const rotationAnimation = withRotation ? {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  } : {};
  
  return (
    <motion.div
      className={`absolute ${positionClasses[position]} p-4 pointer-events-none ${className}`}
      style={{ opacity }}
      animate={{
        ...rotationAnimation
      }}
    >
      <SchoolLogo 
        size={size} 
        withShadow={true}
        floating={true}
        pulse={!withRotation}
      />
    </motion.div>
  );
}
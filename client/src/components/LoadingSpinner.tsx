import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export default function LoadingSpinner({
  size = 'medium',
  color = 'teal-500',
  className = '',
}: LoadingSpinnerProps) {
  // Përcakto dimensionet e bazuara në prop size
  const dimensions = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4',
  };
  
  const sizeClass = dimensions[size];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={`${sizeClass} rounded-full animate-spin ${className}`}
      style={{ 
        borderTopColor: `var(--${color.replace('-', '-')})`,
        borderBottomColor: `var(--${color.replace('-', '-')})`,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderStyle: 'solid'
      }}
    />
  );
}
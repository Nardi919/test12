import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import LoadingSpinner from './LoadingSpinner';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [loading, setLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState('');
  const [location] = useLocation();

  useEffect(() => {
    // Always reset scroll position when mounting component
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  useEffect(() => {
    // Kur ndryshon lokacioni, fillo animacionin e ngarkimit dhe reset scroll position
    if (location !== prevLocation && prevLocation !== '') {
      setLoading(true);

      // Kthe scrollin në fillim të faqes - use immediate reset
      window.scrollTo({
        top: 0,
        behavior: "auto" // Use "auto" instead of "smooth" for immediate reset
      });

      // Simulimi i kohës së ngarkimit të përmbajtjes
      const timer = setTimeout(() => {
        setLoading(false);

        // Double-check that scroll is at top after loading
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }, 800); // Kohëzgjatja e animacionit të ngarkimit

      return () => clearTimeout(timer);
    }

    setPrevLocation(location);
  }, [location, prevLocation]);

  // Variantet e animacionit për faqet
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Variantet e animacionit për ngarkimin
  const loaderVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative min-h-screen"> 
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          >
            <div className="flex flex-col items-center">
              <LoadingSpinner size="large" color="teal-500" />
              <p className="mt-4 text-white text-lg font-medium">Duke ngarkuar...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={location}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
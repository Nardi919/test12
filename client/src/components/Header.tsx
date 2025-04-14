import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import SchoolLogo from "./SchoolLogo";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

// Added ThemeToggle component
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}


export default function Header() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [, setLocation] = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScrolled = scrollPosition > 50;
  // We don't need any state for authentication - this will be handled on the admin page

  // Handle scroll position manually instead of using hook
  useEffect(() => {
    const handlePositionChange = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handlePositionChange, { passive: true });
    return () => window.removeEventListener('scroll', handlePositionChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-30 shadow-lg transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-black bg-opacity-80 backdrop-blur-md" 
          : "py-4 bg-black bg-opacity-60"
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and School Name */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setLocation("/")}
          >
            <motion.div
              className="mr-3 relative"
              initial={{ rotate: 0 }}
              animate={isScrolled ? {
                x: 0,
                y: 0,
                rotate: [0, 10, -10, 0],
                scale: 0.85,
              } : {
                x: 0,
                y: [0, -5, 0],
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 0.6,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
                scale: {
                  duration: 0.4
                }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <SchoolLogo 
                size="medium" 
                withShadow={isScrolled} 
                animated={true}
                pulse={isScrolled}
                colorEffect={true}
              />
            </motion.div>
            <div className="hidden md:block">
              <h1 className="text-[#26a69a] font-montserrat font-bold text-xl tracking-wide">
                Gjimnazi Abdulla Keta
              </h1>
              <p className="text-[#c0c0c0] text-xs">
                Cilësi • Edukim • Përsosmëri
              </p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { path: "/maturashtetrore", label: "Matura Shteterore" },
              { path: "/about", label: "Rreth Shkollës" },
              { path: "/sections", label: "Kategoritë" },
              { path: "/news", label: "Lajmet" },
              { path: "/calendar", label: "Kalendari" },
              { path: "/schedule", label: "Orari" },
            ].map((item) => (
              <motion.div 
                key={item.path}
                whileHover={{ y: -2 }} 
                transition={{ duration: 0.2, type: "tween" }}
                style={{ willChange: "transform" }}
              >
                <Link
                  href={item.path}
                  className="text-light hover:text-[#26a69a] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.2, type: "tween" }}
              style={{ willChange: "transform" }}
            >
              <Button
                onClick={() => setLocation("/admin")}
                className="bg-[#26a69a] hover:bg-opacity-80 text-white px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-xl">👥</span>
                Staff
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-light hover:text-[#26a69a] focus:outline-none"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden mt-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
          style={{ 
            willChange: "opacity, height",
            transformOrigin: "top center" 
          }}
        >
          <motion.div 
            className="flex flex-col space-y-3 py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ 
              duration: 0.2,
              delay: 0.05
            }}
            style={{ willChange: "opacity" }}
          >
            {[
              { path: "/", label: "Kryefaqja" },
              { path: "/about", label: "Rreth Shkollës" },
              { path: "/sections", label: "Seksionet" },
              { path: "/news", label: "Lajmet" },
              { path: "/calendar", label: "Kalendari" },
              { path: "/schedule", label: "Orari" },
              { path: "/admin", label: "Staff" }
            ].map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-light hover:text-[#26a69a] transition-all py-2 block transform translate-x-0 opacity-100 ${
                  isMobileMenuOpen ? 'animate-fadeInLeft' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 30}ms`,
                  animationDuration: '250ms' 
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
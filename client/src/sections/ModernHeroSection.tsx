import { useEffect, useRef, useMemo } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import SchoolLogo from "@/components/SchoolLogo";

export default function ModernHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const buttonControls = useAnimation();

  // Setup scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  // Floating animation for particles with more performant settings
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Pulse animation for glow effects with more performant settings
  const pulseAnimation = {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Dynamic text reveal animation
  useEffect(() => {
    const sequence = async () => {
      try {
        await titleControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" }
        });

        await subtitleControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" }
        });

        await buttonControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        });
      } catch (error) {
        console.error("Animation sequence error:", error);
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      sequence();
    }, 100);

    return () => clearTimeout(timer);
  }, [titleControls, subtitleControls, buttonControls]);

  // Pre-generate random particle positions for better performance
  const particleStyles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.2,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 5,
      xMove: Math.random() * 40 - 20,
      yMove: Math.random() * 40 - 20
    }));
  }, []);

  // Pre-generate dots for 3D effect to improve performance
  const dots3D = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: index % 3 === 0 ? '#26a69a' : index % 3 === 1 ? '#7e57c2' : '#4CAF50',
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 5 + 10,
      yMove: Math.random() * 30 - 15,
      xMove: Math.random() * 30 - 15,
      scale: Math.random() * 0.6 + 0.5
    }));
  }, []);

  // Pre-generate background gradients
  const gradients = useMemo(() => [
    'radial-gradient(circle at 0% 0%, rgba(38,166,154,0.15) 0%, rgba(10,10,10,0.95) 50%), linear-gradient(45deg, rgba(38,166,154,0.1) 0%, rgba(126,87,194,0.1) 100%)',
    'radial-gradient(circle at 100% 100%, rgba(126,87,194,0.15) 0%, rgba(10,10,10,0.95) 50%), linear-gradient(135deg, rgba(126,87,194,0.1) 0%, rgba(38,166,154,0.1) 100%)',
    'radial-gradient(circle at 100% 0%, rgba(38,166,154,0.15) 0%, rgba(10,10,10,0.95) 50%), linear-gradient(225deg, rgba(38,166,154,0.1) 0%, rgba(126,87,194,0.1) 100%)',
    'radial-gradient(circle at 0% 100%, rgba(126,87,194,0.15) 0%, rgba(10,10,10,0.95) 50%), linear-gradient(315deg, rgba(126,87,194,0.1) 0%, rgba(38,166,154,0.1) 100%)'
  ], []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-[#121212] overflow-hidden"
      style={{ position: 'relative' }} // Fix scroll offset calculation warning
    >
      {/* Dynamic background with animated gradients and particles */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-blend-overlay" 
        animate={{ 
          background: gradients
        }}
        transition={{ 
          duration: 15, 
          ease: "easeInOut", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        style={{ willChange: "background" }}
      >
        {/* Animated particle field - reduced count and optimized */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {particleStyles.map((style, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${style.size / 2}px`,
                height: `${style.size / 2}px`,
                left: style.left,
                top: style.top,
                opacity: style.opacity,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, style.xMove, 0],
                y: [0, style.yMove, 0],
              }}
              transition={{
                duration: style.duration,
                delay: style.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* 3D perspective container - optimized animation */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          animate={{ 
            rotateX: [0, 2, 0], 
            rotateY: [0, -2, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{ 
            willChange: "transform",
            perspective: "1000px", 
            transformStyle: "preserve-3d" 
          }}
        >
          {/* Moving dots mesh - reduced count for better performance */}
          <div className="absolute inset-0 opacity-40">
            {dots3D.map((dot, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                style={{
                  width: dot.width + 'px',
                  height: dot.height + 'px',
                  left: dot.left + '%',
                  top: dot.top + '%',
                  backgroundColor: dot.color,
                  opacity: dot.opacity,
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                }}
                animate={{
                  y: [0, dot.yMove, 0],
                  x: [0, dot.xMove, 0],
                  scale: [1, dot.scale, 1],
                  opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity]
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated particles and glow effects - reduced for better performance */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {/* SVG Particle effect */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            y, 
            opacity, 
            scale,
            willChange: "transform, opacity"
          }}
        >
          <img 
            src="/images/hero-particles.svg" 
            alt="" 
            className="w-full h-full object-cover opacity-30" 
            loading="eager"
          />
        </motion.div>

        {/* Animated floating particles - reduced count for performance */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-[#26a69a] bg-opacity-20 filter blur-md"
          animate={floatingAnimation}
          style={{ willChange: "transform" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-[#26a69a] bg-opacity-30 filter blur-md"
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
          style={{ willChange: "transform" }}
        />

        {/* School Logo Animation in Background */}
        <div className="absolute top-10 right-10" style={{ opacity: 0.15 }}>
          <SchoolLogo size="xlarge" withShadow={true} floating={true} pulse={false} colorEffect={true} />
        </div>
        <div className="absolute bottom-10 left-10" style={{ opacity: 0.15 }}>
          <SchoolLogo size="xlarge" withShadow={true} floating={false} pulse={true} colorEffect={false} />
        </div>

        {/* Animated glowing orbs - reduced for better performance */}
        <motion.div 
          className="absolute top-1/2 left-1/5 w-16 h-16 rounded-full bg-[#26a69a] bg-opacity-10 filter blur-xl"
          animate={pulseAnimation}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          className="perspective-1000"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={titleControls}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            staggerChildren: 0.2
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 tracking-wide font-montserrat"
            style={{ 
              textShadow: '0 0 15px rgba(38, 166, 154, 0.6), 0 0 30px rgba(38, 166, 154, 0.4)',
            }}
          >
            <motion.span 
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#26a69a] via-[#4CAF50] to-[#7e57c2] hover:scale-110 transition-transform cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgb(38 166 154 / 0.8)",
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ willChange: "transform" }}
            >
              GJIMNAZI
            </motion.span>
            <br />
            <motion.span 
              className="inline-block relative text-white slide-in-blurred-top"
              whileHover={{
                scale: 1.05,
                color: "#26a69a",
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ willChange: "transform, color" }}
            >
              ABDULLA KETA
            </motion.span>
          </motion.h1>
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-[#26a69a]/20 to-[#7e57c2]/20 rounded-lg blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ willChange: "transform, opacity" }}
          />
        </motion.div>

        <motion.p 
          initial={{ y: 90, x: 10, opacity: 0 }}
          animate={subtitleControls}
          className="text-m md:text-xl text-gray-100 max-w-1l mb-5000 duration-100"
          style={{ willChange: "transform, opacity" }}
        >
          <em>Një hap në teknologji...</em>

        </motion.p>
        <motion.p 
          initial={{ y: 70, opacity: 0 }}
          animate={subtitleControls}
          className="text-m md:text-xl text-gray-100 max-w-5l mb-10 duration-20 delay=10"
          style={{ willChange: "transform, opacity" }}
        >
          <em>...drejt një bote plot magji !</em>

        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={buttonControls}
          className="flex flex-col sm:flex-row gap-4"
          style={{ willChange: "transform, opacity" }}
        >
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#26a69a] hover:bg-opacity-90 text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300"
              style={{ willChange: "transform" }}
            >
              Rreth Shkollës
            </motion.button>
          </Link>

          <Link href="/sections">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-[#26a69a] hover:bg-[#26a69a] hover:bg-opacity-20 text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300"
              style={{ willChange: "transform" }}
            >
              Eksploro Seksionet
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator - simplified animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-300 text-sm mb-2">Zbulo Më Shumë</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
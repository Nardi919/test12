import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SchoolLogo from "./SchoolLogo";

interface IntroAnimationProps {
  onAnimationComplete?: () => void;
  isCompleted?: boolean; // New prop to control animation state from parent
}

// Letter reveal animation component
const RevealText = ({
  text,
  isAnimating,
  className,
  delay = 0,
  staggerDuration = 0.12,
  isGradient = false,
  isCompleted = false,
}: {
  text: string;
  isAnimating: boolean;
  className: string;
  delay?: number;
  staggerDuration?: number;
  isGradient?: boolean;
  isCompleted?: boolean;
}) => {
  const letters = Array.from(text);

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: [0.9, 1.05, 1], // Subtle pop effect as each letter appears
      transition: {
        opacity: {
          delay: delay + i * (staggerDuration * 0.5),
          duration: 0.15,
          ease: "easeOut",
        },
        scale: {
          delay: delay + i * (staggerDuration * 0.5),
          duration: 0.1,
          ease: [0.2, 0.65, 0.3, 1.0], // Custom ease for smooth pop effect
        },
      },
    }),
    exit: (i: number) => ({
      // No opacity change, keep text visible during transition
      x: 0,
      y: 15,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.97],
      },
    }),
  };

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
          exit="exit"
          variants={letterVariants}
          className={isGradient ? "inline-block" : ""}
          style={{
            display: "inline-block",
            textShadow: isGradient
              ? "0 0 15px rgba(38, 166, 154, 0.6), 0 0 30px rgba(38, 166, 154, 0.4)"
              : "none",
            transformOrigin: "center center", // For better scale animation
            willChange: "transform, opacity", // Performance optimization
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default function IntroAnimation({
  onAnimationComplete,
  isCompleted = false,
}: IntroAnimationProps) {
  const [animationStage, setAnimationStage] = useState<
    "initial" | "reveal" | "complete"
  >("initial");
  const logoRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start the animation sequence
    const sequence = async () => {
      // Initial black screen fade in
      await new Promise((resolve) => setTimeout(resolve, 8));

      // Start revealing text as logo moves
      setAnimationStage("reveal");

      // Total animation time + extra time to ensure completion
      await new Promise((resolve) => setTimeout(resolve, 5500));

      // Complete the animation with a fade out
      setAnimationStage("complete");

      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };

    sequence();
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isCompleted ? 0 : 1,
        backgroundColor: isCompleted ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)",
      }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: {
          duration: isCompleted ? 0.8 : 0.5,
          ease: isCompleted ? [0.17, 0.67, 0.83, 0.97] : "easeOut",
        },
        backgroundColor: {
          duration: isCompleted ? 0.8 : 0.5,
          ease: isCompleted ? [0.17, 0.67, 0.83, 0.97] : "easeOut",
        },
      }}
      style={{
        willChange: "opacity, background-color",
        pointerEvents: isCompleted ? "none" : "auto",
      }}
    >
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* Background effects to match ModernHeroSection */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isCompleted ? 0 : 0.5 }}
          transition={{ duration: isCompleted ? 0.8 : 0.75 }}
        />

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isCompleted ? 0 : 1 }}
          transition={{ duration: isCompleted ? 0.8 : 1.25 }}
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(38,166,154,0.15) 0%, rgba(10,10,10,0.95) 50%), linear-gradient(45deg, rgba(38,166,154,0.1) 0%, rgba(126,87,194,0.1) 100%)",
            willChange: "opacity",
          }}
        />

        {/* Additional subtle animated particles for depth */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          animate={{ opacity: isCompleted ? 0 : 1 }}
          transition={{ duration: isCompleted ? 0.8 : 1 }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#26a69a]"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1,
                willChange: "transform, opacity",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: isCompleted ? 0 : [0.1, 0.2, 0.1],
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 4,
                repeat: isCompleted ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Text container with fixed positioning to match ModernHeroSection */}
        <motion.div
          className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center text-center"
          ref={titleContainerRef}
          style={{
            position: "relative",
            top: 0,
            transform: "none",
          }}
        >
          {/* Title container */}
          <motion.div
            className="perspective-1000"
            initial={{ opacity: 0 }}
            animate={{
              opacity: animationStage === "reveal" ? 1 : 0,
              // Instead of fading out, we maintain opacity and move the text
              y: isCompleted ? 0 : 0,
              scale: isCompleted ? 1 : 1,
            }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              y: {
                duration: isCompleted ? 0.8 : 0,
                ease: [0.17, 0.67, 0.83, 0.97],
              },
              scale: {
                duration: isCompleted ? 0.8 : 0,
                ease: [0.17, 0.67, 0.83, 0.97],
              },
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 tracking-wide font-montserrat"
              animate={{
                // Keep text visible during transition
                opacity: 1,
              }}
            >
              {/* GJIMNAZI - with gradient */}
              <RevealText
                text="GJIMNAZI"
                isAnimating={animationStage === "reveal"}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#26a69a] via-[#4CAF50] to-[#7e57c2]"
                staggerDuration={0.12}
                isGradient={true}
                isCompleted={isCompleted}
              />

              <br />

              {/* ABDULLA KETA - white text */}
              <RevealText
                text="ABDULLA KETA"
                isAnimating={animationStage === "reveal"}
                className="inline-block relative text-white"
                delay={0.}
                staggerDuration={0.12}
                isCompleted={isCompleted}
              />
            </motion.h1>

            {/* Enhanced glow effect behind the text with smoother animation */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#26a69a]/20 to-[#7e57c2]/20 rounded-lg blur-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isCompleted
                  ? [0.3, 0.0]
                  : animationStage === "reveal"
                    ? [0.3, 0.5, 0.3]
                    : 0,
                scale: isCompleted
                  ? 1.2
                  : animationStage === "reveal"
                    ? [1, 1.1, 1]
                    : 0.8,
              }}
              transition={{
                opacity: {
                  duration: isCompleted ? 0.8 : 4,
                  times: isCompleted ? [0, 1] : [0, 0.5, 1],
                  ease: isCompleted ? [0.17, 0.67, 0.83, 0.97] : "easeInOut",
                },
                scale: {
                  duration: isCompleted ? 0.8 : 4,
                  ease: isCompleted ? [0.17, 0.67, 0.83, 0.97] : "easeInOut",
                },
                repeat: isCompleted ? 0 : Infinity,
                repeatType: "reverse",
              }}
              style={{ willChange: "transform, opacity" }}
            />
          </motion.div>

          {/* First subtitle - EXACT CLASS MATCH with ModernHeroSection */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: animationStage === "reveal" ? 1 : 0,
            }}
            transition={{
              opacity: {
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1],
                delay: 1.8,
              },
            }}
            className="text-m md:text-xl text-gray-100 max-w-1l mb-5 duration-100"
            style={{
              willChange: "transform, opacity",
              position: "absolute",
              top: "calc(50% + 90px)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <em>Një hap në teknologji...</em>
          </motion.p>

          {/* Second subtitle - EXACT CLASS MATCH with ModernHeroSection */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: animationStage === "reveal" ? 1 : 0,
            }}
            transition={{
              opacity: {
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1],
                delay: 2.2,
              },
            }}
            className="text-m md:text-xl text-gray-100 max-w-5l mb-10 duration-20"
            style={{
              willChange: "transform, opacity",
              position: "absolute",
              top: "calc(50% + 130px)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <em>...drejt një bote plot magji !</em>
          </motion.p>
        </motion.div>

        {/* Moving logo with enhanced motion */}
        <motion.div
          ref={logoRef}
          className="absolute z-30 top-1/2.5"                                                  //modifiko lartsin
          initial={{ x: "-150%", opacity: 1 }}
          animate={{
            x: isCompleted ? "250%" : animationStage === "reveal" ? "250%" : "-150%",
            opacity: 1,
            scale: 1
          }}
          transition={{
            x: {
              duration: isCompleted ? 0.6 : 1,
              ease: "easeOut",
              delay: isCompleted ? 0 : 0.1
            },
            opacity: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="relative">
            {/* Logo itself */}
            <SchoolLogo size="xlarge" withShadow={true} colorEffect={true} />

            {/* Enhanced light glow effects */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isCompleted ? 0 : [0.3, 0.8, 0.3],
                scale: isCompleted ? 0 : [1, 1.15, 1],
              }}
              transition={{
                duration: isCompleted ? 0.6 : 1.5,                                          //modifiko 1.5 per shpejtsi
                repeat: isCompleted ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(38,166,154,0.5) 0%, rgba(38,166,154,0) 70%)",
                filter: "blur(15px)",
                transform: "scale(1.8)",
                willChange: "transform, opacity",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isCompleted ? 0 : [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: isCompleted ? 0.6 : 2,
                delay: isCompleted ? 0 : 0.5,
                repeat: isCompleted ? 0 : Infinity,
                repeatType: "reverse",
              }}
              style={{
                background:
                  "radial-gradient(circle at center, rgba(126,87,194,0.3) 0%, rgba(126,87,194,0) 70%)",
                filter: "blur(25px)",
                transform: "scale(2.2)",
                willChange: "opacity",
              }}
            />
          </div>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: isCompleted ? 30 : [0, 10, 0],
            opacity: isCompleted ? 0 : [0.4, 1, 0.4],
          }}
          transition={{
            duration: isCompleted ? 0.5 : 2,
            repeat: isCompleted ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-300 text-sm mb-2">Duke ngarkuar...</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
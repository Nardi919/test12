import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Define stats data type
interface SchoolStat {
  id: number;
  number: number;
  label: string;
  icon: string;
}

// School stats
const schoolStats: SchoolStat[] = [
  { id: 1, number: 181, label: "Nxënës", icon: "fa-user-graduate" },
  { id: 2, number: 15, label: "Mësues", icon: "fa-chalkboard-teacher" },
  { id: 3, number: 8.9, label: "Nota Mesatare", icon: "fa-chart-line" },
  { id: 4, number: 0, label: "Trofe", icon: "fa-trophy" }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function StatsSection() {
  const statsControls = useAnimation();
  const statsAnimated = useRef(false);
  
  // Setup Intersection Observer hook
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  useEffect(() => {
    // Animate stats when they come into view
    if (statsInView && !statsAnimated.current) {
      statsControls.start("visible");
      statsAnimated.current = true;
      
      // Animate counter for each stat
      schoolStats.forEach(stat => {
        animateCounter(stat.id, stat.number);
      });
    }
  }, [statsControls, statsInView]);
  
  // Function to animate the counter
  const animateCounter = (id: number, target: number) => {
    const counter = document.getElementById(`stat-${id}`);
    if (!counter) return;
    
    let current = 0;
    const increment = Math.ceil(target / 150); // Divide animation into steps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      counter.textContent = current.toString();
    }, 30);
  };
  
  return (
    <section 
      ref={statsRef} 
      className="py-16 bg-[#1a1a1a]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={statsControls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {schoolStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeIn}
              className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-[#26a69a] bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${stat.icon} text-[#26a69a] text-2xl`}></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                <span id={`stat-${stat.id}`}>0</span>
                
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
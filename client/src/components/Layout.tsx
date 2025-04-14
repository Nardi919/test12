import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { Particles } from "./ui/particles";
import BackgroundLogo from "./BackgroundLogo";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Ensure smooth scrolling behavior for the entire site
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Initialize GSAP ScrollTrigger when available
    const initScrollTrigger = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
      } else {
        // Retry if GSAP isn't loaded yet
        setTimeout(initScrollTrigger, 100);
      }
    };
    
    initScrollTrigger();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="font-poppins text-light bg-dark min-h-screen flex flex-col relative">
      <div className="animated-bg absolute inset-0 z-0"></div>
      <Particles />
      <BackgroundLogo count={7} opacity={0.08} />
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
      <BackToTop />
      
      <style jsx="true" global="true">{`
        .animated-bg {
          background: linear-gradient(-45deg, #1a1f2e, #121212, #26a69a15, #7e57c215);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
        
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .section-card {
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .section-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        
        .section-card:hover .card-icon {
          transform: rotate(10deg) scale(1.2);
        }
        
        .section-card:hover .card-overlay {
          opacity: 0.7;
        }
        
        .card-icon {
          transition: all 0.4s ease;
        }
        
        .card-overlay {
          transition: opacity 0.4s ease;
        }
        
        .menu-item {
          position: relative;
          overflow: hidden;
        }
        
        .menu-item:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #26a69a;
          transition: width 0.3s ease;
        }
        
        .menu-item:hover:after {
          width: 100%;
        }
        
        html {
          --secondary: 162 41% 40%;
          --accent: 270 48% 55%;
          --dark-surface: 0 0% 12%;
          --dark-lighter: 0 0% 18%;
          --light-muted: 0 0% 75%;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

import { useEffect } from "react";
import ModernHeroSection from "@/sections/ModernHeroSection";
import StatsSection from "@/sections/StatsSection";
import HighlightsSection from "@/sections/HighlightsSection";
import EventsSection from "@/sections/EventsSection";
import QuickLinksSection from "@/sections/QuickLinksSection";
import LocationSection from "@/sections/LocationSection";
import ContactFormSection from "@/sections/ContactFormSection";

// Import AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    
    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);
  
  return (
    <>
      <ModernHeroSection />
      <StatsSection />
      <HighlightsSection />
      <EventsSection />
      <QuickLinksSection />
      <LocationSection />
      <ContactFormSection />
    </>
  );
}

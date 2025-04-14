import { useState, useEffect, useCallback } from "react";

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Funksioni për menaxhimin e eventit të scroll-it
  function handleScroll() {
    const position = window.scrollY;
    setScrollPosition(position);
  }
  
  // Funksioni për të kthyer scrollin në krye të faqes
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return {
    scrollPosition,
    scrollToTop
  };
}

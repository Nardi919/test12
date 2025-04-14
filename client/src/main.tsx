import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Preload critical hero image
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = "/images/hero-particles.svg";
  link.as = "image";
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);

import { Link } from "wouter";
import SchoolLogo from "./SchoolLogo";

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-6 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <SchoolLogo size="small" withShadow={true} animated={false} />
              </div>
              <h3 className="text-xl font-bold text-white font-montserrat">Gjimnazi "Abdulla Keta"</h3>
            </div>
            <p className="text-[#c0c0c0] mb-6">Hapim portat dixhitale, për të ndërtuar një të ardhme ideale</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/abdullaketa.27/" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/gjimnaziabdullaketa/?__pwa=1" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Lidhje të Shpejta</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Kryefaqja</a></li>
              <li><a href="/about" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Rreth Shkollës</a></li>
              <li><a href="/sections" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Seksionet</a></li>
              <li><a href="/news" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Lajmet</a></li>
              <li><a href="#contact" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Na Kontaktoni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Programe</h4>
            <ul className="space-y-3">
              <li><a href="/maturashtetrore" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Matura Shtetërore 2025</a></li>
              <li><a href="/programs/pisa-2025" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">PISA 2025</a></li>
              <li><a href="/clubs/art" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Klubi Art & Zeje</a></li>
              <li><a href="/clubs/debate" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Klubi i Debatit</a></li>
              <li><a href="/diversity" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Respektimi i Diversitetit</a></li>
              <li><a href="/library/digital-library" className="text-[#c0c0c0] hover:text-[#26a69a] transition-colors duration-300">Libraria Dixhitale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#26a69a] mr-3 mt-1"></i>
                <span className="text-[#c0c0c0]">Rruga 4 Bashkim Kodra, Tiranë, Shqipëri</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#26a69a] mr-3"></i>
                <span className="text-[#c0c0c0]">abdullaketa@yahoo.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-[#26a69a] mr-3"></i>
                <span className="text-[#c0c0c0]">E Hënë - E Premte: 07:00 - 15:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <em className="text-[#c0c0c0] text-sm mb-4 md:mb-0">Website-i zyrtar i gjimnazit ‘Abdulla Keta’, i konceptuar, zhvilluar dhe dizajnuar nga nxënësi Benard Përnezha</em>
          <div className="flex space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
}

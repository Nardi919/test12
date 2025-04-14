
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";

export default function DebateClub() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center mb-10">
          <Badge className="mb-4 px-3 py-1 text-sm bg-blue-600 text-white">Klub Aktiv</Badge>
          <h1 className="text-4xl font-bold mb-3">Klubi i Debatit</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zhvillimi i mendimit kritik, oratorisë dhe aftësive argumentuese për qytetarët e së ardhmes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Nxënësit gjatë një debati" 
              className="rounded-lg shadow-lg w-full h-[350px] object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Rreth Klubit</h2>
            <p>
              Klubi i Debatit në Gjimnazin "Abdulla Keta" është një nga klubet më aktive dhe më të suksesshme në shkollë. I themeluar në vitin 2015, klubi synon të zhvillojë tek nxënësit aftësitë e:
            </p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                <span>Argumentimit logjik dhe të strukturuar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                <span>Të folurit publik me vetëbesim</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                <span>Analizës kritike të informacionit</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                <span>Kërkimit dhe organizimit të ideve</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span> 
                <span>Debatimit etik dhe të bazuar në fakte</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Aktivitetet Tona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-blue-600 text-4xl text-center">🏆</div>
                <h3 className="text-xl font-semibold mb-2 text-center">Debate të Strukturuara</h3>
                <p className="text-gray-600">
                  Organizojmë debate formale çdo javë. Anëtarët tanë mësojnë strukturën e argumentimit, teknikat e kundërshtimit dhe strategjitë e bindjes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-blue-600 text-4xl text-center">🎓</div>
                <h3 className="text-xl font-semibold mb-2 text-center">Zhvillimi</h3>
                <p className="text-gray-600">
                  Dy herë në muaj zhvillojmë trajnime të specializuara për anëtarët me tematikat: hulumtimi, retorika, gjuha e trupit, teknikat e bindjes dhe logjika argumentuese.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>

        <Separator className="my-10" />

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Orari i Takimeve</h2>
          <div className="bg-red-20 p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Takimet e Rregullta:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-black-600">⏰</span> 
                    E Martë: Pas mesimit (Formimi dhe Diskutime)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">⏰</span> 
                    E Enjte: Pas mesimit (Debate dhe Feedback)
                  </li>
                </ul>
              </div>
              <div>
                
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *Të gjitha takimet zhvillohen në ambientet e shkollës pas përfundimit të mësimeve
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Ekipi Drejtues</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
             </div>
           
           
             <div className="text-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-blue-600">👩‍🎓</div>
              </div>
              <h3 className="font-semibold text-lg"> Joana Katrroshi</h3>
              <p className="text-gray-600">Kryetare e Klubit</p>
            </div>
            <div className="text-center">
              
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Bëhu Pjesë e Klubit Tonë!</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nëse je i interesuar të zhvillosh aftësitë e të folurit publik, të përmirësosh mendimin kritik dhe të përfaqësosh shkollën në gara prestigjioze, eja dhe bëhu pjesë e Klubit të Debatit!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Regjistrohu Tani
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
              Na Kontakto
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

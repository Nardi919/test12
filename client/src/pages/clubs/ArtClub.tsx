
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";
import { ClubNavigation } from "../../components/ClubNavigation";
export default function ArtClub() {
  // Projektet e klubit të artit
  const artProjects = [
    {
      title: "Ekspozita Vjetore",
      description: "Ekspozita vjetore në ambientet e shkollës duke shfaqur punimet më të mira të anëtarëve të klubit.",
      image: "https://images.unsplash.com/photo-1594047944767-2461d2e2518a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      
    },
    {
      title: "Pikturë Murale",
      description: "Projekt në grup për të zbukuruar muret e shkollës me piktura murale artistike.",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      
    },
    {
      title: "Studim Natyror",
      description: "Ese vizuale dhe vizatime të natyrës shqiptare, me ekspedita artistike në parqet e qytetit.",
      image: "https://images.unsplash.com/photo-1551722891-881307473e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      
    },
  ];

  // Teknikat e artit që mësohen
  const artTechniques = [
    { name: "Pikturë me Akuarel", icon: "🖌️" },
    { name: "Vizatim me Laps Karboni", icon: "✏️" },
    { name: "Pikturë me Akril", icon: "🎨" },
    { name: "Art Digjital", icon: "💻" },
    { name: "Kolazh Kreativ", icon: "✂️" },
    { name: "Stampim", icon: "🖼️" },
    { name: "Kaligafi", icon: "🖋️" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Navigimi i Klubeve */}
        <ClubNavigation />
        
        {/* Seksioni i Kokës */}
        <div className="text-center">
          <Badge className="mb-4 px-3 py-1 text-sm bg-gray-10 text-white">Klub Aktiv</Badge>
          <h1 className="text-4xl font-bold mb-3">Klubi i Artit dhe Zejeve</h1>
          <p className="text-lg text-black-800 max-w-3xl mx-auto">
            Një hapësirë ku kreativiteti lulëzon dhe talentet e reja shprehin ndjenjat përmes ngjyrave, formave dhe vizioneve artistike
          </p>
        </div>

        {/* Seksioni Hyrës */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Studio e artit me materiale pikture dhe skulpture" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Rreth Klubit</h2>
            <p className="text-gray-700">
              Klubi i Artit dhe Zejeve i Gjimnazit "Abdulla Keta" është një komunitet i pasionuar artistësh 
              të rinj që bashkohen për të eksploruar forma të ndryshme të shprehjes krijuese. Klubi është një vatër të krijimtarisë dhe eksperimentimit artistik.
            </p>
            <p className="text-gray-700">
              Anëtarët e klubit kanë mundësinë të punojnë me një shumëllojshmëri mediash dhe teknikash artistike, 
              nga piktura dhe vizatimi tradicional, deri tek format bashkëkohore si arti digjital dhe fotografimi kreativ.
            </p>
            <div className="pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Shiko Galerinë e Punimeve
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Seksioni i Aktiviteteve */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Çfarë Ofrojmë</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Arte Vizuale</h3>
                <p className="text-gray-700">
                  Mëso teknika të ndryshme vizatimi dhe pikture nën udhëheqjen e mësuesve me përvojë. 
                  Eksploro nga skicat me laps deri tek pikturat komplekse me akuarel dhe akril.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🗿</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Skulpturë & Zeje</h3>
                <p className="text-gray-700">
                  Krijo forma tredimensionale nga materialet e ndryshme. Punohet me argjilë, dru, dhe materiale 
                  ricikluese për të krijuar vepra unike artistike dhe objekte të dobishme.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Fotografi & Media</h3>
                <p className="text-gray-700">
                  Mëso bazat e fotografisë artistike dhe përpunimit të imazhit. Dokumentojmë ngjarjet shkollore 
                  dhe krijojmë portrete, peizazhe dhe fotografi konceptuale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seksioni i Teknikave */}
        <div className="bg-black-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Teknikat e Artit që Mësojmë</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artTechniques.map((technique, index) => (
              <div key={index} className="bg-blue p-4 rounded-lg shadow flex items-center">
                <span className="text-3xl mr-3">{technique.icon}</span>
                <span className="font-medium">{technique.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seksioni i Projekteve */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Projektet Tona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {artProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="text-sm text-purple-600 font-medium"></span>
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Orari i Takimeve */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-center">Orari i Takimeve (Pas Shkollës)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">Takimet e Rregullta:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">⏰</span> 
                  E Hënë: 16:30 - 18:00 (Vizatim dhe Pikturë)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">⏰</span> 
                  E Mërkurë: 16:30 - 18:00 (Skulpturë dhe Zeje)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Takime Shtesë:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">⏰</span> 
                  E Premte: 15:00 - 17:00 (Fotografi dhe Projekte Speciale)
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-4 text-center font-medium">
            *Të gjitha takimet mbahen në Studion e Artit në katin e dytë të shkollës
          </p>
        </div>

        {/* Ekipi Drejtues */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Udhëheqësit Tanë</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🏫</span>
              </div>
              <h3 className="font-semibold text-lg">Ms. Vetetima Prendi</h3>
              <p className="text-gray-700">Mësuesja pergjegjese e klubit</p>
            </div>
          </div>
        </div>

        {/* Thirrje për Veprim */}
        <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Liro Krijimtarinë Tënde!</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Nëse ke pasion për artin në çdo formë të tij, nga vizatimi dhe piktura deri tek fotografia dhe skulptura, 
            Klubi i Artit është vendi perfekt për të zhvilluar talentet e tua.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">
              Regjistrohu në Klub
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-purple-700">
              Shiko Punime të Kaluara
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

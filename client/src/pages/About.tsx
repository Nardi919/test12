import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="https://i.imgur.com/57SoCEx.png" 
            alt="School Building" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900"></div>
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              Gjimnazi ynë
            </h1>
            <div className="w-32 h-1 bg-[#26a69a] mx-auto rounded-full"></div>
            <em className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light">
              Ndërtojmë të ardhmen përmes dijes dhe inovacionit
            </em>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-24 space-y-40">
        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Historia Jonë</h2>
              <div className="h-1 w-24 bg-[#26a69a] rounded-full"></div>
            </div>
            <div className="space-y-6 text-gray-300 text-xl leading-relaxed">
              <p>
                Që nga themelimi në vitin 1999, Gjimnazi "Abdulla Keta" ka qenë një institucion arsimor 
                udhëheqës në Shqipëri. I emëruar në nder të patriotit dhe arsimtarit të shquar shqiptar 
                Abdulla Keta, shkolla jonë ka një histori të pasur në përsosmëri akademike dhe kontribut shoqëror.
              </p>
              <p>
                Me një traditë të shkëlqyer në arsimin e mesëm, shkolla jonë dallohet për:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Stafin akademik të përbërë nga mësues me përvojë dhe kualifikime të larta</li>
                <li>Aktivitetet e shumta jashtëshkollore dhe klubet e ndryshme</li>
                <li>Laboratorët modernë të shkencave natyrore dhe informatikës</li>
                <li>Biblioteka e pasur me materiale në format dixhital dhe fizik</li>
                <li>Programet inovative që kombinojnë teorinë me praktikën</li>
              </ul>
              <p>
                Nëpërmjet viteve, shkolla jonë ka formuar një komunitet të fortë të nxënësve, 
                prindërve dhe stafit, duke u bërë një nga institucionet më të respektuara arsimore në vend.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-[#26a69a] transition-all duration-100"
              >
                <div className="text-5xl font-bold text-[#26a69a] mb-3">26</div>
                <div className="text-gray-300 text-lg">Vite Eksperiencë</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-[#26a69a] transition-all duration-100"
              >
                <div className="text-5xl font-bold text-[#26a69a] mb-3">1000+</div>
                <div className="text-gray-300 text-lg">Studentë të Diplomuar</div>              
              </motion.div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group mt-12"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/57SoCEx.png" 
                  alt="School Building" 
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                  alt="School Activities" 
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-[#26a69a] transform translate-x-6 translate-y-6 -z-10 opacity-50"></div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-[#26a69a] opacity-5 -skew-y-3 rounded-3xl"></div>
          <div className="relative">
            <SectionHeading 
              title="Misioni dhe Vizioni" 
              subtitle="Udhërrëfyesi ynë drejt së ardhmes"
            />
            <div className="grid md:grid-cols-2 gap-10 mt-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 hover:border-[#26a69a] transition-all duration-300"
              >
                <div className="text-6xl mb-8">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-6">Misioni Ynë</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Të ofrojmë arsim cilësor që përgatit nxënësit për të qenë qytetarë të suksesshëm dhe 
                  kontribues në shoqëri, duke nxitur mendimin kritik dhe kreativitetin në një mjedis që 
                  vlerëson diversitetin.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 hover:border-[#26a69a] transition-all duration-300"
              >
                <div className="text-6xl mb-8">🚀</div>
                <h3 className="text-3xl font-bold text-white mb-6">Vizioni Ynë</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Të jemi institucioni udhëheqës në arsimin parauniversitar, i njohur për standardet e larta 
                  akademike dhe inovacionin në mësimdhënie, duke përgatitur liderët e së ardhmes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <SectionHeading 
            title="Vlerat Tona" 
            subtitle="Parimet që na udhëheqin"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: "🎯",
                title: "Ekselenca",
                description: "Synojmë përsosmërinë në çdo aspekt të edukimit"
              },
              {
                icon: "🤝",
                title: "Integriteti",
                description: "Veprojmë me ndershmëri dhe përgjegjësi"
              },
              {
                icon: "🌟",
                title: "Inovacioni",
                description: "Përqafojmë ndryshimin dhe teknologjinë moderne"
              },
              {
                icon: "🌍",
                title: "Diversiteti",
                description: "Vlerësojmë dhe respektojmë çdo individ"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 hover:border-[#26a69a] transition-all duration-300"
              >
                <div className="text-6xl mb-8">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staff */}
        <div>
          <SectionHeading 
            title="Stafi Ynë" 
            subtitle="Ekipi që bën diferencën"
          />
          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {[
              {
                role: "Drejtoresha",
                degree: "Ardita Gjini",
                description: "Me një eksperiencë të gjatë në fushën e arsimit dhe një vizion të qartë për të ardhmen.",
                color: "#26a69a"
              },
              {
                role: "Zv. Drejtoresha",
                degree: "Daniela Shehu",
                description: "Specializuar në kurrikulën moderne dhe metodologjitë inovative të mësimdhënies.",
                color: "#7e57c2"
              },
              {
                role: "Dea",
                degree: "Presidente",
                description: "Figura motivuese dhe zëri i nxënësve, e përkushtuar pnë ndërtimin e një mjedisi më bashkëpunues nxënësit.",
                color: "#4CAF50"
              }
            ].map((staff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden group border border-gray-700 hover:border-[#26a69a] transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={`https://placehold.co/400x400/${staff.color.substring(1)}/ffffff?text=${staff.role}`}
                    alt={staff.role}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-bold text-white mb-3">{staff.role}</h4>
                  <p className="text-[#26a69a] text-lg mb-4">{staff.degree}</p>
                  <p className="text-gray-400 text-lg">
                    {staff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
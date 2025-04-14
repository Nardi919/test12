
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Pisa2025() {
  const objectives = [
    { title: "Matematikë", icon: "📐", desc: "Vlerësimi i aftësive analitike dhe zgjidhja e problemeve" },
    { title: "Shkencë", icon: "🔬", desc: "Matja e kompetencave shkencore dhe metodologjike" },
    { title: "Lexim", icon: "📚", desc: "Vlerësimi i aftësive të të kuptuarit dhe analizës" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              PISA 2025
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-teal-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4 }}
            />
          </div>

          {/* Main Content */}
          <motion.div 
            className="bg-gray-800 rounded-2xl p-8 shadow-xl mb-12 border border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              PISA 2025 është një vlerësim ndërkombëtar që mat aftësitë e nxënësve
              15-vjeçarë në matematikë, shkencë dhe lexim. Me keqardhje të thellë njoftojmë se gjimnazi "Abdulla Keta" nuk u përzgjodh për të marrë pjesë në testimin 
              ndërkombëtar PISA këtë vit.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Pavarësisht kësaj, ne jemi të vendosur të vazhdojmë të investojmë në cilësinë e arsimit
              dhe përgatitjen e nxënësve tanë për sfida ndërkombëtare në të ardhmen.
            </p>
          </motion.div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{obj.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{obj.title}</h3>
                    <p className="text-gray-400">{obj.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Preparation Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Përgatitja për PISA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-400">Mbështetja jonë përfshin:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-500">✓</span>
                    <span>Seanca të dedikuara përgatitore</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-500">✓</span>
                    <span>Materiale studimi dhe ushtrime praktike</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-500">✓</span>
                    <span>Mbështetje individuale nga mësuesit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-500">✓</span>
                    <span>Simulime të testit PISA</span>
                  </li>
                </ul>
              </div>
              <div>
                <Card className="bg-gray-750 border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Përfitimet</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Zhvillimi i aftësive analitike</li>
                      <li>• Përmirësimi i të menduarit kritik</li>
                      <li>• Rritja e vetëbesimit akademik</li>
                      <li>• Përgatitje për sfidat e ardhshme</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

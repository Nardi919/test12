
import { motion } from "framer-motion";

export default function ScienceClub() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Klubi i Shkencës</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Klubi i Shkencës është një mundësi unike për nxënësit që janë të
            apasionuar pas shkencës për të eksploruar dhe zhvilluar projektet e tyre.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Aktivitetet</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Eksperimente laboratorike</li>
            <li>Projekte kërkimore</li>
            <li>Vizita në institucione shkencore</li>
            <li>Konkurse dhe olimpiada</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

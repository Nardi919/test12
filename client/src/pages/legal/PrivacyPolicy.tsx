
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Politika e Privatësisë</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Ne marrim seriozisht privatësinë tuaj dhe jemi të angazhuar për të mbrojtur të dhënat tuaja personale.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Mbledhja e të Dhënave</h2>
          <p>Ne mbledhim vetëm të dhënat e nevojshme për të ofruar shërbimet tona arsimore.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Përdorimi i të Dhënave</h2>
          <p>Të dhënat tuaja përdoren vetëm për qëllime arsimore dhe administrative.</p>
        </div>
      </motion.div>
    </div>
  );
}

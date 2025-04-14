
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Kushtet e Përdorimit</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Duke përdorur faqen tonë, ju pranoni të respektoni këto kushte përdorimi.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Përgjegjësitë</h2>
          <p>Përdoruesit duhet të respektojnë rregullat e shkollës dhe të përdorin platformën në mënyrë të përshtatshme.</p>
        </div>
      </motion.div>
    </div>
  );
}

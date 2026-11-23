import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  return (
    <motion.main
      className="min-h-screen bg-slate-950 pt-16 selection:bg-teal-400 selection:text-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <ServicesSection />
    </motion.main>
  );
}
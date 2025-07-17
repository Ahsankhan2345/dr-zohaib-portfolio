import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, onClose, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-5 right-5 z-[9999] bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-base font-medium">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-white hover:text-gray-200"
          >
            ✖
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

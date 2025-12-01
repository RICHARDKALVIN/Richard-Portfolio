import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPopup({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="bg-card p-8 rounded-2xl border border-primary/30 shadow-2xl text-center max-w-sm"
          >
            <FaCheckCircle className="text-primary text-5xl mx-auto mb-4" />

            <h3 className="text-2xl font-bold text-primary mb-2">
              Message Sent!
            </h3>

            <p className="text-gray-300 mb-6">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

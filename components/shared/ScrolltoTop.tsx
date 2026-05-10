import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  scrollToTop: () => void;
  isInView: boolean;
}

export default function ScrollToTop({
  scrollToTop,
  isInView,
}: ScrollToTopProps) {
  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="absolute left-1/2 -top-6 z-[9999] flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30 transition-shadow hover:shadow-2xl hover:shadow-blue-500/50"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
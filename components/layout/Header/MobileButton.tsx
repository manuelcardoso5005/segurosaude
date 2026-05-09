import {motion, AnimatePresence} from 'framer-motion';
import { Menu, X} from 'lucide-react';

interface MobileButtonProps {
    menuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
  }

export default function MobileButton ({menuOpen, setMenuOpen}:MobileButtonProps) {
    return (
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{scale: 0.9}}
          className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:hidden"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{rotate: -90, opacity: 0}}
                animate={{rotate: 0, opacity: 1}}
                exit={{rotate: 90, opacity: 0}}
                transition={{duration: 0.2}}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{rotate: 90, opacity: 0}}
                animate={{rotate: 0, opacity: 1}}
                exit={{rotate: -90, opacity: 0}}
                transition={{duration: 0.2}}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
    )
}
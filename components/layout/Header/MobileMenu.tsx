import {motion, AnimatePresence} from 'framer-motion';
import {MobileMenuProps} from '@/types/HeaderTypes';
import {Link} from '@/i18n/navigation';

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  navItems,
}: MobileMenuProps) {
    return (
        <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            className="overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col px-4 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: i * 0.1}}
                >
                  <Link
                    href={item.href}
                    className="group relative overflow-hidden rounded-xl px-4 py-3 text-white/80 transition hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/5"
                      initial={{x: '-100%'}}
                      whileHover={{x: 0}}
                      transition={{duration: 0.3}}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: navItems.length * 0.1}}
              >
                <Link href="/planos" onClick={() => setMenuOpen(false)}>
                  <motion.div
                    whileTap={{scale: 0.96}}
                    className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/30"
                  >
                    Começar agora
                  </motion.div>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    )
}
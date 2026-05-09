import {motion} from 'framer-motion';
import {Link} from '@/i18n/navigation';

export default function DesktopCTA () {
    return (
        <div className="hidden md:flex">
        <Link href="/planos">
          <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.96}}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/30"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{x: '100%'}}
              whileHover={{x: 0}}
              transition={{duration: 0.3}}
            />
            <span className="relative z-10">Começar agora</span>
          </motion.div>
        </Link>
      </div>
    )
}
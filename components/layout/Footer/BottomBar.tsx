
import {motion} from 'framer-motion';
import {isInView} from "@/types/FooterTypes"
import { Link } from '@/i18n/navigation';

export default function BottomBar ({isInView}:isInView) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={isInView ? {opacity: 1} : {}}
        transition={{duration: 0.5, delay: 0.6}}
        className="border-t border-white/10 py-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SeguroSaúde. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <Link href="/termos" className="transition-colors hover:text-blue-400">
              Termos
            </Link>
            <Link href="/privacidade" className="transition-colors hover:text-blue-400">
              Privacidade
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-blue-400">
              Cookies
            </Link>
            <Link href="/acessibilidade" className="transition-colors hover:text-blue-400">
              Acessibilidade
            </Link>
          </div>
        </div>
      </motion.div>

    )
}
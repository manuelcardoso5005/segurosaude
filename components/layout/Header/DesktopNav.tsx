import {motion} from 'framer-motion';
import {Link} from '@/i18n/navigation';
import {DesktopNavProps} from "@/types/HeaderTypes"
import { useTranslations } from 'next-intl';

export default function DesktopNav ({ navItems }: DesktopNavProps) {
    const t = useTranslations('HomePage');
    return (
        <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: i * 0.1}}
          >
            <Link
              href={item.href}
              className="group relative text-sm font-medium text-white/70 transition hover:text-white"
            >
              {t(item.label)}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500"
                whileHover={{width: '100%'}}
                transition={{duration: 0.3}}
              />
            </Link>
          </motion.div>
        ))}
      </nav>
    )
}
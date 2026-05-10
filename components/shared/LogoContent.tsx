import {motion} from 'framer-motion';
import {Link} from '@/i18n/navigation';
import {ShieldPlus} from 'lucide-react';

interface LogoContentProps {
    title:string;
    subtitle:string;
}

export default function LogoContent ({title, subtitle}:LogoContentProps) {
    return (
        <Link href="/" className="group flex items-center gap-3">
            <motion.div
                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                transition={{duration: 0.5}}
                className="group overflow-hidden flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
            >
                <img src="https://i.ibb.co/G4vpK18V/Chat-GPT-Image-9-de-mai-de-2026-23-02-17.png" alt="" />
            </motion.div>

            <div className="flex flex-col">
                <motion.span
                    className="text-lg font-bold tracking-tight text-white"
                    whileHover={{scale: 1.05}}
                >
                    {title}
                </motion.span>
                <motion.span
                    className="text-xs text-blue-200/60"
                    initial={{opacity: 0, x: -10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.2}}
                >
                    {subtitle}
                </motion.span>
            </div>
      </Link>
    )
}
'use client';

import {motion} from 'framer-motion';
import {MoveRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {
  HeroButtonsProps,
  HeroButtonProps
} from '@/types/HomeContent';

export default function HeroButtons({getStart, seeMore}:HeroButtonsProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8, delay: 0.6}}
    >
      
      {/* Botão 1 - Link FORA do button */}
      <HeroButton
        href="/planos"
        variant={true}
      >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
            initial={{x: '100%'}}
            whileHover={{x: 0}}
            transition={{duration: 0.3}}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
          {getStart}
            <motion.span
              animate={{x: [0, 5, 0]}}
              transition={{duration: 1.5, repeat: Infinity}}
            >
              <MoveRight className="h-5 w-5" />
            </motion.span>
          </span>
      </HeroButton>

      {/* Botão 2 - Link FORA do button */}
      <Link href="/sobre"> 
        <motion.button
          className="group w-full rounded-full border-2 border-white/20 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 cursor-pointer"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          <span className="flex items-center justify-center gap-2">
            {seeMore}
            <motion.span
              className="inline-block"
              animate={{x: [0, 3, 0]}}
              transition={{duration: 1.5, repeat: Infinity}}
            >
              <MoveRight className="h-5 w-5" />
            </motion.span>
          </span>
        </motion.button>
      </Link>
    </motion.div>
  );
}

export function HeroButton ({href, variant, children}:HeroButtonProps) {
  const isPrimary = variant;
  return (
    <Link href={href}>
        <motion.button
          className={`ggroup relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-4 font-semibold transition-all ${
            isPrimary
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/50'
              : 'border-2 border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10' 
          }`}
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          {children}
        </motion.button>
    </Link>  
  )
}
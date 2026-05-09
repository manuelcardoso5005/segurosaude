'use client';

import {motion} from 'framer-motion';
import {MoveRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';

interface HeroButtonsProp {
  getStart:string;
  seeMore:string;
}

export default function HeroButtons({getStart, seeMore}:HeroButtonsProp) {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8, delay: 0.6}}
    >
      {/* Botão 1 - Link FORA do button */}
      <Link href="/planos">
        <motion.button
          className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 font-semibold text-white shadow-2xl shadow-blue-500/50 cursor-pointer"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
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
        </motion.button>
      </Link>

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
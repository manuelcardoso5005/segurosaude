'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Sparkles, ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/navigation';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 py-24 sm:py-32"
    >
      {/* Background animado */}
      <motion.div
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{duration: 20, repeat: Infinity, ease: 'linear'}}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={isInView ? {opacity: 1, scale: 1} : {}}
          transition={{type: 'spring', stiffness: 200, damping: 15}}
          className="mx-auto inline-flex"
        >
          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.2}}
          className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Pronto para cuidar da sua saúde?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.4}}
          className="mx-auto mt-6 max-w-2xl text-xl text-white/90"
        >
          Junte-se a milhares de famílias que já confiam no SeguroSaúde. Comece hoje mesmo e tenha proteção completa em minutos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.6}}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/planos">
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-blue-600 shadow-2xl transition-shadow hover:shadow-white/50"
            >
              Ver planos disponíveis
              <motion.span
                animate={{x: [0, 5, 0]}}
                transition={{duration: 1.5, repeat: Infinity}}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </Link>

          <Link href="/contacto">
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              Falar com especialista
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {}}
          transition={{duration: 0.6, delay: 0.8}}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            ✓ Sem fidelidade
          </div>
          <div className="flex items-center gap-2">
            ✓ Cancelamento gratuito
          </div>
          <div className="flex items-center gap-2">
            ✓ Suporte 24/7
          </div>
        </motion.div>
      </div>
    </section>
  );
}
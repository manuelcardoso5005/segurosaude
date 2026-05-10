'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Check} from 'lucide-react';

const benefits = [
  'Sem carências para emergências',
  'Reembolso em até 48 horas',
  'Livre escolha de médicos',
  'Cobertura internacional',
  'Telemedicina ilimitada',
  'Check-ups anuais gratuitos',
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 py-24 sm:py-32">
      {/* Background animado */}
      <motion.div
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{duration: 8, repeat: Infinity}}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{duration: 10, repeat: Infinity}}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Esquerda - Conteúdo */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.6}}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Por que mais de{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                50 mil famílias
              </span>{' '}
              confiam em nós?
            </h2>
            <p className="mt-6 text-lg text-blue-100/80">
              Oferecemos muito mais do que um plano de saúde. Oferecemos tranquilidade, confiança e cuidado genuíno.
            </p>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{opacity: 0, x: -20}}
                  animate={isInView ? {opacity: 1, x: 0} : {}}
                  transition={{duration: 0.5, delay: i * 0.1}}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-lg text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-blue-950 shadow-xl transition-shadow hover:shadow-2xl"
            >
              Ver todos os benefícios
            </motion.button>
          </motion.div>

          {/* Direita - Imagem/Card */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.6, delay: 0.2}}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              {/* Aqui você pode adicionar uma imagem real */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
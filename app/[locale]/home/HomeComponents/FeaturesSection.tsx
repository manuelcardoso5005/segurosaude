'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {features} from "@/data/features"



export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Tudo que você precisa em{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              um só lugar
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tecnologia de ponta combinada com cuidado humano para oferecer a melhor experiência em saúde
          </p>
        </motion.div>

        {/* Grid de features */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: i * 0.1}}
              whileHover={{y: -8, scale: 1.02}}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/50 transition-all hover:shadow-2xl hover:shadow-gray-300/50"
            >
              {/* Gradiente animado no hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-5`}
              />

              {/* Ícone */}
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg`}
              >
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Conteúdo */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>

              {/* Seta decorativa */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600"
                initial={{x: 0}}
                whileHover={{x: 5}}
              >
                Saiba mais →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Check, Star, Zap} from 'lucide-react';
import {Link} from '@/i18n/navigation';
import {plans} from "@/data/plans"

export default function PlansPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Escolha o plano{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              perfeito para você
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Todos os planos incluem nossa garantia de satisfação de 30 dias
          </p>
        </motion.div>

        {/* Grid de planos */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: i * 0.15}}
              whileHover={{y: -8, scale: 1.02}}
              className={`relative overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-xl transition-all ${
                plan.popular
                  ? 'border-purple-500 shadow-purple-500/20'
                  : 'border-gray-200 shadow-gray-200/50'
              }`}
            >
              {/* Badge "Popular" */}
              {plan.popular && (
                <div className="absolute right-6 top-6">
                  <motion.div
                    animate={{rotate: [0, 5, -5, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg"
                  >
                    <Star className="h-3.5 w-3.5 fill-current" />
                    MAIS POPULAR
                  </motion.div>
                </div>
              )}

              {/* Ícone do plano */}
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${plan.color} p-4 text-white`}>
                <Zap className="h-6 w-6" />
              </div>

              {/* Nome e descrição */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

              {/* Preço */}
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600">Kz/mês</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Sem taxas de adesão</p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    initial={{opacity: 0, x: -10}}
                    animate={isInView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.3, delay: i * 0.15 + j * 0.05}}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.color}`}
                    >
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/planos">
                <motion.button
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className={`mt-8 w-full rounded-full py-4 font-semibold text-white shadow-lg transition-shadow ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} shadow-purple-500/30 hover:shadow-purple-500/50`
                      : 'bg-gray-900 hover:shadow-xl'
                  }`}
                >
                  {plan.popular ? 'Começar agora' : 'Escolher plano'}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.6}}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Precisa de um plano personalizado?{' '}
            <Link href="/contacto" className="font-semibold text-blue-600 hover:text-blue-700">
              Fale com nossos especialistas →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
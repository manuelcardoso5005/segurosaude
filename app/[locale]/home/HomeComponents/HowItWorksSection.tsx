'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {steps} from "@/data/steps"

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section ref={ref} className="relative bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Simples assim
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Em apenas 4 passos você já está protegido
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: i * 0.15}}
              className="relative"
            >
              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 lg:block" />
              )}

              <div className="relative rounded-2xl bg-white p-8 text-center shadow-lg">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mx-auto mt-8 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
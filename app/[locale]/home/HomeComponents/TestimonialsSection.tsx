'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {Star, Quote, ChevronLeft, ChevronRight} from 'lucide-react';
import {testimonials} from "@/data/testimonials"


export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 py-24 sm:py-32"
    >
      {/* Background animado */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            O que nossos clientes{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              dizem sobre nós
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100/80">
            Mais de 50 mil famílias confiam em nosso serviço
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative mt-16">
          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              animate={{x: `-${currentIndex * 100}%`}}
              transition={{type: 'spring', stiffness: 300, damping: 30}}
              className="flex"
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={isInView ? {opacity: 1, scale: 1} : {}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="mx-auto max-w-3xl"
                  >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                      {/* Quote icon */}
                      <div className="absolute right-8 top-8 opacity-10">
                        <Quote className="h-24 w-24 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="relative mt-6 text-xl leading-relaxed text-white">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="mt-8 flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-3xl">
                          {testimonial.image}
                        </div>
                        <div>
                          <div className="font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-blue-200/60">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={prev}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
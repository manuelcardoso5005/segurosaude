
'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {Plus, Minus} from 'lucide-react';
import {faqs} from "@/data/FAQ"
import { Link } from '@/i18n/navigation';

interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
  description?: string;
}

export default function FAQSection({ faqs, description }: FAQSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative bg-gray-50 py-24 sm:py-32 elative z-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            {description}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-4 ">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: i * 0.1}}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="cursor-pointer w-full rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{rotate: openIndex === i ? 180 : 0}}
                    transition={{duration: 0.3}}
                    className="flex-shrink-0"
                  >
                    {openIndex === i ? (
                      <Minus className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Plus className="h-6 w-6 text-gray-400" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.3}}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.8}}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Ainda tem dúvidas?{' '}
            <Link
              href="/contacto"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Fale com nosso suporte →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
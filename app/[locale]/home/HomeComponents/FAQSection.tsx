'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {Plus, Minus} from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona o período de carência?',
    answer:
      'Não temos carência para consultas e emergências. Para procedimentos eletivos, o período varia de 24h a 180 dias dependendo do tipo de procedimento. Internamentos têm carência de 24h.',
  },
  {
    question: 'Posso incluir dependentes no meu plano?',
    answer:
      'Sim! Você pode adicionar cônjuge, filhos até 24 anos (ou sem limite de idade se forem estudantes ou portadores de deficiência) e pais. Cada dependente tem um valor adicional que varia conforme a faixa etária.',
  },
  {
    question: 'O que está incluído na telemedicina?',
    answer:
      'Nossa telemedicina é ilimitada e inclui consultas com clínicos gerais, pediatras, psicólogos e nutricionistas. Atendimento 24/7 por vídeo, com prescrição digital e orientações médicas completas.',
  },
  {
    question: 'Como funciona o reembolso?',
    answer:
      'Se você usar um médico ou hospital fora da nossa rede, pode solicitar reembolso em até 30 dias. Analisamos em até 48h e creditamos o valor conforme tabela da ANS. O processo é 100% digital pelo app.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer:
      'Sim, não temos fidelidade. Você pode cancelar quando quiser sem multas ou taxas. Recomendamos um aviso de 30 dias para não perder a cobertura antes de migrar para outro plano.',
  },
  {
    question: 'Qual a cobertura geográfica?',
    answer:
      'Nosso plano Essencial cobre todo território nacional. Os planos Premium e Elite incluem cobertura internacional em mais de 150 países, ideal para quem viaja a negócios ou lazer.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tire suas dúvidas sobre nossos planos e serviços
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: i * 0.1}}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all hover:border-blue-300 hover:shadow-lg"
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
            <a
              href="/contacto"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Fale com nosso suporte →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
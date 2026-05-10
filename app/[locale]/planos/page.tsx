'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Shield,
  Users,
  Heart,
  Stethoscope,
  Phone,
  Clock,
  Award,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import {faqs} from "@/data/plansPage"

const Planos = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const plans = [
    {
      name: 'Básico',
      description: 'Ideal para quem está começando',
      price: billingCycle === 'monthly' ? 299 : 3228,
      originalPrice: billingCycle === 'annual' ? 3588 : null,
      color: 'from-blue-400 to-cyan-400',
      icon: Shield,
      popular: false,
      features: [
        'Consultas ilimitadas',
        'Telemedicina 24/7',
        'Exames básicos',
        'Rede credenciada',
        'Suporte por chat'
      ]
    },
    {
      name: 'Premium',
      description: 'O mais escolhido pelas famílias',
      price: billingCycle === 'monthly' ? 599 : 6468,
      originalPrice: billingCycle === 'annual' ? 7188 : null,
      color: 'from-purple-500 to-pink-500',
      icon: Heart,
      popular: true,
      features: [
        'Tudo do Básico',
        'Consultas com especialistas',
        'Exames completos',
        'Check-up anual gratuito',
        'Desconto em farmácias',
        'Atendimento prioritário',
        'App mobile exclusivo'
      ]
    },
    {
      name: 'Empresarial',
      description: 'Soluções para sua empresa',
      price: billingCycle === 'monthly' ? 999 : 10788,
      originalPrice: billingCycle === 'annual' ? 11988 : null,
      color: 'from-slate-400 to-slate-600',
      icon: Users,
      popular: false,
      features: [
        'Tudo do Premium',
        'Gestão de colaboradores',
        'Relatórios personalizados',
        'Account manager dedicado',
        'Treinamentos de saúde',
        'Descontos corporativos'
      ]
    }
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: 'Escolha seu médico',
      description: 'Acesso a mais de 10 mil profissionais credenciados em todo país'
    },
    {
      icon: Phone,
      title: 'Faça sua consulta online',
      description: 'Atendimento por vídeo, chat ou telefone quando você precisar'
    },
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Suporte médico disponível todos os dias, a qualquer hora'
    },
    {
      icon: Award,
      title: 'Rede credenciada',
      description: 'Hospitais, clínicas e laboratórios de primeira linha'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-48 pb-48">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-white">Escolha o plano perfeito para você</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Escolha o plano <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">perfeito para você</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Cuidado com a saúde que cabe no seu bolso. Sem carência, sem burocracia.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-white hover:text-slate-200'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full transition-all relative ${
                  billingCycle === 'annual'
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-white hover:text-slate-200'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-400 text-slate-900 text-xs px-2 py-0.5 rounded-full font-semibold">
                  -10%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 -mt-20 z-20 bg-white">
        <div className="container mx-auto px-4 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                    plan.popular ? 'md:scale-105 border-2 border-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                      Mais Popular
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon and Name */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-slate-900">
                          {plan.price.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-slate-600">Kz/{billingCycle === 'monthly' ? 'mês' : 'ano'}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="text-slate-500 line-through mt-1">
                          {plan.originalPrice.toLocaleString('pt-BR')} Kz/ano
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      Escolher {plan.name}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ - Perguntas frequentes */}
      <FAQSection
        faqs={faqs}
        description='Tire suas dúvidas sobre nossos planos e serviços'
      />  

      {/* CTA Section */}
      <CTASection />

    </div>
  );
};

export default Planos;
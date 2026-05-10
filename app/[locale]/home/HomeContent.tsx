'use client';

import {useTranslations} from 'next-intl';
import BadgeAnimation from './HeroSection/BadgeAnimation';
import HeroTitle from './HeroSection/HeroTitle';
import HeroSubtitle from './HeroSection/HeroSubtitle';
import HeroButtons from './HeroSection/HeroButtons';
import StatsSection from './HeroSection/StatsSection';
import ScrollIndicator from './HeroSection/ScrollIndicator';
import {BackgroundParallax} from '@/components/layout/BackgroundParallax';

// Novas seções
import FeaturesSection from './HomeComponents/FeaturesSection';
import BenefitsSection from './HomeComponents/BenefitsSection';
import HowItWorksSection from './HomeComponents/HowItWorksSection';
import TestimonialsSection from './HomeComponents/TestimonialsSection';
import PlansPreviewSection from './HomeComponents/PlansPreviewSection';
import FAQSection from './HomeComponents/FAQSection';
import CTASection from './HomeComponents/CTASection';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        {/* Background video, overlays, elementos decorativos... */}
        <BackgroundParallax> 
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <BadgeAnimation badgeText={t('badgeText')} />
            <HeroTitle title={t('title')} />
            <HeroSubtitle description={t('description')} />
            <HeroButtons getStart={t('plans')} seeMore={t('CTA.seeMore')} />
            <StatsSection
                activeClients="50K+"
                activeClientsValue={t('stats.activeClients')}
                satisfaction="98%"
                satisfactionValue={t('stats.satisfaction')}
                support="24/7"
                supportValue={t('stats.support')}
            />
            <ScrollIndicator />
            </div>
        </BackgroundParallax> 
      </section>

      {/* Features - O que oferecemos */}
      <FeaturesSection />

      {/* Benefits - Por que escolher */}
      <BenefitsSection />

      {/* How it Works - Como funciona */}
      <HowItWorksSection />

      {/* Plans Preview - Planos em destaque */}
      <PlansPreviewSection />

      {/* Testimonials - Depoimentos */}
      <TestimonialsSection />

      {/* FAQ - Perguntas frequentes */}
      <FAQSection />

      {/* CTA Final - Chamada para ação */}
      <CTASection />
      
    </>
  );
}
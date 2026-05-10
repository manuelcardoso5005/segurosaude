'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import ScrollToTop from '@/components/shared/ScrolltoTop'
import LogoContent from '@/components/shared/LogoContent';
import Description from "./Description"
import ContactInfo from "./ContactInfo"
import SocialLinks from "./SocialLinks"
import FooterLinks from "./FooterLinks"
import Newsletter from "./Newsletter"
import BottomBar from "./BottomBar"
import Certifications from "./Certifications"
import {footerLinks, socialLinks} from "./list-footer"

export default function Footer() {
  const t = useTranslations('HomePage');
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer ref={ref} className="relative z-50 bg-gray-950 text-gray-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Scroll to top button */}
      <ScrollToTop  
          scrollToTop={scrollToTop}
          isInView={isInView}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          {/* Brand column - spans 2 on large screens */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5}}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <LogoContent title={t('title')} subtitle={t('subtitle')} />

            {/* Description */}
            <Description />

            {/* Contact info */}
            <ContactInfo
              phone="+244999999999"
              email="contato@segurosaude.ao"
              address={`Rua da Missão, 123
            Luanda, Angola`}
            />

            {/* Social links */}
            <SocialLinks 
              socialLinks={socialLinks}
            />
          </motion.div>

          {/* Company links */}
          <FooterLinks
            title="Empresa"
            isInView={isInView}
            footerLinks={footerLinks}
            typeLink="company"
          />

          {/* Products links */}
          <FooterLinks
            title="Produtos"
            isInView={isInView}
            footerLinks={footerLinks}
            typeLink="products"
          />

          {/* Support links */}
          <FooterLinks
            title="Suporte"
            isInView={isInView}
            footerLinks={footerLinks}
            typeLink="support"
          />

          {/* Legal links */}          
          <FooterLinks
            title="Legal"
            isInView={isInView}
            footerLinks={footerLinks}
            typeLink="legal"
          />
        </div>

        {/* Newsletter section */}
        <Newsletter 
            isInView={isInView}
        />

        {/* Bottom bar */}
        <BottomBar 
            isInView={isInView}
        />

        {/* Certifications/Badges */}
        <Certifications 
            isInView={isInView}
        /> 
      </div>
    </footer>
  );
}
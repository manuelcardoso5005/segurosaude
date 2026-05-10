'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';

import {navItems} from './listNavMenu';
import LogoHeader from './LogoHeader';
import DesktopNav from './DesktopNav';
import MobileButton from './MobileButton';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{type: 'spring', stiffness: 100, damping: 20}}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo com animação */}
        <LogoHeader title={t('title')} subtitle={t('subtitle')} />

        {/* Desktop nav com animações */}
        <DesktopNav navItems={navItems} />

        {/* Desktop actions (Lang + CTA) */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Mobile button com animação */}
        <MobileButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Mobile menu com animações stagger */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
      />
    </motion.header>
  );
}
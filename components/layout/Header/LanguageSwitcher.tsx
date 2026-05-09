'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {Globe, Check} from 'lucide-react';
import {useState, useRef, useEffect} from 'react';
import {useRouter, usePathname} from '@/i18n/navigation';

interface LanguageSwitcherProps {
  currentLocale: string;
}

const languages = [
  {
    code: 'pt',
    label: 'Português',
    shortLabel: 'PT(AO)', // ✨ Versão curta para o botão
    flag: '🇦🇴',
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: '🇬🇧',
  },
];

export default function LanguageSwitcher({currentLocale}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, {locale});
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Botão trigger - versão compacta */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:px-4 sm:text-sm"
      >
        <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        
        {/* Mobile: só emoji */}
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        
        {/* Tablet: emoji + código */}
        <span className="hidden items-center gap-1.5 sm:flex lg:hidden">
          <span>{currentLanguage?.flag}</span>
          <span>{currentLanguage?.shortLabel}</span>
        </span>
        
        {/* Desktop: emoji + label completo */}
        <span className="hidden items-center gap-1.5 lg:flex">
          <span>{currentLanguage?.flag}</span>
          <span>{currentLanguage?.label}</span>
        </span>
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -10, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: -10, scale: 0.95}}
            transition={{duration: 0.2}}
            className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-xl"
          >
            <div className="p-2">
              {languages.map((lang, i) => (
                <motion.button
                  key={lang.code}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: i * 0.05}}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <motion.span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    initial={{opacity: 0}}
                    whileHover={{opacity: 1}}
                    transition={{duration: 0.2}}
                  />

                  <span className="relative z-10 text-lg">{lang.flag}</span>

                  <span className="relative z-10 flex-1 font-medium">
                    {lang.label}
                  </span>

                  {currentLocale === lang.code && (
                    <motion.span
                      initial={{scale: 0, rotate: -180}}
                      animate={{scale: 1, rotate: 0}}
                      className="relative z-10"
                    >
                      <Check className="h-4 w-4 text-green-400" />
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
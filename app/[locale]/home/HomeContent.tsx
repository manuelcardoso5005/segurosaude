'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'motion/react';
import HeroButtons from "./HeroButtons"
import StatsSection from "./StatsSection"

import  ScrollIndicator from "./ScrollIndicator"

export default function () {
    const t = useTranslations('HomePage');

    return (
        <>
            {/* Conteúdo principal */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
            
                {/* Badge animado */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="mb-8"
                >

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-2.5 backdrop-blur-md">
                    <motion.span
                    className="relative flex h-3 w-3"
                    animate={{scale: [1, 1.2, 1]}}
                    transition={{duration: 2, repeat: Infinity}}
                >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
                    </motion.span>
                    <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-sm font-semibold text-transparent">
                        {t('badgeText')}
                    </span>
                </div>
        </motion.div>

                {/* Título principal com animação letra por letra */}
                <motion.h1
                className="mb-6 text-6xl font-bold leading-tight sm:text-7xl lg:text-8xl"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
                >
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                    {t('title')}
                </span>
                </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-100/80 sm:text-xl"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
        >
          {t('description')}
        </motion.p>

        {/* CTAs com hover effects */}
        <HeroButtons
            getStart={t('CTA.startNow')}
            seeMore={t('CTA.seeMore')}
        />

        {/* Stats com animação de contagem */}
        <StatsSection 
            activeClients="50K+" 
            activeClientsValue={t('stats.activeClients')}
            satisfaction="98%"
            satisfactionValue={t('stats.satisfaction')}
            support="24/7"
            supportValue={t('stats.support')}
        />

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>
    </>
    )
}
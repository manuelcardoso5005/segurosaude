'use client';

import {useTranslations} from 'next-intl';
import BadgeAnimation from './BadgeAnimation';
import HeroTitle from "./HeroTitle"
import HeroSubtitle from "./HeroSubtitle"
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
                <BadgeAnimation
                    badgeText={t('badgeText')}
                />

                {/* Título principal com animação letra por letra */}
                <HeroTitle
                    title={t('title')}
                />

                {/* Subtítulo */}
                <HeroSubtitle
                    description={t('description')}
                />

                {/* CTAs com hover effects */}
                <HeroButtons
                    getStart={t('plans')}
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
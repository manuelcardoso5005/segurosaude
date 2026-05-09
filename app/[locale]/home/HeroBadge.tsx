'use client';

import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';

export function HeroBadge() {
  const t = useTranslations('HomePage');

  return (
    <motion.div
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      className="mb-8"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-2.5">
        <span className="text-sm font-semibold text-blue-100">
          {t('badgeText')}
        </span>
      </div>
    </motion.div>
  );
}
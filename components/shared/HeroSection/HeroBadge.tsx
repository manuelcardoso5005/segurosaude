import { motion } from 'motion/react';
import { ReactNode } from 'react';

type HeroBadgeProps = {
  icon: ReactNode;
  text: string;
};

export default function HeroBadge({ icon, text }: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
    >
      {icon}
      <span className="text-sm text-white">{text}</span>
    </motion.div>
  );
}
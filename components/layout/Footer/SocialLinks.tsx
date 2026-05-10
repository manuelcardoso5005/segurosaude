import { motion } from 'framer-motion';
import { SocialLinksProps } from '@/types/FooterTypes';

export default function SocialLinks({
  socialLinks,
}: SocialLinksProps) {
  return (
    <div className="mt-6 flex gap-3">
      {socialLinks.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm transition-colors ${social.color}`}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  );
}
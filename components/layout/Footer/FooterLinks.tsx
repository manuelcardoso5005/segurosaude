import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { FooterLinkProps } from "@/types/FooterTypes";

export default function FooterLinks({
  isInView,
  footerLinks,
  title,
  typeLink,
}: FooterLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-3">
        {footerLinks[typeLink].map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="group flex items-center text-sm transition-colors hover:text-blue-400"
            >
              <span className="mr-2 opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>

              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
import {motion} from 'framer-motion';
import {isInView} from "@/types/FooterTypes"
import {footerLinks} from "./list-footer"
import {Link} from '@/i18n/navigation';

interface LegalLinkProps {
    
}

export default function LegalLink ({isInView}:isInView) {
    return (
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={isInView ? {opacity: 1, y: 0} : {}}
        transition={{duration: 0.5, delay: 0.4}}
      >
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
        <ul className="mt-6 space-y-3">
          {footerLinks.legal.map((link, i) => (
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
    )
}
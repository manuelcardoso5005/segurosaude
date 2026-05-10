'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Link} from '@/i18n/navigation';
import Newsletter from "./Newsletter"
import BottomBar from "./BottomBar"
import Certifications from "./Certifications"
import {footerLinks} from "./list-footer"

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
  } from 'react-icons/fa';
import {
  ShieldPlus,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const socialLinks = [
  {icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500'},
  {icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500'},
  {icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500'},
  {icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600'},
  {icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500'},
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer ref={ref} className="relative overflow-hidden bg-gray-950 text-gray-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{opacity: 0, y: 20}}
        animate={isInView ? {opacity: 1, y: 0} : {}}
        whileHover={{scale: 1.1, y: -5}}
        whileTap={{scale: 0.9}}
        className="absolute -top-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/30 transition-shadow hover:shadow-2xl hover:shadow-blue-500/50"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

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
            <Link href="/" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={{rotate: [0, -10, 10, -10, 0]}}
                transition={{duration: 0.5}}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
              >
                <ShieldPlus className="h-7 w-7" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">SeguroSaúde</span>
                <span className="text-xs text-gray-400">Proteção inteligente</span>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Cuidamos da sua saúde com excelência, tecnologia e humanização. Mais de 50 mil
              famílias confiam em nossos serviços.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
            <a
                href="tel:+244999999999"
                className="flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-4 w-4" />
                </div>
                +244 999 999 999
              </a>
              <a
                href="mailto:contato@segurosaude.ao"
                className="flex items-center gap-3 text-sm transition-colors hover:text-blue-400"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-4 w-4" />
                </div>
                contato@segurosaude.ao
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed">
                  Rua da Missão, 123
                  <br />
                  Luanda, Angola
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{y: -3}}
                  whileTap={{scale: 0.9}}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm transition-colors ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: 0.1}}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link, i) => (
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

          {/* Products links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Produtos
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.products.map((link, i) => (
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

          {/* Support links */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: 0.3}}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Suporte
            </h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.support.map((link, i) => (
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

          {/* Legal links */}

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
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import {SocialLink} from "@/types/FooterTypes"


export const socialLinks: SocialLink[] = [
  {
    icon: FaFacebook,
    href: 'https://facebook.com',
    label: 'Facebook',
    color: 'hover:text-blue-500',
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com',
    label: 'Instagram',
    color: 'hover:text-pink-500',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com',
    label: 'Twitter',
    color: 'hover:text-sky-500',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
  {
    icon: FaYoutube,
    href: 'https://youtube.com',
    label: 'YouTube',
    color: 'hover:text-red-500',
  },
];

export const footerLinks = {
    company: [
      {label: 'Sobre nós', href: '/sobre'},
      {label: 'Carreiras', href: '/carreiras'},
      {label: 'Imprensa', href: '/imprensa'},
      {label: 'Parceiros', href: '/parceiros'},
      {label: 'Blog', href: '/blog'},
    ],
    products: [
      {label: 'Planos individuais', href: '/planos'},
      {label: 'Planos empresariais', href: '/empresas'},
      {label: 'Telemedicina', href: '/telemedicina'},
      {label: 'Check-up', href: '/checkup'},
      {label: 'Rede credenciada', href: '/rede'},
    ],
    support: [
      {label: 'Central de ajuda', href: '/ajuda'},
      {label: 'Fale conosco', href: '/contacto'},
      {label: 'WhatsApp', href: 'https://wa.me/244999999999'},
      {label: 'Portal do cliente', href: '/portal'},
      {label: 'Segunda via', href: '/segunda-via'},
    ],
    legal: [
      {label: 'Termos de uso', href: '/termos'},
      {label: 'Política de privacidade', href: '/privacidade'},
      {label: 'LGPD', href: '/lgpd'},
      {label: 'Código de ética', href: '/etica'},
      {label: 'Ouvidoria', href: '/ouvidoria'},
    ],
  };


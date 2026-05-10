import { IconType } from 'react-icons';

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLinkItem[];
  products: FooterLinkItem[];
  support: FooterLinkItem[];
  legal: FooterLinkItem[];
}

export interface FooterLinkProps {
  isInView: boolean;
  footerLinks: FooterLinks;
  title: string;
  typeLink: keyof FooterLinks;
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color: string;
}

export interface InView {
    isInView: boolean;
}

export interface SocialLinksProps {
  socialLinks: SocialLink[];
}

export interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}
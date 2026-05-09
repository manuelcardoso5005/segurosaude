import {ReactNode} from 'react';

export interface BadgeAnimationProps {
  badgeText: string;
}

export interface HeroButtonsProps {
  getStart: string;
  seeMore: string;
}

export interface HeroButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export interface HeroSubtitleProps {
  description: string;
}
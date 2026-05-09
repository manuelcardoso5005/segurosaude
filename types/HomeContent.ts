import {ReactNode} from 'react';

export default interface BadgeAnimationProps {
  badgeText: string;
}

export interface HeroButtonsProps {
  getStart: string;
  seeMore: string;
}

export interface HeroButtonProps {
  href: string;
  variant?: boolean;
  children: ReactNode;
}
export interface NavItem {
    href: string;
    label: string;
};
  
export interface DesktopNavProps {
    navItems: NavItem[];
};

export interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  navItems: NavItem[];
}
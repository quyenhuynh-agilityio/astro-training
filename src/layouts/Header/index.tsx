import Button from '@components/Button';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import type { NavItem, SanityImage } from '@types-local/common';
import React from 'react';

// Define the type for the Header props based on the headerType schema
interface HeaderProps {
  logo?: SanityImage;
  navItems?: NavItem[];
  ctaText?: string;
}

const Header: React.FC<HeaderProps> = ({ logo, navItems, ctaText }) => {
  return (
    <header className="w-full bg-transparent py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <Logo url={logo?.asset?.url || ''} alt={logo?.alt || ''} />
        <div className="flex items-center gap-60">
          <Navigation
            links={navItems?.map((item) => ({
              label: item?.title,
              href: item?.link?.current,
            }))}
          />

          {/* CTA Button */}
          <Button rightIcon="path">{ctaText}</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

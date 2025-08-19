import Button from '@components/Button';
import { Icons } from '@components/Icons';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import React from 'react';

// Define the type for the Header props based on the headerType schema
interface HeaderProps {
  logo: {
    url: string;
    alt: string;
  };
  navItems: {
    title: string;
    link: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navItems,
  ctaText,
  ctaLink,
}) => {
  return (
    <header className="w-full bg-transparent py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <Logo url={logo.url} alt={logo.alt} />
        <div className="flex items-center gap-60">
          <Navigation
            links={navItems.map((item) => ({
              label: item.title,
              href: item.link,
            }))}
          />

          {/* CTA Button */}
          <Button
            rightIcon={<Icons.Path className="w-5 h-5 text-white ml-2" />}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

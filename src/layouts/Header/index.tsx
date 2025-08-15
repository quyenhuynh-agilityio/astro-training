import Button from '@components/Button';
import { Icons } from '@components/Icons';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-transparent py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Logo />

        {/* Navigation + Button */}
        <div className="flex items-center gap-60">
          <Navigation
            links={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ]}
          />

          {/* CTA Button */}
          <Button
            rightIcon={<Icons.Path className="w-5 h-5 text-white ml-2" />}
          >
            Work with us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

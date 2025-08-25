import React from 'react';
import Image from '@components/Image';
import Header from '@layouts/Header';
import { Icons } from '@components/Icons';
import type { NavItem, SanityImage } from '@types-local/common';

interface HeroProps {
  title?: string;
  subtitle?: string;
  labelBtn?: string;
  image?: string;
  logo?: SanityImage;
  navItems?: NavItem[];
  ctaText?: string;
}

const Hero = ({
  title,
  subtitle,
  labelBtn,
  image,
  logo,
  navItems,
  ctaText,
}: HeroProps) => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Image
        alt="Background"
        url={image || '/images/main-bg.png'}
        isLazyLoading={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      <div className="relative z-20 flex flex-col h-full max-w-7xl mx-auto px-6 md:px-12">
        <Header logo={logo} navItems={navItems} ctaText={ctaText} />
        <div className="flex-1 flex items-center">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight max-w-xl">
              {title}
            </h1>
            <p className="mt-4 text-gray-200 max-w-md font-heading font-normal">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white w-full px-10 py-9 shadow-lg flex items-center gap-2 cursor-pointer hover:underline">
            <span className="font-semibold">{labelBtn}</span>
            <Icons.Path className="w-5 h-10 text-primary ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

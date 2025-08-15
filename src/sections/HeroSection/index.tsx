import React from 'react';
import Image from '@components/Image';
import Header from '@layouts/Header';
import { Icons } from '@components/Icons';

const bgImage = {
  default: '/images/main-bg.png',
  desktop: '/images/main-bg.png',
  tablet: '/images/main-bg.png',
  mobile: '/images/main-bg.png',
};

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background image */}
      <Image
        alt="Background"
        url={bgImage}
        isLazyLoading={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

      {/* Content wrapper with max width */}
      <div className="relative z-20 flex flex-col h-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <Header />

        {/* Hero content */}
        <div className="flex-1 flex items-center">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight max-w-xl">
              Beautiful homes made <br /> for you
            </h1>
            <p className="mt-4 text-gray-200 max-w-md font-heading font-normal">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="w-full">
          <div className="bg-white w-full px-10 py-9 shadow-lg flex items-center gap-2 cursor-pointer hover:underline">
            <span className="font-semibold">See all listings</span>
            <Icons.Path className="w-5 h-10 text-primary ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

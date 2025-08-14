import React from 'react';
import Image from '../Image';

const Logo = () => {
  return (
    <Image
      alt="Company Logo"
      url={{
        default: '/images/logo.png',
        desktop: '/images/logo.png',
        tablet: '/images/logo.png',
        mobile: '/images/logo.png',
      }}
      className="w-32 h-auto"
      width={106}
      height={16}
      isLazyLoading={false}
    />
  );
};

export default Logo;

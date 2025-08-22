import React from 'react';
import Image from '../Image';

interface LogoProps {
  url: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ url, alt }) => {
  return (
    <Image
      alt={alt}
      url={{
        default: url,
        desktop: url,
        tablet: url,
        mobile: url,
      }}
      className="w-32 h-auto"
      width={106}
      height={16}
      isLazyLoading={false}
    />
  );
};

export default Logo;

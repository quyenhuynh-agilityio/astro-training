import React from 'react';

interface ImageUrl {
  desktop?: string;
  tablet?: string;
  mobile?: string;
  default: string;
}

interface ImageProps {
  alt: string;
  url: ImageUrl;
  className?: string;
  width?: number;
  height?: number;
  isLazyLoading?: boolean;
}

const Image: React.FC<ImageProps> = ({
  alt,
  url,
  className = '',
  width = 0,
  height = 0,
  isLazyLoading = false,
}) => {
  return (
    <picture className={className}>
      {url.desktop && (
        <source
          media="(min-width: 1440px)"
          srcSet={url.desktop}
          width={width || undefined}
          height={height || undefined}
        />
      )}
      {url.tablet && (
        <source
          media="(min-width: 768px)"
          srcSet={url.tablet}
          width={width || undefined}
          height={height || undefined}
        />
      )}
      {url.mobile && (
        <source
          media="(max-width: 767px)"
          srcSet={url.mobile}
          width={width || undefined}
          height={height || undefined}
        />
      )}
      <img
        src={url.default}
        alt={alt}
        width={width || undefined}
        height={height || undefined}
        loading={isLazyLoading ? 'lazy' : 'eager'}
        className={className}
      />
    </picture>
  );
};

export default Image;

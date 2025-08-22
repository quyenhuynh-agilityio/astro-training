import React from 'react';
import { urlFor } from '../../lib/sanity'; // Adjust path to your sanity.ts file

interface ImageProps {
  alt: string;
  url: string; // Single Sanity image reference or URL
  className?: string;
  width?: number;
  height?: number;
  isLazyLoading?: boolean;
  quality?: number; // Optional quality parameter (0-100)
}

const Image: React.FC<ImageProps> = ({
  alt,
  url,
  className = '',
  width = 800, // Default width
  height = 600, // Default height
  isLazyLoading = true,
  quality = 75, // Default quality
}) => {
  // Generate optimized URLs for each breakpoint
  const getBreakpointUrl = (w: number, h: number) =>
    urlFor(typeof url === 'string' ? { asset: { _ref: url } } : url)
      .width(w)
      .height(h)
      .quality(quality)
      .auto('format')
      .url();

  const desktopUrl = getBreakpointUrl(1200, 900); // Optimized for desktop
  const tabletUrl = getBreakpointUrl(800, 600); // Optimized for tablet
  const mobileUrl = getBreakpointUrl(400, 300); // Optimized for mobile
  const defaultUrl = getBreakpointUrl(width, height); // Fallback

  return (
    <picture className={className}>
      {desktopUrl && (
        <source
          media="(min-width: 1440px)"
          srcSet={desktopUrl}
          width={1200}
          height={900}
        />
      )}
      {tabletUrl && (
        <source
          media="(min-width: 768px)"
          srcSet={tabletUrl}
          width={800}
          height={600}
        />
      )}
      {mobileUrl && (
        <source
          media="(max-width: 767px)"
          srcSet={mobileUrl}
          width={400}
          height={300}
        />
      )}
      <img
        src={defaultUrl}
        alt={alt}
        width={width || undefined}
        height={height || undefined}
        loading={isLazyLoading ? 'lazy' : 'eager'}
        decoding="async" // Improves rendering performance
        className={className}
      />
    </picture>
  );
};

export default Image;

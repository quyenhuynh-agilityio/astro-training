import { urlFor } from '@lib/sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface ImageProps {
  alt: string;
  url: SanityImageSource | string;
  className?: string;
  width?: number;
  height?: number;
  isLazyLoading?: boolean;
  quality?: number;
}

const Image: React.FC<ImageProps> = ({
  alt,
  url,
  className = '',
  width = 800,
  height = 600,
  isLazyLoading = true,
  quality = 75,
}) => {
  if (!url) return null;

  const source: SanityImageSource | string =
    typeof url === 'string' && url.startsWith('http')
      ? url
      : typeof url === 'string'
        ? { asset: { _ref: url } }
        : url;

  const getBreakpointUrl = (w: number, h: number, format?: string) => {
    if (typeof source === 'string') return source;
    let builder = urlFor(source).width(w).height(h).quality(quality);
    if (format) builder = builder.format(format);
    else builder = builder.auto('format');
    return builder.url();
  };

  const breakpoints = {
    desktop: { w: 1200, h: 900 },
    tablet: { w: 800, h: 600 },
    mobile: { w: 400, h: 300 },
    default: { w: width, h: height },
  };

  return (
    <picture className={className}>
      {/* AVIF sources first */}
      <source
        media="(min-width: 1440px)"
        srcSet={getBreakpointUrl(
          breakpoints.desktop.w,
          breakpoints.desktop.h,
          'avif'
        )}
        type="image/avif"
      />
      <source
        media="(min-width: 768px)"
        srcSet={getBreakpointUrl(
          breakpoints.tablet.w,
          breakpoints.tablet.h,
          'avif'
        )}
        type="image/avif"
      />
      <source
        media="(max-width: 767px)"
        srcSet={getBreakpointUrl(
          breakpoints.mobile.w,
          breakpoints.mobile.h,
          'avif'
        )}
        type="image/avif"
      />

      {/* WebP fallback */}
      <source
        media="(min-width: 1440px)"
        srcSet={getBreakpointUrl(
          breakpoints.desktop.w,
          breakpoints.desktop.h,
          'webp'
        )}
        type="image/webp"
      />
      <source
        media="(min-width: 768px)"
        srcSet={getBreakpointUrl(
          breakpoints.tablet.w,
          breakpoints.tablet.h,
          'webp'
        )}
        type="image/webp"
      />
      <source
        media="(max-width: 767px)"
        srcSet={getBreakpointUrl(
          breakpoints.mobile.w,
          breakpoints.mobile.h,
          'webp'
        )}
        type="image/webp"
      />

      {/* Default fallback */}
      <img
        src={getBreakpointUrl(breakpoints.default.w, breakpoints.default.h)}
        alt={alt}
        width={width}
        height={height}
        loading={isLazyLoading ? 'lazy' : 'eager'}
        decoding="async"
        className={className}
      />
    </picture>
  );
};

export default Image;

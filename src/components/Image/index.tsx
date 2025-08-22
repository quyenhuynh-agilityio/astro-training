import { urlFor } from '@lib/sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

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

  const getBreakpointUrl = (w: number, h: number) => {
    if (typeof source === 'string') return source; // already a valid CDN URL
    return urlFor(source)
      .width(w)
      .height(h)
      .quality(quality)
      .auto('format')
      .url();
  };

  const desktopUrl = getBreakpointUrl(1200, 900);
  const tabletUrl = getBreakpointUrl(800, 600);
  const mobileUrl = getBreakpointUrl(400, 300);
  const defaultUrl = getBreakpointUrl(width, height);

  return (
    <picture className={className}>
      <source media="(min-width: 1440px)" srcSet={desktopUrl} />
      <source media="(min-width: 768px)" srcSet={tabletUrl} />
      <source media="(max-width: 767px)" srcSet={mobileUrl} />
      <img
        src={defaultUrl}
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

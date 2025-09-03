import { toPlainText } from 'astro-portabletext';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { PortableTextBlock } from 'sanity';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const portableTextToHref = (
  value: string | PortableTextBlock[]
): string => {
  const plain = typeof value === 'string' ? value : toPlainText(value);
  const slug = plain
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return `/${slug}`;
};

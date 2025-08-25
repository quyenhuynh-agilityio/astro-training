import Button from '@components/Button';
import { Icons } from '@components/Icons';
import Image from '@components/Image';
import Logo from '@components/Logo';
import type { SanityImage } from '@types-local/common';
import React from 'react';

interface LinkItem {
  label: string;
  href: string;
}

interface Column {
  heading: string;
  links: LinkItem[];
}

interface SocialLink {
  url: string;
  icon: SanityImage;
}

interface FooterProps {
  logo?: SanityImage;
  columns: Column[];
  socialLinks?: SocialLink[];
  ctaText?: string;
}

const Footer = ({ logo, columns, socialLinks, ctaText }: FooterProps) => {
  return (
    <footer className="bg-black text-white px-177 py-80">
      <div className="max-w-7xl mx-auto pb-12 flex flex-col md:flex-row items-center md:justify-between">
        <h2 className="text-3xl md:text-4md font-bold text-white">
          Make your dreams a <span className="text-primary">reality</span>
        </h2>
        <Button
          size="large"
          rightIcon={<Icons.Path className="w-5 h-10 text-white ml-2" />}
        >
          {ctaText}
        </Button>
      </div>

      <hr className="border-gray-700" />

      <div className="max-w-7xl mx-auto mt-60 flex justify-between">
        <div>
          <Logo url={logo?.asset?.url || ''} alt={logo?.alt || ''} />
          <div className="flex space-x-10 mt-30">
            {socialLinks?.map((item, idx) => (
              <a
                key={idx}
                href={item?.url || ''}
                className="hover:text-primary transition"
              >
                <Image
                  alt={item?.icon?.alt || ''}
                  width={22}
                  height={22}
                  url={item?.icon?.asset?.url || ''}
                  className="size-5"
                />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col, idx) => (
          <div key={idx}>
            <h3 className="font-semibold mb-4">{col.heading}</h3>
            <ul className="space-y-2 text-gray-400">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-primary transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

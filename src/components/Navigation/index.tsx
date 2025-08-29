// src/components/Nav.tsx
import type { NavItem } from '@types-local/common';
import React from 'react';

interface NavProps {
  links?: NavItem[];
  className?: string;
}

const Navigation: React.FC<NavProps> = ({ links, className = '' }) => {
  return (
    <nav className={`text-white ${className}`}>
      <ul className="flex space-x-1 md:space-x-60">
        {links?.map((link, index) => (
          <li key={index}>
            <a
              href={link.link?.current}
              className="hover:text-gray-300 text-base"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

// src/components/Nav.tsx
import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links?: NavLink[];
  className?: string;
}

const Navigation: React.FC<NavProps> = ({ links, className = '' }) => {
  return (
    <nav className={`text-white ${className}`}>
      <ul className="flex space-x-60">
        {links?.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-gray-300 text-base">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

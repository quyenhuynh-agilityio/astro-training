import React from 'react';

interface BlockProps {
  children: React.ReactNode;
}

export default function H1Block({ children }: BlockProps) {
  return (
    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
      {children}
    </h1>
  );
}

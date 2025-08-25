import React from 'react';
import Button from '@components/Button';
import { Icons } from '@components/Icons';
import Heading from '@components/Heading';

interface AgentSectionProps {
  title?: string;
  description?: string;
  cta?: string;
}

const AgentSection = ({ title, description, cta }: AgentSectionProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center py-150 bg-black text-center text-white">
      <div className="max-w-2xl px-6">
        <Heading title={title} className="justify-center" />

        <p className="text-secondary text-base leading-relaxed mb-6">
          {description}
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="large"
            rightIcon={<Icons.Path className="w-5 h-10 text-white ml-2" />}
          >
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;

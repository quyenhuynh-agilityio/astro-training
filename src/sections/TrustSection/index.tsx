import React from 'react';
import Button from '@components/Button';
import { Icons } from '@components/Icons';
import Heading from '@components/Heading';

const TrustSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-150 bg-black text-center text-white">
      <div className="max-w-2xl px-6">
        <Heading title="You’re in good hands" className="justify-center" />

        <p className="text-secondary text-base leading-relaxed mb-6">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="large"
            rightIcon={<Icons.Path className="w-5 h-10 text-white ml-2" />}
          >
            Work with us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

import React from 'react';
import Button from '@components/Button';
import Image from '@components/Image';
import { Icons } from '@components/Icons';
import { cn } from '@lib/utils';
import Heading from '@components/Heading';

interface AboutSectionProps {
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
  reverse?: boolean;
  sectionClassName?: string;
  containerClassName?: string;
  imageWrapperClassName?: string;
  textWrapperClassName?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'You’re in good hands',
  description = `Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
    ne ferae quidem se repellere, idque instituit docere sic: omne
    animal, simul atque integre iudicante itaque aiunt hanc quasi
    involuta aperiri, altera occulta quaedam et voluptatem accusantium
    doloremque.`,
  image = '',
  buttonText = 'Learn more',
  reverse = false,
  sectionClassName,
  containerClassName,
  imageWrapperClassName,
  textWrapperClassName,
}) => {
  return (
    <section className={cn('w-full py-16', sectionClassName)}>
      <div
        className={cn(
          'max-w-7xl flex flex-col md:flex-row items-center gap-12 px-6 md:px-12',
          reverse && 'md:flex-row-reverse',
          containerClassName
        )}
      >
        {/* Image */}
        <div className={cn('flex-1', imageWrapperClassName)}>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              url={image}
              alt={title || 'Trusted Partners'}
              width={800}
              height={600}
              className="object-cover w-604 h-557"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={cn('flex-1', textWrapperClassName)}>
          {/* Accent Line */}
          <Heading title={title} />

          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          <Button
            className="py-5 px-10"
            variant="secondary"
            rightIcon={<Icons.Path className="w-5 h-5 text-primary ml-2" />}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

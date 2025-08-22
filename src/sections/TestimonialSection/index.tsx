import React, { useState } from 'react';
import Image from '@components/Image';

interface TestimonialItem {
  name: string;
  role?: string;
  image: string;
  quote: string;
}

interface TestimonialSectionProps {
  testimonials: TestimonialItem[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-150 bg-white">
      <div className="mx-auto text-center px-6">
        {/* Accent line */}
        <div className="flex justify-center mb-6">
          <span className="w-336 h-1 bg-gradient-to-r from-yellow-400 to-black"></span>
        </div>
        <div className="relative mb-24 min-h-52 flex items-center justify-center mx-auto max-w-336">
          <blockquote className="text-xl italic text-gray-800 leading-relaxed max-w-2xl mx-auto transition-opacity duration-300">
            “{testimonials[activeIndex]?.quote}”
          </blockquote>
        </div>

        {/* Avatars */}
        <div className="flex justify-center gap-8">
          {testimonials?.map((t, index) => (
            <button
              key={t.name + index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center transition px-6 py-4 w-336 ${
                index === activeIndex
                  ? 'scale-110 bg-black'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                url={t.image}
                alt={t.name}
                className={`w-14 h-14 rounded-full object-cover mb-2 ${
                  index === activeIndex ? 'ring-2 ring-white' : ''
                }`}
              />
              <div className="flex flex-col ml-5">
                <span
                  className={`text-sm font-medium ${
                    index === activeIndex ? 'text-white' : 'text-black'
                  }`}
                >
                  {t.name}
                </span>
                <span
                  className={`text-xs ${
                    index === activeIndex ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {t.role}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

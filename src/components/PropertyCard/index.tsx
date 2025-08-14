import React from 'react';
import { Icons } from '../Icons';
import { cn } from '@lib/utils';

interface CardProps {
  className?: string;
  image: string;
  title: string;
  beds: number;
  baths: number;
  sun: number;
}

const PropertyCard: React.FC<CardProps> = ({
  className,
  image,
  title,
  beds,
  baths,
  sun,
}) => {
  return (
    <div
      className={cn(
        className,
        'bg-white rounded-2xl shadow-md overflow-hidden'
      )}
    >
      <div className="h-266 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="pl-30 py-30 border-b">
        <h3 className="font-bold text-3md">{title}</h3>
      </div>
      <div className="grid grid-cols-3 divide-x">
        <div className="flex items-center justify-center gap-1 py-5">
          <Icons.Bed className="size-4" />
          <span className="text-md ml-1">{beds}</span>
        </div>
        <div className="flex items-center justify-center gap-1 py-2">
          <Icons.Shower className="size-4" />
          <span className="text-md ml-1">{baths}</span>
        </div>
        <div className="flex items-center justify-center gap-1 py-2">
          <Icons.Size className="size-4" />
          <span className="text-md ml-1">{sun}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

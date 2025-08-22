import { Icons } from '@components/Icons';
import React from 'react';
import Image from '@components/Image';
import DetailItem from '@components/DetailItem';

interface SanityImage {
  asset: {
    url: string;
  };
  alt?: string;
}

interface PropertyDetails {
  beds: number;
  baths: number;
  area: string;
  garage: number;
  yearBuilt: number;
}

export interface PropertyData {
  _id: string;
  title: string;
  slug: string;
  address?: string;
  price?: number;
  pricePerSqft?: number;
  mainImage: SanityImage;
  galleryImages: SanityImage[];
  details: PropertyDetails;
  description: string;
  features: string[];
  status?: string;
}

const FeatureItem = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
    <Icon className="size-5 text-gray-500" />
    <span>{text}</span>
  </div>
);

const PropertyDetail: React.FC<{ property: PropertyData }> = ({ property }) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Images */}
        <div className="mb-8 lg:grid lg:grid-cols-3 lg:gap-4">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <Image
              alt={property.mainImage?.alt || ''}
              url={property.mainImage?.asset?.url}
              className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 lg:mt-0">
            <div
              className="
                flex gap-3 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-3 lg:grid-cols-1
              "
            >
              {property.galleryImages.slice(1, 7).map((image, i) => (
                <Image
                  key={i}
                  alt={`Property ${i + 1}`}
                  url={image?.asset?.url}
                  className="
                    w-32 h-24 sm:w-full sm:h-28
                    object-cover rounded-xl cursor-pointer
                    flex-shrink-0 hover:opacity-80 transition
                  "
                  isLazyLoading
                />
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center border-t border-accent">
            <DetailItem
              icon={Icons.Bed}
              value={property.details.beds}
              label="Beds"
              bordered
            />
            <DetailItem
              icon={Icons.Shower}
              value={property.details.baths}
              label="Baths"
              bordered
            />
            <DetailItem
              icon={Icons.Size}
              value={property.details.area}
              bordered
            />
            <DetailItem
              icon={Icons.Garage}
              value={property.details.garage}
              label="Garage"
              bordered
            />
            <DetailItem
              icon={Icons.Bed}
              value={`Built ${property.details.yearBuilt}`}
            />
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold pb-4 border-b border-accent">
            Description
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed pt-4">
            {property.description}
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold py-4 border-b border-accent">
            Features
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {property?.features?.map((feature, i) => (
              <FeatureItem key={i} icon={Icons.Check} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;

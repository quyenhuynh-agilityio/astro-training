import { Icons } from '@components/Icons';
import React from 'react';
import Image from '@components/Image';
import DetailItem from '@components/DetailItem';

const property = {
  images: [
    {
      default:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      desktop:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1440',
      tablet:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=768',
      mobile:
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=480',
    },
    {
      default:
        'https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    },
    {
      default:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
  ],
  details: {
    beds: 4,
    baths: 2,
    area: '200 m²',
    garage: 1,
    year: 2007,
  },
  description: `
    At vero eos et iusto odio dignissimos ducimus...
  `,
  features: [
    'Air Conditioning',
    'Swimming Pool',
    'Garage',
    'Garden',
    'Fireplace',
    'Security System',
    'Balcony',
    'Hardwood Floors',
    'Modern Kitchen',
    'Smart Home',
    'Solar Panels',
    'Double Glazing',
  ],
};

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

const PropertyDetail = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Images */}
        <div className="mb-8 lg:grid lg:grid-cols-3 lg:gap-4">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <Image
              alt="Main property"
              url={property.images[0]}
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
              {property.images.slice(1, 7).map((img, i) => (
                <Image
                  key={i}
                  alt={`Property ${i + 1}`}
                  url={img}
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
              value={`Built ${property.details.year}`}
            />
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold pb-4 border-b border-accent">
            Description
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold py-4 border-b border-accent">
            Features
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {property.features.map((feature, i) => (
              <FeatureItem key={i} icon={Icons.Check} text={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetail;

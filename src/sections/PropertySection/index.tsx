import Heading from '@components/Heading';
import PropertyCard from '@components/PropertyCard';
import Select from '@components/Select';

interface PropertyItem {
  image: string;
  title: string;
  beds: number;
  baths: number;
  sun: number;
  slug: string;
}

interface PropertySectionProps {
  title?: string;
  properties: PropertyItem[];
}

const PropertySection = ({
  title = 'Find your next place to live',
  properties: incomingProperties,
}: PropertySectionProps) => {
  const options = [
    { value: '', label: 'Looking for' },
    { value: 'rent', label: 'Rent' },
    { value: 'buy', label: 'Buy' },
  ];

  const locations = [
    { value: '', label: 'Location' },
    { value: 'ny', label: 'New York' },
    { value: 'sf', label: 'San Francisco' },
  ];

  const types = [
    { value: '', label: 'Property Type' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
  ];

  const prices = [
    { value: '', label: 'Price' },
    { value: 'low', label: 'Low to High' },
    { value: 'high', label: 'High to Low' },
  ];

  const properties = incomingProperties;

  console.log('incomingProperties', incomingProperties);

  return (
    <section className="py-16 bg-bodyBg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <Heading title={title} />

        {/* Filters */}
        <div className="flex flex-col md:flex-row w-full gap-4 bg-white shadow-md rounded-xl  mb-10">
          <Select
            className="w-full md:flex-1 border-r border-accent rounded-tl-xl rounded-bl-xl"
            options={options}
            name="lookingFor"
          />
          <Select
            className="w-full md:flex-1 border-r border-accent"
            options={locations}
            name="location"
          />
          <Select
            className="w-full md:flex-1 border-r border-accent"
            options={types}
            name="propertyType"
          />
          <Select
            className="w-full md:flex-1 rounded-tr-xl rounded-br-xl"
            options={prices}
            name="price"
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <li key={property.slug}>
              <PropertyCard
                slug={property.slug}
                image={property.image}
                title={property.title}
                beds={property.beds}
                baths={property.baths}
                area={property.sun}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PropertySection;

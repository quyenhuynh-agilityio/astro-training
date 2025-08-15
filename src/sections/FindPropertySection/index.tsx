import Heading from '@components/Heading';
import PropertyCard from '@components/PropertyCard';
import Select from '@components/Select';

const FindPropertySection = () => {
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

  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Malto House',
      beds: 4,
      baths: 2,
      sun: 2,
    },
  ];

  return (
    <section className="py-16 bg-bodyBg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <Heading title="Find your next place to live" />

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

        {/* Properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              image={property.image}
              title={property.title}
              beds={property.beds}
              baths={property.baths}
              sun={property.sun}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindPropertySection;

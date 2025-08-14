import Button from './Button';
import { Icons } from './Icons';
import PropertyCard from './PropertyCard';
import Select from './Select';

const Test = () => {
  const locations = [
    { value: '', label: 'Locations' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <>
      <Button rightIcon={<Icons.Path className="w-5 h-10 text-white ml-2" />}>
        Work with us
      </Button>
      <Button
        variant="secondary"
        rightIcon={<Icons.Path className="w-5 h-10 text-primary ml-2" />}
      >
        Learn more
      </Button>

      <PropertyCard
        className="w-336"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        title="Malto House"
        beds={4}
        baths={2}
        sun={2}
      />

      <Select
        options={locations}
        name="location"
        className="w-267"
        // value={selectedValue}
        // onChange={handleChange}
      />
    </>
  );
};

export default Test;

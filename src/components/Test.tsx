import Button from './Button';
import { Icons } from './Icons';
import PropertyCard from './PropertyCard';

const Test = () => {
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
    </>
  );
};

export default Test;

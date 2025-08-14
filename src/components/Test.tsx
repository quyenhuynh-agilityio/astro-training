import Button from './Button';
import { Icons } from './Icons';

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
    </>
  );
};

export default Test;

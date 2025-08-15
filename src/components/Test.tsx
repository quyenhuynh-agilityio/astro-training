import Footer from '@layouts/Footer';
import Button from './Button';
import { Icons } from './Icons';
import Logo from './Logo';
import Navigation from './Navigation';
import PropertyCard from './PropertyCard';
import Select from './Select';
import Input from './Input';
import LoginForm from './LoginForm';

const Test = () => {
  const locations = [
    { value: '', label: 'Locations' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <div className="bg-slate-400">
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

      <Logo />

      <Navigation
        links={[
          { label: 'Hone', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
        ]}
        className="shadow-md"
      />
      <Footer
        logo="/logo.svg"
        socialLinks={[
          { href: '#', icon: <Icons.Facebook /> },
          { href: '#', icon: <Icons.Twitter /> },
          { href: '#', icon: <Icons.Instagram /> },
        ]}
        columns={[
          {
            heading: 'Column Heading',
            links: [
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
            ],
          },
          {
            heading: 'Column Heading',
            links: [
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
            ],
          },
          {
            heading: 'Column Heading',
            links: [
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
              { label: 'Link goes here', href: '#' },
            ],
          },
        ]}
      />
      <LoginForm />

      <Input label="Name" placeholder="Enter your name" />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error="Invalid email address"
      />
    </div>
  );
};

export default Test;

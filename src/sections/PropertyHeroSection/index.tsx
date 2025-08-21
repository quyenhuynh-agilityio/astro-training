import Header from '@layouts/Header';

interface PropertyHeroProps {
  title: string;
  address: string;
  price: string;
  pricePerSqft: string;
  logo: {
    url: string;
    alt: string;
  };
  navItems: {
    title: string;
    link: string;
  }[];
  ctaText: string;
}

const PropertyHeroSection = ({
  title,
  address,
  price,
  pricePerSqft,
  logo,
  navItems,
  ctaText,
}: PropertyHeroProps) => {
  return (
    <section className="bg-black text-white">
      <Header
        logo={logo}
        navItems={navItems}
        ctaText={ctaText}
        // ctaLink={ctaLink}
      />
      <div className="max-w-7xl px-6 md:px-12 mx-auto py-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">{title}</h1>
          <p className="text-gray-300 text-sm">{address}</p>
        </div>

        <div className="mt-6 md:mt-0 text-right">
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-gray-400 text-sm">{pricePerSqft}</p>
        </div>
      </div>
    </section>
  );
};

export default PropertyHeroSection;

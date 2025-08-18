import Header from '@layouts/Header';

interface PropertyHeroProps {
  title: string;
  address: string;
  price: string;
  pricePerSqft: string;
}

const PropertyHeroSection = ({
  title,
  address,
  price,
  pricePerSqft,
}: PropertyHeroProps) => {
  return (
    <section className="bg-black text-white">
      <Header />
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

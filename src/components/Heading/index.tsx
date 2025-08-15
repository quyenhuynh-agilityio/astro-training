interface HeadingProps {
  title?: string;
}
const Heading = ({ title }: HeadingProps) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-11 h-1 bg-gradient-to-r from-primary to-black" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    </>
  );
};

export default Heading;

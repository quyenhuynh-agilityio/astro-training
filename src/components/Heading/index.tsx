import { cn } from '@lib/utils';

interface HeadingProps {
  title?: string;
  className?: string;
}
const Heading = ({ title, className }: HeadingProps) => {
  return (
    <>
      <div className={cn('flex items-center gap-2 mb-4', className)}>
        <div className="w-169 h-1 bg-gradient-to-r from-primary to-black" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    </>
  );
};

export default Heading;

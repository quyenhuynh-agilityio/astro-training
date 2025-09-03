import { type ElementType } from 'react';

const DetailItem = ({
  icon: Icon,
  label,
  value,
  bordered,
}: {
  icon: ElementType;
  label?: string;
  value: string | number;
  bordered?: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center py-2 ${bordered ? 'border-r border-accent' : ''}`}
  >
    <Icon className="size-6 text-gray-600 mb-1.5" />
    <span className="font-semibold">{label ? `${value} ${label}` : value}</span>
  </div>
);

export default DetailItem;

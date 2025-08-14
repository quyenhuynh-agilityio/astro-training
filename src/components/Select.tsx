import React from 'react';
import { Icons } from './Icons';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  selectClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  name,
  value,
  onChange,
  className = '',
  selectClassName = '',
}) => {
  return (
    <div className={`pl-10 py-12 border border-accent  ${className}`}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-md font-bold border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${selectClassName}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Icons.ChevronDown className="w-3 h-2 fill-black absolute right-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

export default Select;

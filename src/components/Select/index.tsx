import React from 'react';

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
}

const Select: React.FC<SelectProps> = ({
  options,
  name,
  value,
  onChange,
  className = '',
}) => {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`text-md pl-10 py-12  font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

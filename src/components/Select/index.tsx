import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  name: string;
  label?: string;
  ariaLabel?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  name,
  label,
  ariaLabel,
  value,
  onChange,
  className = '',
}) => {
  const selectId = `${name}-select`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="sr-only">
          {label}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        aria-label={!label ? ariaLabel : undefined}
        value={value}
        onChange={onChange}
        className={`text-md pl-10 py-12 font-bold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

import React from 'react';

import { Icons } from '@components/Icons';

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
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
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
    <div className="flex flex-col relative">
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
        className={`appearance-none text-md py-6 pr-10 pl-3 font-bold  bg-white sm:text-sm ${className}`}
      >
        {options?.map((option, index) => {
          return (
            <option key={`${option.value}-${index}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <Icons.ChevronDown />
      </div>
    </div>
  );
};

export default Select;

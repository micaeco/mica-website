import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { ISelectField } from '@/src/types/form';

export default function SelectBox({
  label,
  name,
  options,
  required,
  onChange,
  value,
}: ISelectField) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-8 text-sm shadow-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          onChange={(e) => onChange!(e.target.value)}
          value={value as string}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

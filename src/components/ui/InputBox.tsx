import React from 'react';

interface Props {
  Icon: React.ElementType;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  onChange: (value: string) => void;
  value: string;
}

export default function InputBox({
  Icon,
  label,
  type,
  name,
  placeholder,
  required,
  onChange,
  value,
}: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon className="size-5 text-gray-400" />
        </div>
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value} // Add this line
        />
      </div>
    </div>
  );
}

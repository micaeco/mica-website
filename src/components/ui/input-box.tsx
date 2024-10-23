import React from 'react';
import { Link } from '@/i18n/routing';

import { IInputField } from '@/types';

export default function InputBox({
  icon: Icon,
  label,
  link,
  inputType,
  name,
  placeholder,
  required,
  onChange,
  value,
  className,
  error,
}: IInputField) {
  if (inputType === 'checkbox') {
    return (
      <div className={`mb-4 flex items-center ${className}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value as boolean}
          onChange={(e) => onChange!(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary"
          required={required}
        />
        {link ? (
          <label htmlFor={name} className="ml-2 block text-sm font-medium text-gray-700">
            <Link href={link} className="underline hover:text-blue-500">
              {label}
            </Link>
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        ) : (
          <label htmlFor={name} className="ml-2 block text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-4 ${className}`}>
      {link ? (
        <label htmlFor={name} className="ml-2 block text-sm font-medium text-gray-700">
          <Link href={link} className="underline hover:text-blue-500">
            {label}
          </Link>
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      ) : (
        <label htmlFor={name} className="mb-2 ml-2 block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="size-5 text-gray-400" />
          </div>
        )}
        <input
          type={inputType}
          name={name}
          id={name}
          required={required}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder:font-light focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
          placeholder={placeholder}
          onChange={(e) => onChange!(e.target.value)}
          value={value as string}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

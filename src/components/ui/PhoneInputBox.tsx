import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IInputField } from '@/src/types';

const countryCodes = [
  { code: '+34', country: 'ES' },
  { code: '+1', country: 'US' },
  { code: '+44', country: 'UK' },
  { code: '+33', country: 'FR' },
  { code: '+49', country: 'DE' },
  { code: '+91', country: 'IN' },
  { code: '+81', country: 'JP' },
  { code: '+55', country: 'BR' },
  { code: '+7', country: 'RU' },
];

export default function PhoneInput({
  label,
  name,
  placeholder,
  required,
  onChange,
  value,
  className,
  error,
}: IInputField) {
  const [countryCode, setCountryCode] = useState('+34');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Initialize phone number from value prop
    if (value && typeof value === 'string') {
      const match = value.match(/^\+(\d+)\s?(.*)$/);
      if (match) {
        setCountryCode(`+${match[1]}`);
        setPhoneNumber(match[2]);
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
    updateParentValue(e.target.value, phoneNumber);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    updateParentValue(countryCode, e.target.value);
  };

  const updateParentValue = (code: string, number: string) => {
    if (number.trim() === '') {
      onChange(''); // Send empty string if phone number is empty
    } else {
      onChange(`${code}${number}`);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="mb-2 ml-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative flex">
        <select
          value={countryCode}
          onChange={handleCountryCodeChange}
          className="rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-2 leading-5 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code} ({country.country})
            </option>
          ))}
        </select>
        <div className="relative flex-grow">
          <input
            type="tel"
            name={name}
            id={name}
            required={required}
            className="block w-full rounded-r-md border border-gray-300 bg-white py-2 pl-4 pr-3 leading-5 placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
            placeholder={placeholder}
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
          />
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

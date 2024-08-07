'use client';

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IFormField, IFormData } from '@/src/types';
import InputBox from '@/src/components/ui/InputBox';
import SelectBox from '@/src/components/ui/SelectBox';

const formFields: IFormField[] = [
  {
    type: 'input',
    icon: User,
    label: 'Nom',
    inputType: 'text',
    name: 'firstName',
    placeholder: 'El teu nom',
    required: true,
    value: '',
    onChange: () => {},
  },
  {
    type: 'input',
    icon: User,
    label: 'Cognoms',
    inputType: 'text',
    name: 'lastName',
    placeholder: 'Els teus cognoms',
    required: true,
    value: '',
    onChange: () => {},
  },
  {
    type: 'input',
    icon: Mail,
    label: 'Correu electrònic',
    inputType: 'email',
    name: 'email',
    placeholder: 'El teu correu electrònic',
    required: true,
    value: '',
    onChange: () => {},
  },
  {
    type: 'input',
    icon: Phone,
    label: 'Telèfon (opcional)',
    inputType: 'tel',
    name: 'phone',
    placeholder: 'El teu número de telèfon',
    required: false,
    value: '',
    onChange: () => {},
  },
  {
    type: 'select',
    label: 'Interès',
    name: 'interest',
    required: true,
    options: [
      { value: '', label: 'Selecciona una opció' },
      { value: 'product', label: 'Només tinc interès en el producte final' },
      { value: 'beta', label: 'Tinc interès en apuntar-me al programa beta' },
    ],
    value: '',
    onChange: () => {},
  },
  {
    type: 'input',
    label: 'He llegit i accepto la política de privacitat',
    link: '/privacy-policy',
    inputType: 'checkbox',
    name: 'privacyPolicy',
    required: true,
    value: false,
    onChange: () => {},
  },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<IFormData>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (name: string) => (value: string | boolean) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const requiredFields = formFields.filter((field) => field.required);
    const areAllRequiredFieldsFilled = requiredFields.every((field) => {
      const value = formData[field.name];
      if (typeof value === 'boolean') {
        return value; // For checkboxes, the boolean value itself determines validity
      } else if (typeof value === 'string') {
        return value.trim() !== ''; // For string inputs, check if it's not just whitespace
      }
      return false; // If the value is undefined or any other type, consider it invalid
    });
    setIsFormValid(areAllRequiredFieldsFilled);
  }, [formData]);

  const handleSubmit = async (event: React.FormEvent) => {};

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary">Registra&apos;t</h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) =>
                field.type === 'select' ? (
                  <SelectBox
                    key={field.name}
                    {...field}
                    onChange={handleInputChange(field.name)}
                    value={formData[field.name] || ''}
                  />
                ) : (
                  <InputBox
                    key={field.name}
                    {...field}
                    onChange={handleInputChange(field.name)}
                    value={
                      field.inputType === 'checkbox'
                        ? formData[field.name] || false
                        : formData[field.name] || ''
                    }
                    className={field.inputType === 'checkbox' ? 'mt-12' : ''}
                  />
                )
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                    isFormValid && !isSubmitting
                      ? 'bg-secondary hover:bg-secondary-700'
                      : 'cursor-not-allowed bg-gray-400'
                  }`}
                >
                  {isSubmitting ? 'Enviant...' : "Registra't"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

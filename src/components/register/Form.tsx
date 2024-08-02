'use client';

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputBox from '@/src/components/ui/InputBox';
import { api } from '@/src/services/api';

interface FormField {
  icon: React.ElementType;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

interface FormData {
  [key: string]: string;
}

const formFields: FormField[] = [
  {
    icon: User,
    label: 'Nom',
    type: 'text',
    name: 'firstName',
    placeholder: 'El teu nom',
    required: true,
  },
  {
    icon: User,
    label: 'Cognoms',
    type: 'text',
    name: 'lastName',
    placeholder: 'Els teus cognoms',
    required: true,
  },
  {
    icon: Mail,
    label: 'Correu electrònic',
    type: 'email',
    name: 'email',
    placeholder: 'El teu correu electrònic',
    required: true,
  },
  {
    icon: Phone,
    label: 'Telèfon (opcional)',
    type: 'tel',
    name: 'phone',
    placeholder: 'El teu número de telèfon',
    required: false,
  },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const requiredFields = formFields.filter((field) => field.required);
    const areAllRequiredFieldsFilled = requiredFields.every((field) =>
      formData[field.name]?.trim()
    );
    setIsFormValid(areAllRequiredFieldsFilled);
  }, [formData]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const result = await api.submitForm(formData);

        if (result.result === 'success') {
          toast.success('Registre enviat correctament!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({});
        } else {
          throw new Error(result.message || 'Error desconegut');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Hi ha hagut un error en enviar el registre. Si us plau, torna-ho a provar.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary">Registra&apos;t</h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <InputBox
                  key={field.name}
                  Icon={field.icon}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  onChange={(value) => handleInputChange(field.name, value)}
                  value={formData[field.name] || ''}
                />
              ))}
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

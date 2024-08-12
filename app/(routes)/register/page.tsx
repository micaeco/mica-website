'use client';

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Info } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IInputField, IFormData } from '@/src/types';
import InputBox from '@/src/components/ui/InputBox';
import { validateForm, validateField } from '@/src/utils/validation';

const formFields: IInputField[] = [
  {
    type: 'input',
    icon: User,
    label: 'Nom',
    inputType: 'text',
    name: 'name',
    placeholder: 'El teu nom',
    required: true,
  },
  {
    type: 'input',
    icon: User,
    label: 'Cognoms',
    inputType: 'text',
    name: 'surname',
    placeholder: 'Els teus cognoms',
    required: true,
  },
  {
    type: 'input',
    icon: Mail,
    label: 'Correu electrònic',
    inputType: 'email',
    name: 'email',
    placeholder: 'El teu correu electrònic',
    required: true,
  },
  {
    type: 'input',
    icon: Phone,
    label: 'Telèfon (opcional)',
    inputType: 'tel',
    name: 'phone',
    placeholder: 'El teu número de telèfon',
    required: false,
  },
  {
    type: 'input',
    icon: Info,
    label: 'Com ens has conegut? (opcional)',
    inputType: 'text',
    name: 'referralSource',
    placeholder: 'Ex: xarxes socials, amic, etc.',
    required: false,
  },
  {
    type: 'input',
    label: 'Vull formar part del programa beta',
    inputType: 'checkbox',
    name: 'interestInBeta',
    required: false,
    className: 'mt-12',
  },
  {
    type: 'input',
    label: 'He llegit i accepto la política de privacitat',
    link: '/privacy-policy',
    inputType: 'checkbox',
    name: 'privacyPolicy',
    required: true,
  },
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    referralSource: '',
    interestInBeta: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState<{
    [K in keyof IFormData]?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { success } = validateForm(formData);
    setIsFormValid(success);
  }, [formData]);

  const handleInputChange = (name: keyof IFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    const { success, error } = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: success ? undefined : (error as string),
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { success, errors: validationErrors } = validateForm(formData);

    if (!success) {
      setErrors(validationErrors || {});
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/lead/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.name} ${formData.surname}`,
          email: formData.email,
          phone: formData.phone,
          interestInBeta: formData.interestInBeta,
          referralSource: formData.referralSource,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit the form');
      }

      toast.success(data.message, { autoClose: 5000 });
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        referralSource: '',
        interestInBeta: false,
        privacyPolicy: false,
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Hi ha hagut un error en enviar el formulari. Si us plau, torna-ho a intentar més tard.',
        { autoClose: 5000 }
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary">Registra't</h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <InputBox
                  key={field.name}
                  {...field}
                  onChange={(value) => handleInputChange(field.name as keyof IFormData, value)}
                  value={formData[field.name] || (field.inputType === 'checkbox' ? false : '')}
                  error={errors[field.name]}
                />
              ))}

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`flex w-full justify-center rounded-md border px-4 py-2 text-white shadow-sm ${
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

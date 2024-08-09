'use client';

import React, { useState, useEffect } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

import { IInputField, IFormData } from '@/src/types';
import InputBox from '@/src/components/ui/InputBox';
import PhoneInput from '@/src/components/ui/PhoneInputBox';
import { validateForm, validateField } from '@/src/lib/validators';

const formFields: IInputField[] = [
  {
    type: 'input',
    icon: User,
    label: 'Nom',
    inputType: 'text',
    name: 'name',
    placeholder: 'El teu nom',
    required: true,
    onChange: () => {},
  },
  {
    type: 'input',
    icon: User,
    label: 'Cognoms',
    inputType: 'text',
    name: 'surname',
    placeholder: 'Els teus cognoms',
    required: true,
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
    onChange: () => {},
  },
  /*{
    type: 'input',
    icon: Phone,
    label: 'Telèfon (opcional)',
    inputType: 'tel',
    name: 'phone',
    required: false,
    onChange: () => {},
  },*/
  {
    type: 'input',
    label: 'Vull formar part del programa beta',
    inputType: 'checkbox',
    name: 'interestInBeta',
    required: false,
    onChange: () => {},
    className: 'mt-12',
  },
  {
    type: 'input',
    label: 'He llegit i accepto la política de privacitat',
    link: '/privacy-policy',
    inputType: 'checkbox',
    name: 'privacyPolicy',
    required: true,
    onChange: () => {},
  },
];

/*
export default function RegistrationForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    interestInBeta: false,
    privacyPolicy: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof IFormData, string | undefined>>>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (name: keyof IFormData, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'phone' && value === '' ? '' : value,
    }));

    const { success, error } = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: success ? undefined : error || undefined,
    }));
  };

  useEffect(() => {
    const { success } = validateForm(formData);
    setIsFormValid(success);
  }, [formData]);

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
      const result = await fetch('/api/lead/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await result.json();

      if (!result.ok) {
        toast.error(data.message);
        throw new Error('Failed to submit the form');
      }

      console.log('Form submitted successfully:', formData);
      toast.success(
        'Formulari enviat correctament. Revisa el teu correu electrònic per verificar la teva adreça.'
      );
    } catch (error) {
      toast.error('Hi ha hagut un error en enviar el formulari.');
      console.error('Submission error:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-primary">Registra't</h2>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) =>
                field.name === 'phone' ? (
                  <PhoneInput
                    key={field.name}
                    {...field}
                    required={field.required}
                    onChange={(value) => handleInputChange(field.name as keyof IFormData, value)}
                    value={formData[field.name] || ''}
                    error={errors[field.name]}
                  />
                ) : (
                  <InputBox
                    key={field.name}
                    {...field}
                    onChange={(value) => handleInputChange(field.name as keyof IFormData, value)}
                    value={
                      field.inputType === 'checkbox'
                        ? formData[field.name] || false
                        : formData[field.name] || ''
                    }
                    error={errors[field.name]}
                  />
                )
              )}

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
      <ToastContainer autoClose={4000} closeOnClick pauseOnHover />
    </section>
  );
}
  */

export default function Register() {
  return (
    <div className="py-52 text-center">
      <h3>De moment aquesta secció és buida</h3>
      <p>Encara hi estem treballant!</p>
    </div>
  );
}

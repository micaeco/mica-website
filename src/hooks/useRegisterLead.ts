import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IFormData } from '@/src/types';
import { validateForm, validateField } from '@/src/lib/validation';

export function useRegisterLeads() {
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
      const response = await fetch(`/api/lead/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
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

  return { formData, errors, isSubmitting, isFormValid, handleInputChange, handleSubmit };
}
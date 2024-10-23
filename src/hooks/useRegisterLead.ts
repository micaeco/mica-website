import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

import { IFormData } from '@/types';

const STORAGE_KEY = 'formData';

export function useRegisterLeads() {
  const [formData, setFormData] = useState<IFormData>(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const success = useTranslations('success');
  const errors = useTranslations('errors');

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    const hasValue = Object.values(formData).some(value =>
      typeof value === 'string' ? value.trim() !== '' : value === true
    );

    if (hasValue) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  const handleInputChange = (name: keyof IFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

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
        toast.error(errors(data.error) || errors('DEFAULT'), { autoClose: 5000 });
        return;
      }

      toast.success(success(data.message), { autoClose: 5000 });
      localStorage.removeItem(STORAGE_KEY);
      setFormData(getInitialFormData());
    } catch (error) {
      toast.error(
        errors((error as Error).message) || errors('DEFAULT'),
        { autoClose: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, isSubmitting, handleInputChange, handleSubmit };
}

function getInitialFormData(): IFormData {
  return {
    name: '',
    surname: '',
    email: '',
    phone: '',
    referralSource: '',
    interestInBeta: false,
    privacyPolicy: false,
  };
}
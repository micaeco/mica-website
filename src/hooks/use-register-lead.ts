import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocale, useTranslations } from 'next-intl';

import { FormData } from '@/types';
import { registerLead } from '@/lib/gas';

const STORAGE_KEY = 'formData';

export function useRegisterLeads() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const locale = useLocale();

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

  const handleInputChange = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await registerLead({
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        interestInBeta: formData.interestInBeta,
        referralSource: formData.referralSource,
        locale,
      });

      if (errors.has(response)) {
        toast.error(errors(response));
        return;
      }

      toast.success(success(response));
      localStorage.removeItem(STORAGE_KEY);
      setFormData(getInitialFormData());
    } catch (error) {
      toast.error(errors('DEFAULT'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, isSubmitting, handleInputChange, handleSubmit };
}

function getInitialFormData(): FormData {
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
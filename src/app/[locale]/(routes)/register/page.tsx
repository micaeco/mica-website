'use client';

import React from 'react';
import { useRegisterLeads } from '@/hooks/';

import RegisterForm from './components/form';

export default function RegistrationForm() {
  const { formData, isSubmitting, handleSubmit, handleInputChange } = useRegisterLeads();

  return (
    <main>
      <RegisterForm
        formData={formData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </main>
  );
}

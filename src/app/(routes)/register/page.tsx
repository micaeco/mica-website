'use client';

import React from 'react';
import { useRegisterLeads } from '@/src/hooks/';

import Form from '@/src/components/sections/register/form';

export default function RegistrationForm() {
  const { formData, errors, isSubmitting, isFormValid, handleSubmit, handleInputChange } =
    useRegisterLeads();

  return (
    <main>
      <Form
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </main>
  );
}

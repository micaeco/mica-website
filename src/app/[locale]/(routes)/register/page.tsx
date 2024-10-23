'use client';

import React from 'react';
import { useRegisterLeads } from '@/hooks/';

import Form from '@/components/sections/register/form';

export default function RegistrationForm() {
  const { formData, isSubmitting, handleSubmit, handleInputChange } = useRegisterLeads();

  return (
    <main>
      <Form
        formData={formData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </main>
  );
}

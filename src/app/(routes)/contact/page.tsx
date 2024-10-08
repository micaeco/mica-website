'use client';

import ContactForm from '@/src/components/sections/contact/form';
import { useContactSubmission } from '@/src/hooks/useContactSubmission';

export default function Contact() {
  const { name, setName, email, setEmail, message, setMessage, handleSubmit, isSubmitting } =
    useContactSubmission();

  return (
    <main>
      <ContactForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}

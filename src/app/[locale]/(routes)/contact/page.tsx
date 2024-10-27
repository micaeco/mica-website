'use client';

import ContactForm from '@/app/[locale]/(routes)/contact/components/form';
import { useContactSubmission } from '@/hooks/use-contact-submission';

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

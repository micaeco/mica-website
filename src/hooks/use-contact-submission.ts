import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

import { storeContactSubmission } from '@/lib/google/sheets';
import { validateEmail } from '@/lib/utils';

export function useContactSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const success = useTranslations('success');
  const errors = useTranslations('errors');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (!name || !email || !message) {
        throw new Error('MISSING_FIELDS');
      }

      if (!validateEmail(email)) {
        throw new Error('INVALID_EMAIL');
      }

      await storeContactSubmission(name, email, message);

      toast.success(success("CONTACT_FORM_SENT"));
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const message = error instanceof Error ? error.message : "DEFAULT";
      toast.error(errors.has(message) ? errors(message) : errors("DEFAULT"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name, setName,
    email, setEmail,
    message, setMessage,
    isSubmitting,
    handleSubmit,
  };
}
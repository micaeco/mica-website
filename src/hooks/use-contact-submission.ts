import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';
import { contactSubmission } from '@/lib/gas';

export function useContactSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const success = useTranslations("success");
  const errors = useTranslations("errors");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await contactSubmission(name, email, message);

      if (errors.has(response)) {
        toast.error(errors(response));
        return;
      }

      toast.success(success(response));
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error(errors('DEFAULT'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    isSubmitting,
    handleSubmit,
  };
}
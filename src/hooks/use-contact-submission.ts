import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(errors(data.error) || errors('DEFAULT'), { autoClose: 5000 });
        return;
      }

      toast.success(success(data.message), { autoClose: 5000 });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error(errors('DEFAULT'), { autoClose: 5000 });
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
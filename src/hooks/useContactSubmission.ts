import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const STORAGE_KEY = 'formData';

interface IFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit the form');
      }

      toast.success(result.message, { autoClose: 5000 });
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Hi ha hagut un error en enviar el formulari. Si us plau, torna-ho a intentar més tard.',
        { autoClose: 5000 }
      );
    }

    setIsSubmitting(false);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    isSubmitting,
    setIsSubmitting,
    handleSubmit,
  };
}

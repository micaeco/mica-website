import { IFormData } from '@/src/types';

export const api = {
  submitForm: async (formData: IFormData) => {
    try {
      console.log('Submitting form data:', formData);

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Server response status:', response.status);

      const responseText = await response.text();
      console.log('Server response text:', responseText);

      if (!response.ok) {
        console.error('Server responded with an error:', response.status, responseText);
        throw new Error(`Error en la resposta del servidor: ${response.status} ${responseText}`);
      }

      const data = JSON.parse(responseText);
      console.log('Server response data:', data);
      return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  },
};

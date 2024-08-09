import { z } from 'zod';
import { IFormData } from '@/src/types';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  surname: z.string().min(1, 'Surname is required').max(255, 'Surname is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine((val) => val === '' || /^\+\d{1,3}\s?\d{9,10}$/.test(val), {
    message: 'Invalid phone number format',
  }),
  interestInBeta: z.boolean(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy',
  }),
});

export const validateForm = (
  data: IFormData
): { success: boolean; errors: Partial<Record<keyof IFormData, string>> | null } => {
  try {
    formSchema.parse(data);
    return { success: true, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce(
        (acc, curr) => {
          if (curr.path[0]) {
            acc[curr.path[0] as keyof IFormData] = curr.message;
          }
          return acc;
        },
        {} as Partial<Record<keyof IFormData, string>>
      );
      return { success: false, errors };
    }
    return { success: false, errors: { form: 'An unexpected error occurred' } };
  }
};

export const validateField = (
  field: keyof IFormData,
  value: any
): { success: boolean; error: string | null } => {
  try {
    const schema = formSchema.shape[field as keyof z.infer<typeof formSchema>];
    schema.parse(value);
    return { success: true, error: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    return { success: false, error: 'An unexpected error occurred' };
  }
};

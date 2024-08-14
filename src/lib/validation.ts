import { z } from 'zod';
import { IFormData } from '@/src/types';

export const formSchema = z.object({
  name: z.string().min(1, 'El nom és obligatori').max(255, 'El nom és massa llarg'),
  surname: z.string().min(1, 'El cognom és obligatori').max(255, 'El cognom és massa llarg'),
  email: z
    .string()
    .min(1, 'La direcció de correu és obligatoria')
    .email('Direcció de correu electrònic no vàlida'),
  phone: z.string().refine(
    (val) => {
      if (val === '') return true;
      const cleanedNumber = val.replace(/\s/g, '');
      return /^[6789]\d{8}$/.test(cleanedNumber);
    },
    {
      message: 'Nom de telèfon no vàlid',
    }
  ),
  interestInBeta: z.boolean(),
  referralSource: z.string().max(255, 'La font de referència és massa llarga'),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Has d'acceptar la política de privacitat",
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

'use server'

import { validateEmail } from '@/lib/utils';
import { storeContactSubmission } from '@/services/google/sheets';
import { sendContactSubmission } from '@/services/slack';

export async function submitContactForm(name: string, email: string, message: string) {
  try {
    if (!name || !email || !message) {
      throw new Error('MISSING_FIELDS');
    }

    if (!validateEmail(email)) {
      throw new Error('INVALID_EMAIL');
    }

    await storeContactSubmission(name, email, message);
    await sendContactSubmission(name, email, message);
  } catch (error) {
    throw error;
  }
}
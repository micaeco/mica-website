'use server';

import { validateEmail, validatePhone } from "@/lib/utils";
import { sendVerificationEmail } from "@/services/google/gmail";
import { storeUnverifiedLead } from "@/services/google/sheets";
import { sendRegisteredLead } from "@/services/slack";

export async function registerLead(name: string, surname: string, email: string, phone: string, referralSource: string, interestInBeta: boolean, locale: string) {
  try {
    if (!validateEmail(email)) {
      throw new Error('INVALID_EMAIL');
    }

    else if (phone && !validatePhone(phone)) {
      throw new Error('INVALID_PHONE');
    }

    const token = await storeUnverifiedLead({
      name,
      surname,
      email,
      phone,
      referralSource,
      interestInBeta,
      locale
    });

    await sendVerificationEmail(locale, email, token);

    await sendRegisteredLead(
      name,
      surname,
      email,
      phone,
      referralSource,
      interestInBeta
    );

    return { success: true };
  } catch (error) {
    throw error;
  }
}
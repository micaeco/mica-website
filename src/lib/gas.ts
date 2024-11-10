"use server";

const GOOGLE_APPS_SCRIPT_URL_LEADS = process.env.GOOGLE_APPS_SCRIPT_URL_LEADS;
const GOOGLE_APPS_SCRIPT_URL_CONTACT = process.env.GOOGLE_APPS_SCRIPT_URL_CONTACT;

if (!GOOGLE_APPS_SCRIPT_URL_LEADS) {
  throw new Error('GOOGLE_APPS_SCRIPT_URL is not defined in the environment variables');
}

export async function registerLead(leadData: {
  name: string;
  surname: string;
  email: string;
  phone: string;
  interestInBeta: boolean;
  referralSource: string;
  locale: string;
}): Promise<void> {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL_LEADS as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    const data = await response.json();

    if (data.error) {
      return data.error;
    }

    return data.message;
  } catch (error) {
    throw error;
  }
}

export async function verifyLead(token: string) {
  try {
    const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL_LEADS}?token=${token}`);

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    const data = await response.json();

    if (data.error) {
      return data.error;
    }

    return data.message;
  } catch (error) {
    throw error;
  }
}

export async function contactSubmission(name: string, email: string, message: string) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL_CONTACT as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    const data = await response.json();

    if (data.error) {
      return data.error;
    }

    return data.message;
  } catch (error) {
    throw error;
  }
}

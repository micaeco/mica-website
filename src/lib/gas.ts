import { ERROR_CODES, SUCCESS_CODES, getErrorMessage, getSuccessMessage } from './errors';

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

if (!GOOGLE_APPS_SCRIPT_URL) {
  throw new Error('GOOGLE_APPS_SCRIPT_URL is not defined in the environment variables');
}

export { ERROR_CODES, SUCCESS_CODES, getErrorMessage, getSuccessMessage };

export async function registerLead(leadData: {
  name: string;
  surname: string;
  email: string;
  phone: string;
  interestInBeta: boolean;
  referralSource: string;
}) {
  const response = await fetch(GOOGLE_APPS_SCRIPT_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });
  console.log('registerLead', leadData);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function verifyLead(token: string) {
  const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?token=${token}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

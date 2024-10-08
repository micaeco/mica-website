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
}) {
  const response = await fetch(GOOGLE_APPS_SCRIPT_URL_LEADS as string, {
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
  const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL_LEADS}?token=${token}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

export async function contactSubmission(name: string, email: string, message: string) {
  const response = await fetch(GOOGLE_APPS_SCRIPT_URL_CONTACT as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

import { render } from '@react-email/render';
import { getTranslations } from 'next-intl/server';
import Verification from './verification';

export async function getVerificationEmail(
  locale: string,
  token: string,
  tokenExpirationDays: number
) {
  const content = await getTranslations({ namespace: "emails.verification", locale });

  const text = await render(Verification({ content, locale, token, tokenExpirationDays }), {
    plainText: true,
  });
  const html = await render(Verification({ content, locale, token, tokenExpirationDays }), {
    pretty: true,
  });

  const title = await getTranslations("emails.verification.title");

  return {
    subject: `${title("")} | MICA`,
    text,
    html
  };
}
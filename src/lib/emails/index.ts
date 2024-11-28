import { render } from '@react-email/render';
import { getTranslations } from 'next-intl/server';
import { VerificationEmail } from './verification';
import { Verification } from 'next/dist/lib/metadata/types/metadata-types';

export async function getVerificationEmail(
  link: string,
  tokenExpirationDays: number
) {
  const t = await getTranslations('emails.verification');

  const content = {
    title: t('title'),
    greeting: t('greeting'),
    thankYou: t('thankYou'),
    instruction: t('instruction'),
    button: t('button'),
    important: t('important'),
    fallback: t('fallback'),
    expiryNote: t('expiryNote', { days: tokenExpirationDays }),
    help: t('help'),
    regards: t('regards'),
    teamSignature: t('teamSignature'),
    automaticNote: t('automaticNote')
  };

  const text = await render(VerificationEmail({ content, verificationLink: link }), {
    plainText: true,
  });
  const html = await render(VerificationEmail({ content, verificationLink: link }), {
    pretty: true,
  });

  return {
    subject: `${content.title} | MICA`,
    text,
    html
  };
}
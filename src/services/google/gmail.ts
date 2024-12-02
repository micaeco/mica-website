"use server";

import { config } from './config';
import { gmail } from './clients';
import { getVerificationEmail } from '@/lib/emails';
import { encodeMIMEWords } from './utils';

export async function sendVerificationEmail(email: string, locale: string, token: string) {
  try {
    const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/${locale}/verify/${token}`;
    const template = await getVerificationEmail(verificationLink, config.tokenExpirationDays);

    const emailLines = [
      `To: ${email}`,
      'From: "MICA" <admin@mica.eco>',
      'Reply-To: admin@mica.eco',
      `Subject: ${encodeMIMEWords(template.subject)}`,
      'MIME-Version: 1.0',
      'Content-Type: multipart/alternative; boundary="boundary"',
      '',
      '--boundary',
      'Content-Type: text/plain; charset="UTF-8"',
      '',
      template.text,
      '',
      '--boundary',
      'Content-Type: text/html; charset="UTF-8"',
      '',
      template.html,
      '',
      '--boundary--'
    ];

    const emailRaw = emailLines.join('\r\n');
    const encodedEmail = Buffer.from(emailRaw, 'utf8')
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedEmail }
    });
  } catch (error) {
    console.error('Failed to send verification email:', error);
    throw new Error('Failed to send verification email');
  }
}
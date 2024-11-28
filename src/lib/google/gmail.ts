"use server";

import { gmail, TOKEN_EXPIRATION_DAYS } from './config';
import { environment } from '@/lib/environment';
import { getVerificationEmail } from '@/lib/emails';

function encodeMIMEWords(text: string): string {
  const encoded = Buffer.from(text, 'utf-8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return `=?UTF-8?B?${encoded}?=`;
}

export async function sendVerificationEmail(email: string, locale: string, token: string) {
  try {
    const verificationLink = `${environment.appUrl}/${locale}/verify/${token}`;
    const template = await getVerificationEmail(verificationLink, TOKEN_EXPIRATION_DAYS);

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
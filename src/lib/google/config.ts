import { JWT } from 'google-auth-library';
import { google } from 'googleapis';
import { environment } from '@/lib/environment';

export const TOKEN_EXPIRATION_DAYS = 30;

export const sheets = google.sheets({
  version: 'v4',
  auth: new JWT({
    email: environment.google.clientEmail,
    key: environment.google.privateKey!.replace(/\\n/g, '\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ]
  })
})

export const gmail = google.gmail({
  version: 'v1',
  auth: new JWT({
    email: environment.google.clientEmail,
    key: environment.google.privateKey!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
    subject: "admin@mica.eco"
  })
});
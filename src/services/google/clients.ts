import { JWT } from 'google-auth-library';
import { google } from 'googleapis';

import { config } from './config';

export const gmail = google.gmail({
  version: 'v1',
  auth: new JWT({
    email: config.clientEmail,
    key: config.privateKey!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
    subject: "admin@mica.eco"
  })
});

export const sheets = google.sheets({
  version: 'v4',
  auth: new JWT({
    email: config.clientEmail,
    key: config.privateKey!.replace(/\\n/g, '\n'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ]
  })
})


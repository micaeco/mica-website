if (!process.env.GOOGLE_PRIVATE_KEY ||
  !process.env.GOOGLE_CLIENT_EMAIL ||
  !process.env.GOOGLE_LEADS_SPREADSHEET_ID ||
  !process.env.GOOGLE_CONTACTS_SPREADSHEET_ID) {
  throw new Error("Missing env variables for google");
}

export const config = {
  clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  privateKey: process.env.GOOGLE_PRIVATE_KEY,
  leadsSpreadsheetId: process.env.GOOGLE_LEADS_SPREADSHEET_ID,
  contactsSpreadsheetId: process.env.GOOGLE_CONTACTS_SPREADSHEET_ID,
  tokenExpirationDays: 30,
}
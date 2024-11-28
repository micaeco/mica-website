export const environment = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  appUrl: process.env.NEXT_PUBLIC_APP_URL,
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiToken: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-01-01',
  },
  google: {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_PRIVATE_KEY,
    leadsSpreadsheetId: process.env.GOOGLE_LEADS_SPREADSHEET_ID,
    contactsSpreadsheetId: process.env.GOOGLE_CONTACTS_SPREADSHEET_ID,
  }
}
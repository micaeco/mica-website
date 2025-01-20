export const env = {
  env: process.env.VERCEL_ENV || process.env.NODE_ENV || "development",
  appUrl:
    (process.env.VERCEL_ENV || process.env.NODE_ENV) === "production"
      ? "https://mica.eco"
      : (process.env.VERCEL_ENV || process.env.NODE_ENV) === "preview"
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000",

  google: {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL!,
    privateKey: process.env.GOOGLE_PRIVATE_KEY!,
    leadsSpreadsheetId: process.env.GOOGLE_LEADS_SPREADSHEET_ID!,
    tokensSpreadsheetId: process.env.GOOGLE_TOKENS_SPREADSHEET_ID!,
    contactsSpreadsheetId: process.env.GOOGLE_CONTACTS_SPREADSHEET_ID!,
  },

  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiToken: process.env.SANITY_API_TOKEN!,
    apiVersion: "2024-02-09",
  },

  slack: {
    botToken: process.env.SLACK_BOT_TOKEN!,
    salesChannelId:
      (process.env.VERCEL_ENV || process.env.NODE_ENV) === "development" ||
      (process.env.VERCEL_ENV || process.env.NODE_ENV) === "preview"
        ? process.env.SLACK_TESTS_CHANNEL_ID!
        : process.env.SLACK_SALES_CHANNEL_ID!,
    websiteChannelId:
      (process.env.VERCEL_ENV || process.env.NODE_ENV) === "development" ||
      (process.env.VERCEL_ENV || process.env.NODE_ENV) === "preview"
        ? process.env.SLACK_TESTS_CHANNEL_ID!
        : process.env.SLACK_WEBSITE_CHANNEL_ID!,
  },
} as const;

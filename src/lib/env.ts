const {
  VERCEL_ENV,
  NODE_ENV,
  VERCEL_URL,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  GOOGLE_LEADS_SPREADSHEET_ID,
  GOOGLE_TOKENS_SPREADSHEET_ID,
  GOOGLE_CONTACTS_SPREADSHEET_ID,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN,
  SLACK_BOT_TOKEN,
  SLACK_TESTS_CHANNEL_ID,
  SLACK_SALES_CHANNEL_ID,
  SLACK_WEBSITE_CHANNEL_ID,
} = process.env;

export const env = {
  env: VERCEL_ENV || NODE_ENV || "development",
  appUrl:
    (VERCEL_ENV || NODE_ENV) === "production"
      ? "https://mica.eco"
      : (VERCEL_ENV || NODE_ENV) === "preview"
        ? `https://${VERCEL_URL}`
        : "http://localhost:3000",

  google: {
    clientEmail: GOOGLE_CLIENT_EMAIL!,
    privateKey: GOOGLE_PRIVATE_KEY!,
    leadsSpreadsheetId: GOOGLE_LEADS_SPREADSHEET_ID!,
    tokensSpreadsheetId: GOOGLE_TOKENS_SPREADSHEET_ID!,
    contactsSpreadsheetId: GOOGLE_CONTACTS_SPREADSHEET_ID!,
  },

  sanity: {
    projectId: NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: NEXT_PUBLIC_SANITY_DATASET!,
    apiToken: SANITY_API_TOKEN!,
    apiVersion: "2024-02-09",
  },

  slack: {
    botToken: SLACK_BOT_TOKEN!,
    salesChannelId:
      (VERCEL_ENV || NODE_ENV) === "development" || (VERCEL_ENV || NODE_ENV) === "preview"
        ? SLACK_TESTS_CHANNEL_ID!
        : SLACK_SALES_CHANNEL_ID!,
    websiteChannelId:
      (VERCEL_ENV || NODE_ENV) === "development" || (VERCEL_ENV || NODE_ENV) === "preview"
        ? SLACK_TESTS_CHANNEL_ID!
        : SLACK_WEBSITE_CHANNEL_ID!,
  },
} as const;

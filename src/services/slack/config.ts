if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error('Missing env variables for Slack');
}

if (process.env.NODE_ENV === 'development' && !process.env.SLACK_TESTS_CHANNEL_ID) {
  throw new Error('Missing development env variables for Slack');
}

else if (process.env.NODE_ENV === 'production' && (!process.env.SLACK_WEBSITE_CHANNEL_ID || !process.env.SLACK_SALES_CHANNEL_ID)) {
  throw new Error('Missing production env variables for Slack');
}

export const config = {
  botToken: process.env.SLACK_BOT_TOKEN,
  testsChannelId: process.env.SLACK_TESTS_CHANNEL_ID,
  websiteChannelId: process.env.SLACK_WEBSITE_CHANNEL_ID,
  salesChannelId: process.env.SLACK_SALES_CHANNEL_ID,
} as const;

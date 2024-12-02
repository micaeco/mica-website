"use server";

import { config } from './config';

type SlackMessage = {
  blocks: Array<{
    type: 'header' | 'section';
    text: {
      type: 'plain_text' | 'mrkdwn';
      text: string;
      emoji?: boolean;
    }
  }>;
};

export async function sendContactSubmission(name: string, email: string, message: string) {
  const slackMessage = createSlackMessage(':inbox_tray:', 'New Contact Form Submission', {
    Name: name,
    Email: email,
    Message: message,
  });

  await sendSlackMessage(getChannelId(config.salesChannelId!), slackMessage);
}

export async function sendRegisteredLead(
  name: string,
  surname: string,
  email: string,
  phone: string,
  referralSrc: string,
  interestInBeta: boolean,
) {
  const slackMessage = createSlackMessage(':partying_face:', 'New Lead Registered', {
    Name: `${name} ${surname}`,
    Email: email,
    Phone: phone ? phone : "N/A",
    'Referral Source': referralSrc ? referralSrc : "N/A",
    'Interest in Beta': interestInBeta ? 'Yes' : 'No',
  });

  await sendSlackMessage(getChannelId(config.salesChannelId!), slackMessage);
}

export async function sendBlogPostComment(
  postTitle: string,
  name: string,
  email: string,
  message: string,
) {
  const slackMessage = createSlackMessage(
    ':black_nib:',
    `New Blog Post Comment on ${postTitle}`,
    {
      Post: postTitle,
      Name: name,
      Email: email,
      Message: message,
    }
  );

  await sendSlackMessage(getChannelId(config.websiteChannelId!), slackMessage);
}

/* Helper functions */
async function sendSlackMessage(channelId: string, message: SlackMessage): Promise<any> {
  try {
    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.botToken}`,
      },
      body: JSON.stringify({
        channel: channelId,
        ...message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('Error sending Slack message:', data);
      throw new Error("INTERNAL_ERROR");
    }

    return data;
  } catch (error) {
    console.error('Error sending Slack message:', error);
    throw new Error("INTERNAL_ERROR");
  }
}

function createSlackMessage(emoji: string, title: string, fields: Record<string, string | boolean>): SlackMessage {
  return {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${emoji} ${title}`,
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: Object.entries(fields)
            .map(([key, value]) => `*${key}:* ${value}`)
            .join('\n'),
        },
      },
    ],
  };
}

function getChannelId(prodChannelId: string): string {
  return process.env.NODE_ENV === "production"
    ? prodChannelId
    : config.testsChannelId!;
}
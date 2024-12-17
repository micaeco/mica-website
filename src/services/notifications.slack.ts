import { env } from "@/lib/env";
import { NotificationMessage, NotificationService } from "./notifications.interface";
import { ServerError } from "@/lib/constants";

type SlackMessage = {
  blocks: Array<{
    type: "header" | "section";
    text: {
      type: "plain_text" | "mrkdwn";
      text: string;
      emoji?: boolean;
    };
  }>;
};

export class SlackNotificationService implements NotificationService {
  async notifyWebsiteTeam(message: NotificationMessage): Promise<void> {
    this.sendSlackMessage(env.slack.websiteChannelId, this.createSlackMessage(message));
  }

  async notifySalesTeam(message: NotificationMessage): Promise<void> {
    this.sendSlackMessage(env.slack.websiteChannelId, this.createSlackMessage(message));
  }

  private async sendSlackMessage(channelId: string, message: SlackMessage): Promise<void> {
    const response = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.slack.botToken}`,
      },
      body: JSON.stringify({
        channel: channelId,
        ...message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("Error sending Slack message:", data);
      throw new ServerError();
    }
  }

  private createSlackMessage(message: NotificationMessage): SlackMessage {
    return {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: message.title,
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message.body,
          },
        },
      ],
    };
  }
}

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

import { env } from "@/lib/env";
import { EmailService } from "./email.contract";
import { ServerError } from "@/lib/constants";

const sesClient = new SESClient({
  region: env.ses.region,
  credentials: {
    accessKeyId: env.ses.accessKeyId,
    secretAccessKey: env.ses.secretAccessKey,
  },
});

export class SESEmailService implements EmailService {
  async send(
    to: string,
    from: string,
    subject: string,
    text: string,
    html?: string
  ): Promise<void> {
    const params = {
      Source: from,
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Html: {
            Data: html,
          },
          Text: {
            Data: text,
          },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      await sesClient.send(command);
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new ServerError();
    }
  }
}

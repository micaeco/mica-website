import { JWT } from "google-auth-library";
import { gmail_v1, google } from "googleapis";
import { EmailService } from "./email.contract";
import { env } from "@/lib/env";

export class GmailEmailService implements EmailService {
  private readonly gmail: gmail_v1.Gmail;

  constructor() {
    this.gmail = google.gmail({
      version: "v1",
      auth: new JWT({
        email: env.google.clientEmail,
        key: env.google.privateKey!.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/gmail.send"],
        subject: "admin@mica.eco",
      }),
    });
  }

  async send(
    to: string,
    from: string,
    subject: string,
    text: string,
    html?: string
  ): Promise<void> {
    const emailLines = [
      `To: ${to}`,
      `From: "MICA" <${from}>`,
      "Reply-To: admin@mica.eco",
      `Subject: ${this.encodeMIMEWords(subject)}`,
      "MIME-Version: 1.0",
      'Content-Type: multipart/alternative; boundary="boundary"',
      "",
      "--boundary",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      text,
      "",
      "--boundary",
      'Content-Type: text/html; charset="UTF-8"',
      "",
      html,
      "",
      "--boundary--",
    ];

    const emailRaw = emailLines.join("\r\n");
    const encodedEmail = Buffer.from(emailRaw, "utf8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await this.gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedEmail },
    });
  }

  private encodeMIMEWords(text: string): string {
    const encoded = Buffer.from(text, "utf-8")
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return `=?UTF-8?B?${encoded}?=`;
  }
}

"use server";

import { randomUUID } from "crypto";
import { render } from "@react-email/render";

import { env } from "@/lib/env";
import { AppError, AlreadyVerifiedError } from "@/lib/constants";
import { GmailEmailService } from "@/services/email.gmail";
import { SheetsTableService } from "@/services/database.sheets";
import { SlackNotificationService } from "@/services/notifications.slack";
import { ErrorKey, SuccessKey } from "@/types/errors";
import { Lead, Token } from "@/types/lead";
import VerificationEmail from "@/components/emails/verification";
import { getMessages } from "next-intl/server";

export async function registerLead(
  lead: Lead
): Promise<{ success: boolean; code: ErrorKey | SuccessKey }> {
  try {
    const tokensTable = new SheetsTableService<Token>(env.google.tokensSpreadsheetId, [
      "email",
      "token",
    ]);
    const leadsTable = new SheetsTableService<Lead>(env.google.leadsSpreadsheetId, [
      "name",
      "surname",
      "email",
      "phone",
      "referralSource",
      "interestInBeta",
      "locale",
      "isVerified",
    ]);
    const emailService = new GmailEmailService();
    const notificationService = new SlackNotificationService();

    // Check if email is already verified
    const verifiedLeads = await leadsTable.query({
      filters: [
        { field: "email", operator: "=", value: lead.email },
        { field: "isVerified", operator: "=", value: true },
      ],
    });

    if (verifiedLeads.length > 0) {
      throw new AlreadyVerifiedError(`Email  ${lead.email} is already verified`);
    }

    // Generate verification token
    const token = randomUUID();

    // Store token
    await tokensTable.insert({
      email: lead.email,
      token,
    });

    // Check if lead exists
    const existingLeads = await leadsTable.query({
      filters: [{ field: "email", operator: "=", value: lead.email }],
    });

    if (existingLeads.length > 0) {
      // Update existing lead
      await leadsTable.update(existingLeads[0].id, {
        ...lead,
        isVerified: false,
      });
    } else {
      // Create new lead
      await leadsTable.insert({
        ...lead,
        isVerified: false,
      });
    }

    const messages = (await getMessages()) as unknown as IntlMessages;
    await emailService.send(
      lead.email,
      await render(VerificationEmail({ messages, locale: lead.locale, token }), {
        pretty: true,
      }),
      await render(VerificationEmail({ messages, locale: lead.locale, token }), {
        plainText: true,
      })
    );

    await notificationService.notifyWebsiteTeam({
      title: ":tada: New lead registered!",
      body: `*Name:* ${lead.name}\n*Surname:* ${lead.surname}\n*Email:* ${lead.email}\n${lead.phone && "*Phone:*" && lead.phone && "\n"}${lead.referralSource && "*Referral Src:*" && lead.referralSource && "\n"}`,
    });

    return { success: true, code: "LEAD_REGISTERED" };
  } catch (error) {
    console.error("Failed to store lead:", error);
    return { success: false, code: error instanceof AppError ? error.code : "UNKNOWN_ERROR" };
  }
}

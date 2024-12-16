"use server";

import { env } from "@/lib/env";
import { SheetsTableService } from "@/services/database.sheets";
import { SlackNotificationService } from "@/services/notifications.slack";
import { ErrorKey, SuccessKey } from "@/types/errors";
import { AppError } from "@/lib/constants";
import { ContactForm, Contact } from "@/types/contact";

export async function submitContactForm(
  form: ContactForm
): Promise<{ success: boolean; code: ErrorKey | SuccessKey }> {
  try {
    const contactsTable = new SheetsTableService<Contact>(env.google.contactsSpreadsheetId, [
      "name",
      "email",
      "message",
    ]);
    const notificationService = new SlackNotificationService();

    await contactsTable.insert({
      ...form,
    });
    await notificationService.notifySalesTeam({
      title: "New contact form submission",
      body: "*Name:* " + form.name + "\n*Email:* " + form.email + "\n*Message:* " + form.message,
    });

    return { success: true, code: "CONTACT_FORM_SENT" };
  } catch (error) {
    console.error("Failed to store contact:", error);
    if (error instanceof AppError) {
      return { success: false, code: error.code };
    }
    return { success: false, code: "SERVER_ERROR" };
  }
}

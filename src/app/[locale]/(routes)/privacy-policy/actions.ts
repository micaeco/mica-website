"use server";

import { SanityCmsService } from "@/services/cms.sanity";
import { PrivacyPolicy } from "@/types/privacy-policy";

export async function getPrivacyPolicy(locale: string): Promise<PrivacyPolicy> {
  try {
    const cms = new SanityCmsService();
    return await cms.getPrivacyPolicy(locale);
  } catch (error) {
    console.error("There was an error when fetching the privacy policy: ", error);
    return { content: "" };
  }
}

"use server";

import { SanityCmsService } from "@/services/cms/cms.sanity";
import { LegalDisclaimer } from "@/types/legal-disclaimer";

export async function getLegalDisclaimer(locale: string): Promise<LegalDisclaimer> {
  try {
    const cms = new SanityCmsService();
    return await cms.getLegalDisclaimer(locale);
  } catch (error) {
    console.error("There was an error when fetching the legal disclaimer: ", error);
    return { content: "" };
  }
}

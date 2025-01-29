"use server";

import { SanityCmsService } from "@/services/cms/cms.sanity";
import { ErrorKey, SuccessKey } from "@/types/errors";
import { Faq } from "@/types/faqs";

export async function getFaqs(
  locale: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey; faqs: Faq[] }> {
  try {
    const cms = new SanityCmsService();
    const faqs = await cms.getFaqs(locale);

    return { success: true, code: "DEFAULT", faqs };
  } catch (error) {
    console.log(error);
    return { success: false, code: "UNKNOWN_ERROR", faqs: [] };
  }
}

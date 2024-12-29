import { createTranslator } from "next-intl";
import { z } from "zod";

import en from "#/messages/en.json";

export const LeadFormSchema = (messages?: IntlMessages, locale?: string) => {
  const t = createTranslator({ locale: locale || "en", messages: messages || en });

  return z.object({
    name: z.string().min(2, {
      message: t("validation.string.min", { min: 2 }),
    }),
    surname: z.string().min(2, {
      message: t("validation.string.min", { min: 2 }),
    }),
    email: z.string().email({
      message: t("validation.string.email"),
    }),
    phone: z
      .string()
      .superRefine((val, ctx) => {
        if (val.length > 0 && !/^\+?[\d\s-()]{7,}$/.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t("validation.string.phone"),
          });
        }
      })
      .transform((val) => val.replace(/[\s()-]/g, ""))
      .optional(),
    interestInBeta: z.boolean().optional(),
    referralSource: z.string().optional(),
    privacyPolicy: z.boolean().refine((value) => value, {
      message: t("validation.required"),
    }),
  });
};

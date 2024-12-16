import { createTranslator } from "next-intl";
import { z } from "zod";

export const LeadFormSchema = (messages: IntlMessages, locale: string) => {
  const t = createTranslator({ locale, messages });

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
      .regex(/^\+?[\d\s-()]{7,}$/, {
        message: t("validation.string.phone"),
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

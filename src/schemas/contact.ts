import { createTranslator } from "next-intl";
import { z } from "zod";

import en from "#/messages/en.json";

export const ContactFormSchema = (messages: IntlMessages, locale: string) => {
  const t = createTranslator({ locale: locale || "en", messages: messages || en });

  return z.object({
    name: z.string().min(2, {
      message: t("validation.string.min", { min: 2 }),
    }),
    email: z.string().email({
      message: t("validation.string.email"),
    }),
    message: z.string().min(10, {
      message: t("validation.string.min", { min: 10 }),
    }),
  });
};

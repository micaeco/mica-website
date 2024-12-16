import { createTranslator } from "next-intl";
import { z } from "zod";

export const ContactFormSchema = (messages: IntlMessages, locale: string) => {
  const t = createTranslator({ locale, messages });

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

import { render } from "@react-email/render";
import { getMessages } from "next-intl/server";

import Verification from "./verification";

export async function getVerificationEmail(
  locale: string,
  token: string,
  tokenExpirationDays: number
) {
  const messages = await getMessages({ locale });
  const emails = messages.emails as IntlMessages["emails"];
  const content = emails.verification;

  const text = await render(Verification({ content, locale, token, tokenExpirationDays }), {
    plainText: true,
  });

  const html = await render(Verification({ content, locale, token, tokenExpirationDays }), {
    pretty: true,
  });

  const title = await content.title;

  return {
    subject: `${title} | MICA`,
    text,
    html,
  };
}

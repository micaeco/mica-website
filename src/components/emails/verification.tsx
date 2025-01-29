import { Button, Container, Hr, Link, Section, Text } from "@react-email/components";
import { createTranslator } from "next-intl";

import en from "#/messages/en.json";
import Layout from "./layout";
import { env } from "@/lib/env";
import { tokenExpirationDays } from "@/lib/constants";

interface Props {
  messages: IntlMessages;
  locale: string;
  token: string;
}

export default function VerificationEmail({ messages = en, locale = "en", token = "1234" }: Props) {
  const baseUrl = env.appUrl;
  const verificationLink = `${baseUrl}/${locale}/verify/${token}`;

  const t = createTranslator({ messages, locale });

  return (
    <Layout lang={locale} className="bg-gray-100 py-10">
      <Container className="max-w-xl rounded-md bg-white p-10 shadow-sm">
        {/* Header */}
        <Text className="mb-8 text-center text-2xl font-semibold">
          {t("emails.verification.title")}
        </Text>

        {/* Content */}
        <Text className="mb-4">{t("emails.verification.greeting")}</Text>
        <Text className="mb-4">{t("emails.verification.thankYou")}</Text>
        <Text className="mb-4">{t("emails.verification.instruction")}</Text>

        {/* Button */}
        <Section className="text-center">
          <Button
            href={verificationLink}
            className="rounded-md bg-brand-quaternary px-6 py-4 text-zinc-50"
          >
            {t("emails.verification.button")}
          </Button>
        </Section>

        {/* Important Section */}
        <Section className="my-6">
          <Text className="mb-4">
            <strong>{t("emails.verification.important")}</strong>
          </Text>
          <Text className="mb-4">{t("emails.verification.fallback")}</Text>
          <Link href={verificationLink}>{verificationLink}</Link>
        </Section>

        {/* Additional Info */}
        <Text className="mb-4">
          {t("emails.verification.expiryNote", { days: tokenExpirationDays })}
        </Text>
        <Text className="mb-4">{t("emails.verification.help")}</Text>

        {/* Signature */}
        <Text className="mb-4">
          {t("emails.verification.regards")}
          <br />
          {t("emails.verification.teamSignature")}
        </Text>

        {/* Footer */}
        <Hr className="my-8" />
        <Text className="text-center text-sm text-gray-500">
          {t("emails.verification.automaticNote")}
        </Text>
      </Container>
    </Layout>
  );
}

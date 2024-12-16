import { Button, Container, Hr, Link, Section, Text } from "@react-email/components";
import defaultContent from "#/messages/en.json";

import Layout from "./layout";

interface Props {
  content: IntlMessages["emails"]["verification"];
  locale?: string;
  token?: string;
  tokenExpirationDays?: number;
}

export default function Verification({
  content = defaultContent.emails.verification,
  locale = "en",
  token = "1234",
  tokenExpirationDays = 30,
}: Props) {
  const baseUrl =
    process.env.NODE_ENV === "production" ? "https://mica.eco" : "http://localhost:3000";

  const verificationLink = `${baseUrl}/${locale}/verify/${token}`;

  return (
    <Layout lang={locale}>
      <Section className="py-10">
        <Container className="max-w-xl rounded-md bg-white p-10 shadow-sm">
          {/* Header */}
          <Text className="mb-8 text-center text-2xl font-semibold">{content.title}</Text>

          {/* Content */}
          <Text className="mb-4">{content.greeting}</Text>
          <Text className="mb-4">{content.thankYou}</Text>
          <Text className="mb-4">{content.instruction}</Text>

          {/* Button */}
          <Section className="text-center">
            <Button
              href={verificationLink}
              className="rounded-md bg-brand-quaternary px-6 py-4 text-zinc-50"
            >
              {content.button}
            </Button>
          </Section>

          {/* Important Section */}
          <Section className="my-6">
            <Text className="mb-4">
              <strong>{content.important}</strong>
            </Text>
            <Text className="mb-4">{content.fallback}</Text>
            <Link href={verificationLink}>{verificationLink}</Link>
          </Section>

          {/* Additional Info */}
          <Text className="mb-4">
            {content.expiryNote.replace("{days}", tokenExpirationDays.toString())}
          </Text>
          <Text className="mb-4">{content.help}</Text>

          {/* Signature */}
          <Text className="mb-4">
            {content.regards}
            <br />
            {content.teamSignature}
          </Text>

          {/* Footer */}
          <Hr className="my-8" />
          <Text className="text-center text-sm text-gray-500">{content.automaticNote}</Text>
        </Container>
      </Section>
    </Layout>
  );
}

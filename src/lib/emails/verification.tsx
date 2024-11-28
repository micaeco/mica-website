import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Link,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export interface EmailContent {
  title: string;
  greeting: string;
  thankYou: string;
  instruction: string;
  button: string;
  important: string;
  fallback: string;
  expiryNote: string;
  help: string;
  regards: string;
  teamSignature: string;
  automaticNote: string;
}

interface VerificationEmailProps {
  content: EmailContent;
  verificationLink: string;
}

export const VerificationEmail = ({ content, verificationLink }: VerificationEmailProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: {
                  quaternary: '#f39e16',
                },
                muted: {
                  DEFAULT: '#f4f4f5',
                  foreground: '##71717a',
                },
              },
            },
          },
        }}
      >
        <Body style={{ fontFamily: "'Montserrat', sans-serif" }} className="bg-muted text-primary">
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
              <Text className="mb-4">{content.expiryNote}</Text>
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
        </Body>
      </Tailwind>
    </Html>
  );
};

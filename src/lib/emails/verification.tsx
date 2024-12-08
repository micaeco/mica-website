import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { interpolate } from './utils';
import Layout from './layout';

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

const mockContent = (key: string, params?: Record<string, string | number>): string => {
  const content: EmailContent = {
    title: 'Verify your email address',
    greeting: 'Hello!',
    thankYou: 'Thank you for signing up to MICA.',
    instruction: 'To complete your registration, please click the button below.',
    button: 'Verify Email Address',
    important: 'Important',
    fallback:
      'If you have trouble with the button above, you can also verify your email address by visiting the following link:',
    expiryNote: 'This link will expire in {days} days.',
    help: 'If you need help, please contact us at.',
    regards: 'Regards,',
    teamSignature: 'The MICA Team',
    automaticNote: 'This email was sent automatically. Please do not reply to this email.',
  };
  return params
    ? interpolate(content[key as keyof EmailContent], params)
    : content[key as keyof EmailContent];
};

interface Props {
  content: (key: string, params?: Record<string, string | number>) => string;
  locale?: string;
  token?: string;
  tokenExpirationDays?: number;
}

export default function Verification({
  content = mockContent,
  locale = 'en',
  token = '1234',
  tokenExpirationDays = 30,
}: Props) {
  const baseUrl =
    process.env.NODE_ENV === 'production' ? 'https://mica.eco' : 'http://localhost:3000';

  const verificationLink = `${baseUrl}/${locale}/verify/${token}`;

  return (
    <Layout lang={locale}>
      <Section className="py-10">
        <Container className="max-w-xl rounded-md bg-white p-10 shadow-sm">
          {/* Header */}
          <Img
            src={`${baseUrl}/logos/logo.webp`}
            alt="MICA logo"
            className="mx-auto mb-4"
            width={50}
          />
          <Text className="mb-8 text-center text-2xl font-semibold">{content('title')}</Text>

          {/* Content */}
          <Text className="mb-4">{content('greeting')}</Text>
          <Text className="mb-4">{content('thankYou')}</Text>
          <Text className="mb-4">{content('instruction')}</Text>

          {/* Button */}
          <Section className="text-center">
            <Button
              href={verificationLink}
              className="rounded-md bg-brand-quaternary px-6 py-4 text-zinc-50"
            >
              {content('button')}
            </Button>
          </Section>

          {/* Important Section */}
          <Section className="my-6">
            <Text className="mb-4">
              <strong>{content('important')}</strong>
            </Text>
            <Text className="mb-4">{content('fallback')}</Text>
            <Link href={verificationLink}>{verificationLink}</Link>
          </Section>

          {/* Additional Info */}
          <Text className="mb-4">{content('expiryNote', { days: tokenExpirationDays })}</Text>
          <Text className="mb-4">{content('help')}</Text>

          {/* Signature */}
          <Text className="mb-4">
            {content('regards')}
            <br />
            {content('teamSignature')}
          </Text>

          {/* Footer */}
          <Hr className="my-8" />
          <Text className="text-center text-sm text-gray-500">{content('automaticNote')}</Text>
        </Container>
      </Section>
    </Layout>
  );
}

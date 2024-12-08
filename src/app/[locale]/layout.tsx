import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';

import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  try {
    const messages = await getMessages();
    const metadata = messages.metadata as unknown as {
      title: string;
      description: string;
      keywords: string[];
    };

    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
      title: {
        default: metadata.title,
        template: '%s - MICA',
      },
      description: metadata.description,
      keywords: metadata.keywords,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        locale,
        type: 'website',
      },
      alternates: {
        canonical: `/${locale}`,
        languages: Object.fromEntries(routing.locales.map((loc) => [loc, `/${loc}`])),
      },
    };
  } catch (error) {
    notFound();
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={montserrat.className}>
      <NextIntlClientProvider messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}

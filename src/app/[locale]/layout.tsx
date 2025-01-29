import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadata = await getTranslations({ locale, namespace: "metadata" });
  const keywords = await metadata.raw("keywords");

  return {
    metadataBase: new URL(env.appUrl),
    title: {
      default: metadata("title"),
      template: "%s - MICA",
    },
    description: metadata("description"),
    keywords,
    openGraph: {
      title: metadata("title"),
      description: metadata("description"),
      locale,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((loc) => [loc, `/${loc}`])),
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={cn(montserrat.className, "antialiased")}
    >
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

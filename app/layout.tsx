import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const montserrat = Montserrat({subsets: ['latin'], weight: "400"});

export const metadata: Metadata = {
  title: "MICA: Monitorització Intel·ligent del Consum d'Aigua",
  description: "Monitorització intel·ligent del consum d'aigua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

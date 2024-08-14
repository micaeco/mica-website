import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/styles/globals.css';

import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "MICA: Monitorització Intel·ligent del Consum d'Aigua",
  description: "Monitorització intel·ligent del consum d'aigua",
  icons: {
    icon: '/logos/logo.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={montserrat.className}>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

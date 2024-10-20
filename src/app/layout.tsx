import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';

import '@/src/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "MICA | Monitorització Intel·ligent del Consum d'Aigua",
  description: "Monitorització intel·ligent del consum d'aigua",
  icons: {
    icon: '/logos/logo.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={montserrat.className}>
      <body className="bg-white">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Verification | MICA: Monitorització Intel·ligent del Consum d'Aigua",
  icons: {
    icon: '/logos/logo.webp',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={montserrat.className}>
      <body className="bg-white">
        <main className="flex min-h-screen items-center justify-center">{children}</main>
      </body>
    </html>
  );
}

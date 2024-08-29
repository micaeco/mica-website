import { Montserrat } from 'next/font/google';
import '@/src/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca" className={montserrat.className}>
      <body className="bg-white">{children}</body>
    </html>
  );
}

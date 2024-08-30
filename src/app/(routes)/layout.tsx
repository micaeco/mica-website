import Header from '@/src/components/layout/header';
import Footer from '@/src/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MICA: Monitorització Intel·ligent del Consum d'Aigua",
  description: "Monitorització intel·ligent del consum d'aigua",
  icons: {
    icon: '/logos/logo.webp',
  },
};

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

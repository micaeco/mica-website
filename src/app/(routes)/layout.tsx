import Header from '@/src/components/layout/header';
import Footer from '@/src/components/layout/footer';

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

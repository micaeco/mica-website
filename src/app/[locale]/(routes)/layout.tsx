import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <Header />
      <div className="flex-grow bg-gray-50">{children}</div>
      <Footer />
    </div>
  );
}

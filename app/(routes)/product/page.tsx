import HowItWorks from '@/src/components/product/HowItWorks';
import CallToAction from '@/src/components/product/CallToAction';

export default function Product() {
  return (
    <main className="flex flex-col justify-center bg-gray-50">
      <HowItWorks />
      <CallToAction />
    </main>
  );
}

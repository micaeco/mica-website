import Infographic from '@/src/components/sections/product/infographic';
import CallToAction from '@/src/components/sections/product/call-to-action';

export default function Product() {
  return (
    <main className="container mx-auto flex flex-col">
      <Infographic />
      <CallToAction />
    </main>
  );
}

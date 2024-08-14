import Infographic from '@/src/components/sections/product/Infographic';
import CallToAction from '@/src/components/sections/product/CallToAction';

export default function Product() {
  return (
    <main className="container mx-auto flex flex-col">
      <Infographic />
      <CallToAction />
    </main>
  );
}

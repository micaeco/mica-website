import Markdown from '@/src/components/ui/Markdown';
import { usePrivacyPolicy } from '@/src/hooks';

export default function PrivacyPolicy() {
  const { privacyPolicy } = usePrivacyPolicy();

  return (
    <main className="py-16 mx-auto container px-8">
      <Markdown content={privacyPolicy} />
    </main>
  );
}

import RegisterForm from './components/form';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navCta = messages.navCta as { register: string };

  return {
    title: navCta.register,
  };
}

export default function RegistrationForm() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}

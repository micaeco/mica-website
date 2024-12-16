import { Hero } from './_components/hero';
import { CookieCarousel } from './_components/cookie-carousel';
// import { ContactForm } from './_components/contact-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies MICA ECO',
  description: 'Les úniques cookies que utilitzem... són per menjar!',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CookieCarousel />
      {/* <ContactForm /> */}
    </main>
  );
}

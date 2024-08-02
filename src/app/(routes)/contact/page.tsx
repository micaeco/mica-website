import ContactForm from '@/src/components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-16">
      <div className="grid grid-cols-1">
        <ContactForm />
      </div>
    </div>
  );
}

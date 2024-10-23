import { ToastContainer } from 'react-toastify';
import { useTranslations } from 'next-intl';

type Props = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  message: string;
  setMessage: (message: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
};

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  handleSubmit,
  isSubmitting,
}: Props) {
  const t = useTranslations('contact');
  const common = useTranslations('common');

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto max-w-4xl">
        <h3 className="mb-4 font-bold">{t('title')}</h3>
        <ul className="mb-16 space-y-4">
          <li>
            <p>
              -{' '}
              {t.rich('testers', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              -{' '}
              {t.rich('technicians', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              -{' '}
              {t.rich('partners', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
        </ul>
        <h3 className="mb-6 font-bold">{t('cta')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: 'name', label: common('name'), type: 'text', value: name, onChange: setName },
            {
              id: 'email',
              label: common('email'),
              type: 'email',
              value: email,
              onChange: setEmail,
            },
          ].map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="mb-2 block text-gray-700 first-letter:capitalize"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block text-gray-700 first-letter:capitalize">
              {common('message')}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`rounded-md px-4 py-2 font-semibold text-white transition-colors first-letter:capitalize focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
              isSubmitting ? 'cursor-not-allowed bg-gray-400' : 'bg-accent hover:bg-accent-300'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? common('sending') + '...' : common('send')}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!text-xl"
      />
    </section>
  );
}

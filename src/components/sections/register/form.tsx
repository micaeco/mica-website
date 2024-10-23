import { ToastContainer } from 'react-toastify';

import { IFormData } from '@/types';
import InputBox from '@/components/ui/input-box';
import { getRegisterFormFields } from '@/lib/constants';
import { useTranslations } from 'next-intl';

type Props = {
  handleSubmit: (event: React.FormEvent) => void;
  handleInputChange: (name: keyof IFormData, value: string | boolean) => void;
  formData: IFormData;
  isSubmitting: boolean;
};

export default function Form({ handleSubmit, handleInputChange, formData, isSubmitting }: Props) {
  const common = useTranslations('common');
  const t = useTranslations('register.form');
  const formFields = getRegisterFormFields(t, common);

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
        <div className="px-6 py-8">
          <h3 className="mb-6 text-center font-bold text-primary first-letter:capitalize">
            {common('register')}
          </h3>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <InputBox
                key={field.name}
                {...field}
                onChange={(value) => handleInputChange(field.name as keyof IFormData, value)}
                value={formData[field.name] || (field.inputType === 'checkbox' ? false : '')}
                required={field.required}
              />
            ))}

            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full justify-center rounded-md border px-4 py-2 text-white shadow-sm ${
                  !isSubmitting
                    ? 'bg-secondary transition-colors duration-300 hover:bg-secondary-600'
                    : 'cursor-not-allowed bg-gray-400'
                }`}
              >
                {isSubmitting ? 'Enviant...' : "Registra't"}
              </button>
            </div>
          </form>
        </div>
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

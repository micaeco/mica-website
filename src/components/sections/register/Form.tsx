import { User, Mail, Phone, Info } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

import { IInputField, IFormData } from '@/src/types';
import InputBox from '@/src/components/ui/InputBox';

const formFields: IInputField[] = [
  {
    type: 'input',
    icon: User,
    label: 'Nom',
    inputType: 'text',
    name: 'name',
    placeholder: 'El teu nom',
    required: true,
  },
  {
    type: 'input',
    icon: User,
    label: 'Cognoms',
    inputType: 'text',
    name: 'surname',
    placeholder: 'Els teus cognoms',
    required: true,
  },
  {
    type: 'input',
    icon: Mail,
    label: 'Correu electrònic',
    inputType: 'email',
    name: 'email',
    placeholder: 'El teu correu electrònic',
    required: true,
  },
  {
    type: 'input',
    icon: Phone,
    label: 'Telèfon (opcional)',
    inputType: 'tel',
    name: 'phone',
    placeholder: 'El teu número de telèfon',
    required: false,
  },
  {
    type: 'input',
    icon: Info,
    label: 'Com ens has conegut? (opcional)',
    inputType: 'text',
    name: 'referralSource',
    placeholder: 'Ex: xarxes socials, amic, etc.',
    required: false,
  },
  {
    type: 'input',
    label: 'Vull formar part del programa beta',
    link: '/beta',
    inputType: 'checkbox',
    name: 'interestInBeta',
    required: false,
    className: 'mt-12',
  },
  {
    type: 'input',
    label: 'He llegit i accepto la política de privacitat',
    link: '/privacy-policy',
    inputType: 'checkbox',
    name: 'privacyPolicy',
    required: true,
  },
];

type Props = {
  handleSubmit: (event: React.FormEvent) => void;
  handleInputChange: (name: keyof IFormData, value: string | boolean) => void;
  formData: IFormData;
  errors: { [K in keyof IFormData]?: string };
  isSubmitting: boolean;
  isFormValid: boolean;
};

export default function Form({
  handleSubmit,
  handleInputChange,
  formData,
  errors,
  isSubmitting,
  isFormValid,
}: Props) {
  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md">
          <div className="px-6 py-8">
            <h3 className="mb-6 text-center font-bold text-primary">Registra't</h3>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <InputBox
                  key={field.name}
                  {...field}
                  onChange={(value) => handleInputChange(field.name as keyof IFormData, value)}
                  value={formData[field.name] || (field.inputType === 'checkbox' ? false : '')}
                  error={errors[field.name]}
                />
              ))}

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`flex w-full justify-center rounded-md border px-4 py-2 text-white shadow-sm ${
                    isFormValid && !isSubmitting
                      ? 'bg-secondary hover:bg-secondary-700'
                      : 'cursor-not-allowed bg-gray-400'
                  }`}
                >
                  {isSubmitting ? 'Enviant...' : "Registra't"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!w-96 !max-w-[90%] !text-xl"
      />
    </section>
  );
}

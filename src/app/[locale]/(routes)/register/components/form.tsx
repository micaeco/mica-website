'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ToastContainer } from 'react-toastify';
import { Info, Loader2, Mail, Phone, User } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { LeadData } from '@/types';
import { useRegisterLeads } from '@/hooks';

export default function RegisterForm() {
  const { leadData, isSubmitting, handleSubmit, handleInputChange } = useRegisterLeads();

  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations('register');
  const common = useTranslations('common');
  const form = useTranslations('register.form');

  const formFields = [
    {
      type: 'input',
      icon: User,
      label: form('name.label'),
      inputType: 'text',
      name: 'name',
      placeholder: form('name.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: User,
      label: form('surname.label'),
      inputType: 'text',
      name: 'surname',
      placeholder: form('surname.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: Mail,
      label: form('email.label'),
      inputType: 'email',
      name: 'email',
      placeholder: form('email.placeholder'),
      required: true,
    },
    {
      type: 'input',
      icon: Phone,
      label: form('phone.label') + ` (${common('optional')})`,
      inputType: 'tel',
      name: 'phone',
      placeholder: form('phone.placeholder'),
      required: false,
    },
    {
      type: 'input',
      icon: Info,
      label: form('referralSource.label') + ` (${common('optional')})`,
      inputType: 'text',
      name: 'referralSource',
      placeholder: form('referralSource.placeholder'),
      required: false,
    },
  ];
  const formCheckboxes = [
    {
      type: 'input',
      label: form('interestInBeta.label'),
      link: '/beta',
      inputType: 'checkbox',
      name: 'interestInBeta',
      required: false,
    },
    {
      type: 'input',
      label: form('privacyPolicy.label'),
      link: '/privacy-policy',
      inputType: 'checkbox',
      name: 'privacyPolicy',
      required: true,
    },
  ];

  useEffect(() => {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  }, [leadData]);

  return (
    <section className="bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md rounded-lg bg-white shadow-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center capitalize">{t('title')}</CardTitle>
          </CardHeader>

          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label>
                    {field.label} {field.required && <span className="text-destructive">*</span>}
                    <Input
                      id={field.name}
                      type={field.inputType}
                      placeholder={field.placeholder}
                      value={leadData[field.name as keyof LeadData] as string}
                      onChange={(e) =>
                        handleInputChange(field.name as keyof LeadData, e.target.value)
                      }
                      required={field.required}
                    />
                  </Label>
                </div>
              ))}

              <div className="space-y-4 pb-4 pt-8">
                {formCheckboxes.map((field) => (
                  <Label key={field.name} className="flex items-center space-x-2">
                    <Checkbox
                      id={field.name}
                      checked={leadData[field.name as keyof LeadData] as boolean}
                      onCheckedChange={(checked) => {
                        handleInputChange(field.name as keyof LeadData, checked);
                      }}
                      required={field.required}
                    />
                    <Link href={field.link!} className="text-sm text-blue-500 underline">
                      {field.label}{' '}
                    </Link>
                    {field.required && <span className="text-destructive">*</span>}
                  </Label>
                ))}
              </div>

              <CardFooter className="px-0">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !isValid}
                  className="w-full capitalize"
                >
                  {isSubmitting && <Loader2 className="mr-2 animate-spin" />}
                  {isSubmitting ? common('sending') + '...' : common('send')}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
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

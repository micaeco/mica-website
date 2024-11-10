'use client';

import { ToastContainer } from 'react-toastify';
import { Link } from '@/i18n/routing';
import { Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FormData } from '@/types';
import { getRegisterFormCheckboxes, getRegisterFormFields } from '@/lib/constants';
import { useRegisterLeads } from '@/hooks';

export default function RegisterForm() {
  const { formData, isSubmitting, handleSubmit, handleInputChange } = useRegisterLeads();

  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations('register');
  const common = useTranslations('common');
  const tForm = useTranslations('register.form');

  const formFields = getRegisterFormFields(tForm, common);
  const formCheckboxes = getRegisterFormCheckboxes(tForm);

  useEffect(() => {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  }, [formData]);

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
                      value={formData[field.name as keyof FormData] as string}
                      onChange={(e) =>
                        handleInputChange(field.name as keyof FormData, e.target.value)
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
                      checked={formData[field.name as keyof FormData] as boolean}
                      onCheckedChange={(checked) => {
                        handleInputChange(field.name as keyof FormData, checked);
                        if (field.onChange) {
                          field.onChange(checked);
                        }
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

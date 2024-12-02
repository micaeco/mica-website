'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { toast, ToastContainer } from 'react-toastify';
import { Loader2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { registerLead } from './actions';

function getInitialLeadData() {
  return {
    name: '',
    surname: '',
    email: '',
    phone: '',
    referralSource: '',
    interestInBeta: false,
    privacyPolicy: false,
  };
}

export default function RegisterForm() {
  const [leadData, setLeadData] = useState(getInitialLeadData());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations('register');
  const common = useTranslations('common');
  const form = useTranslations('register.form');
  const success = useTranslations('success');
  const errors = useTranslations('errors');
  const locale = useLocale();

  const handleInputChange = (name: string, value: string | boolean) => {
    setLeadData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await registerLead(
        leadData.name,
        leadData.surname,
        leadData.email,
        leadData.phone,
        leadData.referralSource,
        leadData.interestInBeta,
        locale
      );

      toast.success(success('LEAD_REGISTERED'));
      setLeadData(getInitialLeadData());
      localStorage.removeItem('leadData');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'DEFAULT';
      toast.error(errors.has(message) ? errors(message) : errors('DEFAULT'));
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('leadData');
    if (savedData) {
      setLeadData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    const hasValue = Object.values(leadData).some((value) =>
      typeof value === 'string' ? value.trim() !== '' : value === true
    );

    if (hasValue) {
      localStorage.setItem('leadData', JSON.stringify(leadData));
    }
  }, [leadData]);

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
              <div className="space-y-2">
                <Label>
                  {form('name.label')} <span className="text-destructive">*</span>
                  <Input
                    id="name"
                    type="text"
                    placeholder={form('name.placeholder')}
                    value={leadData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </Label>
              </div>

              <div className="space-y-2">
                <Label>
                  {form('surname.label')} <span className="text-destructive">*</span>
                  <Input
                    id="surname"
                    type="text"
                    placeholder={form('surname.placeholder')}
                    value={leadData.surname}
                    onChange={(e) => handleInputChange('surname', e.target.value)}
                    required
                  />
                </Label>
              </div>

              <div className="space-y-2">
                <Label>
                  {form('email.label')} <span className="text-destructive">*</span>
                  <Input
                    id="email"
                    type="email"
                    placeholder={form('email.placeholder')}
                    value={leadData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </Label>
              </div>

              <div className="space-y-2">
                <Label>
                  {form('phone.label')} {`(${common('optional')})`}
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={form('phone.placeholder')}
                    value={leadData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </Label>
              </div>

              <div className="space-y-2">
                <Label>
                  {form('referralSource.label')} {`(${common('optional')})`}
                  <Input
                    id="referralSource"
                    type="text"
                    placeholder={form('referralSource.placeholder')}
                    value={leadData.referralSource}
                    onChange={(e) => handleInputChange('referralSource', e.target.value)}
                  />
                </Label>
              </div>

              <div className="space-y-4 pb-4 pt-8">
                <Label className="flex items-center space-x-2">
                  <Checkbox
                    id="interestInBeta"
                    checked={leadData.interestInBeta}
                    onCheckedChange={(checked) => {
                      handleInputChange('interestInBeta', checked);
                    }}
                  />
                  <Link href="/beta" className="text-sm text-blue-500 underline">
                    {form('interestInBeta.label')}
                  </Link>
                </Label>

                <Label className="flex items-center space-x-2">
                  <Checkbox
                    id="privacyPolicy"
                    checked={leadData.privacyPolicy}
                    onCheckedChange={(checked) => {
                      handleInputChange('privacyPolicy', checked);
                    }}
                    required
                  />
                  <Link href="/privacy-policy" className="text-sm text-blue-500 underline">
                    {form('privacyPolicy.label')}
                  </Link>
                  <span className="text-destructive">*</span>
                </Label>
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

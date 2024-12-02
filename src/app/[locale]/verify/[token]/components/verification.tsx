'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { CheckCircle, XCircle } from 'lucide-react';

import Loading from '@/components/loading';
import { verifyLead } from '@/services/google/sheets';

export default function Verification() {
  const params = useParams();
  const token = params.token as string;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const t = useTranslations('verification');
  const errors = useTranslations('errors');
  const successes = useTranslations('success');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await verifyLead(token);
        setSuccess(successes('LEAD_VERIFIED'));
      } catch (error) {
        const message = error instanceof Error ? error.message : 'DEFAULT';
        setError(errors.has(message) ? errors(message) : errors('DEFAULT'));
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [params.token]);

  if (isLoading) {
    return <Loading />;
  }

  console.log('here is the error blud:', error);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h5 className="font-semibold">{t('title')}</h5>
        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <div>
            <XCircle className="mx-auto h-16 w-16 text-destructive" />
            <p className="mt-4 text-destructive">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h5 className="font-semibold">{t('title')}</h5>
      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <p className="mt-4 text-green-600">{success}</p>
        </div>
      </div>
    </div>
  );
}

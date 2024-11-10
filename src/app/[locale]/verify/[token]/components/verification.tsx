'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { CheckCircle, XCircle } from 'lucide-react';

import Loading from '@/components/loading';
import { verifyLead } from '@/lib/gas';

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
        const response = await verifyLead(token);

        if (errors.has(response)) {
          setError(errors(response));
          return;
        }

        setSuccess(successes(response));
      } catch (error) {
        setError(errors('DEFAULT'));
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [params.token]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-900">{t('title')}</h2>
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
      <h2 className="text-xl font-semibold text-gray-900">{t('title')}</h2>
      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        <div>
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <p className="mt-4 text-green-600">{success}</p>
        </div>
      </div>
    </div>
  );
}

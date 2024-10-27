'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function Verify() {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const params = useParams();
  const t = useTranslations('verification');

  useEffect(() => {
    const verifyToken = async () => {
      const token = params.token as string;
      try {
        const response = await fetch(`/api/lead/verify/${token}`);
        if (response.ok) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        setVerificationStatus('error');
      }
    };

    verifyToken();
  }, [params.token]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-gray-900">{t('title')}</h2>

      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        {verificationStatus === 'loading' && (
          <Loader2 className="h-16 w-16 animate-spin text-blue-500" />
        )}

        {verificationStatus === 'success' && (
          <div>
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <p className="mt-4 text-green-600">{t('success')}</p>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div>
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <p className="mt-4 text-red-600">{t('error')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

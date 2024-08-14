'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

export default function VerifyPage() {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const params = useParams();

  useEffect(() => {
    const verifyToken = async () => {
      const token = params.token as string;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/lead/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus('success');
          toast.success(data.message);
        } else {
          setVerificationStatus('error');
          toast.error(data.error);
        }
      } catch (error) {
        setVerificationStatus('error');
        toast.error('Ha ocorregut un error inesperat. Si us plau, torna-ho a provar més tard.');
      }
    };

    verifyToken();
  }, [params.token]);

  return (
    <div className="flex min-h-screen max-w-md flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <h3 className="mt-6 text-center font-extrabold text-gray-900">Verificació del correu</h3>
      </div>
      <div className="mt-8 space-y-6">
        {verificationStatus === 'loading' && (
          <div className="text-center">
            <ClipLoader />
          </div>
        )}
        {verificationStatus === 'success' && (
          <p className="text-center text-green-600">El teu correu ha estat verificat amb èxit!</p>
        )}
        {verificationStatus === 'error' && (
          <p className="text-center text-red-600">
            Hi ha hagut un problema en verificar el teu correu. Si us plau, torna-ho a intentar o
            contacta amb suport.
          </p>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

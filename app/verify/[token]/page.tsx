'use client';

import { useEffect, useState, useRef } from 'react';

export default function Verify({ params }: { params: { token: string } }) {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error' | 'already-verified'>(
    'verifying'
  );
  const verificationAttempted = useRef(false);

  return (
    <div className="mt-12 rounded bg-white p-8 shadow-md">
      {status === 'verifying' && <p className="text-lg">Verificant el teu correu...</p>}
      {status === 'success' && (
        <div>
          <h1 className="mb-4 text-2xl font-bold text-green-600">Ja pots tancar la finestra!</h1>
          <p className="text-gray-700">El teu correu electrònic ha estat verificat correctament.</p>
        </div>
      )}
      {status === 'error' && (
        <div>
          <h1 className="mb-4 text-2xl font-bold text-red-600">Error de verificació</h1>
          <p className="text-gray-700">
            Hi ha hagut un error durant la verificació del correu electrònic. Si us plau, torna a
            intentar-ho més tard.
          </p>
        </div>
      )}
    </div>
  );
}

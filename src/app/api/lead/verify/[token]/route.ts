import { NextResponse } from 'next/server';
import { verifyLead } from '@/src/services/gas';
import { ERROR_CODES, getErrorMessage, getSuccessMessage } from '@/src/constants/errors';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const { token } = params;

    if (!token) {
      return NextResponse.json({ error: getErrorMessage('TOKEN_REQUIRED') }, { status: 400 });
    }

    const result = await verifyLead(token);

    if ('error' in result) {
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_CODES) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: getSuccessMessage('LEAD_VERIFIED') });
  } catch (error) {
    console.error('Error verifying lead:', error);
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}

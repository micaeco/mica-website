import { NextResponse } from 'next/server';
import { verifyLead } from '@/src/lib/gas';
import { ERROR_MESSAGES, getErrorMessage, getSuccessMessage } from '@/src/lib/errors';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const { token } = params;

    if (!token) {
      return NextResponse.json({ error: getErrorMessage('TOKEN_REQUIRED') }, { status: 400 });
    }

    const result = await verifyLead(token);

    if ('error' in result) {
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_MESSAGES) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: getSuccessMessage('LEAD_VERIFIED') });
  } catch (error) {
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}

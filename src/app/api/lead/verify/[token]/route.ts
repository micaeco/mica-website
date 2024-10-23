import { NextResponse } from 'next/server';
import { verifyLead } from '@/lib/gas';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const { token } = params;

    if (!token) {
      return NextResponse.json({ error: 'VERIFICATION_REQUIRED' }, { status: 401 });
    }

    const response = await verifyLead(token);
    const data = await response.json();

    if (data.error) {
      let status;
      switch (data.error) {
        case 'VERIFICATION_REQUIRED':
          status = 401;
          break;
        case 'VERIFICATION_EXPIRED':
        case 'VERIFICATION_INVALID':
          status = 403;
          break;
        case 'ALREADY_REGISTERED':
          status = 409;
          break;
        default:
          status = 500;
      }
      return NextResponse.json({ error: data.error }, { status });
    }

    return NextResponse.json({ message: data.message }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
  }
}
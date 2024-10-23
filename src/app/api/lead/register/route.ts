import { NextResponse } from 'next/server';
import { registerLead } from '@/lib/gas';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 400 });
    }

    const { name, surname, email, phone, interestInBeta, referralSource } = body;

    if (!name || !surname || !email) {
      return NextResponse.json({ error: 'MISSING_FIELDS' }, { status: 400 });
    }

    const response = await registerLead({
      name,
      surname,
      email,
      phone,
      interestInBeta,
      referralSource,
    });

    const data = await response.json();

    if (data.error) {
      let status;
      switch (data.error) {
        case 'MISSING_FIELDS':
        case 'INVALID_EMAIL':
        case 'INVALID_PHONE':
          status = 400;
          break;
        case 'ALREADY_REGISTERED':
          status = 409;
          break;
        case 'VERIFICATION_REQUIRED':
          status = 401;
          break;
        case 'VERIFICATION_EXPIRED':
        case 'VERIFICATION_INVALID':
          status = 403;
          break;
        default:
          status = 500;
      }
      return NextResponse.json({ error: data.error }, { status });
    }

    return NextResponse.json({ message: data.message }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "INTERNAL_ERROR" }, { status: 500 });
  }
}
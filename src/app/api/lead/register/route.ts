import { NextResponse } from 'next/server';
import { registerLead } from '@/src/lib/gas';
import { ERROR_MESSAGES, getErrorMessage, getSuccessMessage } from '@/src/lib/errors';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    const { name, surname, email, phone, interestInBeta, referralSource } = body;

    if (!name || !surname || !email) {
      return NextResponse.json({ error: getErrorMessage('MISSING_FIELDS') }, { status: 400 });
    }

    const result = await registerLead({
      name,
      surname,
      email,
      phone,
      interestInBeta,
      referralSource,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_MESSAGES) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: getSuccessMessage('LEAD_REGISTERED') });
  } catch (error) {
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}
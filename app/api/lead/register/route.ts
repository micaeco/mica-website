import { NextResponse } from 'next/server';
import { registerLead, ERROR_CODES, getErrorMessage, getSuccessMessage } from '@/src/lib/gas';

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
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

    if ('error' in result) {
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_CODES) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: getSuccessMessage('LEAD_REGISTERED') });
  } catch (error) {
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}

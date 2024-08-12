import { NextResponse } from 'next/server';
import { registerLead, ERROR_CODES, getErrorMessage, getSuccessMessage } from '@/src/lib/gas';

export async function POST(request: Request) {
  console.log('POST request received');
  try {
    console.log('Request headers:', Object.fromEntries(request.headers));
    const bodyText = await request.text();
    console.log('Raw request body:', bodyText);

    let body;
    try {
      body = JSON.parse(bodyText);
      console.log('Parsed request body:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { name, surname, email, phone, interestInBeta, referralSource } = body;
    console.log('Extracted fields:', {
      name,
      surname,
      email,
      phone,
      interestInBeta,
      referralSource,
    });

    if (!name || !surname || !email) {
      console.log('Missing required fields');
      return NextResponse.json({ error: getErrorMessage('MISSING_FIELDS') }, { status: 400 });
    }

    console.log('Calling registerLead function');
    const result = await registerLead({
      name,
      surname,
      email,
      phone,
      interestInBeta,
      referralSource,
    });
    console.log('registerLead result:', result);

    if ('error' in result) {
      console.log('Error from registerLead:', result.error);
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_CODES) },
        { status: 400 }
      );
    }

    console.log('Lead registered successfully');
    return NextResponse.json({ success: true, message: getSuccessMessage('LEAD_REGISTERED') });
  } catch (error) {
    console.error('Unhandled error in POST route:', error);
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}

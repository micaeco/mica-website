import { NextResponse } from 'next/server';
import { contactSubmission } from '@/src/lib/gas';
import { ERROR_MESSAGES, getErrorMessage, getSuccessMessage } from '@/src/lib/errors';

export async function POST(request: Request) {
  try {
    const bodyText = await request.text();

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (parseError) {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: getErrorMessage('MISSING_FIELDS') }, { status: 400 });
    }

    const result = await contactSubmission(
      name,
      email,
      message,
    );

    if ('error' in result) {
      return NextResponse.json(
        { error: getErrorMessage(result.error as keyof typeof ERROR_MESSAGES) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: getSuccessMessage('SUBMISSION_SENT') });
  } catch (error) {
    return NextResponse.json({ error: getErrorMessage('INTERNAL_ERROR') }, { status: 500 });
  }
}

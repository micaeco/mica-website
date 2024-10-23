import { NextResponse } from 'next/server';
import { contactSubmission } from '@/lib/gas';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'MISSING_FIELDS' },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'MISSING_FIELDS' },
        { status: 400 }
      );
    }

    const response = await contactSubmission(name, email, message);
    const data = await response.json();

    if (data.error) {
      let status;
      switch (data.error) {
        case 'MISSING_FIELDS':
        case 'INVALID_EMAIL':
          status = 400;
          break;
        default:
          status = 500;
      }
      return NextResponse.json({ error: data.error }, { status });
    }

    return NextResponse.json(
      { message: 'CONTACT_FORM_SENT' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
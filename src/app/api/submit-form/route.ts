import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('API route hit: /api/submit-form');
  
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  
  if (!scriptUrl) {
    console.error('GOOGLE_APPS_SCRIPT_URL is not defined');
    return NextResponse.json({ result: 'error', message: 'Falten configuracions del servidor' }, { status: 500 });
  }

  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    console.log('Sending data to Google Apps Script:', scriptUrl);
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Google Apps Script response status:', response.status);
    
    const responseText = await response.text();
    console.log('Google Apps Script response body:', responseText);

    if (!response.ok) {
      console.error('Error response from Google Apps Script:', response.status, responseText);
      return NextResponse.json({ result: 'error', message: 'Error en la resposta del servidor de Google Apps Script' }, { status: 500 });
    }

    try {
      const data = JSON.parse(responseText);
      console.log('Parsed response from Google Apps Script:', data);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error('Error parsing Google Apps Script response:', parseError);
      return NextResponse.json({ result: 'error', message: 'Error al analitzar la resposta del servidor' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in submit-form route:', error);
    return NextResponse.json({ result: 'error', message: 'Error en enviar les dades' }, { status: 500 });
  }
}
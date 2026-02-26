import { Resend } from 'resend';
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, course, cycle } = body;

    if (!name || !phone || !course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `הרשמה חדשה לקורס: ${course}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>הרשמה חדשה לקורס</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>קורס:</strong> ${course}</p>
          ${cycle ? `<p><strong>מחזור:</strong> ${cycle}</p>` : ''}
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json({ success: true, data }, { headers: corsHeaders });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

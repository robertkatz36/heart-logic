import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, course, cycle } = body;

    if (!name || !phone || !course) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const recipientEmail = import.meta.env.CONTACT_EMAIL || 'your-email@example.com';

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
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true, data }));
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
}

interface ContactBody {
  name?: string;
  phone?: string;
  course?: string;
  cycle?: string;
}

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body: ContactBody = await request.json();
    const { name, phone, course, cycle } = body;

    if (!name || !phone || !course) {
      return json({ error: "Missing required fields" }, 400);
    }

    if (!env.RESEND_API_KEY) {
      return json({ error: "Email service not configured" }, 500);
    }

    const recipientEmail = env.CONTACT_EMAIL || "robertkatz36@gmail.com";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: `הרשמה חדשה לקורס: ${course}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif;">
            <h2>הרשמה חדשה לקורס</h2>
            <p><strong>שם:</strong> ${name}</p>
            <p><strong>טלפון:</strong> ${phone}</p>
            <p><strong>קורס:</strong> ${course}</p>
            ${cycle ? `<p><strong>מחזור:</strong> ${cycle}</p>` : ""}
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return json({ error: "Failed to send email" }, 500);
    }

    const data = await res.json();
    return json({ success: true, data });
  } catch (err) {
    console.error("API error:", err);
    return json({ error: "Internal server error" }, 500);
  }
};

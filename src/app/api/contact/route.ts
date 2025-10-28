import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const CONTACT_RECIPIENT = "chrismanfredi11@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactPayload = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [CONTACT_RECIPIENT],
        reply_to: email,
        subject: `New contact from ${name}`,
        text: [
          `You have a new portfolio inquiry.`,
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          "",
          message,
        ].join("\n"),
        html: `<p>You have a new portfolio inquiry.</p>
<p><strong>Name:</strong> ${name}<br/>
<strong>Email:</strong> ${email}</p>
<p>${message.replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend API error:", response.status, errorBody);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 502 }
      );
    }

    const body = (await response.json()) as { id?: string };
    return NextResponse.json({ success: true, id: body.id });
  } catch (error) {
    console.error("Unexpected contact submission error:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}

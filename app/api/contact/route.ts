import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["somasekharkurapati6423@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #e5e5e5; border-radius: 16px;">
          <h2 style="color: #a855f7; margin-bottom: 4px;">New Message from Portfolio</h2>
          <p style="color: #737373; font-size: 13px; margin-bottom: 24px;">Sent via your portfolio contact form</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; width: 100px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #262626; font-weight: 600;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #a3a3a3; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</p>
            <div style="background: #171717; border-radius: 12px; padding: 20px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #525252;">
            Reply directly to this email to respond to ${name} at ${email}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

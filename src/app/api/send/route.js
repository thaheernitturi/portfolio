
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend("re_aWEt6Csu_7vimm9pV1dG6QzJ41kFn1Tjf");

// Your verified email address
const fromEmail = "thaheernitturi@gmail.com";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Debug logging
    console.log("Incoming form submission:", { email, subject, message });

    const emailContent = `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail], // Only send to you
      subject: `New Message: ${subject}`,
      html: emailContent,
    });

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

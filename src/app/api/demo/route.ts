import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, companyName, email, phoneNumber, branches, businessType, commodities, extras } = await req.json();

    await resend.emails.send({
      from: 'EasyJewelry <no-reply@easyjewelry.co>',
      to: 'easyjewelry.co@gmail.com',
      subject: `New Demo Request from ${name} — ${companyName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Number of Branches:</strong> ${branches}</p>
        <p><strong>Business Type:</strong> ${businessType.join(', ')}</p>
        <p><strong>Commodities:</strong> ${commodities.join(', ')}</p>
        <p><strong>Interested In:</strong> ${extras.length > 0 ? extras.join(', ') : 'None'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
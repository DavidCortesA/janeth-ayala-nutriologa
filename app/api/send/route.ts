import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json();

    const data = await resend.emails.send({
      from: 'Lic. Janeth Ayala <onboarding@resend.dev>',
      to: 'nut.jayala@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}
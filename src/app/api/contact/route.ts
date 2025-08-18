import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Configuration du transporteur Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Préparer les destinataires
    const primaryEmail = process.env.CONTACT_EMAIL || 'contact@jaxetech.com';
    const ccEmails = process.env.CC_EMAILS ? process.env.CC_EMAILS.split(',').map(email => email.trim()) : [];
    const bccEmails = process.env.BCC_EMAILS ? process.env.BCC_EMAILS.split(',').map(email => email.trim()) : [];

    // Send email to JAXE TECH
    const emailToCompany = await transporter.sendMail({
      from: `"JAXE TECH Contact" <${process.env.GMAIL_USER}>`, // Votre Gmail
      to: primaryEmail, // Email principal
      cc: ccEmails.length > 0 ? ccEmails.join(',') : undefined, // Emails en copie (visibles)
      bcc: bccEmails.length > 0 ? bccEmails.join(',') : undefined, // Emails en copie cachée (invisibles)
      subject: `Nouveau contact depuis le site web - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service demandé :</strong> ${service}</p>` : ''}
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>JAXE TECH</strong> - Nouveau message reçu le ${new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    const emailToUser = await transporter.sendMail({
      from: `"JAXE TECH" <${process.env.GMAIL_USER}>`, // Votre Gmail
      to: email,
      subject: 'Confirmation de réception - JAXE TECH',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">JAXE TECH</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Solutions Digitales d'Excellence</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e293b; margin-top: 0;">Bonjour ${name},</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez à JAXE TECH.
            </p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Récapitulatif de votre demande</h3>
              <p><strong>Service :</strong> ${service || 'Non spécifié'}</p>
              <p><strong>Message :</strong></p>
              <p style="font-style: italic; color: #64748b;">"${message}"</p>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais, généralement sous 24h.
            </p>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>En attendant, n'hésitez pas à :</strong><br>
                • Visiter notre portfolio sur notre site web<br>
                • Nous suivre sur nos réseaux sociaux<br>
                • Nous appeler directement au +228 97 99 99 43
              </p>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              Cordialement,<br>
              <strong>L'équipe JAXE TECH</strong><br>
              <em>Votre partenaire technologique au Togo</em>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f8fafc; color: #64748b; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0;">
              JAXE TECH - Lomé, Togo<br>
              Email: contact@jaxetech.com | Web: https://jaxe-sigma.vercel.app/
            </p>
          </div>
        </div>
      `,
    });

    console.log('Emails sent successfully:', { emailToCompany, emailToUser });

    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès ! Nous vous contacterons bientôt.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}

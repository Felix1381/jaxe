import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Configuration du transporteur Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
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
        { error: "Les champs nom, email et message sont requis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Préparer les destinataires
    const primaryEmail = process.env.CONTACT_EMAIL || "contact@jaxetech.com";
    const ccEmails = process.env.CC_EMAILS
      ? process.env.CC_EMAILS.split(",").map((email) => email.trim())
      : [];
    const bccEmails = process.env.BCC_EMAILS
      ? process.env.BCC_EMAILS.split(",").map((email) => email.trim())
      : [];

    // Send email to JAXE TECH
    const emailToCompany = await transporter.sendMail({
      from: `"JAXE-TECH Contact" <${process.env.GMAIL_USER}>`, // Votre Gmail
      to: primaryEmail, // Email principal
      cc: ccEmails.length > 0 ? ccEmails.join(",") : undefined, // Emails en copie (visibles)
      bcc: bccEmails.length > 0 ? bccEmails.join(",") : undefined, // Emails en copie cachée (invisibles)
      subject: `📨 Nouveau contact JAXE-TECH - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau Contact JAXE-TECH</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            
            <!-- Header avec alerte -->
            <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f97316 100%); padding: 30px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; right: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
              
              <div style="position: relative; z-index: 2;">
                <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
                  <span style="font-size: 24px; color: white;">📨</span>
                </div>
                <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">NOUVEAU CONTACT</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 300;">Reçu sur JAXE-TECH.com</p>
              </div>
            </div>
            
            <!-- Informations du contact -->
            <div style="padding: 30px;">
              <!-- Alerte priorité -->
              <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px; border-left: 5px solid #f59e0b; margin-bottom: 25px; text-align: center;">
                <h2 style="color: #92400e; margin: 0; font-size: 20px; font-weight: 600;">⚡ Nouveau prospect à traiter</h2>
                <p style="color: #92400e; margin: 8px 0 0 0; font-size: 14px;">Reçu le ${new Date().toLocaleDateString(
                  "fr-FR"
                )} à ${new Date().toLocaleTimeString("fr-FR")}</p>
              </div>
              
              <!-- Informations principales -->
              <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin: 25px 0;">
                <div style="background: #f9fafb; padding: 20px; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="color: #1f2937; margin: 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="margin-right: 10px;">👤</span> Informations du contact
                  </h3>
                </div>
                <div style="padding: 25px;">
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px;">
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Nom complet</p>
                      <p style="margin: 0; color: #1f2937; font-size: 18px; font-weight: 600;">${name}</p>
                    </div>
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Service demandé</p>
                      <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600; padding: 6px 12px; background: #dbeafe; border-radius: 6px; display: inline-block;">${service}</p>
                    </div>
                  </div>
                  
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">📧 Email</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                      </p>
                    </div>
                    ${
                      phone
                        ? `
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">📱 Téléphone</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">
                        <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                      </p>
                    </div>
                    `
                        : ""
                    }
                    ${
                      company
                        ? `
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">🏢 Entreprise</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">${company}</p>
                    </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
              
              <!-- Message du client -->
              <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 12px; overflow: hidden; margin: 25px 0;">
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-bottom: 1px solid rgba(59, 130, 246, 0.2);">
                  <h3 style="color: #1e40af; margin: 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="margin-right: 10px;">💬</span> Message du client
                  </h3>
                </div>
                <div style="padding: 25px;">
                  <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 16px; font-style: italic;">"${message}"</p>
                  </div>
                </div>
              </div>
              
              <!-- Actions rapides -->
              <div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); padding: 25px; border-radius: 12px; border-left: 5px solid #10b981; margin: 25px 0;">
                <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">⚡</span> Actions rapides
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                  <a href="mailto:${email}?subject=Réponse à votre demande - JAXE-TECH&body=Bonjour ${name},%0D%0A%0D%0AMerci pour votre intérêt pour nos services..." 
                     style="background: #ffffff; color: #065f46; padding: 12px 20px; text-decoration: none; border-radius: 8px; display: block; text-align: center; font-weight: 600; border: 2px solid #10b981; transition: all 0.3s ease;">
                    📧 Répondre par email
                  </a>
                  ${
                    phone
                      ? `
                  <a href="tel:${phone}" 
                     style="background: #ffffff; color: #065f46; padding: 12px 20px; text-decoration: none; border-radius: 8px; display: block; text-align: center; font-weight: 600; border: 2px solid #10b981; transition: all 0.3s ease;">
                    📱 Appeler maintenant
                  </a>
                  `
                      : ""
                  }
                </div>
              </div>
              
              <!-- Statistiques -->
              <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #e2e8f0;">
                <h4 style="color: #475569; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; text-align: center;">📊 Informations techniques</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; text-align: center;">
                  <div>
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Source</p>
                    <p style="margin: 0; color: #1e293b; font-weight: 600;">Site Web</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Date</p>
                    <p style="margin: 0; color: #1e293b; font-weight: 600;">${new Date().toLocaleDateString(
                      "fr-FR"
                    )}</p>
                  </div>
                  <div>
                    <p style="margin: 0 0 5px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Heure</p>
                    <p style="margin: 0; color: #1e293b; font-weight: 600;">${new Date().toLocaleTimeString(
                      "fr-FR"
                    )}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1f2937, #111827); color: white; padding: 25px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 700; letter-spacing: 1px;">JAXE-TECH</h3>
              <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 14px;">Système de notification automatique</p>
            </div>
            
          </div>
        </body>
        </html>

            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to user
    const emailToUser = await transporter.sendMail({
      from: `"JAXE-TECH" <${process.env.GMAIL_USER}>`, // Votre Gmail
      to: email,
      subject: "✅ Votre demande a été reçue - JAXE-TECH",
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation JAXE-TECH</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            
            <!-- Header avec logo et branding -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
              
              <div style="position: relative; z-index: 2;">
                <h1 style="margin: 0; font-size: 36px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.3); letter-spacing: 2px;">JAXE-TECH</h1>
                <div style="width: 60px; height: 3px; background: #fbbf24; margin: 15px auto;"></div>
                <p style="margin: 10px 0 0 0; font-size: 16px; color: rgba(255,255,255,0.9); font-weight: 300;">🚀 Solutions Web Innovantes au Togo</p>
              </div>
            </div>
            
            <!-- Contenu principal -->
            <div style="padding: 40px 30px;">
              <!-- Message de bienvenue -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">
                  <span style="font-size: 36px; color: white;">✅</span>
                </div>
                <h2 style="color: #1f2937; margin: 0; font-size: 28px; font-weight: 600;">Message bien reçu !</h2>
                <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">Nous vous répondrons dans les plus brefs délais</p>
              </div>
              
              <!-- Message personnalisé -->
              <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 25px; border-radius: 12px; border-left: 5px solid #0ea5e9; margin: 25px 0;">
                <p style="color: #374151; line-height: 1.7; margin: 0 0 15px 0; font-size: 16px;">
                  <strong style="color: #1f2937;">Bonjour ${name},</strong>
                </p>
                
                <p style="color: #374151; line-height: 1.7; margin: 0; font-size: 16px;">
                  Merci d'avoir choisi <strong style="color: #1e3a8a;">JAXE-TECH</strong> pour votre projet ! 
                  Nous avons bien reçu votre demande concernant <strong style="color: #0ea5e9;">${
                    service || "nos services"
                  }</strong> 
                  via notre plateforme web. Notre équipe d'experts va analyser votre demande et vous contacter rapidement.
                </p>
              </div>
              
              <!-- Récapitulatif stylé -->
              <div style="background: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin: 25px 0;">
                <div style="background: #f9fafb; padding: 20px; border-bottom: 1px solid #e5e7eb;">
                  <h3 style="color: #1f2937; margin: 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                    <span style="margin-right: 10px;">📋</span> Récapitulatif de votre demande
                  </h3>
                </div>
                <div style="padding: 25px;">
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Service demandé</p>
                    <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600; padding: 8px 12px; background: #dbeafe; border-radius: 6px; display: inline-block;">${
                      service || "Consultation générale"
                    }</p>
                  </div>
                  
                  <div style="margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 3px solid #3b82f6;">
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 500;">💬 Votre message</p>
                    <p style="margin: 0; color: #374151; font-style: italic; line-height: 1.5;">"${message}"</p>
                  </div>
                  
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">📧 Email</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">${email}</p>
                    </div>
                    ${
                      phone
                        ? `
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">📱 Téléphone</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">${phone}</p>
                    </div>
                    `
                        : ""
                    }
                    ${
                      company
                        ? `
                    <div>
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">🏢 Entreprise</p>
                      <p style="margin: 0; color: #1f2937; font-weight: 500;">${company}</p>
                    </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
              
              <!-- Prochaines étapes -->
              <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 25px; border-radius: 12px; border-left: 5px solid #f59e0b; margin: 25px 0;">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">⏱️</span> Prochaines étapes
                </h3>
                <ul style="color: #92400e; margin: 0; padding-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 8px;">Notre équipe analyse votre demande (sous 2h)</li>
                  <li style="margin-bottom: 8px;">Vous recevrez un devis personnalisé (sous 24h)</li>
                  <li>Un expert vous contactera pour discuter des détails</li>
                </ul>
              </div>
              
              <!-- Informations de contact -->
              <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 25px; border-radius: 12px; border-left: 5px solid #2563eb; margin: 25px 0;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">📞</span> Besoin de nous joindre rapidement ?
                </h3>
                <div style="color: #1e40af; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;">📧 <strong>Email :</strong> contact@jaxetech.com</p>
                  <p style="margin: 0 0 8px 0;">📱 <strong>Téléphone :</strong> +228 97 99 99 43</p>
                  <p style="margin: 0;">🌐 <strong>Site web :</strong> jaxe-sigma.vercel.app</p>
                </div>
              </div>
              
              <!-- Call to action -->
              <div style="text-align: center; margin: 35px 0;">
                <p style="color: #6b7280; margin-bottom: 20px; font-size: 16px;">En attendant, découvrez tous nos services :</p>
                <a href="https://jaxe-sigma.vercel.app" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 50px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3); transition: all 0.3s ease;">🌐 Visiter JAXE-TECH.com</a>
              </div>
            </div>
            
            <!-- Footer professionnel -->
            <div style="background: linear-gradient(135deg, #1f2937, #111827); color: white; padding: 30px;">
              <div style="text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">JAXE-TECH</h3>
                <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 16px;">🚀 Votre partenaire digital au Togo</p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center;">
                <div>
                  <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 14px;">📍 Localisation</p>
                  <p style="margin: 0; color: white; font-weight: 500;">Lomé, Togo</p>
                </div>
                <div>
                  <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 14px;">📧 Contact</p>
                  <p style="margin: 0; color: white; font-weight: 500;">contact@jaxetech.com</p>
                </div>
                <div>
                  <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 14px;">🌐 Services</p>
                  <p style="margin: 0; color: white; font-weight: 500;">Web • Mobile • Cloud</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="margin: 0; font-size: 12px; color: #9ca3af;">© 2024 JAXE-TECH. Tous droits réservés. | Solutions web innovantes au Togo</p>
              </div>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    console.log("Emails sent successfully:", { emailToCompany, emailToUser });

    return NextResponse.json(
      {
        message: "Message envoyé avec succès ! Nous vous contacterons bientôt.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';


import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const form = await request.formData();
        const nom = form.get('nom') as string;
        const email = form.get('email') as string;
        const telephone = form.get('telephone') as string;
        const message = form.get('message') as string;

        if (!nom || !email || !telephone) {
            return NextResponse.json(
                { error: 'Tous les champs sont obligatoires' },
                { status: 400 }
            );
        }

        // 1️⃣ Enregistrement dans Supabase
        const { error } = await supabase
            .from('contacts')
            .insert([{ nom, email, telephone, message }]);

        if (error) {
            console.error(error);
            return NextResponse.json(
                { error: 'Impossible d’enregistrer la demande' },
                { status: 500 }
            );
        }

        // 2️⃣ Envoi d’un e-mail de notification
        try {
            await resend.emails.send({
                from: 'Lumina Clean <onboarding@resend.dev>', // tu pourras le remplacer par ton domaine Resend validé
                to: process.env.CONTACT_RECEIVER!, // ex: luminacleanservice@gmail.com
                subject: `Nouvelle demande de contact - ${nom}`,
                html: `
          <h2>Nouvelle demande reçue via le site Lumina Clean</h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Message :</strong></p>
          <p>${message || '(aucun message)'}</p>
        `,
            });
        } catch (emailError) {
            console.error('Erreur lors de l’envoi du mail :', emailError);
            // on ne bloque pas le retour succès si juste l'email échoue
        }

        return NextResponse.json(
            { message: 'Formulaire enregistré et email envoyé' },
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
);


export async function POST(request: Request) {
    try {
        const form = await request.formData();
        const nom = form.get('nom') as string;
        const email = form.get('email') as string;
        const telephone = form.get('telephone') as string;
        const message = form.get('message') as string;

        if (!nom || !email || !telephone) {
            return NextResponse.json({ error: 'Tous les champs sont obligatoires' }, { status: 400 });
        }

        const { error } = await supabase
            .from('contacts')
            .insert([{ nom, email, telephone, message }]);

        if (error) {
            console.error(error);
            return NextResponse.json({ error: 'Impossible d’enregistrer la demande' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Formulaire enregistré avec succès' }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
    }
}

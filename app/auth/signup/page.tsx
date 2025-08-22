"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/browser";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setMessage(null);
        setLoading(true);

        console.log("SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);
        console.log("SUPABASE_KEY", process.env.NEXT_PUBLIC_SUPABASE_KEY?.slice(0, 10) + "...");

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo:
                    typeof window !== "undefined"
                        ? `${window.location.origin}/login`
                        : undefined,
            },
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        setMessage(
            "Compte créé ! Vérifie tes emails si la confirmation est activée, puis connecte-toi."
        );
    }

    return (
        <main className="mx-auto max-w-sm p-6">
            <h1 className="text-2xl font-semibold mb-4">Inscription</h1>

            <form onSubmit={onSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full border rounded p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                {message && <p className="text-sm text-green-700">{message}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-black text-white py-2"
                >
                    {loading ? "Création..." : "Créer un compte"}
                </button>
            </form>

            <p className="mt-4 text-sm">
                Déjà un compte ?{" "}
                <a href="/login" className="underline">
                    Se connecter
                </a>
            </p>
        </main>
    );
}

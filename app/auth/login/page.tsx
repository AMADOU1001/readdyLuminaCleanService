"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function LoginPage() {
    const supabase = createSupabaseBrowserClient();
    const router = useRouter();
    const params = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        // Redirige vers /admin (ou vers l'URL initiale protégée)
        const redirectTo = params.get("redirectedFrom") ?? "/admin";
        router.replace(redirectTo);
    }

    return (
        <main className="mx-auto max-w-sm p-6">
            <h1 className="text-2xl font-semibold mb-4">Connexion</h1>

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
                    autoComplete="current-password"
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-black text-white py-2"
                >
                    {loading ? "Connexion..." : "Se connecter"}
                </button>
            </form>

            <p className="mt-4 text-sm">
                Pas de compte ?{" "}
                <a href="/signup" className="underline">
                    S'inscrire
                </a>
            </p>
        </main>
    );
}

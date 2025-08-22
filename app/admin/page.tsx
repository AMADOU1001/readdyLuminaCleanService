"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Stats from "./Stats";

type Contact = {
    id: string;
    nom: string;
    email: string;
    telephone: string;
    message: string | null;
    created_at: string;
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function AdminPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorText, setErrorText] = useState<string | null>(null);

    useEffect(() => {
        async function fetchContacts() {
            setLoading(true);
            setErrorText(null);

            const { data, error } = await supabase
                .from("contacts")
                .select("id, nom, email, telephone, message, created_at")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Load contacts error:", error);
                setErrorText(error.message ?? "Impossible de charger les contacts.");
            } else {
                setContacts(data ?? []);
            }
            setLoading(false);
        }

        fetchContacts();

        // Realtime: ajoute les nouvelles demandes sans recharger
        const channel = supabase
            .channel("realtime:contacts")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "contacts" },
                (payload: any) => {
                    setContacts((prev) => [payload.new as Contact, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    // ✅ Fonction logout
    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login"); // redirige vers la page de login
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), url('https://readdy.ai/api/search-image?query=modern%20office%20workspace%20with%20blue%20theme%20dashboard%20background&width=1200&height=600&orientation=landscape')`,
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                            Tableau de bord
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">
                            Demandes reçues via le formulaire de contact
                        </p>
                    </div>

                    {/* ✅ Bouton Déconnexion */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow"
                    >
                        Se déconnecter
                    </button>
                </div>
            </section >


            {/* Section tableau */}
            < section className="py-12 sm:py-16 md:py-20 bg-gray-50" >
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Demandes</h2>
                            <button
                                onClick={async () => {
                                    setLoading(true);
                                    const { data, error } = await supabase
                                        .from("contacts")
                                        .select("id, nom, email, telephone, message, created_at")
                                        .order("created_at", { ascending: false });
                                    if (error) {
                                        console.error("Refresh error:", error);
                                        setErrorText(error.message ?? "Erreur de rafraîchissement.");
                                    } else {
                                        setContacts(data ?? []);
                                    }
                                    setLoading(false);
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow"
                            >
                                Rafraîchir
                            </button>
                        </div>

                        {errorText && (
                            <div className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700">
                                {errorText}
                            </div>
                        )}

                        {loading ? (
                            <p className="text-gray-600">Chargement des données...</p>
                        ) : contacts.length === 0 ? (
                            <p className="text-gray-600">Aucune demande pour le moment.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-blue-600 text-white text-left">
                                            <th className="px-4 py-3 rounded-tl-lg">Nom</th>
                                            <th className="px-4 py-3">Téléphone</th>
                                            <th className="px-4 py-3">Email</th>
                                            <th className="px-4 py-3">Message</th>
                                            <th className="px-4 py-3 rounded-tr-lg">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts.map((c) => (
                                            <tr key={c.id} className="border-b hover:bg-gray-50 transition-colors">
                                                <td className="px-4 py-3 font-medium text-gray-900">{c.nom}</td>
                                                <td className="px-4 py-3 text-gray-700">{c.telephone}</td>
                                                <td className="px-4 py-3">
                                                    <a className="text-blue-600 hover:text-blue-700" href={`mailto:${c.email}`}>
                                                        {c.email}
                                                    </a>
                                                </td>
                                                <td className="px-4 py-3 text-gray-700 max-w-xs">
                                                    <span className="line-clamp-2">{c.message}</span>
                                                </td>
                                                <td className="px-4 py-3 text-gray-500 text-sm">
                                                    {new Date(c.created_at).toLocaleString("fr-CA")}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </section >

            {/* Section Stats */}
            < section className="py-12 sm:py-16 md:py-20 bg-gray-50" >
                <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <Stats /> {/* ✅ ICI on affiche les stats */}
                </div>
            </section >
        </div >
    );
}

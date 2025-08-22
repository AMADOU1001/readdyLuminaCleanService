"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { RefreshCw, Phone, Mail, Calendar, MessageSquare, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

type Contact = {
    id: string;
    nom: string;
    email: string;
    telephone: string;
    message: string | null;
    created_at: string;
};

// ✅ Composant Stats (tu pourras plus tard remplacer les chiffres par des vrais calculs supabase)
const Stats = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-600 font-semibold">Demandes du jour</p>
                <p className="text-2xl font-bold text-blue-800">-</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-600 font-semibold">Total cette semaine</p>
                <p className="text-2xl font-bold text-green-800">-</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-600 font-semibold">Taux de réponse</p>
                <p className="text-2xl font-bold text-purple-800">-</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-600 font-semibold">Clients actifs</p>
                <p className="text-2xl font-bold text-orange-800">-</p>
            </div>
        </div>
    </div>
);

// ✅ Composant de déconnexion branché sur Supabase
const SignOutButton = () => {
    const router = useRouter();
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY!
    );
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setLoading(false);
        router.replace("/login");
    };

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow text-sm sm:text-base disabled:opacity-50"
        >
            <LogOut className="w-4 h-4" />
            {loading ? "Déconnexion..." : <span className="hidden sm:inline">Déconnexion</span>}
        </button>
    );
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function AdminPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string | null>(null);

    // ✅ Chargement initial des contacts
    useEffect(() => {
        fetchContacts();

        // ✅ Abonnement temps réel
        const channel = supabase
            .channel("contacts-changes")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "contacts" },
                (payload) => {
                    setContacts((prev) => [payload.new as Contact, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    // ✅ Fonction de chargement depuis supabase
    const fetchContacts = async () => {
        setLoading(true);
        setErrorText(null);

        try {
            const { data, error } = await supabase
                .from("contacts")
                .select("id, nom, email, telephone, message, created_at")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setContacts(data || []);
        } catch (error: any) {
            console.error("Load contacts error:", error);
            setErrorText("Impossible de charger les contacts.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 text-white overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Header avec bouton de déconnexion */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
                            <div className="mb-4 sm:mb-0">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    Tableau de bord
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed mt-2">
                                    Demandes reçues via le formulaire de contact
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <SignOutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section tableau */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="bg-white rounded-xl shadow-lg">
                        {/* Header du tableau */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 border-b border-gray-200">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Demandes de contact
                                <span className="ml-2 text-sm sm:text-base font-normal text-gray-500">
                                    ({contacts.length} {contacts.length > 1 ? "demandes" : "demande"})
                                </span>
                            </h2>
                            <button
                                onClick={fetchContacts}
                                disabled={loading}
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                <span className="hidden sm:inline">Rafraîchir</span>
                                <span className="sm:hidden">Actualiser</span>
                            </button>
                        </div>

                        {/* Contenu du tableau */}
                        <div className="p-4 sm:p-6">
                            {errorText && (
                                <div className="mb-6 p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm sm:text-base">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                        {errorText}
                                    </div>
                                </div>
                            )}

                            {loading ? (
                                <div className="flex items-center justify-center py-12">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        <span>Chargement des données...</span>
                                    </div>
                                </div>
                            ) : contacts.length === 0 ? (
                                <div className="text-center py-12">
                                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-600 text-lg">Aucune demande pour le moment.</p>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Les nouvelles demandes apparaîtront ici automatiquement.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {/* Version desktop */}
                                    <div className="hidden lg:block overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-blue-600 text-white text-left">
                                                    <th className="px-6 py-4 rounded-tl-lg font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            <User className="w-4 h-4" />
                                                            Nom
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="w-4 h-4" />
                                                            Téléphone
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            <Mail className="w-4 h-4" />
                                                            Email
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-4 font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            <MessageSquare className="w-4 h-4" />
                                                            Message
                                                        </div>
                                                    </th>
                                                    <th className="px-6 py-4 rounded-tr-lg font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            Date
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contacts.map((c, index) => (
                                                    <tr
                                                        key={c.id}
                                                        className={`border-b hover:bg-blue-50 transition-colors ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                            }`}
                                                    >
                                                        <td className="px-6 py-4 font-medium text-gray-900">{c.nom}</td>
                                                        <td className="px-6 py-4 text-gray-700 font-mono text-sm">{c.telephone}</td>
                                                        <td className="px-6 py-4">
                                                            <a
                                                                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                                                                href={`mailto:${c.email}`}
                                                            >
                                                                {c.email}
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 text-gray-700 max-w-xs">
                                                            <div className="line-clamp-2 text-sm leading-relaxed">
                                                                {c.message || "Aucun message"}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-gray-500 text-sm font-mono">
                                                            {new Date(c.created_at).toLocaleString("fr-CA", {
                                                                year: "numeric",
                                                                month: "2-digit",
                                                                day: "2-digit",
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                            })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Version mobile */}
                                    <div className="lg:hidden space-y-4">
                                        {contacts.map((c) => (
                                            <div
                                                key={c.id}
                                                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                        <h3 className="font-semibold text-gray-900 text-sm">{c.nom}</h3>
                                                    </div>
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                        {new Date(c.created_at).toLocaleDateString("fr-CA")}
                                                    </span>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700 font-mono">{c.telephone}</span>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                        <a
                                                            href={`mailto:${c.email}`}
                                                            className="text-sm text-blue-600 hover:text-blue-700 hover:underline truncate"
                                                        >
                                                            {c.email}
                                                        </a>
                                                    </div>

                                                    {c.message && (
                                                        <div className="flex gap-2 mt-3">
                                                            <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                                            <p className="text-sm text-gray-600 leading-relaxed">{c.message}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Stats */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <Stats />
                </div>
            </section>
        </div>
    );
}

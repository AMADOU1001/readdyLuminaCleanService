"use client";

import { useEffect, useState } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { RefreshCw, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/browser";

type Contact = {
    id: string;
    nom: string;
    email: string;
    telephone: string;
    message: string | null;
    created_at: string;
};

// ✅ Composant Stats
const Stats = () => {
    const [stats, setStats] = useState({ today: 0, week: 0, year: 0, total: 0 });
    const [monthlyData, setMonthlyData] = useState<{ mois: string; total: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const weekAgo = new Date();
            weekAgo.setDate(today.getDate() - 7);
            const yearStart = new Date(today.getFullYear(), 0, 1);
            const yearEnd = new Date(today.getFullYear(), 11, 31);

            const { data, error } = await supabase.from("contacts").select("created_at");
            if (error || !data) {
                setLoading(false);
                return;
            }

            const counts = {
                today: data.filter((c) => new Date(c.created_at) >= today).length,
                week: data.filter((c) => new Date(c.created_at) >= weekAgo).length,
                year: data.filter((c) => new Date(c.created_at) >= yearStart).length,
                total: data.length,
            };
            setStats(counts);

            const countsByMonth: Record<string, number> = {};
            for (let i = 0; i < 12; i++) {
                const mois = new Date(today.getFullYear(), i, 1).toLocaleString("fr-FR", {
                    month: "short",
                });
                countsByMonth[mois] = 0;
            }

            data.forEach((row) => {
                const d = new Date(row.created_at);
                if (d >= yearStart && d <= yearEnd) {
                    const mois = d.toLocaleString("fr-FR", { month: "short" });
                    countsByMonth[mois] += 1;
                }
            });

            setMonthlyData(Object.entries(countsByMonth).map(([mois, total]) => ({ mois, total })));
            setLoading(false);
        };

        fetchStats();
    }, []);

    if (loading) return <p className="text-gray-600">Chargement des statistiques...</p>;

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Statistiques</h3>
            {/* Stats rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">Demandes du jour</p>
                    <p className="text-2xl font-bold text-blue-800">{stats.today}</p>
                </div>
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-green-600 font-semibold text-sm sm:text-base">Total cette semaine</p>
                    <p className="text-2xl font-bold text-green-800">{stats.week}</p>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-purple-600 font-semibold text-sm sm:text-base">Demandes de l'année</p>
                    <p className="text-2xl font-bold text-purple-800">{stats.year}</p>
                </div>
                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-orange-600 font-semibold text-sm sm:text-base">Total</p>
                    <p className="text-2xl font-bold text-orange-800">{stats.total}</p>
                </div>
            </div>

            {/* Graphique mensuel */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Demandes par mois</h4>
            <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mois" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="total" fill="#2563eb" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

// ✅ Bouton Déconnexion
const SignOutButton = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setLoading(false);
        router.replace("/auth/login");
    };

    return (
        <button
            onClick={handleLogout}
            disabled={loading}
            className="flex items-center gap-2 bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow text-sm sm:text-base disabled:opacity-50"
        >
            <LogOut className="w-4 h-4" />
            {loading ? "Déconnexion..." : <span className="hidden sm:inline">Déconnexion</span>}
        </button>
    );
};

export default function AdminPage() {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string | null>(null);
    const [authChecked, setAuthChecked] = useState(false);

    // ✅ Vérifie la session
    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                router.replace("/auth/login");
            }
            setAuthChecked(true);
        };

        checkAuth();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) router.replace("/auth/login");
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [router]);

    // ✅ Récupère les contacts si auth ok
    useEffect(() => {
        if (!authChecked) return;

        fetchContacts();

        const channel = supabase
            .channel("contacts-changes")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "contacts" }, (payload) => {
                setContacts((prev) => [payload.new as Contact, ...prev]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [authChecked]);

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
        } catch {
            setErrorText("Impossible de charger les contacts.");
        } finally {
            setLoading(false);
        }
    };

    if (!authChecked) {
        return <div className="text-center py-10">Vérification de l'authentification...</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative py-6 sm:py-12 text-white overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tableau de bord</h1>
                                <p className="text-sm sm:text-base opacity-90 mt-1 sm:mt-2">Demandes reçues via le formulaire</p>
                            </div>
                            <SignOutButton />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tableau contacts */}
            <section className="py-8 sm:py-12 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="bg-white rounded-xl shadow-lg">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border-b gap-2 sm:gap-0">
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                                Demandes de contact <span className="ml-1 sm:ml-2 text-gray-500 text-sm sm:text-base">({contacts.length})</span>
                            </h2>
                            <button
                                onClick={fetchContacts}
                                disabled={loading}
                                className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
                            >
                                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                Rafraîchir
                            </button>
                        </div>

                        <div className="p-2 sm:p-6 overflow-x-auto">
                            {errorText ? (
                                <div className="p-4 bg-red-50 text-red-700 rounded">{errorText}</div>
                            ) : loading ? (
                                <div className="text-center py-8">Chargement...</div>
                            ) : contacts.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">Aucune demande pour le moment.</div>
                            ) : (
                                <table className="min-w-[600px] w-full table-auto text-sm sm:text-base">
                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Nom</th>
                                            <th className="px-4 py-2 text-left">Téléphone</th>
                                            <th className="px-4 py-2 text-left">Email</th>
                                            <th className="px-4 py-2 text-left">Message</th>
                                            <th className="px-4 py-2 text-left">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts.map((c) => (
                                            <tr key={c.id} className="border-b">
                                                <td className="px-4 py-2">{c.nom}</td>
                                                <td className="px-4 py-2">
                                                    <a href={`tel:${c.telephone}`} className="text-blue-600 hover:underline">{c.telephone}</a>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">{c.email}</a>
                                                </td>
                                                <td className="px-4 py-2">{c.message || "—"}</td>
                                                <td className="px-4 py-2 text-gray-500 text-xs sm:text-sm">{new Date(c.created_at).toLocaleString("fr-FR")}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-8 sm:py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <Stats />
                </div>
            </section>
        </div>
    );
}

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
import { RefreshCw, LogOut, Plus, X, TrendingUp, Users, Calendar, Phone, Mail, MessageSquare, User, BarChart3 } from "lucide-react";
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

// Composant Stats avec animations
const Stats = () => {
    const [stats, setStats] = useState({ today: 0, week: 0, year: 0, total: 0 });
    const [monthlyData, setMonthlyData] = useState<{ mois: string; total: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [animatedStats, setAnimatedStats] = useState({ today: 0, week: 0, year: 0, total: 0 });

    useEffect(() => {
        if (!loading) {
            const duration = 1500;
            const steps = 50;
            const interval = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setAnimatedStats({
                    today: Math.floor(stats.today * easeOut),
                    week: Math.floor(stats.week * easeOut),
                    year: Math.floor(stats.year * easeOut),
                    total: Math.floor(stats.total * easeOut),
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                    setAnimatedStats(stats);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [loading, stats]);

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
            setTimeout(() => setLoading(false), 200);
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-gray-100 p-6 rounded-xl h-24"></div>
                    ))}
                </div>
                <div className="h-80 bg-gray-100 rounded-xl"></div>
            </div>
        );
    }

    const statsConfig = [
        { title: "Demandes du jour", value: animatedStats.today, icon: Calendar, color: "blue", bgColor: "bg-blue-50", textColor: "text-blue-600", numberColor: "text-blue-800", borderColor: "border-blue-200" },
        { title: "Cette semaine", value: animatedStats.week, icon: TrendingUp, color: "emerald", bgColor: "bg-emerald-50", textColor: "text-emerald-600", numberColor: "text-emerald-800", borderColor: "border-emerald-200" },
        { title: "Cette année", value: animatedStats.year, icon: BarChart3, color: "purple", bgColor: "bg-purple-50", textColor: "text-purple-600", numberColor: "text-purple-800", borderColor: "border-purple-200" },
        { title: "Total", value: animatedStats.total, icon: Users, color: "orange", bgColor: "bg-orange-50", textColor: "text-orange-600", numberColor: "text-orange-800", borderColor: "border-orange-200" }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100 hover-lift">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Statistiques</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {statsConfig.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <div
                            key={stat.title}
                            className={`${stat.bgColor} border ${stat.borderColor} p-4 sm:p-6 rounded-2xl hover-lift stat-card`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.textColor}`} />
                                <div className={`w-2 h-2 ${stat.bgColor === 'bg-blue-50' ? 'bg-blue-400' : stat.bgColor === 'bg-emerald-50' ? 'bg-emerald-400' : stat.bgColor === 'bg-purple-50' ? 'bg-purple-400' : 'bg-orange-400'} rounded-full pulse-dot`}></div>
                            </div>
                            <p className={`${stat.textColor} font-semibold text-xs sm:text-sm mb-2`}>{stat.title}</p>
                            <p className={`text-2xl sm:text-3xl font-bold ${stat.numberColor}`}>{stat.value}</p>
                        </div>
                    );
                })}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 rounded-2xl border border-gray-200">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Demandes par mois</h4>
                <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="mois" tick={{ fill: '#6b7280', fontSize: 12 }} />
                            <YAxis allowDecimals={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px', color: 'white' }} />
                            <Bar dataKey="total" fill="url(#gradient)" radius={[8, 8, 0, 0]} />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#1d4ed8" />
                                </linearGradient>
                            </defs>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <style jsx>{`
                .stat-card {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .pulse-dot {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
};

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
            className="group flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift disabled:opacity-50 text-sm sm:text-base"
        >
            <LogOut className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">{loading ? "Déconnexion..." : "Déconnexion"}</span>
        </button>
    );
};

export default function AdminPage() {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState<string | null>(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ nom: "", email: "", telephone: "", message: "" });

    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) router.replace("/auth/login");
            setAuthChecked(true);
        };
        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) router.replace("/auth/login");
        });

        return () => subscription.unsubscribe();
    }, [router]);

    useEffect(() => {
        if (!authChecked) return;
        fetchContacts();

        const channel = supabase
            .channel("contacts-changes")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "contacts" }, (payload) => {
                setContacts((prev) => [payload.new as Contact, ...prev]);
            })
            .subscribe();

        return () => supabase.removeChannel(channel);
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

    const handleSubmit = async () => {
        if (!formData.nom || !formData.email || !formData.telephone) {
            alert("Tous les champs sont requis.");
            return;
        }

        const { error } = await supabase.from("contacts").insert([formData]);
        if (error) {
            alert("Erreur lors de l'ajout du contact.");
        } else {
            setFormData({ nom: "", email: "", telephone: "", message: "" });
            setShowForm(false);
        }
    };

    if (!authChecked) return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
                <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Vérification de l'authentification...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
            {/* Header */}
            <section className="relative py-6 sm:py-12 md:py-16 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Tableau de bord</h1>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg opacity-90 pl-14 sm:pl-16">Gérez vos demandes et statistiques</p>
                            </div>
                            <SignOutButton />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tableau contacts */}
            <section className="py-8 sm:py-12 md:py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden hover-lift">
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 border-b border-gray-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Demandes de contact</h2>
                                        <p className="text-xs sm:text-sm text-gray-600">{contacts.length} demande{contacts.length > 1 ? 's' : ''}</p>
                                    </div>
                                    <button
                                        onClick={() => setShowForm((s) => !s)}
                                        className={`ml-2 p-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${showForm ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                                    >
                                        {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </button>
                                </div>
                                <button
                                    onClick={fetchContacts}
                                    disabled={loading}
                                    className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift disabled:opacity-50 text-sm"
                                >
                                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                    <span className="hidden sm:inline">Rafraîchir</span>
                                </button>
                            </div>
                        </div>

                        {showForm && (
                            <div className="p-4 sm:p-6 border-b bg-gradient-to-r from-green-50 to-emerald-50 form-slide-in">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nom complet"
                                        value={formData.nom}
                                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Téléphone"
                                        value={formData.telephone}
                                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                    <textarea
                                        placeholder="Message (optionnel)"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all sm:col-span-2"
                                        rows={3}
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl sm:col-span-2 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
                                    >
                                        Ajouter le contact
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="p-4 sm:p-6 overflow-x-auto">
                            {errorText ? (
                                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full pulse-dot"></div>
                                    <span>{errorText}</span>
                                </div>
                            ) : loading ? (
                                <div className="flex items-center justify-center py-12">
                                    <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
                                </div>
                            ) : contacts.length === 0 ? (
                                <div className="text-center py-12">
                                    <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">Aucune demande pour le moment.</p>
                                </div>
                            ) : (
                                <>
                                    {/* Desktop */}
                                    <div className="hidden lg:block">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                                    <th className="px-6 py-4 text-left rounded-tl-xl"><div className="flex items-center gap-2"><User className="w-4 h-4" />Nom</div></th>
                                                    <th className="px-6 py-4 text-left"><div className="flex items-center gap-2"><Phone className="w-4 h-4" />Téléphone</div></th>
                                                    <th className="px-6 py-4 text-left"><div className="flex items-center gap-2"><Mail className="w-4 h-4" />Email</div></th>
                                                    <th className="px-6 py-4 text-left"><div className="flex items-center gap-2"><MessageSquare className="w-4 h-4" />Message</div></th>
                                                    <th className="px-6 py-4 text-left rounded-tr-xl"><div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Date</div></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contacts.map((c, i) => (
                                                    <tr key={c.id} className={`border-b hover:bg-blue-50 transition-all table-row-animation ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`} style={{ animationDelay: `${i * 50}ms` }}>
                                                        <td className="px-6 py-4 font-medium">{c.nom}</td>
                                                        <td className="px-6 py-4"><a href={`tel:${c.telephone}`} className="text-blue-600 hover:underline">{c.telephone}</a></td>
                                                        <td className="px-6 py-4"><a href={`mailto:${c.email}`} className="text-blue-600 hover:underline">{c.email}</a></td>
                                                        <td className="px-6 py-4 text-sm">{c.message || "—"}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">{new Date(c.created_at).toLocaleString("fr-FR")}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Mobile */}
                                    <div className="lg:hidden space-y-4">
                                        {contacts.map((c, i) => (
                                            <div key={c.id} className="bg-gradient-to-r from-white to-gray-50 border rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all mobile-card" style={{ animationDelay: `${i * 100}ms` }}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                                        <User className="w-5 h-5 text-white" />
                                                    </div>
                                                    <h3 className="font-bold text-gray-900">{c.nom}</h3>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                                                        <Phone className="w-4 h-4 text-blue-600" />
                                                        <a href={`tel:${c.telephone}`} className="text-sm text-blue-600">{c.telephone}</a>
                                                    </div>
                                                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                                                        <Mail className="w-4 h-4 text-green-600" />
                                                        <a href={`mailto:${c.email}`} className="text-sm text-blue-600 truncate">{c.email}</a>
                                                    </div>
                                                    {c.message && (
                                                        <div className="flex gap-2 p-2 bg-purple-50 rounded-lg">
                                                            <MessageSquare className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                                            <p className="text-sm text-gray-600">{c.message}</p>
                                                        </div>
                                                    )}
                                                    <p className="text-xs text-gray-500 text-right">{new Date(c.created_at).toLocaleString("fr-FR")}</p>
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

            {/* Stats */}
            <section className="py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <Stats />
                </div>
            </section>

            <style jsx>{`
                .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
                .form-slide-in { animation: slideDown 0.4s ease-out; }
                @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                .table-row-animation { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
                .mobile-card { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .pulse-dot { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
            `}</style>
        </div>
    );
}
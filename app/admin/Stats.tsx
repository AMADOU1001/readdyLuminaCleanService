"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

type MonthlyStat = {
    mois: string;
    total: number;
};

export default function Stats() {
    const [monthlyData, setMonthlyData] = useState<MonthlyStat[]>([]);
    const [totalYear, setTotalYear] = useState(0);
    const [todayCount, setTodayCount] = useState(0);
    const [weekCount, setWeekCount] = useState(0);
    const [responseRate, setResponseRate] = useState<number | null>(null); // si tu veux l'ajouter plus tard
    const [activeClients, setActiveClients] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            setLoading(true);

            const year = new Date().getFullYear();
            const today = new Date();
            const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
            const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString();

            // semaine en cours
            const startOfWeek = new Date();
            startOfWeek.setDate(today.getDate() - today.getDay()); // début semaine (dimanche)
            startOfWeek.setHours(0, 0, 0, 0);
            const endOfWeek = new Date();
            endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // fin semaine (samedi)
            endOfWeek.setHours(23, 59, 59, 999);

            const startYear = `${year}-01-01`;
            const endYear = `${year}-12-31`;

            // 📊 Requête principale
            const { data, error } = await supabase
                .from("contacts")
                .select("id, created_at, email")
                .gte("created_at", startYear)
                .lte("created_at", endYear);

            if (error) {
                console.error("Erreur stats:", error);
                setLoading(false);
                return;
            }

            // Total annuel
            setTotalYear(data?.length || 0);

            // Stats du jour
            const todayData = data.filter(
                (row) =>
                    new Date(row.created_at) >= new Date(startOfDay) &&
                    new Date(row.created_at) <= new Date(endOfDay)
            );
            setTodayCount(todayData.length);

            // Stats de la semaine
            const weekData = data.filter(
                (row) =>
                    new Date(row.created_at) >= new Date(startOfWeek) &&
                    new Date(row.created_at) <= new Date(endOfWeek)
            );
            setWeekCount(weekData.length);

            // Clients actifs (emails uniques)
            const uniqueClients = new Set(data.map((row) => row.email));
            setActiveClients(uniqueClients.size);

            // Construire les stats mensuelles
            const counts: Record<string, number> = {};
            for (let i = 0; i < 12; i++) {
                const mois = new Date(year, i, 1).toLocaleString("fr-FR", {
                    month: "short",
                });
                counts[mois] = 0;
            }
            data?.forEach((row) => {
                const d = new Date(row.created_at);
                const mois = d.toLocaleString("fr-FR", { month: "short" });
                counts[mois] += 1;
            });
            const monthly = Object.entries(counts).map(([mois, total]) => ({
                mois,
                total,
            }));

            setMonthlyData(monthly);

            // (optionnel) taux de réponse → à calculer si tu as une table "réponses"
            setResponseRate(null);

            setLoading(false);
        }

        fetchStats();
    }, []);

    if (loading) {
        return <p className="text-gray-600">Chargement des statistiques...</p>;
    }

    return (
        <div className="space-y-8">
            {/* ✅ Stats rapides */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Statistiques rapides</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-600 font-semibold">Demandes du jour</p>
                        <p className="text-2xl font-bold text-blue-800">{todayCount}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-600 font-semibold">Total cette semaine</p>
                        <p className="text-2xl font-bold text-green-800">{weekCount}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-600 font-semibold">Taux de réponse</p>
                        <p className="text-2xl font-bold text-purple-800">
                            {responseRate !== null ? `${responseRate}%` : "-"}
                        </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-orange-600 font-semibold">Clients actifs</p>
                        <p className="text-2xl font-bold text-orange-800">{activeClients}</p>
                    </div>
                </div>
            </div>

            {/* ✅ Graphique annuel */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Statistiques {new Date().getFullYear()}
                </h2>
                <div className="mb-6">
                    <p className="text-lg text-gray-700">
                        Nombre total de demandes cette année :{" "}
                        <span className="font-bold text-blue-600">{totalYear}</span>
                    </p>
                </div>
                <div className="h-64">
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
        </div>
    );
}

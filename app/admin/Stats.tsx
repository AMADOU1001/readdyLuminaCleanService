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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            setLoading(true);

            // 1) Récupérer toutes les demandes de l'année courante
            const year = new Date().getFullYear();
            const start = `${year}-01-01`;
            const end = `${year}-12-31`;

            const { data, error } = await supabase
                .from("contacts")
                .select("id, created_at")
                .gte("created_at", start)
                .lte("created_at", end);

            if (error) {
                console.error("Erreur stats:", error);
                setLoading(false);
                return;
            }

            // 2) Construire les stats par mois
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
            setTotalYear(data?.length || 0);
            setLoading(false);
        }

        fetchStats();
    }, []);

    if (loading) {
        return <p className="text-gray-600">Chargement des statistiques...</p>;
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Statistiques {new Date().getFullYear()}
            </h2>

            {/* Total Annuel */}
            <div className="mb-6">
                <p className="text-lg text-gray-700">
                    Nombre total de demandes cette année :{" "}
                    <span className="font-bold text-blue-600">{totalYear}</span>
                </p>
            </div>

            {/* Graphique mensuel */}
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
    );
}

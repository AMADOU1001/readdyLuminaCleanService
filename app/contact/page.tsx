"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function AdminPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      const { data, error } = await supabase.from("contacts").select("*").order("id", { ascending: false });
      if (!error) setContacts(data || []);
      setLoading(false);
    }
    fetchContacts();
  }, []);

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
              Gérez les demandes de contact reçues via le site
            </p>
          </div>
        </div>
      </section>

      {/* Table section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Demandes reçues</h2>

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
                        <td className="px-4 py-3 text-blue-600">{c.email}</td>
                        <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{c.message}</td>
                        <td className="px-4 py-3 text-gray-500 text-sm">
                          {new Date(c.created_at).toLocaleString("fr-FR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

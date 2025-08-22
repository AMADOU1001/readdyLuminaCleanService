"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useState } from "react";

export default function SignOutButton() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signOut() {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
    router.replace("/login");
  }

  return (
    <button
      onClick={signOut}
      disabled={loading}
      className="rounded bg-gray-200 px-4 py-2"
    >
      {loading ? "Déconnexion..." : "Se déconnecter"}
    </button>
  );
}

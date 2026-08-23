

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

 return (
  <main className="min-h-screen p-8">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-slate-950">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Welcome back, {user.email}
        </p>
      </div>

      <LogoutButton />
    </div>
  </main>
);
}
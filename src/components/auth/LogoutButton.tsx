"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleLogout}
    >
      Sign out
    </Button>
  );
}
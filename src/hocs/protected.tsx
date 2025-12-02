import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

async function UserDetails() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
        redirect("/auth/login");
    }

    return data;
}

export default function ProtectedPage({ children }: { children: (user: any) => React.ReactNode }) {
    const user = UserDetails()

    return children(user)
}
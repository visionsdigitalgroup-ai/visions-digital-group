import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function FoundingMembers() {
  const { count } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    });

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Founding Members
          </div>

          <h2 className="mt-8 text-7xl font-bold text-white">
            {count || 0}+
          </h2>

          <h3 className="mt-4 text-3xl font-semibold text-white">
            Businesses Joined The Waitlist
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join the first wave of business owners helping shape
            the future of VDG OS.
          </p>

        </div>
      </div>
    </section>
  );
}
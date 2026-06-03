import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminPage() {
  const {
    data: members,
    error,
  } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
  }

  const totalMembers = members?.length || 0;

  const breakdown: Record<string, number> =
  members?.reduce(
    (acc, member) => {
      const type = member.business_type || "Other";

      acc[type] = (acc[type] || 0) + 1;

      return acc;
    },
    {} as Record<string, number>
  ) || {};

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="mb-12">

          <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Founder Dashboard
          </div>

          <h1 className="mt-6 text-5xl font-bold">
            VDG OS Admin
          </h1>

          <p className="mt-3 text-slate-400">
            Monitor waitlist growth and early adopters.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-10">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Total Members
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              {totalMembers}
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Project Status
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-400">
              Live
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Waitlist Growth
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-400">
              Active
            </h2>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:col-span-1">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Business Types
              </h2>

              <div className="space-y-4">

                {Object.entries(breakdown).map(
  ([type, count]: [string, number]) => (
                    <div
                      key={type}
                      className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3"
                    >
                      <span>{type}</span>

                      <span className="font-bold text-blue-400">
                        {count}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Latest Signups
              </h2>

              <div className="space-y-4">

                {members?.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col justify-between rounded-xl bg-slate-800 p-4 md:flex-row md:items-center"
                  >
                    <div>

                      <p className="font-semibold text-white">
                        {member.name || "Unknown"}
                      </p>

                      <p className="text-sm text-slate-400">
                        {member.email}
                      </p>

                    </div>

                    <div className="mt-3 text-left md:mt-0 md:text-right">

                      <p className="text-sm text-blue-400">
                        {member.business_type || "Other"}
                      </p>

                      <p className="text-xs text-slate-500">
                        {new Date(
                          member.created_at
                        ).toLocaleDateString()}
                      </p>

                    </div>

                  </div>
                ))}

                {members?.length === 0 && (
                  <div className="rounded-xl bg-slate-800 p-6 text-center text-slate-400">
                    No members have joined yet.
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
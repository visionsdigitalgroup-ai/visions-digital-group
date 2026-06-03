import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default async function AdminPage() {
  const cookieStore = await cookies();

  const isAuthed =
    cookieStore.get("admin-auth");

  if (!isAuthed) {
    redirect("/admin/login");
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

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

  const totalMembers =
    members?.length || 0;

  const breakdown =
    members?.reduce(
      (
        acc: Record<
          string,
          number
        >,
        member: any
      ) => {
        const type =
          member.business_type ||
          "Other";

        acc[type] =
          (acc[type] || 0) + 1;

        return acc;
      },
      {}
    ) || {};

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Founder Dashboard
            </div>

            <h1 className="mt-4 text-5xl font-bold">
              VDG OS Admin
            </h1>

            <p className="mt-2 text-slate-400">
              Monitor founding members,
              waitlist growth, and launch
              metrics.
            </p>

          </div>

          <form
            action="/api/admin-logout"
            method="POST"
          >
            <button
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold hover:bg-slate-800"
            >
              Logout
            </button>
          </form>

        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Founding Members
            </p>

            <h2 className="mt-3 text-5xl font-bold">
              {totalMembers}
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Status
            </p>

            <h2 className="mt-3 text-3xl font-bold text-green-400">
              Live
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-400">
              VDG OS
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">
              Growth
            </p>

            <h2 className="mt-3 text-3xl font-bold text-purple-400">
              Tracking
            </h2>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

              <h2 className="mb-6 text-2xl font-bold">
                Business Types
              </h2>

              <div className="space-y-3">

                {Object.entries(
                  breakdown
                ).map(
                  (
                    [type, count]
                  ) => (
                    <div
                      key={type}
                      className="flex items-center justify-between rounded-xl bg-slate-800 px-4 py-3"
                    >
                      <span>
                        {type}
                      </span>

                      <span className="font-bold text-blue-400">
                        {Number(
                          count
                        )}
                      </span>
                    </div>
                  )
                )}

                {Object.keys(
                  breakdown
                ).length === 0 && (
                  <div className="rounded-xl bg-slate-800 p-4 text-slate-400">
                    No data yet.
                  </div>
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

                {members?.map(
                  (member: any) => (
                    <div
                      key={
                        member.id
                      }
                      className="flex flex-col justify-between rounded-xl bg-slate-800 p-4 md:flex-row md:items-center"
                    >
                      <div>

                        <p className="font-semibold">
                          {member.name ||
                            "Unknown"}
                        </p>

                        <p className="text-sm text-slate-400">
                          {
                            member.email
                          }
                        </p>

                      </div>

                      <div className="mt-3 text-left md:mt-0 md:text-right">

                        <p className="text-sm text-blue-400">
                          {member.business_type ||
                            "Other"}
                        </p>

                        <p className="text-xs text-slate-500">
                          {new Date(
                            member.created_at
                          ).toLocaleDateString()}
                        </p>

                      </div>

                    </div>
                  )
                )}

                {members?.length ===
                  0 && (
                  <div className="rounded-xl bg-slate-800 p-6 text-center text-slate-400">
                    No founding members yet.
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
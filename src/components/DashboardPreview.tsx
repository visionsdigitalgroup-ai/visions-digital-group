"use client";

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-slate-950 px-6 py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="text-center">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Multi Device Platform
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Run Your Entire Business
            <span className="block text-blue-400">
              From Anywhere
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Whether you are in the office, on a job site,
            or meeting clients, VDG OS keeps your leads,
            customers, automations, and reporting connected.
          </p>
        </div>

        <div className="mt-24 flex flex-col items-center">

          {/* Laptop /}

          <div className="relative z-30 w-full max-w-[950px]">
            <div className="overflow-hidden rounded-t-3xl border border-slate-700 bg-slate-900 shadow-2xl">

              <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="p-8">

                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      VDG OS Dashboard
                    </h3>

                    <p className="text-slate-400">
                      Live Business Overview
                    </p>
                  </div>

                  <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                    System Online
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-4">

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Leads Today
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      27
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Customers
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      184
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Revenue
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      $42.5K
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Automations
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      12
                    </div>
                  </div>

                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">

                  <div className="col-span-2 rounded-xl bg-slate-800 p-6">

                    <h4 className="mb-6 font-semibold text-white">
                      Revenue Growth
                    </h4>

                    <div className="flex h-52 items-end gap-3">
                      <div className="h-16 w-full rounded bg-blue-500/40" />
                      <div className="h-20 w-full rounded bg-blue-500/40" />
                      <div className="h-24 w-full rounded bg-blue-500/40" />
                      <div className="h-28 w-full rounded bg-blue-500/40" />
                      <div className="h-36 w-full rounded bg-blue-500/50" />
                      <div className="h-42 w-full rounded bg-blue-500/60" />
                      <div className="h-48 w-full rounded bg-blue-500" />
                    </div>

                  </div>

                  <div className="rounded-xl bg-slate-800 p-6">

                    <h4 className="mb-4 font-semibold text-white">
                      Pipeline
                    </h4>

                    <div className="space-y-4">

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Won
                        </span>

                        <span className="font-bold text-green-400">
                          24
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Pending
                        </span>

                        <span className="font-bold text-yellow-400">
                          12
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Proposals
                        </span>

                        <span className="font-bold text-blue-400">
                          8
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-slate-800 p-6">

                  <h4 className="mb-4 font-semibold text-white">
                    Recent Leads
                  </h4>

                  <div className="grid gap-3 md:grid-cols-4">

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      John Smith
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Sarah Johnson
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Mike Davis
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Emily Brown
                    </div>

                  </div>

                </div>

              </div>
            </div>

            <div className="mx-auto h-5 w-48 rounded-b-3xl bg-slate-700" />
          </div>

          {/ Devices Below */}

          <div className="mt-12 flex flex-wrap items-end justify-center gap-16">

            <div className="w-[320px] rotate-[-6deg] rounded-[34px] border border-slate-700 bg-slate-900 p-5 shadow-2xl">

              <div className="mb-4 text-center text-slate-500">
                CRM
              </div>

              <div className="space-y-3">

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  John Smith
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Sarah Johnson
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Mike Davis
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Emily Brown
                </div>

              </div>

            </div>

            <div className="w-[190px] rotate-[8deg] rounded-[36px] border border-slate-700 bg-slate-900 p-4 shadow-2xl">

              <div className="mb-4 rounded-full bg-slate-800 py-2 text-center text-xs text-slate-400">
                Mobile App
              </div>

              <div className="space-y-3">

                <div className="rounded-lg bg-blue-500 p-4 text-center text-white">
                  27 Leads
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  18 Appointments
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  CRM
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  Reports
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
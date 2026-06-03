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
            Complete Online Presence Visibility
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            See Everything That Drives Growth
            <span className="block text-blue-400">
              In One Place
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-400">
            Monitor your website performance, online reviews,
            search visibility, lead generation, customer activity,
            automation, and business growth from a single
            dashboard built specifically for service businesses.
          </p>

        </div>

        <div className="mt-24 flex flex-col items-center">

          <div className="relative z-30 w-full max-w-[1000px]">

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
                      VDG OS Command Center
                    </h3>

                    <p className="text-slate-400">
                      Online Presence & Business Intelligence
                    </p>
                  </div>

                  <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                    Live Monitoring
                  </div>

                </div>

                <div className="grid gap-4 md:grid-cols-4">

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Website Traffic
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      4,872
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Monthly Visitors
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Google Reviews
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      4.9 ★
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Reputation Score
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      New Leads
                    </div>

                    <div className="mt-2 text-3xl font-bold text-white">
                      127
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      This Month
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 p-5">
                    <div className="text-sm text-slate-400">
                      Search Visibility
                    </div>

                    <div className="mt-2 text-3xl font-bold text-green-400">
                      +38%
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Growth
                    </div>
                  </div>

                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">

                  <div className="col-span-2 rounded-xl bg-slate-800 p-6">

                    <h4 className="mb-6 font-semibold text-white">
                      Online Visibility Growth
                    </h4>

                    <div className="flex h-52 items-end gap-3">

                      <div className="h-16 w-full rounded bg-blue-500/30" />
                      <div className="h-20 w-full rounded bg-blue-500/30" />
                      <div className="h-24 w-full rounded bg-blue-500/40" />
                      <div className="h-28 w-full rounded bg-blue-500/50" />
                      <div className="h-36 w-full rounded bg-blue-500/60" />
                      <div className="h-42 w-full rounded bg-blue-500/70" />
                      <div className="h-48 w-full rounded bg-blue-500" />

                    </div>

                  </div>

                  <div className="rounded-xl bg-slate-800 p-6">

                    <h4 className="mb-4 font-semibold text-white">
                      Lead Sources
                    </h4>

                    <div className="space-y-4">

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Google Search
                        </span>

                        <span className="font-bold text-green-400">
                          52
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Google Business
                        </span>

                        <span className="font-bold text-blue-400">
                          38
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Website Forms
                        </span>

                        <span className="font-bold text-yellow-400">
                          37
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-slate-800 p-6">

                  <h4 className="mb-4 font-semibold text-white">
                    Recent Opportunities
                  </h4>

                  <div className="grid gap-3 md:grid-cols-4">

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Tampa Roofing Co.
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Coastal HVAC
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Bay Area Plumbing
                    </div>

                    <div className="rounded-lg bg-slate-900 p-4 text-white">
                      Sunshine Electric
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="mx-auto h-5 w-48 rounded-b-3xl bg-slate-700" />

          </div>

          <div className="mt-12 flex flex-wrap items-end justify-center gap-16">

            <div className="w-[320px] rotate-[-6deg] rounded-[34px] border border-slate-700 bg-slate-900 p-5 shadow-2xl">

              <div className="mb-4 text-center text-slate-500">
                Customer Hub
              </div>

              <div className="space-y-3">

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Customers
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Projects
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Reviews
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-white">
                  Invoices
                </div>

              </div>

            </div>

            <div className="w-[190px] rotate-[8deg] rounded-[36px] border border-slate-700 bg-slate-900 p-4 shadow-2xl">

              <div className="mb-4 rounded-full bg-slate-800 py-2 text-center text-xs text-slate-400">
                Business Snapshot
              </div>

              <div className="space-y-3">

                <div className="rounded-lg bg-blue-500 p-4 text-center text-white">
                  Website Traffic
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  Google Reviews
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  New Leads
                </div>

                <div className="rounded-lg bg-slate-800 p-4 text-center text-white">
                  Growth Report
                </div>

              </div>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {[
              "Website Management",
              "SEO Monitoring",
              "Google Business Profile",
              "Review Management",
              "Lead Generation",
              "Customer Management",
              "Automation",
              "Reporting",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {feature}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
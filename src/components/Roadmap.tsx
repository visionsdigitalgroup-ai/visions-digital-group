export default function Roadmap() {
  return (
    <section
  id="roadmap"
  className="bg-slate-950 py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Product Roadmap
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Building the future operating system for service businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-green-500/20 bg-slate-900 p-10">
            <div className="mb-8 inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              Available Today
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-lg text-white">
                  Lead Management
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-lg text-white">
                  CRM
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-lg text-white">
                  Automations
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-lg text-white">
                  Reporting
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="text-lg text-white">
                  Website Hosting
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-slate-900 p-10">
            <div className="mb-8 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              Coming Soon
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="text-lg text-white">
                  AI Agents
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="text-lg text-white">
                  Client Portals
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="text-lg text-white">
                  Mobile App
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="text-lg text-white">
                  Advanced Analytics
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-blue-400" />
                <span className="text-lg text-white">
                  Team Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
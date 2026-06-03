export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-3xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
          Consultation Request Received
        </div>

        <h1 className="text-5xl font-bold text-white md:text-6xl">
          Thank You For Reaching Out
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Your consultation request has been successfully submitted.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Our team will review your business information,
          online presence, visibility opportunities, and
          growth goals before reaching out to discuss
          the next steps.
        </p>

        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8 text-left">

          <h2 className="text-2xl font-bold text-white">
            What Happens Next?
          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                1
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Business Review
                </h3>

                <p className="mt-1 text-slate-400">
                  We review your business information,
                  current visibility, and growth opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                2
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Strategy Assessment
                </h3>

                <p className="mt-1 text-slate-400">
                  We identify opportunities related to
                  website performance, local visibility,
                  reviews, lead generation, and operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                3
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Consultation Conversation
                </h3>

                <p className="mt-1 text-slate-400">
                  We'll connect with you to discuss your
                  goals and determine whether VDG OS is
                  the right fit for your business.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Website Management
          </div>

          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            SEO & Visibility
          </div>

          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Review Management
          </div>

          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Lead Generation
          </div>

          <div className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Automation
          </div>

        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
        >
          Return To Homepage
        </a>

      </div>
    </main>
  );
}
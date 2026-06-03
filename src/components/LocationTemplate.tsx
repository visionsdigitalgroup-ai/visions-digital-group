import Link from "next/link";

type Props = {
  city: string;
  title: string;
  description: string;
};

export default function LocationTemplate({
  city,
  title,
  description,
}: Props) {
  return (
    <main className="bg-slate-950 text-white">

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            {city} Online Presence Management
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
            {description}
          </p>

          <a
            href="/#consultation"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
          >
            Schedule Consultation
          </a>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Everything Your Business Needs To Grow
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">
                Website Management
              </h3>

              <p className="mt-4 text-slate-400">
                Modern websites designed to generate leads.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">
                Local SEO
              </h3>

              <p className="mt-4 text-slate-400">
                Improve visibility in local search results.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">
                Reputation Management
              </h3>

              <p className="mt-4 text-slate-400">
                Build trust through reviews and customer feedback.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold">
                Lead Generation
              </h3>

              <p className="mt-4 text-slate-400">
                Turn website visitors into qualified leads.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="border-y border-slate-800 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Serving Businesses Throughout {city}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            VDG OS helps contractors, home service companies,
            consultants, agencies, and local businesses improve
            visibility, generate more leads, and streamline operations.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Schedule a consultation and discover how VDG OS
            can improve your online presence and lead generation.
          </p>

          <a
            href="/#consultation"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
          >
            Schedule Consultation
          </a>

          <div className="mt-8">
            <Link
              href="/locations"
              className="text-blue-400 hover:text-blue-300"
            >
              ← View All Locations
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}
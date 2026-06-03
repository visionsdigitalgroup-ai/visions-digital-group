import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  industry: string;
  seoKeyword: string;
};

export default function IndustryTemplate({
  badge,
  title,
  subtitle,
  description,
  industry,
  seoKeyword,
}: Props) {
  return (
    <main className="bg-slate-950 text-white">

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            {badge}
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            {title}

            <span className="mt-2 block text-blue-400">
              {subtitle}
            </span>
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
            How We Help {industry}
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                SEO & Local Visibility
              </h3>

              <p className="mt-4 text-slate-400">
                Improve rankings and visibility for
                high-intent searches related to {seoKeyword}.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Google Business Profile
              </h3>

              <p className="mt-4 text-slate-400">
                Improve map visibility, local rankings,
                and customer trust.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Review Management
              </h3>

              <p className="mt-4 text-slate-400">
                Generate more reviews and strengthen
                your online reputation.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Website Management
              </h3>

              <p className="mt-4 text-slate-400">
                Convert more visitors into leads with
                a high-performing website.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="border-y border-slate-800 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Everything Connected In One Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Manage your website, reviews, visibility,
            leads, customer communication, reporting,
            and automation from one system.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Grow?
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Schedule a consultation and discover
            how VDG OS can help your business
            generate more leads and improve visibility.
          </p>

          <a
            href="/#consultation"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
          >
            Schedule Consultation
          </a>

          <div className="mt-8">
            <Link
              href="/industries"
              className="text-blue-400 hover:text-blue-300"
            >
              ← View All Industries
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}
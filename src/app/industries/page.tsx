import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Industries We Serve | VDG OS",

  description:
    "Discover how VDG OS helps roofing companies, HVAC contractors, plumbers, electricians, marketing agencies, and service businesses improve online visibility, generate leads, and streamline operations.",

  keywords: [
    "roofing marketing",
    "hvac marketing",
    "plumbing marketing",
    "electrical contractor marketing",
    "contractor lead generation",
    "service business software",
    "online presence management",
  ],
};

const industries = [
  {
    title: "Roofing Companies",
    href: "/roofing-marketing-platform",
    description:
      "Generate more roofing leads, improve Google rankings, manage reviews, and automate customer follow-up.",
  },
  {
    title: "HVAC Companies",
    href: "/hvac-marketing-platform",
    description:
      "Improve local visibility, book more service calls, and streamline customer communication.",
  },
  {
    title: "Plumbing Companies",
    href: "/plumbing-marketing-platform",
    description:
      "Capture more emergency service leads and improve local search visibility.",
  },
  {
    title: "Electrical Contractors",
    href: "/electrical-marketing-platform",
    description:
      "Manage online reputation, local SEO, and lead generation from one platform.",
  },
  {
    title: "General Contractors",
    href: "/contractor-marketing-platform",
    description:
      "Track projects, manage leads, and improve your online presence.",
  },
  {
    title: "Marketing Agencies",
    href: "/agency-growth-platform",
    description:
      "Manage clients, reporting, websites, SEO, and automation more efficiently.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-slate-950">

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Industries We Serve
          </div>

          <h1 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Built For Service Businesses
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            VDG OS helps local service businesses improve online visibility,
            generate more qualified leads, strengthen reputation, automate
            customer communication, and operate more efficiently.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500/40 hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold text-white">
                  {industry.title}
                </h2>

                <p className="mt-4 text-slate-400">
                  {industry.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-blue-400">
                  Learn More →
                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
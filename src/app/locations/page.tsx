import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations We Serve | VDG OS",
  description:
    "Online presence management, SEO, website management, reputation management, and lead generation services for businesses throughout Florida.",
};

const locations = [
  {
    city: "Tampa",
    href: "/tampa-online-presence-management",
  },
  {
    city: "St. Petersburg",
    href: "/st-petersburg-online-presence-management",
  },
  {
    city: "Clearwater",
    href: "/clearwater-online-presence-management",
  },
  {
    city: "Brandon",
    href: "/brandon-online-presence-management",
  },
  {
    city: "Lakeland",
    href: "/lakeland-online-presence-management",
  },
];

export default function LocationsPage() {
  return (
    <main className="bg-slate-950 text-white">

      <section className="py-24 border-b border-slate-800">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Areas We Serve
          </h1>

          <p className="mt-6 text-xl text-slate-400">
            Helping service businesses improve visibility,
            reputation, lead generation, and online growth.
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {locations.map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition"
              >
                <h2 className="text-2xl font-bold">
                  {location.city}
                </h2>

                <p className="mt-4 text-slate-400">
                  Online Presence Management
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
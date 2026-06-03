import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Roofing Marketing Platform | Roofing SEO, Reviews & Lead Generation",

  description:
    "VDG OS helps roofing companies generate more leads through SEO, Google Business Profile optimization, review management, website management, automation, and customer communication.",

  keywords: [
    "roofing marketing",
    "roofing seo",
    "roofing lead generation",
    "roofing website management",
    "roofing google business profile",
    "roofing reviews",
    "roofing crm",
    "roofing contractor marketing",
  ],
};

export default function RoofingMarketingPage() {
  return (
    <main className="bg-slate-950 text-white">

      <section className="border-b border-slate-800 py-24">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Roofing Growth Platform
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Generate More Roofing Leads
            <span className="mt-2 block text-blue-400">
              And Grow Your Roofing Company
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
            Improve your online visibility, dominate local search,
            strengthen your reputation, generate qualified roofing
            leads, and manage customer communication from one
            connected platform.
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

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Why Roofing Companies Need A Strong Online Presence
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
              Homeowners search online before hiring a roofer.
              Your visibility, reviews, website, and Google Business
              Profile often determine who gets the call first.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Roofing SEO
              </h3>

              <p className="mt-4 text-slate-400">
                Improve rankings for roof repair, roof replacement,
                storm damage, emergency roofing services, and other
                high-intent searches in your service area.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Google Business Profile
              </h3>

              <p className="mt-4 text-slate-400">
                Increase visibility in Google Maps and local search
                results where homeowners actively search for roofing
                contractors.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Review Management
              </h3>

              <p className="mt-4 text-slate-400">
                Build trust through consistent review generation,
                response management, and reputation monitoring.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Website Management
              </h3>

              <p className="mt-4 text-slate-400">
                Fast, secure, mobile-friendly websites designed to
                convert visitors into booked inspections and estimates.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="border-y border-slate-800 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-center text-4xl font-bold">
            What VDG OS Helps Roofing Companies Manage
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-slate-900 p-6">
              Lead Generation
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Website Management
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Google Business Profile
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Customer Communication
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Review Management
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              CRM & Automation
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Reporting & Analytics
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              Local SEO
            </div>

          </div>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Grow Your Roofing Company?
          </h2>

          <p className="mt-6 text-xl text-slate-400">
            Schedule a consultation and discover how
            VDG OS can improve visibility, generate
            more leads, and streamline operations.
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
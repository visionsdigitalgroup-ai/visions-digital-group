"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
<section className="relative overflow-hidden bg-slate-950 pt-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb25,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1d4ed825,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">

        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Online Presence & Business Operations Platform
          </div>

          <h1 className="mx-auto mt-8 max-w-6xl text-6xl font-bold tracking-tight text-white md:text-7xl">

            Own Your Entire

            <span className="mt-2 block text-blue-400">
              Online Presence
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-slate-400">

            VDG OS helps service businesses manage
            websites, SEO, online reviews, local visibility,
            lead generation, customer communication,
            automation, and business operations from
            one connected platform.

          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="#waitlist"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Request Platform Access
            </a>

            <a
              href="#dashboard"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-white transition hover:border-slate-500"
            >
              <Play size={18} />
              See The Platform
            </a>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">

            <span>Website Management</span>

            <span>SEO & Local Visibility</span>

            <span>Reputation Management</span>

            <span>Lead Generation</span>

            <span>Customer Management</span>

            <span>Business Automation</span>

          </div>

          <div className="mt-10 text-sm text-slate-500">

            Built for contractors, home service companies,
            agencies, consultants, and growing local businesses.

          </div>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-3xl font-bold text-white">
              Website
            </div>

            <div className="mt-3 text-slate-400">
              Manage your website, hosting,
              and online presence.
            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-3xl font-bold text-white">
              Visibility
            </div>

            <div className="mt-3 text-slate-400">
              Improve SEO, local rankings,
              and search performance.
            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-3xl font-bold text-white">
              Reputation
            </div>

            <div className="mt-3 text-slate-400">
              Monitor reviews, ratings,
              and customer feedback.
            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <div className="text-3xl font-bold text-white">
              Operations
            </div>

            <div className="mt-3 text-slate-400">
              Manage leads, customers,
              automation, and reporting.
            </div>

          </div>

        </div>

        <div className="mt-10 flex justify-center">

          <a
            href="#dashboard"
            className="flex items-center gap-2 text-slate-400 transition hover:text-white"
          >
            Explore The Platform

            <ArrowRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}
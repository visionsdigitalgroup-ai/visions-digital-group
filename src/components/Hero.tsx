"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e40af25,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7c3aed25,transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="text-center">

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Built By Visions Digital Group
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-6xl font-bold tracking-tight text-white md:text-7xl">
            Operate Your Entire Business
            <span className="block text-blue-400">
              From One Dashboard
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
            Capture leads, automate follow-ups, manage customers,
            host websites, and track performance from a single
            platform built for service businesses.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Join The Waitlist
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-white transition hover:border-slate-500">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>Lead Management</span>
            <span>CRM</span>
            <span>Automations</span>
            <span>Reporting</span>
            <span>Website Hosting</span>
            <span>AI Workflows</span>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-bold text-white">27</div>
            <div className="mt-2 text-slate-400">
              New Leads Today
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-bold text-white">
              $42,500
            </div>
            <div className="mt-2 text-slate-400">
              Revenue Pipeline
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-bold text-white">12</div>
            <div className="mt-2 text-slate-400">
              Automations Running
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-4xl font-bold text-white">18</div>
            <div className="mt-2 text-slate-400">
              Appointments Scheduled
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#dashboard"
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            See The Platform
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
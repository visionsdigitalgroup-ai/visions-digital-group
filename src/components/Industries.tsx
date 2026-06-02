"use client";

import {
  Hammer,
  Wrench,
  Building2,
  Briefcase,
  Megaphone,
  Store,
} from "lucide-react";

const industries = [
  {
    icon: Hammer,
    title: "Contractors",
    description:
      "Manage estimates, leads, projects, and customer follow-ups from one place.",
  },
  {
    icon: Wrench,
    title: "HVAC & Home Services",
    description:
      "Automate scheduling, service requests, reminders, and customer communication.",
  },
  {
    icon: Building2,
    title: "Roofing Companies",
    description:
      "Track jobs, proposals, inspections, and sales pipelines efficiently.",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description:
      "Manage clients, appointments, proposals, and recurring services.",
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description:
      "Centralize reporting, websites, client management, and automations.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description:
      "Capture leads, improve customer communication, and grow revenue.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Trusted Across Multiple Industries
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Designed For The Businesses
            <span className="block text-blue-400">
              That Keep Communities Running
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Whether you run a local service company,
            agency, consulting business, or trade operation,
            VDG OS gives you the tools to scale without complexity.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-blue-500/40 hover:bg-slate-800"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {industry.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
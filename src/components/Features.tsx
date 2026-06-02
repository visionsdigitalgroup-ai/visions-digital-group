"use client";

import {
  Users,
  Workflow,
  BarChart3,
  Globe,
  Bot,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture, organize, and track every lead from a single dashboard.",
  },
  {
    icon: Workflow,
    title: "Automations",
    description:
      "Automate follow-ups, reminders, and repetitive business tasks.",
  },
  {
    icon: Database,
    title: "CRM",
    description:
      "Manage customers, opportunities, and communication history.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Monitor performance with real-time analytics and insights.",
  },
  {
    icon: Globe,
    title: "Website Hosting",
    description:
      "Fast, secure, and fully managed hosting for your business.",
  },
  {
    icon: Bot,
    title: "AI Workflows",
    description:
      "Use AI to handle conversations, scheduling, and operations.",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="bg-slate-950 py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Everything Your Business Needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Built to help service businesses scale without adding complexity.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all hover:-translate-y-1 hover:border-blue-500"
              >
                <Icon className="h-10 w-10 text-blue-400" />

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  Globe,
  Search,
  Star,
  Users,
  Bot,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Website Management",
    description:
      "Manage your website, hosting, performance, security, and updates from one centralized platform.",
  },
  {
    icon: Search,
    title: "SEO & Local Visibility",
    description:
      "Improve search rankings, local visibility, and online discoverability to help customers find your business.",
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    description:
      "Monitor customer reviews, build trust, strengthen your reputation, and increase credibility online.",
  },
  {
    icon: Users,
    title: "Lead Generation & Customer Management",
    description:
      "Capture leads, manage customer relationships, track opportunities, and streamline communication.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description:
      "Automate follow-ups, reminders, lead nurturing, appointment workflows, and repetitive tasks.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Track website traffic, lead sources, customer activity, visibility growth, and business performance.",
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

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Platform Capabilities
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Everything Needed To Grow
            <span className="block text-blue-400">
              Your Online Presence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-400">
            VDG OS combines website management, SEO,
            reputation management, lead generation,
            automation, customer management, and
            business reporting into one connected platform.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all hover:-translate-y-1 hover:border-blue-500/40"
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
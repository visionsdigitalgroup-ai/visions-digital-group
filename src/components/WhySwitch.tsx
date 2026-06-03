"use client";

import {
  Search,
  Star,
  Users,
  BarChart3,
} from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Get Found Online",
    description:
      "Improve your visibility across Google Search, local listings, maps, and search results so more customers discover your business.",
  },
  {
    icon: Star,
    title: "Build Trust & Reputation",
    description:
      "Monitor reviews, strengthen your online reputation, and create the credibility customers look for before they contact you.",
  },
  {
    icon: Users,
    title: "Generate More Leads",
    description:
      "Turn website visitors, search traffic, and online visibility into qualified opportunities and new customers.",
  },
  {
    icon: BarChart3,
    title: "Manage Everything In One Place",
    description:
      "Website performance, reviews, lead generation, customer management, automation, and reporting connected in one platform.",
  },
];

export default function WhySwitch() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Why Businesses Choose VDG OS
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Your Online Presence
            <span className="block text-blue-400">
              Drives Business Growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Most businesses use separate tools for websites,
            SEO, reviews, lead management, reporting, and
            customer communication. VDG OS brings everything
            together into one connected platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500/30"
              >
                <Icon className="mb-6 h-10 w-10 text-blue-400" />

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
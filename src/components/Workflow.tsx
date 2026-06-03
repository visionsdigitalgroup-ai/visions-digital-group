"use client";

import {
  Globe,
  Search,
  Users,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Build Your Presence",
    description:
      "Your website, Google Business Profile, reviews, listings, and social presence are optimized and managed from one platform.",
  },
  {
    icon: Search,
    title: "Increase Visibility",
    description:
      "Improve search rankings, local visibility, and online discoverability so customers find your business first.",
  },
  {
    icon: Users,
    title: "Generate More Leads",
    description:
      "Turn website visitors, search traffic, referrals, and online engagement into qualified opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Automate Customer Engagement",
    description:
      "Automatically follow up with leads, schedule appointments, send reminders, and nurture customer relationships.",
  },
  {
    icon: TrendingUp,
    title: "Scale Business Growth",
    description:
      "Track performance, monitor growth, and make data-driven decisions with complete business visibility.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            How VDG OS Works
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Visibility Becomes Leads.
            <span className="block text-blue-400">
              Leads Become Growth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-400">
            VDG OS helps service businesses improve their
            online presence, attract more customers,
            automate operations, and create predictable
            business growth through one connected platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-5">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
              >
                <Icon className="mx-auto h-12 w-12 text-blue-400" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {[
            "Website Management",
            "Google Business Profile",
            "SEO",
            "Review Management",
            "Lead Generation",
            "Automation",
            "Customer Management",
            "Business Reporting",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
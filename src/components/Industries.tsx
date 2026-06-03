"use client";

import {
  Hammer,
  Wrench,
  Building2,
  Zap,
  Megaphone,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Hammer,
    title: "Roofing Contractors",
    description:
      "Generate more roofing leads through local SEO, Google Business Profile optimization, review management, and online visibility.",
  },
  {
    icon: Wrench,
    title: "HVAC Companies",
    description:
      "Increase service calls, automate follow-ups, improve local rankings, and convert more website visitors into customers.",
  },
  {
    icon: Building2,
    title: "Plumbing Businesses",
    description:
      "Capture emergency service leads, strengthen online reputation, and streamline customer communication.",
  },
  {
    icon: Zap,
    title: "Electrical Contractors",
    description:
      "Build trust through reviews, improve search visibility, and generate consistent opportunities from local search.",
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    description:
      "Manage websites, visibility campaigns, reporting, lead generation, and client growth from one platform.",
  },
  {
    icon: Briefcase,
    title: "Consultants & Professional Services",
    description:
      "Establish authority, improve online presence, generate qualified leads, and manage client relationships efficiently.",
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
            Built For Service Businesses
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Built For Businesses
            <span className="block text-blue-400">
              That Depend On Visibility
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-400">
            Whether customers find you through Google Search,
            Google Business Profile, reviews, referrals, social
            media, or your website, VDG OS helps you attract,
            convert, and retain more customers.
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
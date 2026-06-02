"use client";

import {
  Clock3,
  TrendingUp,
  Workflow,
  DollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Save Hours Every Week",
    description:
      "Eliminate repetitive tasks and manual follow-ups through intelligent automation.",
  },
  {
    icon: Workflow,
    title: "Everything Connected",
    description:
      "Leads, CRM, websites, reporting, and automations work together in one platform.",
  },
  {
    icon: TrendingUp,
    title: "Grow Faster",
    description:
      "Turn more leads into customers with faster response times and better tracking.",
  },
  {
    icon: DollarSign,
    title: "Reduce Software Costs",
    description:
      "Replace multiple subscriptions with a single business operating system.",
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
            Stop Managing Tools.
            <span className="block text-blue-400">
              Start Managing Growth.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Most service businesses use multiple disconnected
            systems. VDG OS brings everything together.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
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
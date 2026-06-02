"use client";

import {
  UserPlus,
  Database,
  Workflow as WorkflowIcon,
  MessageSquare,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Lead Captured",
    description: "Website forms, ads, referrals, and inbound inquiries.",
  },
  {
    icon: Database,
    title: "Added To CRM",
    description: "Every lead is organized automatically.",
  },
  {
    icon: WorkflowIcon,
    title: "Automation Triggered",
    description: "Follow-ups, reminders, and workflows begin instantly.",
  },
  {
    icon: MessageSquare,
    title: "Customer Follow-Up",
    description: "Email, SMS, and communication tracking.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboard",
    description: "Monitor performance and growth in real time.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            How VDG OS Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            From lead capture to customer retention,
            everything runs through one connected system.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center"
              >
                <Icon className="mx-auto h-12 w-12 text-blue-400" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
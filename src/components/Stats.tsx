"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100+",
    label: "Businesses Supported",
  },
  {
    value: "1M+",
    label: "Search Impressions Generated",
  },
  {
    value: "10K+",
    label: "Leads Captured",
  },
  {
    value: "4.9★",
    label: "Average Client Reputation Score",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Measurable Results
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Growth Backed By
            <span className="block text-blue-400">
              Real Business Outcomes
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl text-slate-400">
            Online visibility, reputation management,
            lead generation, automation, and customer
            growth working together through one connected platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
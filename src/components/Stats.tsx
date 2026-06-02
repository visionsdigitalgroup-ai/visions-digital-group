"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "100+",
    label: "Websites Managed",
  },
  {
    value: "50+",
    label: "Automations Built",
  },
  {
    value: "1000+",
    label: "Leads Processed",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
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
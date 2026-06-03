"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "4,872",
    label: "Monthly Visitors",
  },
  {
    value: "4.9★",
    label: "Google Rating",
  },
  {
    value: "127",
    label: "New Leads",
  },
  {
    value: "+38%",
    label: "Visibility Growth",
    highlight: true,
  },
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            VDG OS Command Center
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-7xl">
            One Platform.
            <span className="block text-blue-400">
              Complete Visibility.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-slate-400">
            Manage your website, SEO,
            Google Business Profile,
            reviews, leads, customers,
            reporting, and automation
            from a single command center
            built for growth.
          </p>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-24"
        >

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <img
            src="/images/dashboard-preview.webp"
            alt="VDG OS Dashboard Preview"
            className="relative z-10 mx-auto w-full max-w-6xl"
          />

        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
            >

              <div
                className={`text-5xl font-bold ${stat.highlight ? "text-green-400" : "text-white"}`}
              >
                {stat.value}
              </div>

              <div className="mt-3 text-slate-400">
                {stat.label}
              </div>

            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-24 text-center"
        >

          <p className="mx-auto max-w-4xl text-lg text-slate-400">
            Built for contractors, home service companies,
            agencies, consultants, and growing businesses
            that depend on online visibility and customer
            acquisition.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
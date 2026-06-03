"use client";

import Link from "next/link";
import { motion } from "motion/react";

const results = [
  {
    name: "General Sod & Landscaping",
    services:
      "Website Design • SEO • Google Business Profile",
    href: "/case-studies/general-sod-landscaping",
  },
  {
    name: "Visions Tampa Bay",
    services:
      "Brand Development • Web Presence • Content Strategy",
    href: "/case-studies/visions-tampa-bay",
  },
  {
    name: "VDG OS",
    services:
      "Platform Development • Automation • SEO Architecture",
    href: "/case-studies/vdg-os",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Proven Results
          </div>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Trusted By Growing Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Real projects. Real businesses. Real execution.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {results.map((result, index) => (
            <motion.div
              key={result.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <Link
                href={result.href}
                className="block rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
              >
                <h3 className="text-2xl font-bold text-white">
                  {result.name}
                </h3>

                <p className="mt-4 text-slate-400">
                  {result.services}
                </p>

                <div className="mt-6 text-blue-400">
                  View Case Study →
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

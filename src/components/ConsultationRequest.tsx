"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function ConsultationRequest() {
  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData =
      new FormData(
        e.currentTarget
      );

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company:
        formData.get("company"),
      businessType:
        formData.get(
          "businessType"
        ),
      employees:
        formData.get(
          "employees"
        ),
      biggestChallenge:
        formData.get(
          "biggestChallenge"
        ),
      source: "website",
    };

    try {
      const response =
        await fetch(
          "/api/waitlist",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              payload
            ),
          }
        );

      if (response.ok) {
        window.location.href =
          "/thank-you";
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <section
      id="consultation"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="rounded-3xl border border-slate-800 bg-slate-900 p-12"
        >

          <motion.div
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
            className="text-center"
          >

            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Free Business Growth Consultation
            </div>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Ready To Generate
              More Leads?
              <span className="block text-blue-400">
                Let's Build A Growth Plan.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
              Tell us about your business,
              current challenges, and goals.
              We'll review your online
              presence and identify
              opportunities to improve
              visibility, lead generation,
              customer acquisition, and
              operational efficiency.
            </p>

          </motion.div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-3xl"
          >

            <div className="grid gap-5">

              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                name="company"
                type="text"
                required
                placeholder="Company Name"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Business Email"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <select
                name="businessType"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              >
                <option value="">
                  Select Business Type
                </option>

                <option>
                  Roofing Company
                </option>

                <option>
                  HVAC Company
                </option>

                <option>
                  Plumbing Company
                </option>

                <option>
                  Electrical Contractor
                </option>

                <option>
                  General Contractor
                </option>

                <option>
                  Marketing Agency
                </option>

                <option>
                  Consultant
                </option>

                <option>
                  Local Service Business
                </option>

                <option>
                  Other
                </option>
              </select>

              <select
                name="employees"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              >
                <option value="">
                  Team Size
                </option>

                <option>
                  Just Me
                </option>

                <option>
                  2-5 Employees
                </option>

                <option>
                  6-10 Employees
                </option>

                <option>
                  11-25 Employees
                </option>

                <option>
                  26-50 Employees
                </option>

                <option>
                  50+ Employees
                </option>
              </select>

              <textarea
                name="biggestChallenge"
                rows={4}
                placeholder="What is your biggest challenge right now?"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-xl bg-white px-8 py-5 font-semibold text-black"
              >
                {loading
                  ? "Submitting..."
                  : "Request My Free Consultation"}
              </motion.button>

            </div>

          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            No obligation. We will review
            your business, online presence,
            and growth opportunities before
            recommending a solution.
          </div>

        </motion.div>

      </div>
    </section>
  );
}
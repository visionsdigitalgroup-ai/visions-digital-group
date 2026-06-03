"use client";

import { useState } from "react";

export default function Waitlist() {
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
      id="waitlist"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12">

          <div className="text-center">

            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Founding Member Program
            </div>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Apply For Early Access
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
              Join the first wave of
              businesses using VDG OS
              and help shape the
              future of business
              automation.
            </p>

          </div>

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
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              />

              <input
                name="company"
                type="text"
                required
                placeholder="Company Name"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Business Email"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              />

              <select
                name="businessType"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              >
                <option value="">
                  Business Type
                </option>

                <option>
                  HVAC
                </option>

                <option>
                  Roofing
                </option>

                <option>
                  Plumbing
                </option>

                <option>
                  Electrical
                </option>

                <option>
                  Contractor
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
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              >
                <option value="">
                  Team Size
                </option>

                <option>
                  Just Me
                </option>

                <option>
                  2-5
                </option>

                <option>
                  6-10
                </option>

                <option>
                  11-25
                </option>

                <option>
                  26-50
                </option>

                <option>
                  50+
                </option>
              </select>

              <textarea
                name="biggestChallenge"
                rows={4}
                placeholder="What is the biggest challenge in your business right now?"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-white px-8 py-5 font-semibold text-black transition hover:opacity-90"
              >
                {loading
                  ? "Submitting..."
                  : "Apply As Founding Member"}
              </button>

            </div>

          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            Limited founding member
            spots available.
          </div>

        </div>

      </div>
    </section>
  );
}
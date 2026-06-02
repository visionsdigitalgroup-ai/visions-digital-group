"use client";

import { useState } from "react";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      businessType: formData.get("businessType"),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
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
              Early Access Program
            </div>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Ready To Run Smarter?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
              Join the VDG OS waitlist and get early access
              before public launch.
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
                placeholder="Your Name"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none"
              />

              <select
                name="businessType"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none"
              >
                <option value="">
                  Select Business Type
                </option>

                <option>
                  Contractor
                </option>

                <option>
                  HVAC
                </option>

                <option>
                  Roofing
                </option>

                <option>
                  Consultant
                </option>

                <option>
                  Marketing Agency
                </option>

                <option>
                  Local Business
                </option>

                <option>
                  Other
                </option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
              >
                {loading
                  ? "Joining Waitlist..."
                  : "Get Early Access"}
              </button>

            </div>

          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            No spam. No commitment. Early access only.
          </div>

        </div>
      </div>
    </section>
  );
}
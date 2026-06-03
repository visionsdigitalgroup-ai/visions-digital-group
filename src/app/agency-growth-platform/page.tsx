import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Growth Platform | Client Management & Reporting | VDG OS",
  description:
    "VDG OS helps agencies manage websites, reporting, visibility campaigns, automation, and client growth.",
};

export default function AgencyPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-6xl font-bold">
          Agency Growth Platform
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
          Manage websites, SEO, reporting, automation,
          and client growth from one platform.
        </p>

        <a
          href="/#consultation"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
        >
          Schedule Consultation
        </a>
      </section>
    </main>
  );
}

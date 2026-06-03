import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Marketing Platform | Plumbing SEO & Lead Generation | VDG OS",
  description:
    "VDG OS helps plumbing companies improve online visibility, generate plumbing leads, manage reviews, and automate customer communication.",
};

export default function PlumbingPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-6xl font-bold">
          Plumbing Marketing Platform
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
          Capture emergency service leads, dominate local search,
          and manage customers through one business growth platform.
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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Marketing Platform | SEO & Lead Generation | VDG OS",
  description:
    "VDG OS helps contractors improve visibility, generate leads, manage reviews, and streamline business growth.",
};

export default function ContractorPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-6xl font-bold">
          Contractor Marketing Platform
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
          Website management, SEO, reviews, automation,
          and customer management built for contractors.
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

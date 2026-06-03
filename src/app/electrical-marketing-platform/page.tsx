import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Contractor Marketing Platform | VDG OS",
  description:
    "VDG OS helps electrical contractors generate leads, improve local rankings, strengthen reviews, and streamline customer management.",
};

export default function ElectricalPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h1 className="text-6xl font-bold">
          Electrical Contractor Marketing Platform
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl text-slate-400">
          Improve visibility, generate qualified leads,
          and grow your electrical contracting business.
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

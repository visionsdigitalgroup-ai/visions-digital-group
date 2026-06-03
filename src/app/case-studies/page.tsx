import Link from "next/link";

export default function CaseStudiesPage() {
  const studies = [
    {
      title: "General Sod & Landscaping",
      href: "/case-studies/general-sod-landscaping",
    },
    {
      title: "Vision Stamp Bay",
      href: "/case-studies/vision-stamp-bay",
    },
    {
      title: "VDG OS",
      href: "/case-studies/vdg-os",
    },
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold">
          Case Studies
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          Real projects, real businesses, and real growth.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {studies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500"
            >
              <h2 className="text-2xl font-bold">
                {study.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

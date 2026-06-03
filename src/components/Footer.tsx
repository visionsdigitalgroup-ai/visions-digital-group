import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          <div>

            <h3 className="text-xl font-bold text-white">
              Visions Digital Group
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Helping service businesses dominate their online presence,
              generate more leads, improve local visibility, and streamline
              operations from one connected platform.
            </p>

          </div>

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Platform
            </h4>

            <div className="space-y-3 text-sm">

              <a
                href="/#features"
                className="block text-slate-400 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="/#dashboard"
                className="block text-slate-400 transition hover:text-white"
              >
                Dashboard
              </a>

              <a
                href="/#consultation"
                className="block text-slate-400 transition hover:text-white"
              >
                Schedule Consultation
              </a>

            </div>

          </div>

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Industries
            </h4>

            <div className="space-y-3 text-sm">

              <Link
                href="/industries"
                className="block text-slate-400 transition hover:text-white"
              >
                All Industries
              </Link>

              <Link
                href="/roofing-marketing-platform"
                className="block text-slate-400 transition hover:text-white"
              >
                Roofing Companies
              </Link>

              <Link
                href="/hvac-marketing-platform"
                className="block text-slate-400 transition hover:text-white"
              >
                HVAC Companies
              </Link>

              <Link
                href="/plumbing-marketing-platform"
                className="block text-slate-400 transition hover:text-white"
              >
                Plumbing Companies
              </Link>

              <Link
                href="/electrical-marketing-platform"
                className="block text-slate-400 transition hover:text-white"
              >
                Electrical Contractors
              </Link>

            </div>

          </div>

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Services
            </h4>

            <div className="space-y-3 text-sm">

              <span className="block text-slate-400">
                Website Management
              </span>

              <span className="block text-slate-400">
                SEO & Local Visibility
              </span>

              <span className="block text-slate-400">
                Reputation Management
              </span>

              <span className="block text-slate-400">
                Lead Generation
              </span>

              <span className="block text-slate-400">
                CRM & Automation
              </span>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <div>
              © {new Date().getFullYear()} Visions Digital Group.
              All rights reserved.
            </div>

            <div className="flex gap-6">

              <Link
                href="/industries"
                className="hover:text-white"
              >
                Industries
              </Link>

              <a
                href="/#consultation"
                className="hover:text-white"
              >
                Consultation
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
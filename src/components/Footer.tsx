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
              Online Presence Management Platform helping
              service businesses improve visibility,
              generate leads, strengthen reputation,
              and streamline operations nationwide.
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
                Platform Overview
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
              Solutions
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

          <div>

            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <div className="space-y-3 text-sm">

              <Link
                href="/about"
                className="block text-slate-400 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block text-slate-400 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/industries"
                className="block text-slate-400 transition hover:text-white"
              >
                Industries
              </Link>

              <Link
                href="/locations"
                className="block text-slate-400 transition hover:text-white"
              >
                Locations
              </Link>

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
                href="/about"
                className="hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/locations"
                className="hover:text-white"
              >
                Locations
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
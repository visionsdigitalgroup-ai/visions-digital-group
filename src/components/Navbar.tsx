"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [industriesOpen, setIndustriesOpen] =
    useState(false);

  function closeMenus() {
    setMobileOpen(false);
    setIndustriesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-bold text-white transition hover:text-blue-400"
        >
          Visions Digital Group
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#features"
            className="text-slate-300 transition hover:text-white"
          >
            Platform
          </a>

          <a
            href="#industries"
            className="text-slate-300 transition hover:text-white"
          >
            Who We Help
          </a>

          <Link
            href="/industries"
            className="text-slate-300 transition hover:text-white"
          >
            Services
          </Link>

          <div className="relative">

            <button
              onClick={() =>
                setIndustriesOpen(
                  !industriesOpen
                )
              }
              className="flex items-center gap-2 text-slate-300 transition hover:text-white"
            >
              Industries

              <ChevronDown
                size={16}
                className={`transition ${
                  industriesOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {industriesOpen && (
              <div className="absolute right-0 mt-4 w-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

                <div className="border-b border-slate-800 p-2">

                  <Link
                    href="/industries"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
                  >
                    View All Industries
                  </Link>

                </div>

                <div className="p-2">

                  <Link
                    href="/roofing-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    Roofing Companies
                  </Link>

                  <Link
                    href="/hvac-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    HVAC Companies
                  </Link>

                  <Link
                    href="/plumbing-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    Plumbing Companies
                  </Link>

                  <Link
                    href="/electrical-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    Electrical Contractors
                  </Link>

                  <Link
                    href="/contractor-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    General Contractors
                  </Link>

                  <Link
                    href="/agency-growth-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    Marketing Agencies
                  </Link>

                </div>

              </div>
            )}

          </div>

        </nav>

        <a
          href="#consultation"
          className="hidden rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105 md:block"
        >
          Schedule Consultation
        </a>

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="text-white md:hidden"
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">

          <div className="space-y-1 px-6 py-6">

            <a
              href="#features"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Platform
            </a>

            <a
              href="#industries"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Who We Help
            </a>

            <Link
              href="/industries"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Services
            </Link>

            <div className="my-4 border-t border-slate-800" />

            <Link
              href="/roofing-marketing-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Roofing Companies
            </Link>

            <Link
              href="/hvac-marketing-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              HVAC Companies
            </Link>

            <Link
              href="/plumbing-marketing-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Plumbing Companies
            </Link>

            <Link
              href="/electrical-marketing-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Electrical Contractors
            </Link>

            <Link
              href="/contractor-marketing-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              General Contractors
            </Link>

            <Link
              href="/agency-growth-platform"
              onClick={closeMenus}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900"
            >
              Marketing Agencies
            </Link>

            <a
              href="#consultation"
              className="mt-4 block rounded-xl bg-white px-4 py-3 text-center font-semibold text-black"
            >
              Schedule Consultation
            </a>

          </div>

        </div>
      )}

    </header>
  );
}
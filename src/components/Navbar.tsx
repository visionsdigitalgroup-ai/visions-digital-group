"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  function closeMenus() {
    setMobileOpen(false);
    setIndustriesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.png"
            alt="Visions Digital Group"
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-xl object-contain"
          />

          <div className="hidden lg:block">
            <div className="text-lg font-bold text-white">
              Visions Digital Group
            </div>

            <div className="text-xs text-slate-400">
              Online Presence Management
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="/#features"
            className="text-slate-300 transition hover:text-white"
          >
            Platform
          </a>

          <Link
            href="/industries"
            className="text-slate-300 transition hover:text-white"
          >
            Solutions
          </Link>

          <Link
            href="/locations"
            className="text-slate-300 transition hover:text-white"
          >
            Locations
          </Link>

          <div className="relative">

            <button
              onClick={() =>
                setIndustriesOpen(!industriesOpen)
              }
              className="flex items-center gap-2 text-slate-300 transition hover:text-white"
            >
              Industries

              <ChevronDown
                size={16}
                className={`transition ${industriesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {industriesOpen && (
              <div className="absolute right-0 mt-4 w-80 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

                <div className="border-b border-slate-800 p-2">

                  <Link
                    href="/industries"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 font-semibold text-white hover:bg-slate-800"
                  >
                    View All Industries
                  </Link>

                </div>

                <div className="p-2">

                  <Link
                    href="/roofing-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Roofing Companies
                  </Link>

                  <Link
                    href="/hvac-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    HVAC Companies
                  </Link>

                  <Link
                    href="/plumbing-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Plumbing Companies
                  </Link>

                  <Link
                    href="/electrical-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Electrical Contractors
                  </Link>

                  <Link
                    href="/contractor-marketing-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    General Contractors
                  </Link>

                  <Link
                    href="/agency-growth-platform"
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Marketing Agencies
                  </Link>

                </div>

              </div>
            )}

          </div>

        </nav>

        <a
          href="/#consultation"
          className="hidden rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600 md:block"
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

    </header>
  );
}
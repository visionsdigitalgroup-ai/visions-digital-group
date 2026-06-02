"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-xl font-bold text-white">
          VDG OS
        </div>

        <nav className="hidden gap-8 text-slate-300 md:flex">
          <a href="#features">Features</a>
          <a href="#industries">Industries</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <a
          href="#waitlist"
          className="rounded-lg bg-white px-5 py-2 font-semibold text-black"
        >
          Join Waitlist
        </a>

      </div>
    </header>
  );
}
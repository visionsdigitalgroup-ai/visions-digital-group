export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-2xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
          Success
        </div>

        <h1 className="text-5xl font-bold text-white">
          Welcome To VDG OS
        </h1>

        <p className="mt-6 text-xl text-slate-400">
          You have successfully joined the waitlist.
        </p>

        <p className="mt-4 text-slate-500">
          We will keep you updated as new features,
          beta access, and launch announcements become available.
        </p>

        <a
          href="/"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
        >
          Back To Homepage
        </a>

      </div>
    </main>
  );
}
"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);
  const [error, setError] =
    useState("");
  const [success, setSuccess] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "/api/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        setError(
          data.error ||
            "Invalid password"
        );

        setLoading(false);
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        window.location.href =
          "/admin";
      }, 800);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to server."
      );

      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-md">

        <div className="mb-8 text-center">

          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Secure Access
          </div>

          <h1 className="mt-6 text-4xl font-bold text-white">
            VDG OS Admin
          </h1>

          <p className="mt-3 text-slate-400">
            Sign in to access your
            founder dashboard.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Admin Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400"
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

            </div>

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                Login successful.
                Redirecting...
              </div>
            )}

            <button
              type="submit"
              disabled={
                loading ||
                success
              }
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
            >
              {loading
                ? "Signing In..."
                : "Access Dashboard"}
            </button>

          </form>

        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Vision Digital Group OS
        </p>

      </div>

    </main>
  );
}
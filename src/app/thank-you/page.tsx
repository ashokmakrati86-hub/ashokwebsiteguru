import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Free 1:1 Digital Marketing Consultation",
  description: "Thanks for booking your free 1:1 consultation. See next steps here.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-full bg-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.06),transparent_60%)]" />
      <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            Thank you — your request is received.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            Next steps:
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
              <span>Check your email and WhatsApp for a confirmation.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
              <span>Be ready to share your business details and current problems.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
              <span>You will get a customized marketing strategy for your business.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#booking"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 text-base font-semibold text-white shadow-sm hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
            >
              Back to the form
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-base font-semibold text-zinc-950 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

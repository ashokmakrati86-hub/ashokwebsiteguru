export default function Urgency() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Book Your Free 1:1 Consultation
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">
                Get a customized strategy designed for your business goals,
                problems, and growth stage.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-950">Limited slots</p>
              <a
                href="#booking"
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[var(--brand)] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

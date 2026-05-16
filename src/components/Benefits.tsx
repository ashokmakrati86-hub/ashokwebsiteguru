const benefits = [
  "Understand why your business is not getting enough customers",
  "Get a customized marketing strategy for your business",
  "Learn what is currently stopping your growth",
  "Discover simple ways to get more inquiries online",
  "Get clear direction instead of random marketing efforts",
];

const steps = [
  { title: "Step 1", body: "Book your free consultation call" },
  { title: "Step 2", body: "Share your business details and current problems" },
  { title: "Step 3", body: "Get a customized marketing strategy for your business" },
];

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              How You Benefit From This Consultation
            </h2>
            <div className="mt-6 grid gap-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm leading-6 text-zinc-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-950">
              Process of This Consultation
            </h3>
            <div className="mt-5 space-y-4">
              {steps.map((s) => (
                <div key={s.title} className="rounded-xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-[var(--brand)]">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-700">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

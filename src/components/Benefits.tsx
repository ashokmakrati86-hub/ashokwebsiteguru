const steps = [
  {
    title: "Fill up the form",
    text: "Share your basic business details so I can understand your situation.",
  },
  {
    title: "Receive an email with the appointment link",
    text: "You will get the next step for choosing your consultation time.",
  },
  {
    title: "Fill the appointment form",
    text: "Answer a few simple questions so the call can be more useful.",
  },
  {
    title: "Join the 1:1 consultation call",
    text: "We will talk about your business, goals, current marketing, and problems.",
  },
  {
    title: "Get your customized digital marketing plan for FREE",
    text: "You will leave with clear action steps you can implement immediately.",
  },
];

export default function Benefits() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Simple process
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
            How The Free Consultation Works
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-700">
            The process is clear and easy, so you know exactly what happens
            after you request your free call.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand)]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-base font-semibold leading-6 text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

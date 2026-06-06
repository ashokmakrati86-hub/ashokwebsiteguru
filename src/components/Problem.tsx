const problems = [
  "You post on Facebook and Instagram, but inquiries are still low.",
  "You boost posts, but it does not turn into real sales.",
  "You are not sure which marketing strategy your business actually needs.",
  "You get random leads, but not enough serious customers.",
  "You still depend mostly on referrals or word of mouth.",
  "Ads, content, landing pages, and follow-up feel confusing.",
];

export default function Problem() {
  return (
    <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            The real problem
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
            Digital marketing should bring customers, not confusion.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-700">
            If you run a business in Nepal and feel stuck with online
            marketing, you are not alone. Many business owners are trying hard
            online but still do not know what is working, what is wasting money,
            and what to do next.
          </p>
        </div>

        <div className="grid gap-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
              <p className="text-sm leading-6 text-zinc-700">{problem}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-5xl rounded-lg border border-[var(--brand)]/20 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-xl font-semibold text-zinc-950">
          That is exactly what this free call is for.
        </h3>
        <p className="mt-3 text-base leading-8 text-zinc-700">
          I will understand your business, identify what is not working, and
          give you a clear digital marketing plan you can start using
          immediately. No confusing jargon. Just practical steps to help you get
          more leads, customers, and sales.
        </p>
      </div>
    </section>
  );
}

export default function Problem() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              If your business is not getting enough inquiries, this
              consultation is for you.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              Free 1:1 digital marketing consultation for business owners who
              are struggling to grow consistently online.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm leading-6 text-zinc-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Understand why your business is not getting enough customers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Learn what is currently stopping your growth</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Discover simple ways to get more inquiries online</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

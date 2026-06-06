import Image from "next/image";

export default function Hero() {
  return (
    <header className="px-4 pt-8 sm:px-6 sm:pt-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Website Guru Ashok Developers"
          width={589}
          height={112}
          priority
          className="h-12 w-auto sm:h-14"
        />

        <section className="mx-auto max-w-3xl pb-14 pt-10 sm:pb-20 sm:pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Free consultation for Nepal business owners
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-950 sm:text-5xl">
            Struggling to grow your business?
          </h1>
          <h2 className="mt-5 text-xl font-semibold text-zinc-800 sm:text-2xl">
            Grab a FREE 1:1 digital marketing consultation call with me
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
            In this consultation call, I will diagnose your business and provide
            a customized digital marketing plan that you can immediately
            implement in your business after the call.
          </p>
          <a
            href="#booking"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-8 text-base font-semibold text-white shadow-lg shadow-sky-900/15 transition hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
          >
            Book your FREE call now
          </a>
        </section>
      </div>
    </header>
  );
}

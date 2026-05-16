import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Website Guru Ashok Developers"
              width={589}
              height={112}
              priority
              className="h-10 w-auto"
            />
          </div>
          <a
            href="#booking"
            className="hidden sm:inline-flex h-11 items-center justify-center rounded-full bg-[var(--brand)] px-5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
          >
            Book Free Consultation
          </a>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Get a Clear Marketing Plan To Grow Your Business And Get More
              Customer Inquiries
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-700 sm:text-lg">
              Free 1:1 digital marketing consultation for business owners who
              are struggling to grow consistently online.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              If your business is not getting enough inquiries, this
              consultation is for you.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              You will get a customized marketing strategy based on your
              business, current situation, and goals.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#booking"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 text-base font-semibold text-white shadow-sm hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="mx-auto w-full max-w-md lg:max-w-[420px]">
              <div className="relative h-[320px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:h-[360px] lg:h-[400px]">
                <Image
                  src="/hero.png"
                  alt="Clear marketing plan"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 520px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

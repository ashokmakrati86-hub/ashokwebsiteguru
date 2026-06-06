import type { Metadata } from "next";
import Image from "next/image";

const vimeoEmbedUrl =
  "https://player.vimeo.com/video/1199010075?autoplay=0&muted=0&title=0&byline=0&portrait=0&dnt=1";

export const metadata: Metadata = {
  title: "Thanks | Free 1:1 Marketing Consultation",
  description:
    "Watch the short video before your consultation and see what to do next.",
};

export default function ThanksPage() {
  return (
    <main className="min-h-full bg-white px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Website Guru Ashok Developers"
          width={589}
          height={112}
          priority
          className="h-12 w-auto sm:h-14"
        />

        <section className="mt-10 w-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            One more step
          </p>
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
            Wait... watch the video before you go
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-zinc-700">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 shadow-sm">
            {vimeoEmbedUrl ? (
              <div className="aspect-video w-full">
                <iframe
                  src={vimeoEmbedUrl}
                  title="Consultation next steps video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center px-6 text-center">
                <p className="text-sm leading-6 text-zinc-300">
                  Vimeo video will appear here after you send the video link.
                </p>
              </div>
            )}
          </div>

          <a
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-8 text-base font-semibold text-white shadow-lg shadow-sky-900/15 transition hover:bg-[var(--brand-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
          >
            Back to Home
          </a>
        </section>
      </div>
    </main>
  );
}

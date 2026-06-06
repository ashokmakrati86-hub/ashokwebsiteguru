"use client";

import { useEffect, useRef } from "react";

export default function CTAForm() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;

    const loadEmbed = async () => {
      const response = await fetch("/flodesk-embed.html", { cache: "no-store" });
      const html = await response.text();
      if (cancelled) return;

      mount.innerHTML = html;

      const head = document.head;
      const preloadHref = "https://assets.flodesk.com/flodesk-sans.css";
      if (!head.querySelector(`link[rel="preload"][href="${preloadHref}"]`)) {
        const preload = document.createElement("link");
        preload.rel = "preload";
        preload.as = "style";
        preload.href = preloadHref;
        head.appendChild(preload);
      }

      if (!head.querySelector(`link[rel="stylesheet"][href="${preloadHref}"]`)) {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = preloadHref;
        head.appendChild(stylesheet);
      }

      const scripts = Array.from(mount.querySelectorAll("script"));
      for (const oldScript of scripts) {
        const nextScript = document.createElement("script");
        for (const attribute of Array.from(oldScript.attributes)) {
          nextScript.setAttribute(attribute.name, attribute.value);
        }
        if (oldScript.src) {
          nextScript.src = oldScript.src;
        } else {
          nextScript.textContent = oldScript.textContent ?? "";
        }
        oldScript.replaceWith(nextScript);
      }
    };

    void loadEmbed();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="booking"
      className="bg-gradient-to-br from-[#eef5ff] via-white to-[#edf6ff] px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Final Step
          </p>
          <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600">
            Fill up the form below and we will contact you with the next steps.
          </p>

          <div className="mt-8 max-w-sm rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200/70">
            <p className="text-sm font-semibold text-zinc-950">
              What happens next?
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              I will review your details, understand your business situation,
              and guide you toward the right appointment step.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/60 p-4 shadow-2xl shadow-sky-950/10 ring-1 ring-white/80 backdrop-blur sm:p-8">
          <div ref={mountRef} className="overflow-hidden rounded-[1.5rem]" />
        </div>
      </div>
    </section>
  );
}

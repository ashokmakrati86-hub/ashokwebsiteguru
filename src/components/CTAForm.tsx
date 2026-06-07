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

      const styleId = "flodesk-embed-overrides";
      const existingStyle = document.getElementById(styleId);
      if (!existingStyle) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__container {
            max-width: 100%;
            background: transparent;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__form {
            padding: 0;
            text-align: left;
            color: #0f172a;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__title,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__subtitle,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__error {
            display: none !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__fields {
            margin-bottom: 18px;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__field {
            margin-bottom: 14px;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__button {
            border-radius: 16px;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control {
            background: #ffffff;
            border-color: #dbe6f3;
            height: 52px;
            font-size: 14px;
            color: #0f172a;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control::placeholder {
            color: #94a3b8 !important;
            opacity: 1 !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .fd-form-label {
            display: none !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__footer {
            margin-top: 10px;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__button {
            width: 100%;
            height: 52px;
            font-size: 15px;
            font-weight: 700;
            border: none;
            background: linear-gradient(135deg, #2690c6 0%, #1f78a5 100%);
            box-shadow: 0 12px 30px rgba(38, 144, 198, 0.22);
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__success {
            padding: 24px 0;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__success-message {
            color: #0f172a;
            font-size: 15px;
          }
        `;
        head.appendChild(style);
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
          <div className="rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-zinc-200/70 sm:p-6">
            <div ref={mountRef} className="overflow-hidden" />
            <p className="mt-4 text-center text-xs text-zinc-500">
              We respect your privacy. No spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

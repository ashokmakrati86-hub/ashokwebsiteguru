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
            max-width: 100% !important;
            background: transparent !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__form {
            padding: 0 !important;
            text-align: left !important;
            color: #0f172a !important;
            width: 100% !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__title,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__subtitle,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__error {
            display: none !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__fields {
            margin-bottom: 20px !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__field {
            margin-bottom: 15px !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control,
          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__button {
            border-radius: 16px;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control {
            background: #ffffff !important;
            border-color: #d7dfef !important;
            height: 54px !important;
            font-size: 15px !important;
            color: #0f172a !important;
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04) !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            border-radius: 14px !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__control::placeholder {
            color: #94a3b8 !important;
            opacity: 1 !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .fd-form-label {
            display: none !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__footer {
            margin-top: 10px !important;
          }

          [data-ff-el="root"].ff-6a1997f1efd03ccd5e54c1a7 .ff-6a1997f1efd03ccd5e54c1a7__button {
            width: 100% !important;
            height: 68px !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            border: none !important;
            border-radius: 9999px !important;
            color: #ffffff !important;
            background: linear-gradient(135deg, #2690c6 0%, #1f78a5 100%) !important;
            box-shadow: 0 12px 30px rgba(38, 144, 198, 0.22) !important;
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
      className="bg-gradient-to-br from-[#eef5ff] via-white to-[#edf6ff] px-4 py-[4.5rem] sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1500px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="relative pt-6 lg:pt-[74px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Final Step
          </p>
          <h2 className="mt-4 max-w-[15rem] text-[2.05rem] font-semibold leading-tight text-zinc-950 sm:text-[3.45rem]">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-7 max-w-[25rem] text-[0.98rem] leading-8 text-zinc-600">
            Fill up the form below and we will contact you with the next steps.
          </p>

          <div className="mt-8 max-w-[31.5rem] rounded-[1.6rem] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] ring-1 ring-zinc-200/70">
            <p className="text-base font-semibold text-zinc-950">
              What happens next?
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              I will review your details, understand your business situation,
              and guide you toward the right appointment step.
            </p>
          </div>
        </div>

        <div className="rounded-[2.6rem] bg-white/70 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.10)] ring-1 ring-white/90 backdrop-blur sm:p-8">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-200/70 sm:p-10">
            <div className="mb-10 h-px w-full bg-[#d6e0f0]" />
            <div ref={mountRef} className="overflow-hidden" />
            <p className="mt-8 text-center text-xs text-zinc-500">
              We respect your privacy. No spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

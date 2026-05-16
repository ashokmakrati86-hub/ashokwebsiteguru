"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  websiteOrFacebook: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Full Name is required.";
  if (!values.email.trim()) errors.email = "Active Email is required.";
  else if (!emailRegex.test(values.email.trim()))
    errors.email = "Enter a valid email address.";

  if (!values.whatsapp.trim())
    errors.whatsapp = "WhatsApp Number is required.";
  if (!values.businessName.trim())
    errors.businessName = "Business Name is required.";

  return errors;
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    whatsapp: "",
    businessName: "",
    websiteOrFacebook: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {}
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function setField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function onBlur<K extends keyof FormValues>(key: K) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors(validate(values));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      whatsapp: true,
      businessName: true,
      websiteOrFacebook: true,
      message: true,
    });

    const nowErrors = validate(values);
    setErrors(nowErrors);
    if (Object.keys(nowErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    router.push("/thank-you");
  }

  return (
    <section id="booking" className="pb-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                Book Your Free 1:1 Consultation
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">
                Get a customized strategy designed for your business goals,
                problems, and growth stage.
              </p>
              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-950">Short Description</p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  You will get a customized marketing strategy based on your business,
                  current situation, and goals.
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Full Name
                </label>
                <input
                  value={values.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  onBlur={() => onBlur("fullName")}
                  required
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none ring-0 placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
                {touched.fullName && errors.fullName ? (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Active Email
                </label>
                <input
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  onBlur={() => onBlur("email")}
                  required
                  type="email"
                  inputMode="email"
                  placeholder="name@email.com"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
                {touched.email && errors.email ? (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  WhatsApp Number
                </label>
                <input
                  value={values.whatsapp}
                  onChange={(e) => setField("whatsapp", e.target.value)}
                  onBlur={() => onBlur("whatsapp")}
                  required
                  inputMode="tel"
                  placeholder="Your WhatsApp number"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
                {touched.whatsapp && errors.whatsapp ? (
                  <p className="mt-1 text-xs text-red-600">{errors.whatsapp}</p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Business Name
                </label>
                <input
                  value={values.businessName}
                  onChange={(e) => setField("businessName", e.target.value)}
                  onBlur={() => onBlur("businessName")}
                  required
                  placeholder="Your business name"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
                {touched.businessName && errors.businessName ? (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.businessName}
                  </p>
                ) : null}
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Website / Facebook URL
                </label>
                <input
                  value={values.websiteOrFacebook}
                  onChange={(e) => setField("websiteOrFacebook", e.target.value)}
                  onBlur={() => onBlur("websiteOrFacebook")}
                  placeholder="https://"
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-900">
                  Anything you want to say
                </label>
                <textarea
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value)}
                  onBlur={() => onBlur("message")}
                  placeholder="Tell me about your business and current situation..."
                  rows={4}
                  className="mt-1 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]"
                />
              </div>

              <p className="text-xs text-zinc-600">
                We respect your privacy. No spam.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--brand)] px-7 text-base font-semibold text-white shadow-sm hover:bg-[var(--brand-hover)] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
              >
                {submitting ? "Submitting..." : "Book Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

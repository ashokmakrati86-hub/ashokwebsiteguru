"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The 1:1 consultation call is free. The goal is to understand your business and give you clear marketing direction.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, sales, and clarity from digital marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get a diagnosis of your current marketing and a simple digital marketing plan you can start implementing after the call.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The consultation call is planned for around 1 hour, so there is enough time to understand your business properly.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. You can book the call even if you only have a Facebook page, Instagram page, or offline business right now.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After you submit the form, you will be redirected to the thank you page and contacted with the next steps.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. I will help you understand what kind of digital marketing plan makes sense for your business, budget, and goals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Questions
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-950 sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-base font-semibold text-zinc-950">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-lg font-semibold text-[var(--brand)]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-700">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

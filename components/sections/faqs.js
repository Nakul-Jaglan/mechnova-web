"use client";
import { useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

function Faqs() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  const faqs = t('home.faqs.questions');

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#0072ce]">
          {t('home.faqs.title')}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-blue-200 text-gray-900"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </span>                <span
                  className={`ml-4 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-${i}`}
                className={`px-6 text-gray-900 text-base bg-blue-200 transition-all duration-300 ease-in-out ${
                  open === i
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
                style={{}}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
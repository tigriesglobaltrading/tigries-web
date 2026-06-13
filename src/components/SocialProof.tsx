import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n";

function SocialProof() {
  const [index, setIndex] = useState(0);
  const t = useI18n();
  const quote = t.testimonials[index];

  return (
    <>
      <section data-section-reveal className="bg-[linear-gradient(135deg,var(--brand-night),var(--brand-blue-dark))] px-5 py-24 text-white">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="font-display-modern mx-auto max-w-[760px] text-4xl font-normal leading-[0.98] text-white md:text-6xl">
            {t.benefits.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[580px] text-base leading-7 text-blue-100/80">
            {t.benefits.subtitle}
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {t.benefits.cards.map((benefit) => (
              <article key={benefit.title} className="rounded-[28px] border border-white/10 bg-white/8 p-7 text-left backdrop-blur-xl">
                <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100/75">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-section-reveal className="px-5 py-24">
        <div className="mx-auto max-w-[900px]">
          <blockquote className="font-display-modern text-center text-4xl font-normal leading-[1.04] text-neutral-950 md:text-6xl">
            “{quote.quote}”
          </blockquote>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-8 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-semibold text-white">{quote.initials}</span>
              <span>
                <span className="block text-sm font-semibold text-neutral-950">{quote.name}</span>
                <span className="block text-sm text-neutral-500">{quote.role}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-[var(--brand-blue)] hover:bg-blue-50"
                onClick={() => setIndex((current) => (current === 0 ? t.testimonials.length - 1 : current - 1))}
                aria-label={t.carousel.previous}
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-[var(--brand-blue)] hover:bg-blue-50"
                onClick={() => setIndex((current) => (current + 1) % t.testimonials.length)}
                aria-label={t.carousel.next}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialProof;

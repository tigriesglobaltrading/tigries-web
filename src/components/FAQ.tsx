import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useI18n } from "../i18n";
import type { Locale } from "../locales/fr";

type FAQItem = Locale["faq"]["items"][number];

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      gsap.to(contentRef.current, { height: isOpen ? "auto" : 0, duration: 0.28, ease: "power2.out" });
      gsap.to(iconRef.current, { rotate: isOpen ? 45 : 0, duration: 0.28, ease: "power2.out" });
    },
    { dependencies: [isOpen], scope: contentRef },
  );

  return (
    <div className={`border-b ${isOpen ? "border-[var(--brand-blue)]" : "border-black/5"}`}>
      <button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={onToggle} aria-expanded={isOpen}>
        <span className={`text-base font-semibold ${isOpen ? "text-[var(--brand-blue)]" : "text-neutral-950"}`}>{item.question}</span>
        <Plus ref={iconRef} size={20} className={`shrink-0 ${isOpen ? "text-[var(--brand-blue)]" : "text-neutral-500"}`} />
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="max-w-[720px] pb-6 text-sm leading-7 text-neutral-500">{item.answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const t = useI18n();

  return (
    <section id="faq" data-section-reveal className="px-5 py-24">
      <div className="mx-auto max-w-[900px]">
        <h2 className="font-display-modern text-center text-4xl font-normal leading-[0.98] text-neutral-950 md:text-6xl">{t.faq.title}</h2>
        <div className="mt-12 border-t border-black/5">
          {t.faq.items.map((item, index) => (
            <FAQRow key={item.question} item={item} isOpen={openIndex === index} onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

import { useI18n } from "../i18n";

function ProblemStatement() {
  const t = useI18n();

  return (
    <section data-section-reveal className="blueprint-bg px-5 py-24">
      <div className="mx-auto max-w-[960px]">
        <figure className="rounded-[32px] border border-blue-100 bg-white/80 p-8 text-center shadow-[0_24px_70px_rgba(29,78,216,0.08)] md:p-12">
          <blockquote className="font-display-modern text-3xl leading-tight text-neutral-950 md:text-5xl">
            “{t.proof.quote}”
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-semibold text-white">{t.proof.authorInitials}</span>
            <span>
              <span className="block text-sm font-semibold text-neutral-950">{t.proof.authorName}</span>
              <span className="block text-sm text-neutral-500">{t.proof.authorRole}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ProblemStatement;

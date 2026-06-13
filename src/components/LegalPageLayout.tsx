import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm text-[var(--brand-blue)] hover:bg-blue-50">
          <ArrowLeft size={16} />
          Back to site
        </a>
        <div className="mt-12 rounded-[28px] border border-blue-100 bg-white/85 p-6 shadow-[0_24px_70px_rgba(29,78,216,0.08)] md:p-10">
          <h1 className="font-display-modern text-4xl leading-[0.98] text-neutral-950 md:text-6xl">{title}</h1>
          <div className="mt-10 grid gap-9">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-black/5 pt-7 first:border-t-0 first:pt-0">
      <h2 className="text-base font-semibold text-neutral-950">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm leading-7 text-neutral-600">{children}</div>
    </section>
  );
}

export function LegalInfoList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-[220px_1fr]">
      {items.map((item) => (
        <div key={item.label} className="contents">
          <dt className="font-semibold text-neutral-950">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default LegalPageLayout;

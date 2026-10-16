import { useState, type FormEvent } from "react";
import { company } from "../company";
import { ArrowLeft, Check } from "lucide-react";
import { useI18n } from "../i18n";

function DemoPage() {
  const t = useI18n();
  const [prepared, setPrepared] = useState(false);
  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = ["Name", "Company", "Email", "Phone", "Trade", "Message"]
      .map(key => `${key}: ${data.get(key) ?? ""}`).join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Demo request")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };

  return (
    <main className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-500 hover:text-neutral-950">
          <ArrowLeft size={16} />
          {t.requestDemo.backHome}
        </a>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside>
            <p className="inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">{t.requestDemo.eyebrow}</p>
            <h1 className="font-display-modern mt-7 text-4xl font-normal leading-[0.98] text-neutral-950 md:text-6xl">
              {t.requestDemo.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-7 text-neutral-500">{t.requestDemo.subtitle}</p>

            <div className="mesh-blue soft-shadow mt-10 rounded-[34px] border border-white/70 p-7">
              <h2 className="text-sm font-semibold text-neutral-950">{t.requestDemo.asideTitle}</h2>
              <div className="mt-5 grid gap-3">
                {t.requestDemo.asideItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-full bg-white/60 px-4 py-3 text-sm text-neutral-700 backdrop-blur-xl">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                      <Check size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <form onSubmit={submitRequest} className="rounded-[34px] border border-black/5 bg-white/70 p-6 shadow-[0_28px_80px_rgba(26,26,26,0.08)] backdrop-blur-xl md:p-8">
            <h2 className="font-display-modern text-4xl font-normal leading-none text-neutral-950">{t.requestDemo.formTitle}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                {t.requestDemo.fields.name}
                <input name="Name" required autoComplete="name" className="brand-focus h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-normal outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                {t.requestDemo.fields.company}
                <input name="Company" autoComplete="organization" className="brand-focus h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-normal outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                {t.requestDemo.fields.email}
                <input name="Email" required autoComplete="email" type="email" className="brand-focus h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-normal outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                {t.requestDemo.fields.phone}
                <input name="Phone" type="tel" autoComplete="tel" className="brand-focus h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-normal outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700 sm:col-span-2">
                {t.requestDemo.fields.trade}
                <input name="Trade" className="brand-focus h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm font-normal outline-none" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700 sm:col-span-2">
                {t.requestDemo.fields.message}
                <textarea name="Message" required rows={5} className="brand-focus resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-normal outline-none" />
              </label>
            </div>
            <p lang="en" className="mt-5 text-sm leading-6 text-neutral-500">This form prepares an email in your email app. Review it and send it to complete your request.</p>
            {prepared && <p lang="en" role="status" className="mt-3 text-sm text-[var(--brand-blue)]">Your email draft is ready to open. If no email app opened, contact <a className="break-words underline" href={`mailto:${company.email}`}>{company.email}</a> directly. Your request has not been sent by this website.</p>}
            <button type="submit" className="btn-primary mt-7 w-full rounded-full px-7 py-3 text-sm font-semibold hover:-translate-y-0.5">
              {t.requestDemo.submit}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default DemoPage;

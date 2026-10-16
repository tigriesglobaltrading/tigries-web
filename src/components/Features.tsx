import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useI18n } from "../i18n";
import ScreenshotSlot from "./ScreenshotSlot";
import equipmentScreenshot from "../assets/screenshot-equipement.png";
import loginScreenshot from "../assets/screenshot-login.png";
import trackingScreenshot from "../assets/screenshot-tracking.png";

type Feature = {
  label: string;
  title: string;
  points: { title: string; body: string }[];
  mesh: string;
  visual: "profile" | "chat" | "input";
  visualTitle: string;
  visualMeta: string;
  visualItems: readonly string[];
};

function Visual({ type, mesh }: { type: Feature["visual"]; mesh: string }) {
  const t = useI18n();
  const feature = t.features.find((item) => item.visual === type);
  if (!feature) {
    return null;
  }

  const screenshotByType: Record<Feature["visual"], string> = {
    profile: equipmentScreenshot,
    chat: trackingScreenshot,
    input: loginScreenshot,
  };

  return (
    <div className={`${mesh} relative overflow-hidden rounded-[24px] border border-white/70 p-4 soft-shadow md:p-6`}>
      <ScreenshotSlot
        id={`feature-${type}`}
        label={feature.visualTitle}
        src={screenshotByType[type]}
        aspectRatio="3024/1672"
        className="min-h-[300px]"
        objectPosition={type === "input" ? "center center" : "top center"}
      />
      {type !== "input" ? (
        <div className="absolute bottom-8 left-1/2 w-[min(420px,calc(100%-48px))] -translate-x-1/2 rounded-[18px] border border-white/70 bg-white/80 p-4 text-left shadow-[0_18px_50px_rgba(26,26,26,0.12)] backdrop-blur-xl">
          <p className="text-sm font-semibold text-neutral-950">{feature.visualTitle}</p>
          <p className="mt-1 text-xs leading-5 text-neutral-500">{feature.visualMeta}</p>
        </div>
      ) : null}
    </div>
  );
}

function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useI18n();

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-feature-row]").forEach((row) => {
        gsap.from(row, {
          y: 34,
          opacity: 0,
          scale: 0.98,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 82%", once: true },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="features" ref={sectionRef} className="px-5 py-24">
      <div className="mx-auto grid max-w-[1120px] gap-24">
        {t.features.map((feature, index) => (
          <article key={feature.label} data-feature-row className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-[var(--brand-blue)]">{feature.label}</span>
              <h2 className="font-display-modern mt-6 max-w-[520px] text-4xl font-normal leading-[0.98] text-neutral-950 md:text-5xl">{feature.title}</h2>
              <div className="mt-8 border-y border-black/5">
                {feature.points.map((point) => (
                  <div key={point.title} className="border-b border-black/5 py-5 last:border-b-0">
                    <h3 className="text-sm font-semibold text-neutral-950"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--brand-blue)]" />{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{point.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <Visual type={feature.visual} mesh={feature.mesh} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;

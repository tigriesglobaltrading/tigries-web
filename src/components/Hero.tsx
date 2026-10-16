import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useI18n } from "../i18n";
import ScreenshotSlot from "./ScreenshotSlot";
import dashboardScreenshot from "../assets/screenshot-home.png";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const t = useI18n();
  const highlightTitle = (title: string) => {
    const pattern = /(one dashboard|un seul dashboard|dashboard|BTP|construction)/gi;
    const exactPattern = /^(one dashboard|un seul dashboard|dashboard|BTP|construction)$/i;
    return title.split(pattern).map((part, index) =>
      exactPattern.test(part) ? (
        <span key={`${part}-${index}`} className="text-[var(--brand-blue)]">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  useGSAP(
    () => {
      gsap.from("[data-hero-reveal]", {
        y: 26,
        opacity: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: "power3.out",
      });
    },
    { scope: heroRef },
  );

  return (
    <section id="announcement" ref={heroRef} className="px-5 pb-20 pt-24 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-[920px] text-center">
        <h1 data-hero-reveal className="font-display-modern mx-auto max-w-[840px] text-[48px] font-normal leading-[0.94] text-neutral-950 md:text-[72px]">
          {highlightTitle(t.hero.title)}
        </h1>
        <p data-hero-reveal className="mx-auto mt-7 max-w-[620px] text-lg leading-8 text-neutral-500">
          {t.hero.subtitle}
        </p>
        <div data-hero-reveal className="mt-8 flex justify-center">
          <a href="/demo" className="btn-primary rounded-full px-7 py-3 text-sm font-semibold hover:-translate-y-0.5">
            {t.hero.cta}
          </a>
        </div>
      </div>

      <div data-hero-reveal className="mx-auto mt-16 max-w-[1120px]">
        <div className="mesh-hero soft-shadow relative overflow-hidden rounded-[28px] border border-white/70 px-3 pb-5 pt-16 md:px-8 md:pb-8 md:pt-20">
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          <ScreenshotSlot
            id="hero-dashboard"
            label="Dashboard Tigries"
            src={dashboardScreenshot}
            aspectRatio="3024/1672"
            className="mx-auto max-w-[1010px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

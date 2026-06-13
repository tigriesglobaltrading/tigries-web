import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import ProblemStatement from "./components/ProblemStatement";
import Features from "./components/Features";
import ModuleGrid from "./components/ModuleGrid";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import DemoPage from "./components/DemoPage";
import Imprint from "./components/Imprint";
import LegalNotice from "./components/LegalNotice";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useI18n } from "./i18n";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const t = useI18n();
  const pathname = window.location.pathname;
  const isDemoPage = pathname === "/demo";
  const isLegalNoticePage = pathname === "/legal-notice";
  const isImprintPage = pathname === "/imprint";

  useEffect(() => {
    if (isLegalNoticePage) {
      document.title = "Legal Notice | Tigries Global Trading";
      return;
    }

    if (isImprintPage) {
      document.title = "Imprint | Tigries Global Trading";
      return;
    }

    document.title = t.meta.title;
  }, [isImprintPage, isLegalNoticePage, t.meta.title]);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-section-reveal]");

      sections.forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.72,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: appRef },
  );

  return (
    <div ref={appRef} className="min-h-screen bg-[#f8fbff] text-[#161616]">
      <Navbar />
      {isLegalNoticePage ? (
        <LegalNotice />
      ) : isImprintPage ? (
        <Imprint />
      ) : isDemoPage ? (
        <DemoPage />
      ) : (
        <main>
          <Hero />
          <LogoBar />
          <ProblemStatement />
          <ModuleGrid />
          <Features />
          <SocialProof />
          <FAQ />
          <CTABanner />
        </main>
      )}
      <Footer />
      <LanguageSwitcher />
    </div>
  );
}

export default App;

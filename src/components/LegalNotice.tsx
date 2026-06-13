import LegalPageLayout, { LegalInfoList, LegalSection } from "./LegalPageLayout";

function LegalNotice() {
  return (
    <LegalPageLayout title="Legal Notice">
      {/* Final legal text should be reviewed by a legal professional before publication. */}
      <LegalSection title="Company Information">
        <LegalInfoList
          items={[
            { label: "Company name", value: "TIGRIES GLOBAL TRADING, SOCIEDAD LIMITADA" },
            { label: "Legal form", value: "Sociedad Limitada / Limited Liability Company" },
            { label: "NIF / Tax ID", value: "B26980672 (Provisional NIF)" },
            {
              label: "Registered address",
              value: (
                <>
                  Calle Camino Viejo de Malaga, Num 28
                  <br />
                  29700 Vélez-Málaga
                  <br />
                  Málaga, Spain
                </>
              ),
            },
            { label: "Country", value: "Spain" },
            { label: "Administrator", value: "Mohamed Wahied Ishak" },
            { label: "Email", value: <a href="mailto:info@tigriesglobaltrading.com" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">info@tigriesglobaltrading.com</a> },
            { label: "Website", value: <a href="https://www.tigriesglobaltrading.com/" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">https://www.tigriesglobaltrading.com/</a> },
          ]}
        />
      </LegalSection>

      <LegalSection title="Publisher">
        <p>The website and SaaS platform are published by TIGRIES GLOBAL TRADING SL.</p>
      </LegalSection>

      <LegalSection title="Business Activity">
        <p>
          TIGRIES GLOBAL TRADING SL operates in the field of machinery, tools, technical equipment, construction-related materials, distribution, e-commerce,
          rental, import and export. Its main activity is wholesale trade of machine tools, CNAE 4662.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content, design elements, logos, texts, graphics, software, source code, user interface and brand elements are protected and belong to TIGRIES
          GLOBAL TRADING SL or its licensors. Users may not reproduce, modify, distribute or use them without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          TIGRIES GLOBAL TRADING SL makes reasonable efforts to keep information accurate and up to date, but cannot guarantee that all information is always
          complete or error-free. The company is not liable for damages resulting from misuse of the platform, technical interruptions or external links.
        </p>
      </LegalSection>

      <LegalSection title="External Links">
        <p>
          External links may be provided for convenience. TIGRIES GLOBAL TRADING SL is not responsible for third-party content accessible through those links.
        </p>
      </LegalSection>

      <LegalSection title="SaaS Platform Use">
        <p>
          This legal notice applies to the website and SaaS platform. Use of the platform may also be governed by separate Terms of Service, Subscription Terms
          or Service Agreements.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>This page is governed by the applicable laws of Spain, unless mandatory consumer or business protection laws provide otherwise.</p>
      </LegalSection>

      <LegalSection title="Last Updated">
        <p>Last updated: June 10, 2026</p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default LegalNotice;

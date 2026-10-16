import { company } from "../company";
import LegalPageLayout, { LegalInfoList, LegalSection } from "./LegalPageLayout";

function LegalNotice() {
  return (
    <LegalPageLayout title="Legal Notice">
      {/* Final legal text should be reviewed by a legal professional before publication. */}
      <LegalSection title="Company Information">
        <LegalInfoList
          items={[
            { label: "Company name", value: company.registeredName },
            { label: "Legal form", value: "Sociedad Limitada / Limited Liability Company" },
            { label: "NIF / Tax ID", value: `${company.nif} (Provisional NIF)` },
            {
              label: "Registered address",
              value: (
                <>
                  {company.street}
                  <br />
                  {company.city}
                  <br />
                  Málaga, Spain
                </>
              ),
            },
            { label: "Country", value: "Spain" },
            { label: "Administrator", value: "Mohamed Wahied Ishak" },
            { label: "Phone", value: <a href={company.phoneHref} className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">{company.phone}</a> },
            { label: "Email", value: <a href={`mailto:${company.email}`} className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">{company.email}</a> },
            { label: "Website", value: <a href="https://www.tigriesglobaltrading.com/" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">https://www.tigriesglobaltrading.com/</a> },
          ]}
        />
      </LegalSection>

      <LegalSection title="Publisher">
        <p>The website and SaaS platform are published by TIGRIES GLOBAL TRADING SL.</p>
      </LegalSection>

      <LegalSection title="Business Activity">
        <p>
          TIGRIES GLOBAL TRADING SL provides subscriptions to a SaaS management platform for construction businesses,
          along with configuration, onboarding and support services. The services offered on this website are delivered online;
          no physical products are shipped.
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
          This legal notice applies to the website and SaaS platform. Please read our <a href="/terms" className="underline">subscription terms</a> and the policies linked in the footer. Project-specific conditions are set out in your accepted service agreement.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>This page is governed by the applicable laws of Spain, unless mandatory consumer or business protection laws provide otherwise.</p>
      </LegalSection>

      <LegalSection title="Last Updated">
        <p>Last updated: October 16, 2026</p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default LegalNotice;

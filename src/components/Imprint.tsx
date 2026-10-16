import { company } from "../company";
import LegalPageLayout, { LegalInfoList, LegalSection } from "./LegalPageLayout";

function Imprint() {
  return (
    <LegalPageLayout title="Imprint">
      {/* Final legal text should be reviewed by a legal professional before publication. */}
      <LegalSection title="Provider Information">
        <p>
          TIGRIES GLOBAL TRADING SL
          <br />
          {company.street}
          <br />
          {company.city}
          <br />
          Málaga
          <br />
          Spain
        </p>
      </LegalSection>

      <LegalSection title="Legal Representative">
        <p>Mohamed Wahied Ishak</p>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalInfoList
          items={[
            { label: "Phone", value: <a href={company.phoneHref} className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">{company.phone}</a> },
            { label: "Email", value: <a href={`mailto:${company.email}`} className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">{company.email}</a> },
            { label: "Website", value: <a href="https://www.tigriesglobaltrading.com/" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">https://www.tigriesglobaltrading.com/</a> },
          ]}
        />
      </LegalSection>

      <LegalSection title="Company Registration">
        <LegalInfoList
          items={[
            { label: "Company name", value: company.registeredName },
            { label: "Legal form", value: "Sociedad Limitada" },
            { label: "NIF", value: company.nif },
            { label: "Share capital", value: "3,000.00 EUR" },
          ]}
        />
      </LegalSection>

      <LegalSection title="Responsible for Content">
        <p>TIGRIES GLOBAL TRADING SL</p>
      </LegalSection>

      <LegalSection title="Dispute Resolution">
        <p>
          For dispute resolution or complaint-related information, contact{" "}
          <a href="mailto:dispute@tigriesglobaltrading.com" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">
            dispute@tigriesglobaltrading.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Last Updated">
        <p>Last updated: October 16, 2026</p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default Imprint;

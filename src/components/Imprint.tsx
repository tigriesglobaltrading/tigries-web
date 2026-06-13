import LegalPageLayout, { LegalInfoList, LegalSection } from "./LegalPageLayout";

function Imprint() {
  return (
    <LegalPageLayout title="Imprint">
      {/* Final legal text should be reviewed by a legal professional before publication. */}
      <LegalSection title="Provider Information">
        <p>
          TIGRIES GLOBAL TRADING SL
          <br />
          Calle Camino Viejo de Malaga, Num 28
          <br />
          29700 Vélez-Málaga
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
            { label: "Email", value: <a href="mailto:info@tigriesglobaltrading.com" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">info@tigriesglobaltrading.com</a> },
            { label: "Website", value: <a href="https://www.tigriesglobaltrading.com/" className="text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]">https://www.tigriesglobaltrading.com/</a> },
          ]}
        />
      </LegalSection>

      <LegalSection title="Company Registration">
        <LegalInfoList
          items={[
            { label: "Company name", value: "TIGRIES GLOBAL TRADING, SOCIEDAD LIMITADA" },
            { label: "Legal form", value: "Sociedad Limitada" },
            { label: "NIF", value: "B26980672" },
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
        <p>Last updated: June 10, 2026</p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default Imprint;

import LegalPageLayout, { LegalSection } from "./LegalPageLayout";
import { company } from "../company";

export const policies: Record<string, { title: string; sections: { title: string; text: string }[] }> = {
  "/terms": { title: "Subscription terms", sections: [
    { title: "Services and provider", text: `${company.name} (NIF ${company.nif}) provides SaaS subscriptions for construction businesses, setup, onboarding and support. This website presents digital services; no physical products are sold or shipped through this offering.` },
    { title: "Your proposal and subscription", text: "The scope of the service, setup fees, subscription price, taxes, payment schedule, commitment period, renewal arrangements and activation schedule are specified in your written proposal or service agreement before acceptance. Requesting a demo does not create a paid subscription. Do not make a payment until you have received and accepted these details." },
    { title: "Access and responsibilities", text: "Keep account credentials confidential and grant access only to authorised users. You remain responsible for the data you upload and for using the service lawfully. The modules, integrations, training and support included in your subscription are those set out in your accepted agreement." },
    { title: "Cancellation and service issues", text: "To request cancellation, report an access problem or dispute a charge, email us with your company name and subscription or invoice reference. Cancellation, returns, refunds and service delivery are explained on the dedicated pages linked below. Mandatory statutory rights remain unaffected by these terms or any individual agreement." },
  ] },
  "/cancellations": { title: "Order & subscription cancellations", sections: [
    { title: "How to request cancellation", text: `Email ${company.email} with the subject “Cancellation request”, your company name, account email, subscription or order reference and requested cancellation date. State whether you want to cancel a setup order, end your subscription or stop its renewal. Never include passwords or full card details.` },
    { title: "Effective date and remaining charges", text: "The cancellation date, any notice period and outstanding fees depend on the commitment and renewal terms in your accepted proposal or service agreement. We will confirm the applicable end date, remaining access and any outstanding amount in writing. A cancellation request does not by itself create an entitlement to a refund; see the refund policy and any applicable statutory rights." },
    { title: "Before setup or activation", text: "Contact us as soon as possible if you wish to cancel before activation or change the scope of your setup. The treatment of work already performed and fees already paid depends on your accepted agreement and applicable law." },
    { title: "Your data", text: "Before access ends, contact us to arrange any data export you need and confirm the options available under your service agreement." },
  ] },
  "/returns": { title: "Returns & withdrawal", sections: [
    { title: "No physical returns", text: "Our offering consists of online software subscriptions and digital services. No parcels, equipment or physical products are delivered, so there is no physical return address or return shipping procedure for this offering. For a service that has not been delivered or does not work as agreed, contact us to request a remedy." },
    { title: "Business subscriptions", text: "For subscriptions purchased for professional purposes, cancellation and refund arrangements are governed by your accepted service agreement, subject to applicable law. Please use the cancellation and refund procedures linked below." },
    { title: "Consumer withdrawal rights", text: "Where you qualify as a consumer and a statutory withdrawal right applies to your distance service contract, you generally have 14 calendar days from conclusion of the contract to withdraw without giving a reason. Email an unequivocal withdrawal statement with your name, address, contract date and order reference. No particular form is required." },
    { title: "Services started during the withdrawal period", text: "If you expressly requested performance during the withdrawal period, a proportionate charge for services already supplied may apply where legally permitted. The right is lost for a fully performed paid service only when the required prior express consent and acknowledgement were obtained. Starting a subscription does not automatically waive statutory rights." },
  ] },
  "/refunds": { title: "Refund policy", sections: [
    { title: "Request a refund", text: `Email ${company.email} with the subject “Refund request”, your company name, account email, invoice or payment reference, payment date and the reason for your request. For a statutory withdrawal, no reason is required. Do not include full payment card details.` },
    { title: "How requests are assessed", text: "We review requests against the accepted service agreement, the service actually delivered and applicable law. Include details of duplicate or incorrect charges, services not supplied, or access problems so we can investigate. We will communicate the outcome and any refund amount in writing. Cancellation alone does not guarantee reimbursement of previous subscription periods." },
    { title: "Payment method and timing", text: "Refunds due are returned using the original payment method unless another method is expressly agreed without additional cost to you. For a valid statutory consumer withdrawal, reimbursement is made without undue delay and no later than 14 calendar days after notice of withdrawal, subject to lawful deductions for services already supplied. For other refunds, the processing date is confirmed in writing; the time for funds to appear can depend on the payment provider." },
    { title: "Your statutory rights", text: "This policy does not exclude mandatory rights relating to withdrawal, non-performance or non-conforming services. If you disagree with the handling of a request, contact us with the original reference so that we can review it." },
  ] },
  "/delivery": { title: "Service delivery & activation", sections: [
    { title: "Online delivery only", text: "All subscriptions, configuration, onboarding and support services are delivered digitally. No physical products are shipped. A transport company, parcel tracking and physical shipping charges do not apply. Shipping costs are EUR 0; service and setup fees are separate and stated in your proposal." },
    { title: "Activation and delivery schedule", text: "Your workspace activation date and the schedule for configuration, data import and training are agreed in writing in your proposal or service agreement before you subscribe. These depend on the selected modules, project scope and the information required from your team. There is no single instant-activation promise for customised implementations." },
    { title: "How you receive access", text: "Workspace access and onboarding instructions are provided electronically using the contact details associated with your order. You need an internet connection and a compatible browser to use the online platform." },
    { title: "Delayed or missing access", text: `If you have not received access by the agreed date, check your spam folder and email ${company.email} with your company name and order reference. We will investigate the delivery issue and confirm the next steps. Any remedies due under your agreement or applicable law remain available.` },
  ] },
};

export default function PolicyPage({ path }: { path: string }) {
  const policy = policies[path];
  return <LegalPageLayout title={policy.title}>
    {policy.sections.map(section => <LegalSection key={section.title} title={section.title}><p>{section.text}</p></LegalSection>)}
    <LegalSection title="Contact & related policies">
      <a className="break-words text-[var(--brand-blue)] underline" href={`mailto:${company.email}`}>{company.email}</a>
      <nav aria-label="Related policies" className="flex flex-wrap gap-x-5 gap-y-3">{Object.entries(policies).filter(([href]) => href !== path).map(([href, item]) => <a className="text-[var(--brand-blue)] underline" key={href} href={href}>{item.title}</a>)}<a href="/contact" className="text-[var(--brand-blue)] underline">Contact</a></nav>
    </LegalSection>
  </LegalPageLayout>;
}

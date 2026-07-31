// Legal pages content. Structure mirrors lanes.ts / products.ts.
//
// ATTORNEY REVIEW REQUIRED before these routes ship. This is a working draft
// written to the shape of a small MSSP's terms, not reviewed legal advice.

export type LegalSection = {h: string; body: string[]};

export type LegalDoc = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  heading: string;
  sub: string;
  effective: string;
  intro: string[];
  sections: LegalSection[];
};

const ENTITY = 'Helm Security LLC';
const STATE = 'New Jersey';
const EMAIL = 'hello@helmsecured.com';
const EFFECTIVE = 'July 27, 2026';

export const terms: LegalDoc = {
  slug: 'terms',
  navLabel: 'Terms of Service',
  metaTitle: 'Terms of Service | Helm',
  metaDesc:
    'The terms that govern use of the Helm website, the free email security scan, and Helm Mail, Helm Aware, Helm Ready and Helm Watch services.',
  eyebrow: 'Legal',
  heading: 'Terms of Service',
  sub: 'The rules that govern our website, the free scan, and every Helm service. Written to be read, not to hide things.',
  effective: EFFECTIVE,
  intro: [
    `These Terms of Service ("Terms") are a binding agreement between you ("you", "Customer") and ${ENTITY}, a ${STATE} limited liability company ("Helm", "we", "us"). They govern your use of our website, the free email security scan, and any Helm product or service you subscribe to.`,
    `By using this site, requesting a scan, or signing an order, you agree to these Terms. If you are agreeing on behalf of a company, you confirm you have authority to bind it.`,
  ],
  sections: [
    {
      h: '1. What we provide',
      body: [
        `Helm sells managed security services to small and mid-sized businesses. Our current products are Helm Mail (managed email security), Helm Aware Managed (managed security awareness learning and phishing), Helm Aware Workshop (fixed-fee AI scam readiness), Helm Ready (compliance readiness projects) and Helm Watch (managed endpoint detection and response).`,
        `The specific scope of what we deliver to you is defined in your order form or statement of work ("Order"). These Terms apply to every Order. If an Order and these Terms conflict, the Order controls for that engagement only.`,
      ],
    },
    {
      h: '2. What we do not provide',
      body: [
        `We are not an insurer. Nothing we sell indemnifies you against loss.`,
        `We are not a law firm and do not provide legal advice, including advice on breach notification obligations. We will support your counsel; we will not replace them.`,
        `We do not issue certifications. Helm Ready prepares you for assessment and hands you to an independent assessor. For CMMC specifically, certification is performed only by an authorized C3PAO, never by us.`,
        `We do not guarantee that your systems will not be compromised. No security provider honestly can. What we commit to is the scope, coverage and response process written in your Order.`,
      ],
    },
    {
      h: '3. Your responsibilities',
      body: [
        `You agree to give us accurate business and contact information, keep it current, and tell us promptly when key contacts change.`,
        `You are responsible for maintaining your own licenses for the platforms we protect (for example Microsoft 365 or Google Workspace), for granting and revoking the administrative access we need, and for the actions of your users.`,
        `You confirm that you own or are authorized to administer every domain, mailbox, endpoint and account you ask us to scan, monitor or protect. Asking us to test systems you do not control is a breach of these Terms and may be a crime.`,
        `Some protections depend on you acting. If we escalate an incident, recommend a configuration change, or ask you to remove a user's access, delays on your side limit what our response can achieve.`,
      ],
    },
    {
      h: '4. The free scan',
      body: [
        `The free email security scan inspects publicly reachable information about a domain you control: published DMARC, SPF, DKIM records under a defined set of common selectors, MX, DNSSEC, MTA-STS and TLS reporting records, HTTPS certificate status, and a limited unauthenticated mail-server check. It does not search breach datasets or lookalike-domain registrations. It touches nothing inside your systems and requires no credentials.`,
        `The scan is provided as is, for informational purposes, with no warranty. A clean result is not an assurance that you are secure. By requesting a scan you confirm you are authorized to request it for that domain.`,
      ],
    },
    {
      h: '5. Fees, billing and renewal',
      body: [
        `Subscription unit pricing and account minimums are published on our pricing page. Subscriptions are billed monthly in advance by card or ACH through our payment processor and renew automatically until cancelled.`,
        `Project work under Helm Ready and Helm Aware Workshop is fixed fee, scoped in writing in advance, and billed as set out in the Order. Helm Aware Managed is billed monthly by active learner.`,
        `Fees exclude applicable taxes. We may change subscription pricing on at least thirty days written notice, effective at your next renewal. A Helm Aware Managed price change will not take effect during its initial service term. If you do not accept a price change you may cancel before it takes effect, subject to any initial term in your Order.`,
        `Payments more than fifteen days late may result in suspension under section 11.`,
      ],
    },
    {
      h: '6. Term, cancellation and refunds',
      body: [
        `Unless your Order says otherwise, Helm Mail and Helm Watch run month to month with no minimum commitment. Helm Aware Managed has a twelve-month initial service term, billed monthly, followed by month-to-month renewal unless the Order says otherwise. After its initial term, it may be cancelled on thirty days written notice, effective at the end of the current billing period. We do not charge setup or cancellation fees.`,
        `We do not pro-rate or refund the current month once a billing period has begun, because our own upstream vendor costs for that period are already committed. Fixed-fee project work is refundable only for work not yet performed at the point of cancellation.`,
        `On termination we will deprovision your protections, and on written request within thirty days we will provide a reasonable export of the reports and documentation we hold for you.`,
      ],
    },
    {
      h: '7. Third-party technology',
      body: [
        `Helm products are delivered using third-party security platforms that we license, configure and manage on your behalf. Those vendors are listed on our trust page and in our Privacy Policy, and we update that list as it changes.`,
        `Your use of those platforms through us is subject to the vendors' own terms where they apply to end customers. We are responsible for how we manage them for you. We are not responsible for a vendor's own outage, defect or change in product direction, though we will manage the response and, if a vendor becomes unsuitable, migrate you.`,
      ],
    },
    {
      h: '8. Incident response',
      body: [
        `Detection and automated containment behind Helm Watch run continuously through our security operations partners. Human follow-up from Helm is provided during business hours and on a best-effort basis outside them, unless your Order states a different commitment in writing.`,
        `We will not describe our response coverage to you, in sales conversations or anywhere else, as something other than what this section says.`,
      ],
    },
    {
      h: '9. Confidentiality and data',
      body: [
        `Each party will protect the other's confidential information with at least reasonable care and use it only to perform under these Terms. Our handling of personal information is described in our Privacy Policy, which forms part of these Terms.`,
        `You retain ownership of your data. We retain ownership of our methodologies, templates, reports and tooling. We may use aggregated, de-identified operational data to improve our services, and will never identify you in it without your written consent.`,
      ],
    },
    {
      h: '10. Acceptable use',
      body: [
        `You may not use our services to break the law, to attack or test systems you do not control, to send unlawful or unsolicited bulk email, to resell or white-label our services without a written reseller agreement, or to reverse engineer the platforms we provide.`,
      ],
    },
    {
      h: '11. Suspension',
      body: [
        `We may suspend service on notice for non-payment, for a breach of section 10, or where continuing service would put you, us or another customer at immediate risk. We will restore service once the cause is resolved. Suspension does not relieve you of fees accrued.`,
      ],
    },
    {
      h: '12. Warranties and disclaimer',
      body: [
        `We warrant that we will perform with the reasonable skill and care of a competent managed security provider, and that our personnel are authorized to do the work.`,
        `Beyond that, and to the fullest extent the law allows, our services are provided as is. We disclaim all implied warranties, including merchantability, fitness for a particular purpose, and any warranty that our services will detect or prevent every threat, be uninterrupted, or make you compliant with any standard.`,
      ],
    },
    {
      h: '13. Limitation of liability',
      body: [
        `Neither party is liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data, even if advised such damages were possible.`,
        `Except for your payment obligations, each party's total aggregate liability arising out of or relating to these Terms is limited to the fees you paid to Helm in the twelve months before the event giving rise to the claim.`,
        `Nothing in this section limits liability that cannot be limited by law, including fraud, willful misconduct, or death or personal injury caused by negligence.`,
      ],
    },
    {
      h: '14. Indemnification',
      body: [
        `You will defend and indemnify Helm against third-party claims arising from your breach of section 3 or section 10, including any claim that you asked us to scan, monitor or access a system you were not authorized to.`,
        `We will defend and indemnify you against third-party claims that our services, as delivered by us, infringe that party's intellectual property.`,
      ],
    },
    {
      h: '15. Changes to these Terms',
      body: [
        `We may update these Terms. For material changes affecting active subscriptions we will give at least thirty days notice by email to your billing contact, and the change takes effect at your next renewal. Continued use after that date is acceptance. The effective date at the top of this page always reflects the current version.`,
      ],
    },
    {
      h: '16. Governing law and disputes',
      body: [
        `These Terms are governed by the laws of the State of ${STATE}, without regard to its conflict of laws rules. The parties submit to the exclusive jurisdiction of the state and federal courts located in ${STATE}.`,
        `Before filing, each party agrees to raise the dispute in writing and give the other thirty days to resolve it in good faith.`,
      ],
    },
    {
      h: '17. General',
      body: [
        `These Terms plus your Order and our Privacy Policy are the entire agreement between us on this subject. If any provision is unenforceable, the rest survives. A failure to enforce a right is not a waiver of it. You may not assign these Terms without our written consent; we may assign to a successor in a merger or sale of substantially all assets.`,
      ],
    },
    {
      h: '18. Contact',
      body: [
        `Questions about these Terms: ${EMAIL}. ${ENTITY}, ${STATE}.`,
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  slug: 'privacy',
  navLabel: 'Privacy Policy',
  metaTitle: 'Privacy Policy | Helm',
  metaDesc:
    'What personal information Helm collects from website visitors, free scan requests and customers, how we use it, who we share it with, and how long we keep it.',
  eyebrow: 'Legal',
  heading: 'Privacy Policy',
  sub: 'What we collect, why, who else sees it, and how long we keep it. In plain language, because a security company hiding its data practices would be absurd.',
  effective: EFFECTIVE,
  intro: [
    `This policy explains how ${ENTITY} ("Helm", "we") handles personal information collected through helmsecured.com, the free email security scan, our customer portal, and the services we deliver to customers.`,
  ],
  sections: [
    {
      h: '1. Information we collect',
      body: [
        `Information you give us. Name, business email, company name, phone number and whatever you write in a form or email when you request a scan, ask for a quote, or contact us.`,
        `Free scan inputs. The domain you submit. The scan queries public SPF, DMARC, MX, DNSSEC, MTA-STS and TLS reporting records; DKIM records under a defined set of common selectors; HTTPS certificate data; and limited unauthenticated mail-server information. It does not query breach datasets or lookalike-domain registrations, access your mail, read your files, or log into your systems.`,
        `Customer and billing information. Business contact details, billing address and payment records. Card numbers are handled by our payment processor and never touch our servers.`,
        `Service telemetry. Depending on the service purchased, our security platforms process security-relevant data from the environments we protect, including email metadata and quarantined message details or endpoint process and alert data. This can include personal information about your employees.`,
        `Site analytics. Basic request data such as pages viewed, referrer and approximate region. For our acquisition funnel, we also record a random browser-tab journey identifier, the page path, campaign source and UTM tags, and whether a scan was started or completed, a findings call was selected, or a contact form was submitted. These records do not contain the form's name, email, company, message, or scanned domain.`,
      ],
    },
    {
      h: '2. How we use it',
      body: [
        `To run the scan, show you the report, and send a short follow-up sequence about the findings when the scan identifies actionable gaps. To respond to enquiries and provide quotes. To deliver, monitor and support the services you buy. To detect, investigate and respond to security incidents in your environment. To bill you and keep accounting records. To send service and security notices. To improve our services and our site.`,
        `We do not sell personal information. We do not share it with advertisers. We do not use your service telemetry to market to your employees.`,
      ],
    },
    {
      h: '3. Marketing email',
      body: [
        `The scan form tells you that requesting a scan starts a short report-related follow-up sequence when the report identifies actionable gaps. We may also send occasional email about Helm products and security guidance relevant to your business. Every marketing message has an unsubscribe option, and unsubscribing never affects service notices or incident alerts, which are operational and cannot be opted out of while you are a customer.`,
      ],
    },
    {
      h: '4. Who we share it with',
      body: [
        `We use a small number of vendors ("subprocessors") to deliver our services. They are contractually limited to processing data for us and may not use it for their own purposes.`,
        `Huntress, for managed endpoint detection and response. Stripe, for payment processing and subscription billing. Vercel, for website and portal hosting. Resend, for transactional and notification email. MailProtector, for email security filtering.`,
        `We also share information where we must: with your own advisors at your direction, with law enforcement or regulators where legally required, with professional advisors under confidentiality, and with an acquirer if the business is sold.`,
        `A current subprocessor list is maintained on our trust page. We will give notice before adding a subprocessor that processes customer service telemetry.`,
      ],
    },
    {
      h: '5. Where data is processed',
      body: [
        `Our vendors process data primarily in the United States. If you are outside the United States, submitting information to us means it will be transferred there.`,
      ],
    },
    {
      h: '6. How long we keep it',
      body: [
        `Free scan records and the resulting report: twelve months, then deleted.`,
        `First-party conversion records: twelve months, then deleted.`,
        `Enquiries that do not become customers: twenty-four months.`,
        `Customer organization data, including scans, reports and alerts: for the life of the engagement and deleted from the live application within thirty days after offboarding. Deleted records may remain recoverable in provider backups until that provider's normal backup window expires.`,
        `Administrative impersonation audit records: twenty-four months, including after the related customer organization is deleted, because these records document privileged administrative access.`,
        `Billing and accounting records: seven years, as required for tax purposes.`,
        `Security telemetry inside our vendor platforms: per that platform's retention setting, which is documented in your onboarding materials.`,
      ],
    },
    {
      h: '7. How we protect it',
      body: [
        `Multi-factor authentication on supported administrative systems, least-privilege access reviewed when roles change, and encryption in transit and at rest. Customer portal accounts currently use one-time magic links sent to the registered mailbox and do not yet have an additional MFA factor. Vendor selection is weighted heavily toward security posture and breach notification commitments.`,
        `If we suffer a breach affecting your personal information we will notify you without undue delay, with what we know, what we are doing, and what you should do.`,
      ],
    },
    {
      h: '8. Your choices and rights',
      body: [
        `You can ask us for a copy of the personal information we hold about you, ask us to correct it, ask us to delete it, or object to a particular use. Email ${EMAIL} and we will respond within thirty days.`,
        `Deletion requests are limited where we must retain records for legal, tax or contractual reasons, and where the data is security evidence tied to an incident.`,
        `New Jersey and several other states give residents specific privacy rights, including the right to know, delete and opt out of sale or targeted advertising. We do not sell personal information or use it for targeted advertising, and we honor the other rights above for everyone regardless of where they live.`,
      ],
    },
    {
      h: '9. Employees of our customers',
      body: [
        `When we protect a business, we necessarily process information about that business's employees. In that relationship the business is the controller of that data and Helm is the processor: we act on their instructions. If you are an employee of a Helm customer and want to exercise a right, contact your employer first. We will support them in responding.`,
      ],
    },
    {
      h: '10. Cookies',
      body: [
        `Our marketing site uses no advertising cookies. It stores your theme preference locally and uses browser session storage to keep a random journey identifier and campaign tags together while that browser tab remains open. The identifier is not shared with advertisers or used to follow you across other websites. The customer portal uses a session cookie to keep signed-in customers signed in.`,
      ],
    },
    {
      h: '11. Children',
      body: [
        `Our services are sold to businesses and are not directed at anyone under 16. We do not knowingly collect information from children.`,
      ],
    },
    {
      h: '12. Changes',
      body: [
        `We will post any update here and change the effective date above. For material changes affecting customers we will give notice by email.`,
      ],
    },
    {
      h: '13. Contact',
      body: [
        `Privacy questions, or to exercise a right: ${EMAIL}. ${ENTITY}, ${STATE}.`,
      ],
    },
  ],
};

export const legalDocs = [terms, privacy];

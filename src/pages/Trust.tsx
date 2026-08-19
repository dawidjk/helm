import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {BOOK_CTA} from './ctaCopy';
import {siteUrl} from '../lib/urls';
import './Trust.css';

const subprocessors: {service: string; does: string; sees: string}[] = [
  {
    service: 'Vercel',
    does: 'Hosting, private customer-report storage, and application logs',
    sees: 'Application traffic, logs, and customer report PDFs stored for portal delivery',
  },
  {service: 'Turso', does: 'Portal database', sees: 'All stored customer records'},
  {
    service: 'Stripe',
    does: 'Billing',
    sees: 'Card data through its own hosted fields; we store only a customer identifier',
  },
  {
    service: 'Resend',
    does: 'Transactional email',
    sees: 'Recipient addresses and bodies of sign-in and alert emails',
  },
  {
    service: 'Huntress',
    does: '24/7 SOC-backed device and identity protection within Helm Core and Command',
    sees: 'Security telemetry from covered devices and supported identity environments',
  },
  {
    service: 'MailProtector',
    does: 'Mail-flow filtering and email traffic controls within Helm Core and Command',
    sees: 'Email content, metadata, sender and recipient information, and filtering decisions for protected accounts, once live',
  },
  {
    service: 'Doppel',
    does: 'Digital risk, social-engineering detection, phishing triage, simulations, and awareness learning within Helm Core and Command',
    sees: 'Mailbox and reported-message content, metadata, user information, and program activity for protected accounts, once live',
  },
];

const gaps = [
  'No SOC 2 or ISO 27001 audit: we are two people, and an audit of that scope is not something we can honestly represent as in place',
  'No multi-factor authentication on portal accounts yet. Today the control is the magic link itself, sent only to the mailbox you gave us',
  "Backups and disaster recovery rely on our hosting and database providers' own resilience, not on a process we have independently documented and tested ourselves",
];

export default function Trust() {
  return (
    <>
      <Meta
        title="Trust & Security: How We Protect Your Data | Helm"
        desc="How Helm protects data, manages access and subprocessors, and documents current controls and gaps for prospects, customers, and brokers."
        path="/trust"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Helm', item: siteUrl('/')},
            {'@type': 'ListItem', position: 2, name: 'Trust & Security', item: siteUrl('/trust')},
          ],
        }}
      />
      <header className="hero lane brand-hero trust-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-readable">
            Trust and security, answered directly.
          </h1>
          <p className="sub reveal d2">
            Before you trust Helm with account records, scan findings, or
            security alerts, you should know who can access them, which vendors
            are involved, and which controls are not in place yet.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <article className="article-body trust-article">
          <section className="trust-summary" aria-labelledby="trust-summary-title">
            <div className="trust-summary-intro">
              <h2 id="trust-summary-title">Helm at a glance</h2>
              <p>
                The facts we would want to know before choosing a security
                provider: who delivers the service, what data is stored, and
                which limitations still need to be considered.
              </p>
            </div>
            <div className="trust-summary-grid">
              <section>
                <h3>What Helm does</h3>
                <p>
                  We configure and manage security services from Huntress,
                  MailProtector, Doppel, and other disclosed platform vendors.
                  We do not claim to build their underlying detection technology.
                </p>
              </section>
              <section>
                <h3>Who delivers it</h3>
                <p>
                  Helm is a two-operator team. Platform vendors supply the
                  detection and response capability; Helm reviews and acts on
                  alerts during published weekday business hours.
                </p>
              </section>
              <section>
                <h3>What data is held</h3>
                <p>
                  We store account records, scan findings, and security alerts.
                  Stripe handles card details in its hosted fields, and Helm
                  Core and Command reporting uses aggregate counters rather than message
                  bodies.
                </p>
              </section>
              <section>
                <h3>Known gaps today</h3>
                <p>
                  We do not have a SOC 2 or ISO 27001 audit or portal MFA yet.
                  Backup and recovery rely on provider resilience rather than
                  a process we have independently documented and tested.
                </p>
              </section>
            </div>
          </section>

          <div className="observe">
            <section>
              <h2>Who we are</h2>
              <p>
                Helm Security is a New Jersey LLC with an EIN and business bank
                account. Kelly and Dawid Kluszczynski are the entire operating
                team today. Dawid is
                VP, Product &amp; Delivery. Kelly Kluszczynski is VP, Growth
                &amp; Partnerships. Material pricing, scope, legal, and service
                commitments require both of them to agree.
              </p>
            </section>

            <section>
              <h2>How we deliver, and who actually does the monitoring</h2>
              <p>
                Helm configures and manages technology supplied by specialist
                vendors. We do not claim to have built the underlying detection
                systems or to staff an overnight security desk ourselves.
                Huntress provides monitoring and response capabilities within
                Helm Core and Command. MailProtector supplies mail-flow filtering,
                while Doppel supplies digital-risk, email-threat, and human-risk
                capabilities. The signed service order states the covered
                platforms, users, devices, data sources, and exclusions.
              </p>
              <p>
                We review and act on alerts Monday through Friday, 9:00 a.m. to
                5:00 p.m. Eastern Time, excluding federal holidays. We do not
                sell a response-time guarantee we cannot hold.
              </p>
            </section>

            <section>
              <h2>What you can verify before buying</h2>
              <p>
                We will show you a sample scan report, the relevant statement
                of work, and a redacted example of the deliverable before you
                sign. We publish our starting prices and our known control
                gaps. We do not publish invented testimonials, customer
                counts, or certifications we have not earned.
              </p>
              <p>
                Vendor platform names describe who supplies the underlying
                technology. They are not presented as Helm certifications or
                as proof that those vendors endorse every Helm service.
              </p>
            </section>

            <section>
              <h2>What data we hold about you, and where</h2>
              <p>
                Your portal runs on Next.js (Vercel) with a Turso database,
                reached over an authenticated connection, all traffic over
                HTTPS/TLS. Encryption at rest is Turso's and Vercel's; we do
                not add our own layer on top.
              </p>
              <p>
                Stripe's hosted fields handle card details, so Helm stores only
                a Stripe customer identifier. Helm does not copy mailbox content
                into its portal. MailProtector processes mail-flow data and
                Doppel processes mailbox and reported-message data within
                Helm Core and Command. Helm reporting uses security and program activity,
                not message bodies. We do store scan findings, security alerts,
                user and organization records, billing status, and the scan or
                deployment requests you submit because those records are needed
                to provide and track the service.
              </p>
            </section>

            <section>
              <h2>Our subprocessors</h2>
              <p>Who else touches your data, and what each one actually sees.</p>
              <div className="subproc-scroll">
                <table className="subproc-table">
                  <thead>
                    <tr>
                      {['Service', 'What it does', 'What it sees'].map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subprocessors.map((row) => (
                      <tr key={row.service}>
                        <td>{row.service}</td>
                        <td>{row.does}</td>
                        <td>{row.sees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2>Access control on our side</h2>
              <p>
                Portal users sign in through a one-time link sent by email, so
                there is no portal password to reuse or expose. Sessions are
                tracked on the server, and every administrator page and action
                checks the user’s role before proceeding.
              </p>
              <p>
                Multi-factor authentication is not yet available on portal
                accounts. Today the control is the magic link itself, sent
                only to the mailbox you gave us. We plan to add MFA and will
                update this page when we do.
              </p>
            </section>

            <section>
              <h2>What we do not have yet</h2>
              <p>
                These limitations may affect whether Helm is the right fit for
                your requirements today.
              </p>
              <ul className="check-list">
                {gaps.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>What our free scan actually does</h2>
              <p>
                The scan checks public SPF, DMARC, MX, DNSSEC, MTA-STS, and
                TLS-RPT records; DKIM records under a defined set of common
                selectors; HTTPS reachability and certificate status; and a
                limited unauthenticated SMTP probe. It never logs into your
                systems, attempts exploitation, searches breach datasets, or
                looks for similar domain registrations. It is a useful
                starting signal, and it is not a penetration test.
              </p>
              <p>
                One thing worth knowing: a scan report has a shareable link
                containing a long random token, and anyone holding that link
                can read the report without signing in. That is deliberate,
                so you can forward a report to a colleague or your broker,
                but treat the link like an attachment rather than a logged-in
                page. Reports inside your portal account require sign-in.
              </p>
            </section>
          </div>
        </article>
      </Band>

      <CtaBand
        title={BOOK_CTA.title}
        sub={BOOK_CTA.sub}
        cta={BOOK_CTA.label}
        source="trust cta"
        mode="book"
      />
    </>
  );
}

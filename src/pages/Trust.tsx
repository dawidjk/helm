import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {BOOK_CTA} from './ctaCopy';
import {siteUrl} from '../lib/urls';

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
    does: '24/7 SOC-backed endpoint detection and response for Helm Watch',
    sees: 'Endpoint telemetry from protected devices',
  },
  {
    service: 'MailProtector',
    does: 'Managed email filtering for Helm Mail',
    sees: 'Message content and metadata for filtered mailboxes, once live',
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
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-readable">
            Trust and security, answered directly.
          </h1>
          <p className="sub reveal d2">
            We sell security, so it is fair for you to ask hard questions about
            how we protect our own systems and yours before you hand us access
            to either. This page answers those questions directly, without
            spin. Where something below reads as a gap, that is intentional:
            we would rather tell you where we are today than describe a
            company we are not yet.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <article className="article-body">
          <div className="observe">
            <section>
              <h2>Who we are</h2>
              <p>
                Helm Security is a New Jersey LLC, formed, with an EIN and a
                business bank account in place. We are two operators, not a
                large firm dressed up to look like one. Dawid Kluszczynski is
                VP, Product &amp; Delivery. Kelly Kluszczynski is VP, Growth
                &amp; Partnerships. That is the whole operating team today,
                and we say so plainly rather than implying otherwise. Material
                pricing, scope, legal, and service commitments require both
                executives to agree.
              </p>
            </section>

            <section>
              <h2>How we deliver, and who actually does the monitoring</h2>
              <p>
                Helm Security is a reseller and integrator, not the builder of
                the detection technology in front of your business. Detection
                and response capability lives with the platform vendors we
                resell and configure, not with an overnight desk we staff
                ourselves. For endpoint detection and response, that platform
                is Huntress. For email filtering, it is MailProtector. Helm
                Watch is EDR-only at launch. Helm Aware Managed uses Huntress
                for managed security awareness learning and phishing. We do
                not describe identity monitoring or SIEM as included.
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
                Card data never touches our systems: Stripe's own hosted
                fields handle payment details, and we store only a Stripe
                customer identifier. We do not store your email message
                content; Helm Mail reporting is built from aggregate daily
                counters, not message bodies. We do store scan findings and
                security alerts, since tracking your posture over time is the
                point of the service, along with the account records needed
                to run your organization (users, org details, billing
                status, and any scan or deployment requests you submit).
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
                We use magic-link sign-in: a one-time link by email, no
                password to steal, reuse, or leak. Sessions are tracked
                server side, and every admin page and action re-checks your
                role on the server before doing anything.
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
                We would rather list this plainly than have you find out the
                hard way.
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

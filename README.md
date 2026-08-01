# Helm marketing site

Static React site for `helmsecured.com`.

## Local development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## First-party conversion measurement

The site records four funnel steps in Helm's own portal database:

1. `scan_started`
2. `scan_completed`
3. `findings_call_selected`
4. `contact_submitted`

The marketing site sends the first, third, and fourth events to
`https://app.helmsecured.com/api/marketing/events`. The portal records scan
completion after the scanner returns a report. Set `VITE_MEASUREMENT_URL` only
when a local or preview site should use a different endpoint.

Measurement stores a random browser-tab journey ID, page path, source, referrer
host, and UTM fields. It does not store a name, email, company, form message,
scanned domain, IP address, user-agent string, advertising ID, or
cross-site cookie. The Turnstile-protected contact form sends those same
campaign fields to the portal's first-party `/api/contact` endpoint. The
portal validates the challenge and rate limit before delivering the message
through Resend.

Internal totals are visible at `/admin/marketing` in the client portal.
Conversion records are deleted after 12 months by the portal retention sweep
or its manual admin fallback.

## Public-form security

Set `VITE_TURNSTILE_SITE_KEY` to the public site key for a Cloudflare
Turnstile widget restricted to `helmsecured.com` and `app.helmsecured.com`.
The matching secret is configured only in the client portal. Local development
uses Cloudflare's official always-pass test site key when this variable is
unset; production does not.

`VITE_CONTACT_URL` may point previews or local builds at another portal origin.
Production defaults to `https://app.helmsecured.com/api/contact`.

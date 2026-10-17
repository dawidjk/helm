# Helm marketing site

Static React site for `helmsecured.com`.

## Static brand hero

The homepage, About, Trust, and Pricing use responsive static WebP backdrops
from `public/brand/`. The mobile source is selected at 640 pixels and below.
Industry pages retain their page-specific animated or illustrated backdrops.
Hero headings and forms remain live HTML rather than being baked into the
image.

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

## Consent-gated Meta remarketing

Set `VITE_META_PIXEL_ID` only after the production privacy-policy review and
Meta account setup are complete. With no ID, the Meta script, consent panel,
and Privacy choices footer control do not render.

When an ID is present, Meta's script still does not load until the visitor
selects **Allow remarketing**. A declined visitor receives only Helm's existing
first-party, tab-scoped measurement. Accepted visitors generate PageView,
ScanStarted, Schedule, and Contact events without form values, email addresses,
company names, messages, or scanned domains. A visitor can reopen Privacy
choices from the footer and stop future Meta events at any time.

## Public-form security

Set `VITE_TURNSTILE_SITE_KEY` to the public site key for a Cloudflare
Turnstile widget restricted to `helmsecured.com` and `app.helmsecured.com`.
The matching secret is configured only in the client portal. Local development
uses Cloudflare's official always-pass test site key when this variable is
unset; production does not.

`VITE_CONTACT_URL` may point previews or local builds at another portal origin.
Production defaults to `https://app.helmsecured.com/api/contact`.

## Consent-aware server measurement for booking clicks

This release adds a versioned Advertising choice for server-side Book a call click measurement. The browser release flag is explicitly approved after disclosure, native and hosted technical checks. Existing Advertising acceptance does not enable the new purpose; previous refusals remain refusals. Only a fresh matching choice and signed first-party server permission can authorize capture. Analytics behavior stays separate. No new public environment variable enables this feature.

The paired portal uses the existing `META_BOOKING_CAPI_ENABLED` flag and server-only credential settings. `META_BOOKING_CLICK_CAPI_ENABLED` is an abandoned draft name and is not an alias. The portal source approval and explicit production flag must both be enabled; setting the existing flag to false stops new capture. The event records a click, not a confirmed appointment.

# Hydration regression checks

Run `npm run build`, then `npm run test:hydration:bootstrap` and
`npm run test:hydration`. The browser suite uses Puppeteer Core and an installed
Chrome (`HELM_CHROME` overrides its path). `HELM_PUPPETEER_MODULE` can point to
an existing Puppeteer Core ESM module; the reviewed local run reused the Mac's
existing cached module without downloading a browser.

The suite starts a read-only gzip server on a random loopback port. It allows
only local GET assets. Every other request is intercepted: synthetic portal
navigations receive a local 204, and contact, scan, analytics and other external
requests are aborted. No production service is contacted. Test emails use
`example.invalid`; the personal-mailbox validation fixture is `probe@gmail.com`.
Do not remove this interception when running these tests.

Modes `routes`, `forms`, `interactions`, and `404` allow independent runs. The default
`all` runs all modes. `HELM_TEST_REPORT` selects the JSON report path, while
`HELM_TEST_ORIGIN` allows a separately served baseline build. Route cases use
fresh browser contexts and three concurrent workers; their timings are not
performance measurements. Interaction/form cases use held scripts to guarantee
the early action occurs before hydration, plus 4x CPU and a constrained network.

Every generated React document, including the standalone recovery page, is tested with all nine combinations of
unknown/declined/accepted consent and Auto/Light/Dark theme. The standalone
measurement bridge is not a React route and is excluded. Tests capture browser
page errors and React hydration console warnings, check original heading-node
retention and consent PageView counts, and deliberately corrupt one static
heading to prove recovery detection. A future-date case exercises a cached
build across New Year. Additional cases cover early DOM input/submit, invalid
and personal emails, duplicate submit attempts, focus/scroll preservation,
contact selection without bypassing Turnstile, menus and client navigation.
Missing product, resource and deep URLs use the generated noindex fallback;
its original DOM, recovery search, and early input/submit are also checked.

React exposes `onRecoverableError` on `hydrateRoot`. The installed
`vite-react-ssg` 0.9.1-beta.1 calls `hydrateRoot(container, app)` internally and
does not forward that option. These tests capture its default browser error
reporting instead; they do not patch dependencies, suppress hydration warnings,
or add production telemetry. React development builds can provide fuller
mismatch diagnostics, but a Vite CSR dev page alone does not test static HTML
hydration. This suite intentionally exercises the production SSG build.

Coverage is Chromium regression coverage. It does not establish mobile Safari
behavior, reproduce an unspecified physical phone freeze, run a real scan,
verify real Turnstile/backend acceptance, or guarantee the absence of every
possible hydration bug. Keep native reduced-motion testing separate; a prior
permission denial remains unresolved.

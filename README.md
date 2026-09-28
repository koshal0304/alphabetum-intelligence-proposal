# Intelligence, made clear

An interactive proposal for Alphabetum's **Multi-Tenant Marketing Intelligence Dashboard**. A single evolving 3D platform accompanies a concise scroll story, with an accessible requirements map and source links to both original PDFs.

## Run locally

Use Node.js 22.12+ (Node 25.4 was used during development).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

```sh
npm test
npm run build
npm run preview -- --port 5174
```

The deployable output is `dist/`. Upload that directory to a static host. No backend, environment variables, API keys, or build-time external services are required. The original proposal is marked confidential; choose the intended review audience when configuring hosting.

The project is in this workspace's root. No separate `proposal-experience/` directory is required.

## What is included

- Vite + React, React Three Fiber, drei, GSAP ScrollTrigger and Lenis.
- One persistent procedural platform scene that changes with the story.
- Tenant, role, provider, chart-view, architecture, risk, roadmap and investment interactions.
- A prominent requirements section and native dialog with source PDF links.
- Locally hosted Space Grotesk and DM Sans fonts; licenses in `public/fonts/`.
- Mobile/low-power and reduced-motion schematic fallback; explicit motion toggle.
- Downloadable original proposal and client request, and email-first contact links.

This is the proposal presentation. It does **not** implement the proposed SaaS backend, real tenant isolation, provider OAuth, live marketing data or an LLM service. Preview KPIs use `—`, and abstract charts are labeled illustrative.

## Content and source documents

- [Section-by-section PDF mapping and complete requirement crosswalk](docs/CONTENT-MAP.md)
- [Assumptions, missing content and source conflicts](docs/ASSUMPTIONS.md)
- [Verification results](docs/VERIFICATION.md)

All business facts come from the two supplied PDFs. The original files remain in the root; exact downloadable copies live in `public/proposal.pdf` and `public/client-request.pdf`. Source links use physical PDF pages, not the document's printed section numbers.

## Before client release

Supply the client name/logo, approved case-study evidence and any real preview data. Reconcile these source conflicts before treating the proposal as a fixed commitment:

- Next.js/AWS versus Angular/Azure for the dashboard product.
- Workstream pricing versus the stated implementation total.
- AI work-package duration and overall schedule.
- Cloud cost assumptions and historical backfill depth.

Maintenance fees, named team assignments, taxes, payment percentages, and kickoff date were not supplied. The site presents them as open items rather than inventing terms. The client's request prefers email during shortlisting; contact buttons open an email draft to Shivani Gupta and do not send anything automatically.

## File guide

| File | Purpose |
|---|---|
| `src/App.jsx` | Story, interactions, source links, navigation and accessible dialogs |
| `src/Scene.jsx` | Lazy-loaded procedural 3D scene and camera interpolation |
| `src/content.js` | Requirement answers, source data, roadmap and preview helpers |
| `src/style.css` | Responsive layout, type, colors and motion preferences |
| `index.html` | Immediately readable initial content before JavaScript loads |
| `tests/content.test.js` | Content, permissions, source and download integrity checks |

Change business copy in `src/content.js` and `src/App.jsx`, preserving the citation and placeholder labels. Do not substitute synthetic performance figures for the missing client dataset.

## Performance

The readable hero appears before the scene downloads. Desktop WebGL loads progressively; mobile, constrained devices and reduced motion retain a lightweight schematic and full story controls. No large models, HDRIs or remote font requests are needed. Production performance depends on hosting, compression, network and device; local results are recorded in `docs/VERIFICATION.md` rather than presented as a guaranteed load time.

## Implementation references

The scroll integration follows [GSAP ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) and the [Lenis integration guidance](https://github.com/darkroomengineering/lenis). These references inform website implementation only; business claims remain sourced to the PDFs.

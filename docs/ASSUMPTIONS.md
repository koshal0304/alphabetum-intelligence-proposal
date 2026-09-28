# Assumptions, missing content and decisions

## Presentation choices

- The website is an interactive proposal, not the functioning multi-tenant analytics product. No OAuth integration, secure tenant database, production dashboard, LLM service or backend is claimed to be implemented by this presentation.
- Its Vite/React/Three.js implementation follows the website brief. It does not settle the proposed dashboard product's frontend/cloud decision.
- Dark ink and pale lime, locally hosted display/body fonts, abstract procedural geometry and a text wordmark are creative presentation choices. No client brand guidelines were supplied.
- Tenant A and Tenant B are illustrative labels. Chart shapes illustrate UI behavior; KPI values stay blank (`—`) because the PDFs contain no marketing dataset. Switching preview tenants is not evidence of real database isolation.
- All source citations use physical PDF page numbers. The originals are preserved; downloadable copies are byte-identical.
- Source figures are displayed as planning estimates or targets. No new business statistics, package prices, conversion claims, credentials, case-study outcomes or performance guarantees are invented.
- Main contact is email because request page 8 asks to keep shortlist communication to email. The supplied CTO email is used for a draft; nothing is sent automatically.

## Decisions the supplied documents do not resolve

| Decision | Source evidence | Treatment on site |
|---|---|---|
| Dashboard frontend and cloud | Proposal 3–5, 10, 17–18: Next.js/AWS. Proposal 24 Q2/Q10: Angular/Azure | Shared NestJS/PostgreSQL/Redis architecture can be shown. Frontend/cloud marked for confirmation, with both alternatives sourced. |
| Implementation total versus components | Proposal 12 components total ₹35–48 L arithmetically; stated total is ₹40–65 L. Proposal 24 repeats ₹40–65 L, and ₹28–36 L without AI | Preserve quoted ranges and flag reconciliation. Do not invent a buffer or silently replace total. |
| AI duration | Proposal 18: 3–4 weeks, base weeks 14–16. Proposal 24 Q11: 4–6 week initial work package | Overall estimate remains 16–21 weeks; AI effort explicitly needs confirmation. |
| Infrastructure budget | Proposal 20 has AWS/USD estimates with an OpenAI API line included; proposal 24 gives Azure planning range of ₹1,500–4,000 per tenant/month excluding AI | Different bases are not compared as equivalent; cloud/capacity model needs confirmation. No currency conversion or live cost calculator. |
| Historical backfill | Proposal 18 integration acceptance mentions 30 days. Proposal 23 assumes 90 days and also asks how much history is required | Backfill depth remains to confirm. Do not imply unlimited historical recovery. |
| Tenant branding | Proposal 10 mentions client-branded reports; proposal 22 places white-label/custom branding in Phase 2 | Preview branding is illustrative and marked later scope. Phase 1 branding depth requires agreement. |
| AI and anomaly scope | Request 4 treats grounded insights as defining but allows later sequencing; proposal 22 places advanced anomaly detection and recommendations later | Grounded Q&A is seriously presented after core dashboard. Advanced anomaly detection/recommendations remain later scope. |
| Leads / ROI | Personas mention leads and ROI in request 2 / proposal 10, while ads/CRM are excluded from Phase 1 | Do not promise sourced CRM leads or paid-ad ROI in the initial preview; final KPI definitions and attribution need acceptance criteria. |
| Stack/runtime version details | Proposal lists specific dated framework/API/model versions | Site explains named architectural components without claiming current vendor specifications or silently updating contractual choices. |

## Missing content

| Missing item | Visible placeholder or delivery treatment |
|---|---|
| Client organization name and logo | `[Client name]` / “to be supplied”; no fabricated customer identity |
| Actual marketing data and approved dashboard definitions | KPI values `—`; “Illustrative preview — client data not supplied” |
| Case-study URLs, screenshots, customer references and verified results | Relevant written experience only; link/evidence marked to be supplied |
| Named delivery staff, biographies and availability | Roles as proposed; no invented individual profiles |
| Specific AI development tools and measured team/timeline effects | Marked not specified in proposal answers |
| Concrete past generated-backend platform project | Tradeoff view retained; specific experience evidence not supplied |
| Final agreed stack/cloud and regions | Decision to confirm |
| Confirmed provider permissions, developer app approvals and sandbox accounts | Discovery/dependency item; not presumed complete |
| Backfill depth, retention, initial tenant count and expected growth | Confirm during discovery/capacity planning |
| Accounts per tenant and per-account data volumes | The proposal's assumptions are not treated as accepted client constraints |
| Final KPI semantics, chart/export definitions and comparison formulas | To agree in acceptance criteria |
| Branding depth, billing hierarchy, languages and compliance requirements | To confirm before scope sign-off; no certification claims |
| Final implementation fee, taxes, payment percentages and kickoff date | Not supplied; no fabricated payment schedule |
| Maintenance retainers, monthly hours and final service levels | “To be scoped”; Essential/Standard/Growth descriptions from proposal 13 |
| Booking/calendar URL | No fake scheduler; email-first conversation / request call by email |
| Production domain and hosting credentials for this site | Static build is deployable; no external deployment performed |

## Verification boundaries

The site can be checked locally for rendering, interaction, responsive behavior, keyboard access, content/source integrity, static builds and initial load. A sub-three-second first meaningful content target depends on hosting, compression, cache state, device and network; local timing is not a production guarantee. The Three.js scene is progressively loaded and optional, so the core proposal remains readable without WebGL or with reduced motion.

The source PDFs are client-proposal material marked confidential. Share the build and documents through the client's intended review channel.

# Proposal → website content map

The two supplied PDFs are the only sources for business claims. Page references below use **physical PDF page numbers**, including the cover and contents pages. Section numbers printed inside the proposal are different from page numbers. Site copy paraphrases these sources; planning estimates, proposed controls, illustrative UI and unresolved decisions must remain distinguishable.

**Proposal:** `Multi-Tenant-Marketing-Intelligence-Dashboard.pdf`, 24 pages, September 2026, version 1.0.  
**Client request:** `Multi-Tenant-Dashboard-Proposal-Request.pdf`, 8 pages.

## Story map

| PDF page(s) | Site section | What is communicated | Interaction / important qualification |
|---|---|---|---|
| Proposal 1, 3; request 1–2 | Opening / vision | Multi-Tenant Marketing Intelligence Dashboard; unified marketing visibility; proposed by Alphabetum Private Limited | Client identity is a marked placeholder. Headline is editorial paraphrase, not a performance claim. |
| Request 1–2; proposal 3 | Their problem | Fragmented tools, manual report reconciliation, inconsistent terminology, difficult historical comparison, knowledge concentrated in individuals | Expanding detail explains the pain in the client's own scope. No invented hours saved or financial ROI. |
| Proposal 3–4; request 2–4 | Platform overview | A unified, stored marketing data platform designed for managers, CMOs, founders and agencies | One persistent procedural platform is a conceptual diagram of the proposed product. |
| Proposal 6–8, 14, 24 Q3; request 3–4 | Multi-tenancy | Organization → Account → Platform → Data; server-derived organization membership; PostgreSQL RLS, role checks and tenant-scoped jobs | Tenant A/B are illustrative placeholders. Roles: Admin, Manager, Viewer. Tenant theming is a **Phase 2** concept, per proposal 22. |
| Proposal 4, 9, 18; request 2–3 | Data flow | Meta, Instagram, LinkedIn, GA4 → connectors → normalization → database → API → UI | Source details and sync steps can expand. Scheduler: configurable 1–24 hours, default 6; manual sync included. Dashboard reads stored data. |
| Proposal 10, 18; request 2–3 | Dashboard preview | KPI overview, channel views, post performance, historical filtering, agency client switching | Interactive UI concept only. No supplied live KPI dataset: values are `—`, and chart shapes are explicitly illustrative with no measured axes or fabricated totals. |
| Proposal 4, 11, 18, 24 Q11; request 4 | Natural-language insights | Questions answered using tenant-scoped structured data; controlled queries, validation and grounded responses | Example question comes from request 4. Preview must not invent an answer. AI follows stable dashboard/data delivery. Timeline discrepancy remains visible. |
| Proposal 4–5, 7, 10, 15, 17, 24 Q2/Q9/Q10; request 3, 6–7 | Architecture and stack | NestJS/Node.js API, PostgreSQL, Redis-backed workers; independent service scaling | Next.js/AWS in architecture pages conflicts with Angular/Azure in final answers. Show an unresolved decision unless the user resolves it. This presentation's Vite/React stack is separate. |
| Proposal 6, 8, 14–16, 19, 21, 24 Q3/Q12; request 3–4, 7 | Security, scale and risk | Database policies, ownership checks, RBAC, encrypted tokens, negative isolation tests, token reconnect, retries and health visibility | These are **proposed controls**, not a security certification or evidence that the product already exists. Performance/availability figures are targets. |
| Proposal 18, 24 Q5/Q11; request 4, 6 | Delivery roadmap | Foundation → integrations → pipeline → dashboard → reliability → AI | Overall 16–21 calendar weeks; 16-week base schedule. Phase milestones expand. AI has differing duration estimates in proposal 18 and 24. |
| All request pages; proposal pages listed below | Your requirements, our answer | Traceable answers to product requirements and proposal questions | Prominent section and navigation entry. Each item has source references, status and relevant story location. A proposed answer is not a delivered feature. |
| Proposal 1, 24 Q1/Q4/Q8/Q9; request 5–7 | Team and relevant work | Dedicated engineering pod; Bilzee multi-tenant billing/CRM experience; relevant logistics data-platform work; human oversight of AI-assisted engineering | No invented case-study metrics, testimonials, portraits, years of experience or external project URLs. Logistics work is not described as a marketing-analytics equivalent. |
| Proposal 12–13, 20–21, 24 Q6/Q7/Q10; request 6–7 | Investment and ongoing support | ₹28–36 L core dashboard; ₹40–65 L dashboard + initial AI; milestone billing; scoped maintenance tiers | Estimates, not final quotes. Workstream arithmetic does not reconcile to the overall total. Cloud/API costs separate; maintenance prices unspecified. Infrastructure estimates use inconsistent bases. |
| Proposal 1, 24 contact; request 8 | Let's build this | Email Shivani Gupta, CTO, at `shivani@alphabetumtech.com`; phone `+91 9897577556`; Alphabetum website | Email-first CTA respects the client's shortlisting preference. A mailto link opens a draft; it does not send email. No invented booking URL. Full proposal download preserves the original PDF. |

## Complete requirement crosswalk

“Proposed” means covered by the written approach, not implemented in the presentation site as a working SaaS feature.

| Client requirement / question | Request PDF | Proposal answer | Site destination | Status / limits |
|---|---|---|---|---|
| Replace manual multi-platform collection and reconciliation | 1 | 3–4 | Problem / platform | Proposed |
| Marketing Manager, CMO, Business Owner and Agency personas | 2 | 3, 10, 18 | Platform / dashboard / tenants | Proposed; different persona views described |
| Simple, unified, historical, automated, eventually actionable | 2 | 3–4, 10–11 | Platform / pipeline / AI | Proposed; insights sequenced after core |
| Meta: followers, reach, impressions, engagement, post performance | 2 | 9, 18 | Pipeline / dashboard | Proposed; provider permissions must be confirmed |
| Instagram: followers, reach, impressions, profile visits, engagement, post performance | 2 | 9, 18 | Pipeline / dashboard | Proposed; Business/Creator access assumption on proposal 23 |
| LinkedIn: followers, impressions, clicks, reactions, shares, post performance | 3 | 9, 18–19 | Pipeline / dashboard | Proposed; API approvals are a risk |
| GA4: users, sessions, engagement rate, traffic sources, landing pages, device data | 3 | 9, 18 | Pipeline / dashboard | Proposed |
| Stored history; no live platform API call on every dashboard load | 3 | 3–4, 7, 9 | Platform / pipeline / architecture | Proposed; backfill depth needs confirmation |
| Central scheduler, 1–24h frequency, 6h default, manual sync | 3 | 18 | Pipeline | Proposed; Admin/Manager may sync |
| Check token → refresh if supported → call → validate → normalize → store → log | 3 | 4, 8–9, 18 | Pipeline / security | Proposed |
| OAuth, encrypted tokens, refresh where supported, clear reconnect path | 3 | 8, 14, 18–19 | Pipeline / security | Proposed; no claim that every provider supports refresh |
| Organizations, Users/roles, Connected Accounts, Daily Metrics, Content/Posts, Sync Logs | 3 | 7, 18 | Architecture / requirement details | Proposed |
| Admin manages organization/connections/users; Manager views + syncs; Viewer views | 3 | 8, 18 | Tenants | Proposed; preview controls demonstrate permissions only |
| Day-one organization isolation; no cross-customer access | 4 | 6, 14, 16, 24 Q3 | Tenants / security | Proposed RLS + authorization + tenant-scoped workers + negative tests |
| Natural-language answers grounded in stored structured data | 4 | 11, 18, 24 Q11 | AI | Proposed; costs, specialist effort and sequencing explained |
| Build priority: foundation, providers, pipeline, dashboard, reliability, AI | 4 | 3, 18 | Roadmap | Proposed; 16–21 week estimate |
| Monitoring, logs, retry, connection health | 4 | 9, 18–19, 21 | Security / roadmap | Proposed |
| Anomaly detection after core | 4 | 22 | AI / future scope | Advanced anomaly detection is Phase 2; exact initial scope needs confirmation |
| Ads, CRM, YouTube, Search Console excluded from Phase 1 | 5 | 22 | Pipeline / future scope | Explicit Phase 2; no email integration specified |
| End-to-end ownership and evidence of real multi-tenant work | 5 | 24 Q1/Q3/Q4 | Team / tenants | Written experience claim; independently reviewable case-study evidence absent |
| Q1: similar work and what was difficult | 6 | 24 Q1 | Team | Bilzee and logistics experience; external references/metrics absent |
| Q2: technology choices and reasons | 6 | 5, 24 Q2 | Architecture | **Confirm** conflicting frontend/cloud choices |
| Q3: concrete tenant isolation and production experience | 6 | 6, 24 Q1/Q3 | Tenants / team | Concrete proposed approach; evidence limited to supplied narrative |
| Q4: team roles, seniority, dedication | 6 | 24 Q4 | Team | Dedicated core recommended, UI/UX and delivery management part-time; individual names absent |
| Q5: phase-by-phase timeline | 6 | 18, 24 Q5/Q11 | Roadmap | 16–21 weeks; **confirm** AI package duration |
| Q6: phase-by-phase cost and commercial model | 6 | 12, 24 Q6 | Investment | Estimates and milestones; **confirm** workstream/total discrepancy |
| Q7: maintenance and scoping changes | 6–7 | 13, 21, 24 Q7 | Investment / maintenance | Essential/Standard/Growth; prices to be scoped; field and platform work assessed differently |
| Q8: AI coding tools and effects on team size/timeline | 7 | 24 Q8 | Team / requirement details | Process described; **not specified:** actual tool names and measured historical changes |
| Q9: generated backend experience and tradeoffs | 7 | 5, 24 Q9 | Architecture / requirement details | Tradeoffs described; **not specified:** concrete Supabase/Firebase/Xano case study |
| Q10: hosting and per-tenant infrastructure excluding AI | 7 | 20, 24 Q10 | Architecture / investment | Azure ₹1,500–4,000/tenant/month planning range excludes AI; AWS table has different assumptions and includes AI. **Confirm** final capacity/cloud model |
| Q11: AI expertise, stack, team, effort and MCP | 7 | 11, 18, 24 Q11 | AI / team / roadmap | 4–6 week initial work package in Q11; 15–25% of implementation effort; specialist pod. MCP optional. **Confirm** differing roadmap duration |
| Q12: risks and ill-defined areas | 7 | 19, 23, 24 Q12 | Security / requirements / open decisions | Provider approvals, historical availability, metric semantics, OAuth/rates, AI grounding, capacity and KPI scope |
| State assumptions | 8 | 23–24 | Open decisions / details | Explicit missing content and conflicts; see ASSUMPTIONS.md |
| Keep communication to email during shortlisting | 8 | Contact on 1, 24 | CTA | Email-first contact; no mandatory call scheduler |

## Financial source transcript

All amounts below are supplied figures, not a computed estimate created for the website.

| Workstream (proposal 12) | Fee in INR lakh |
|---|---:|
| Discovery & architecture | 2.0–2.5 |
| Multi-tenant foundation + auth + OAuth framework | 5.0–6.5 |
| Four platform integrations | 8.0–10.0 |
| Data pipeline + scheduler + normalization + reliability foundation | 5.5–7.0 |
| Dashboard UI + reporting APIs | 5.0–6.5 |
| Production hardening, QA, security/performance/UAT | 2.5–3.5 |
| Natural-language insights | 7.0–12.0 |
| **PDF's stated estimated total** | **40.0–65.0** |

Proposal 24 Q6 separately states **₹28–36 L** for the dashboard excluding AI and **₹40–65 L** for the complete described scope. The component ranges on page 12 add to ₹35–48 L; this is an arithmetic audit of the source, **not a replacement commercial quote**. No unexplained contingency has been added to reconcile it.

## Delivery source transcript

| Delivery phase (proposal 18) | Duration | Base schedule | Representative acceptance / deliverable |
|---|---|---|---|
| Foundation | 3 weeks | Weeks 1–3 | Organization/auth/roles; Tenant A cannot read Tenant B |
| Platform integrations | 3–4 weeks | Weeks 4–6 | Four providers, encrypted OAuth tokens, reconnect handling |
| Data pipeline | 2–3 weeks | Weeks 7–8 | Normalized daily metrics, configurable scheduling, retry/logging, manual sync |
| Dashboard UI | 3–4 weeks | Weeks 9–11 | Overview, channel/post views, filtering, connections, agency switcher |
| Reliability & hardening | 2–3 weeks | Weeks 12–13 | Monitoring, load/security testing, backups and tested restore |
| AI insights | 3–4 weeks | Weeks 14–16 | Validated tenant-scoped queries, grounded answers and cost controls |

These are base positions within a **16–21 calendar week** overall estimate, not separately added commitments. Page 24 Q11 gives **4–6 weeks** for an initial AI work package. Page 18 permits later completion through week 21 as dependencies and acceptance consume contingency. Keep both descriptions visible until reconciled.

## Material not promoted to headline claims

- Provider API versions, rate-limit numbers and model price tables are dated proposal assumptions, not verified current service specifications.
- Uptime, latency, recovery and AI accuracy figures are proposed targets, not measured production results.
- Maintenance tiers have no published prices in the source.
- Client name, logo, real metric dataset, case-study URLs, booking URL and start date are absent.
- The original proposal contains “Phase 2” both as a numbered delivery phase and as later product scope. The site uses descriptive phase names and “Later scope” to avoid conflating them.

export const sections = [
  ['hero', 'Introduction'], ['problem', 'The challenge'], ['solution', 'The platform'],
  ['tenancy', 'Multi-tenancy'], ['pipeline', 'Data flow'], ['dashboard', 'Dashboard'],
  ['insights', 'AI insights'], ['architecture', 'Architecture'], ['security', 'Trust & scale'],
  ['roadmap', 'Delivery'], ['requirements', 'Requirements'], ['team', 'Our team'],
  ['investment', 'Investment'], ['contact', 'Let’s build'],
]

export const platforms = {
  Meta: { short: 'f', metrics: ['Followers', 'Reach', 'Impressions', 'Engagement'], detail: 'Followers, reach, impressions, engagement and post-level performance.', trend: [44, 42, 48, 39, 52, 50, 64, 57, 65, 61, 76, 72] },
  Instagram: { short: '◎', metrics: ['Followers', 'Profile visits', 'Reach', 'Engagement'], detail: 'Followers, reach, impressions, profile visits, engagement and post performance.', trend: [30, 41, 37, 50, 42, 59, 55, 62, 60, 73, 66, 78] },
  LinkedIn: { short: 'in', metrics: ['Followers', 'Impressions', 'Clicks', 'Reactions'], detail: 'Followers, impressions, clicks, reactions, shares and post performance.', trend: [65, 55, 58, 49, 60, 51, 42, 56, 65, 58, 69, 73] },
  GA4: { short: '▥', metrics: ['Users', 'Sessions', 'Engagement rate', 'Traffic sources'], detail: 'Users, sessions, engagement rate, traffic sources, landing pages and device data.', trend: [25, 34, 45, 39, 57, 50, 67, 55, 71, 67, 79, 85] },
}

export const phases = [
  { name: 'Foundation', duration: '3 weeks', weeks: 'W01—03', milestone: 'An isolated foundation.', deliverable: 'Authentication, organizations, roles, tenant schema and OAuth framework.', acceptance: 'Tenant A cannot read Tenant B’s data; isolation tests pass.', page: 18 },
  { name: 'Integrations', duration: '3–4 weeks', weeks: 'W04—06', milestone: 'Four channels connected.', deliverable: 'Meta, Instagram, LinkedIn and GA4 connectors with encrypted tokens and reconnect paths.', acceptance: 'Provider data is fetched and normalized; expired tokens trigger a clear notification.', page: 18 },
  { name: 'Data pipeline', duration: '2–3 weeks', weeks: 'W07—08', milestone: 'History you can rely on.', deliverable: 'Scheduled sync, normalization, retries, sync logs and manual sync.', acceptance: 'Jobs follow account schedules; Admin and Manager can sync, Viewer cannot.', page: 18 },
  { name: 'Dashboard', duration: '3–4 weeks', weeks: 'W09—11', milestone: 'A clear view for every role.', deliverable: 'Overview, channel views, post performance, connections, settings and an agency client switcher.', acceptance: 'Date filtering works, users can compare channels and agency users can switch organizations.', page: 18 },
  { name: 'Reliability', duration: '2–3 weeks', weeks: 'W12—13', milestone: 'Ready for real operations.', deliverable: 'Monitoring, alerting, performance checks, security hardening and backup recovery.', acceptance: 'Recovery is tested and security/performance acceptance checks pass.', page: 18 },
  { name: 'AI insights', duration: '3–4 weeks*', weeks: 'W14—16', milestone: 'Answers grounded in data.', deliverable: 'Natural-language questions, constrained queries, validation, explanations and cost controls.', acceptance: 'Cross-tenant query attempts are blocked; insufficient data produces no invented answer.', page: 18 },
]

export const workstreams = [
  ['Discovery & architecture', '₹2.0–2.5 L'],
  ['Foundation, auth & OAuth', '₹5.0–6.5 L'],
  ['Four platform integrations', '₹8.0–10.0 L'],
  ['Pipeline, scheduling & reliability foundation', '₹5.5–7.0 L'],
  ['Dashboard UI & reporting APIs', '₹5.0–6.5 L'],
  ['Hardening, QA & UAT', '₹2.5–3.5 L'],
  ['Natural-language insights', '₹7.0–12.0 L'],
]

export const architecture = [
  { name: 'Experience', tech: 'Frontend · decision to confirm', detail: 'A simple dashboard with overview, channel, post, connection and agency views. The main proposal specifies Next.js; the final answers specify Angular. Final choice to confirm.', page: 24 },
  { name: 'Application', tech: 'NestJS / Node.js', detail: 'Domain services own authorization, organization membership, API access and metric definitions. Tenant identity comes from authenticated membership, never trusted browser input.', page: 24 },
  { name: 'Orchestration', tech: 'Redis + BullMQ', detail: 'Independent workers handle scheduled ingestion, token lifecycle, rate limits, retries and sync logs. Every job carries validated organization and connection context.', page: 9 },
  { name: 'Historical data', tech: 'PostgreSQL + RLS', detail: 'A relational source of truth for organizations, users, connected accounts, daily metrics, content/posts and sync logs. Row-level security backs up strict service scoping.', page: 7 },
]

export const requirementGroups = ['Product requirements', 'Proposal questions', 'Next steps']
export const requirements = [
  { id: 'personas', group: 0, title: 'A useful view for every decision maker', status: 'Proposed', answer: 'Marketing Managers: channel and post performance. CMOs: overview and channel comparison. Founders: a simple summary. Agencies: organization switching and client-specific dashboards. Lead/ROI definitions and data availability need discovery; CRM and ad data remain Phase 2.', request: 2, proposal: 10, section: 'dashboard' },
  { id: 'simple', group: 0, title: 'Simple, unified, historical and automated', status: 'Proposed', answer: 'One interface, stored normalized history and scheduled sync, designed for people without API expertise. The grounded insights layer follows stable core data.', request: 2, proposal: 3, section: 'solution' },
  { id: 'meta', group: 0, title: 'Meta / Facebook metrics', status: 'Proposed', answer: platforms.Meta.detail + ' Provider permissions and historical availability are validated during integration discovery.', request: 2, proposal: 18, section: 'pipeline' },
  { id: 'instagram', group: 0, title: 'Instagram metrics', status: 'Proposed', answer: platforms.Instagram.detail + ' Final metric definitions and provider access are acceptance decisions.', request: 2, proposal: 18, section: 'pipeline' },
  { id: 'linkedin', group: 0, title: 'LinkedIn metrics', status: 'Proposed', answer: platforms.LinkedIn.detail + ' Connector backoff accounts for provider rate limits.', request: 3, proposal: 18, section: 'pipeline' },
  { id: 'ga4', group: 0, title: 'Google Analytics 4 metrics', status: 'Proposed', answer: platforms.GA4.detail + ' Reporting dimensions are confirmed before the fixed quote.', request: 3, proposal: 18, section: 'dashboard' },
  { id: 'history', group: 0, title: 'Stored history; no API pull on page load', status: 'Proposed', answer: 'Connectors → normalization → database → dashboard API → UI. Dashboards read stored historical data; source API calls run in ingestion jobs.', request: 3, proposal: [4, 9], section: 'pipeline' },
  { id: 'sync', group: 0, title: 'Configurable and manual synchronization', status: 'Proposed', answer: 'A centralized scheduler supports 1–24 hour frequency, default 6 hours, plus manual sync for Admin and Manager. Jobs check tokens, refresh if supported, call the API, validate, normalize, store and log status.', request: 3, proposal: 18, section: 'pipeline' },
  { id: 'tokens', group: 0, title: 'The full OAuth and token lifecycle', status: 'Proposed', answer: 'OAuth where supported, encryption at rest, refresh where providers allow it, expiry detection and a visible reconnect path. The proposal specifies AES-256-GCM for tokens and TLS 1.3 in transit.', request: 3, proposal: 14, section: 'security' },
  { id: 'entities', group: 0, title: 'All six core data entities', status: 'Proposed', answer: 'Organizations; Users with roles; Connected Accounts; Daily Metrics; Content/Posts; Sync Logs. Each tenant-scoped entity belongs to the authenticated organization.', request: 3, proposal: 7, section: 'architecture' },
  { id: 'roles', group: 0, title: 'Admin, Manager and Viewer permissions', status: 'Proposed', answer: 'Admin manages the organization, users and connections and has full data access. Manager views data and triggers sync. Viewer has view-only access. Permission checks apply server-side.', request: 3, proposal: 8, section: 'tenancy' },
  { id: 'isolation', group: 0, title: 'Hard tenant isolation from day one', status: 'Proposed', answer: 'Organization → Account → Platform → Data. Server-derived membership, strict repository scoping, PostgreSQL RLS, tenant-scoped background workers and automated negative cross-tenant tests.', request: 4, proposal: 24, section: 'tenancy' },
  { id: 'grounded-ai', group: 0, title: 'Plain-language answers from real data', status: 'Proposed', answer: 'A defining product capability, sequenced after the core. Semantic metric validation → tenant-scoped query plan → controlled execution → result validation → grounded explanation. No answer when data is insufficient. AI timing differs between the roadmap and final Q11; confirm the work package.', request: 4, proposal: 24, section: 'insights' },
  { id: 'priority', group: 0, title: 'Your delivery priorities, in order', status: 'Proposed', answer: 'Foundation → four integrations → pipeline → dashboard → reliability → natural-language insights. Anomaly detection is a later roadmap feature. The six delivery phases are distinct from Phase 1 / Phase 2 product scope.', request: 4, proposal: 18, section: 'roadmap' },
  { id: 'reliability', group: 0, title: 'Monitoring, logs, retries and reconnect', status: 'Proposed', answer: 'Sync history and connection health make failures visible. Provider-specific throttling, retries, failed-job handling and alerts support operations. Recovery and performance are tested before production acceptance.', request: 4, proposal: 18, section: 'security' },
  { id: 'future', group: 0, title: 'Clear boundaries for Phase 2', status: 'Phase 2', answer: 'Ad platform data (Meta/Google/LinkedIn Ads), CRM/lead integrations, YouTube and Search Console are excluded from Phase 1. White-label branding, anomaly detection and advanced recommendations are later scope. Email integration is not specified in either document.', request: 5, proposal: 22, section: 'pipeline' },
  { id: 'q1', group: 1, title: '01 · Similar work and the hard parts', status: 'Proposed', answer: 'Bilzee: multi-tenant billing/CRM, organization/store separation, roles, configurable modules, reporting and invoicing. The difficult work included tenant-safe data access, business rules and reliable document generation. Logistics work is relevant to data platforms, not a direct marketing-analytics equivalent. Case-study links are not supplied.', request: 6, proposal: 24, section: 'team' },
  { id: 'q2', group: 1, title: '02 · Stack and why it fits', status: 'Confirm', answer: 'NestJS, PostgreSQL and Redis/worker processing are consistent. The main proposal says Next.js + AWS; final Q2/Q10 says Angular + Azure. Frontend and cloud must be reconciled. This presentation uses Vite/React; that does not decide the product stack.', request: 6, proposal: [5, 24], section: 'architecture' },
  { id: 'q3', group: 1, title: '03 · Concrete tenant isolation', status: 'Proposed', answer: 'Shared PostgreSQL with organization keys, strict service/repository scoping and row-level security. Authenticated membership determines tenant context. Workers validate ownership and negative tests attempt cross-tenant access. Production evidence beyond the described projects is not supplied.', request: 6, proposal: 24, section: 'tenancy' },
  { id: 'q4', group: 1, title: '04 · A dedicated delivery team', status: 'Proposed', answer: 'Dedicated core: one architect, one senior backend engineer, one backend/integration engineer, one senior frontend engineer and one QA/automation engineer. Part-time UX and delivery management. Named assignments are not supplied.', request: 6, proposal: 24, section: 'team' },
  { id: 'q5', group: 1, title: '05 · A realistic phased timeline', status: 'Confirm', answer: 'Approximately 16–21 calendar weeks, with a 16-week base schedule and contingency for approvals, data, UX, reliability and acceptance. Roadmap AI phase is 3–4 weeks; Q11 separately estimates a 4–6 week AI work package. Confirm the integrated schedule.', request: 6, proposal: [18, 24], section: 'roadmap' },
  { id: 'q6', group: 1, title: '06 · Cost and commercial model', status: 'Confirm', answer: 'Planning ranges: core dashboard excluding AI ₹28–36 L; dashboard plus initial AI ₹40–65 L. Agreed scope uses milestone-based fixed pricing, with a separately scoped AI package. The workstream rows do not reconcile to the stated total; final quote required.', request: 6, proposal: [12, 24], section: 'investment' },
  { id: 'q7', group: 1, title: '07 · Maintenance and change requests', status: 'Proposed', answer: 'Essential, Standard and Growth support models; prices to be scoped after traffic and support needs are known. New fields are impact-assessed across connector, storage, API and UI. New platforms are separate integration work packages. Cloud/API fees are separate.', request: 7, proposal: 13, section: 'investment' },
  { id: 'q8', group: 1, title: '08 · AI-assisted delivery and tools', status: 'Not specified', answer: 'The proposal describes AI-assisted generation, refactoring, tests, documentation and debugging with human architecture, security review and QA. Specific tool names and measured timeline/team-size changes over the last year are not supplied.', request: 7, proposal: 24, section: 'team' },
  { id: 'q9', group: 1, title: '09 · Generated-backend experience', status: 'Not specified', answer: 'The proposal prefers controlled domain services, connectors and workers, while allowing managed PostgreSQL. It discusses speed versus control for Supabase/Firebase/Xano, but does not supply a named delivered project on those platforms.', request: 7, proposal: 24, section: 'architecture' },
  { id: 'q10', group: 1, title: '10 · Cloud and per-tenant running cost', status: 'Confirm', answer: 'Final Q10 proposes Azure and approximately ₹1,500–4,000 per tenant/month as incremental shared infrastructure at small-to-moderate scale, excluding AI and major enterprise requirements. Page 20 uses AWS, a different USD cost basis and includes AI. Cloud, capacity assumptions and cost model need confirmation.', request: 7, proposal: [20, 24], section: 'investment' },
  { id: 'q11', group: 1, title: '11 · AI expertise, effort and tooling', status: 'Confirm', answer: 'Q11 proposes an application-controlled analytics assistant, one AI/backend engineer, one senior backend/data engineer and part-time architecture/QA for 4–6 weeks. MCP is optional. The roadmap instead shows 3–4 weeks. Named AI case studies and specialist assignments are not supplied.', request: 7, proposal: [18, 24], section: 'insights' },
  { id: 'q12', group: 1, title: '12 · Risks and undefined assumptions', status: 'Proposed', answer: 'Provider approvals, changing APIs, historical availability, metric semantics, OAuth, rate limits, data quality and AI grounding. Tenant/account counts, retention, sync volume and exact reporting acceptance criteria need confirmation.', request: 7, proposal: 24, section: 'security' },
  { id: 'assumptions', group: 2, title: 'State assumptions and unresolved inputs', status: 'Confirm', answer: 'Client identity, data and brand assets, approved scopes, history depth, tenant/account volumes, compliance and languages, resolved frontend/cloud/pricing, and named team evidence remain to confirm. The proposal’s backfill assumption differs from its acceptance example; history depth must be agreed before the final scope.', request: 8, proposal: [18, 23, 24], section: 'requirements' },
  { id: 'email-first', group: 2, title: 'Email-first while you shortlist', status: 'Proposed', answer: 'The client asks to keep communication to email while shortlisting, potentially over weeks to months. Contact Shivani Gupta at shivani@alphabetumtech.com. No booking URL was supplied, so the next action opens email.', request: 8, proposal: 24, section: 'contact' },
]

export function sourceHref(kind, page) {
  return `/${kind === 'request' ? 'client-request' : 'proposal'}.pdf#page=${page}`
}

export function chartPath(values, tenant, width = 560, height = 130) {
  // Abstract shapes only: these coordinates are never represented as client metrics.
  const points = tenant === 'B' ? values.map((value, i) => 100 - value + (i % 3) * 7) : values
  return points.map((value, i) => `${i ? 'L' : 'M'}${(i * width / (points.length - 1)).toFixed(1)},${(height - value * height / 100).toFixed(1)}`).join(' ')
}

export function permission(role, action) {
  if (action === 'view') return ['Admin', 'Manager', 'Viewer'].includes(role)
  if (action === 'sync') return ['Admin', 'Manager'].includes(role)
  if (action === 'manage') return role === 'Admin'
  return false
}

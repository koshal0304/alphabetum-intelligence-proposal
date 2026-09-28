import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { chartPath, permission, phases, requirements, sections, sourceHref, workstreams } from '../src/content.js'

test('requirement answers retain all twelve proposal questions and valid story destinations', () => {
  const ids = new Set(requirements.map(item => item.id))
  assert.equal(ids.size, requirements.length, 'requirement IDs must be unique')
  for (let i = 1; i <= 12; i++) assert.ok(ids.has(`q${i}`), `missing question ${i}`)
  for (const id of ['meta', 'instagram', 'linkedin', 'ga4', 'history', 'tokens', 'sync', 'entities', 'roles', 'isolation', 'grounded-ai', 'future', 'email-first']) assert.ok(ids.has(id), `missing material requirement ${id}`)
  for (const item of requirements) {
    assert.ok(sections.some(([id]) => item.section === id), `${item.id} links to a missing chapter`)
    assert.ok(item.answer.trim().length > 0)
    for (const page of [item.proposal].flat()) assert.ok(Number.isInteger(page) && page >= 1 && page <= 24, `${item.id}: invalid proposal page`)
    for (const page of [item.request].flat()) assert.ok(Number.isInteger(page) && page >= 1 && page <= 8, `${item.id}: invalid request page`)
    assert.ok(['Proposed', 'Phase 2', 'Confirm', 'Not specified'].includes(item.status), 'do not imply implementation is delivered')
  }
})

test('permission preview preserves the client role boundary and denies unknown inputs', () => {
  const expected = { Admin: [true, true, true], Manager: [true, true, false], Viewer: [true, false, false] }
  for (const [role, permissions] of Object.entries(expected)) {
    assert.deepEqual(['view', 'sync', 'manage'].map(action => permission(role, action)), permissions)
  }
  assert.equal(permission('Unknown', 'view'), false)
  assert.equal(permission('Admin', 'unknown'), false)
})

test('abstract tenant charts differ without producing invalid SVG coordinates', () => {
  const values = [22, 46, 35, 62]
  const a = chartPath(values, 'A'), b = chartPath(values, 'B')
  assert.notEqual(a, b)
  assert.ok(a.startsWith('M0.0,'))
  assert.ok(a.includes('L560.0,'))
  assert.doesNotMatch(a + b, /NaN|Infinity|undefined/)
  assert.deepEqual(values, [22, 46, 35, 62], 'tenant switch must not mutate source geometry')
})

test('supplied commercial ranges and phased order are preserved', () => {
  assert.deepEqual(workstreams.map(([, amount]) => amount), ['₹2.0–2.5 L', '₹5.0–6.5 L', '₹8.0–10.0 L', '₹5.5–7.0 L', '₹5.0–6.5 L', '₹2.5–3.5 L', '₹7.0–12.0 L'])
  assert.deepEqual(phases.map(p => p.name), ['Foundation', 'Integrations', 'Data pipeline', 'Dashboard', 'Reliability', 'AI insights'])
  assert.match(requirements.find(r => r.id === 'q6').answer, /do not reconcile/)
  assert.match(requirements.find(r => r.id === 'q5').answer, /4–6/)
  assert.match(requirements.find(r => r.id === 'q2').answer, /Angular.*Azure/)
})

test('PDF downloads are byte-identical originals and source links use physical pages', () => {
  const hash = path => createHash('sha256').update(readFileSync(new URL(path, import.meta.url))).digest('hex')
  assert.equal(hash('../public/proposal.pdf'), hash('../Multi-Tenant-Marketing-Intelligence-Dashboard.pdf'))
  assert.equal(hash('../public/client-request.pdf'), hash('../Multi-Tenant-Dashboard-Proposal-Request.pdf'))
  assert.equal(sourceHref('proposal', 24), '/proposal.pdf#page=24')
  assert.equal(sourceHref('request', 8), '/client-request.pdf#page=8')
})

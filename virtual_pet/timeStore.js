const fs = require('fs').promises;
const path = require('path');

function nowMs() {
  return Date.now();
}

function nowISO() {
  return new Date().toISOString();
}

function formatMs(ms, locale = 'en-US', opts = {}) {
  return new Intl.DateTimeFormat(locale, Object.assign({ dateStyle: 'short', timeStyle: 'medium' }, opts)).format(new Date(ms));
}

async function readState(filePath) {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    if (err && err.code === 'ENOENT') return null;
    throw err;
  }
}

async function writeState(filePath, state) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(state, null, 2), 'utf8');
}

function isValidTimestamp(v) {
  return typeof v === 'number' && Number.isFinite(v) && v > 0;
}

function ensureLastUpdated(state) {
  if (!state) state = {};
  if (!isValidTimestamp(state.lastUpdated)) state.lastUpdated = nowMs();
  return state;
}

/**
 * applyElapsed(state, applyFn, now)
 * - state: object that contains lastUpdated (ms)
 * - applyFn: function(state, elapsedMs) -> mutates state based on elapsed
 * - now (optional): numeric now in ms
 * Returns the updated state (mutated) and updates state.lastUpdated = now
 */
function applyElapsed(state, applyFn, now) {
  const nowMsVal = typeof now === 'number' ? now : nowMs();
  if (!isValidTimestamp(state.lastUpdated)) state.lastUpdated = nowMsVal;
  const elapsedMs = Math.max(0, nowMsVal - state.lastUpdated);
  if (elapsedMs > 0) {
    applyFn(state, elapsedMs);
  }
  state.lastUpdated = nowMsVal;
  return state;
}

module.exports = {
  nowMs,
  nowISO,
  formatMs,
  readState,
  writeState,
  ensureLastUpdated,
  applyElapsed,
};

/* global React */
const { useState } = React;

// ─── Map slot — upload your own image to assets/map.png ────────
// To use your own art: place a PNG/JPG at `assets/map.png` (any aspect ratio).
// While missing, a clear "drop your map here" placeholder shows in its place.
const MapSketch = ({ width = 360, height = 200, showLabels = true, dense = false }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        background: failed ?
        'repeating-linear-gradient(45deg, transparent 0 10px, rgba(20,35,58,0.06) 10px 11px), rgba(46,111,142,0.06)' :
        'rgba(46,111,142,0.04)',
        border: failed ? '1.25px dashed #14233a' : '1.25px solid #14233a',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {!failed &&
      <img
        src="assets/map.png"
        alt="India ↔ Europe trade map"
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      }
      {failed &&
      <div style={{ textAlign: 'center', padding: 16, color: '#14233a' }}>
          <div style={{ fontFamily: 'Caveat, cursive', fontSize: 26, lineHeight: 1.1, marginBottom: 6 }}>
            Drop your map here
          </div>
          <div style={{ fontFamily: 'Special Elite, monospace', fontSize: 10, letterSpacing: 1.5, color: '#4a5468' }}>
            UPLOAD TO &nbsp;<span style={{ color: '#2e6f8e' }}>assets/map.png</span>
          </div>
          {showLabels &&
        <div style={{ fontFamily: 'Special Elite, monospace', fontSize: 9, letterSpacing: 1.5, color: '#8a91a0', marginTop: 10 }}>
              EUROPE&nbsp;&nbsp;·&nbsp;·&nbsp;·&nbsp;&nbsp;INDIA
            </div>
        }
        </div>
      }
    </div>);

};


// ─── Nav ───────────────────────────────────────────────────────
const WFNav = ({ active = 'Home' }) =>
<div className="wf-nav">
    <div className="wf-logo" style={{ height: "21px", fontSize: "41px", fontWeight: "400", textAlign: "left" }}>POLYWEAVE</div>
    <div className="wf-nav-links">
      {['Home', 'About', 'Services', 'Contact'].map((l) =>
    <span key={l} style={{ color: l === active ? 'var(--ink)' : undefined, borderBottom: l === active ? '1.5px solid var(--ink)' : 'none', paddingBottom: 2 }}>{l}</span>
    )}
    </div>
  </div>;


// ─── Sticky form rail ──────────────────────────────────────────
const StickyForm = () =>
<div className="sticky-rail sketch-box" style={{ width: "308px", height: "298px" }}>
    <div className="tag" style={{ marginBottom: 8 }}>STICKY · ALWAYS VISIBLE</div>
    <div className="hwhead" style={{ fontSize: 22, lineHeight: 1, marginBottom: 10 }}>Send your<br />current price.</div>
    <div className="field" style={{ height: "32px" }}>your.email@co.eu</div>
    <div className="field" style={{ height: "32px" }}>product / item</div>
    <div className="field" style={{ height: "24px" }}>current price (€/kg)</div>
    <button className="btn sea" style={{ width: '100%', justifyContent: 'center', marginTop: 6, gap: "0px", height: "56px" }}>SEND PRICE →</button>
    <div style={{ fontFamily: 'Special Elite, monospace', fontSize: 9, color: 'var(--ink-faint)', marginTop: 8, textAlign: 'center', letterSpacing: 0.5 }}>or [ book a call ]</div>
  </div>;


// ─── Footer ────────────────────────────────────────────────────
const WFFoot = () =>
<div className="wf-foot">
    <div>
      <div className="wf-logo" style={{ fontSize: 14, marginBottom: 8 }}>POLYWEAVE</div>
      <div style={{ fontFamily: 'Caveat, cursive', fontSize: 18, color: 'var(--ink)', lineHeight: 1.1 }}>
        Sourcing from India,<br />made clearer.
      </div>
    </div>
    <div>
      <h5>SITE</h5>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
    <div>
      <h5>SOURCING</h5>
      <ul>
        <li>HDPE Twine Supplier India</li>
        <li>Fishing Net Manufacturers India</li>
        <li>Nylon Net Supplier India</li>
        <li>Rope Suppliers India</li>
        <li>Jute Yarn Exporters India</li>
      </ul>
    </div>
    <div>
      <h5>CONTACT</h5>
      <ul>
        <li>ajay@polyweave.net</li>
        <li>India · Europe</li>
        <li style={{ marginTop: 12, fontFamily: 'Caveat, cursive', fontSize: 16, color: 'var(--ink)' }}>send your price →</li>
      </ul>
    </div>
  </div>;


// ─── Annotation (margin note) ──────────────────────────────────
const Note = ({ children, style }) =>
<div className="note" style={{ ...style }}>{children}</div>;


// ─── Section heading w/ tag ────────────────────────────────────
const SectionTag = ({ num, label }) =>
<div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
    <span className="tag">{num}</span>
    <span className="tag" style={{ color: 'var(--ink)' }}>{label}</span>
    <div style={{ flex: 1, borderTop: '1.25px dashed var(--ink-soft)', marginLeft: 8 }} />
  </div>;


Object.assign(window, { MapSketch, WFNav, StickyForm, WFFoot, Note, SectionTag });
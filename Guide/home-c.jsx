/* global React, MapSketch, WFNav, StickyForm, WFFoot, Note, SectionTag */

const HomeC = ({ showSticky = true, showMap = true, showProof = true }) => (
  <div className="wf" style={{ width: 1200, minHeight: 2400 }}>
    <WFNav active="Home" />

    {showSticky && <StickyForm />}

    {/* HERO — numbers-led: huge price-delta as the visual anchor */}
    <section style={{ padding: '64px 80px 40px' }}>
      <div className="tag" style={{ marginBottom: 16 }}>01 / HERO · NUMBERS-LED · PRICE DELTA</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end' }}>
        <div>
          <div className="tag" style={{ marginBottom: 12 }}>SOURCING · INDIA → EUROPE</div>
          <h1 className="hwhead" style={{ fontSize: 76, margin: '0 0 22px', lineHeight: 0.95 }}>
            You're probably<br /><span className="squiggle">overpaying</span><br />for your imports.
          </h1>
          <p className="wf-body" style={{ fontSize: 20, color: 'var(--ink-soft)', maxWidth: 460, lineHeight: 1.4 }}>
            We help companies source from India at better prices, with less risk.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <Note style={{ position: 'absolute', right: 0, top: -42, transform: 'rotate(2deg)', maxWidth: 200 }}>
            ← number does the<br />heavy lifting
          </Note>
          <div className="sketch-box" style={{ padding: 28, background: 'rgba(255,255,255,0.6)' }}>
            <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 1 }}>TYPICAL PRICE DELTA · EU vs IN</div>
            <div className="hwhead" style={{ fontSize: 140, lineHeight: 1, color: 'var(--sea)' }}>
              −22<span style={{ fontSize: 80 }}>%</span>
            </div>
            <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 1, marginTop: 4 }}>
              ON RECENT HDPE TWINE QUOTE · ILLUSTRATIVE
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 28, alignItems: 'center' }}>
        <button className="btn">SEND YOUR PRICE →</button>
        <button className="btn ghost">[ book a call ]</button>
        <span className="wf-sans" style={{ fontSize: 12, color: 'var(--ink-soft)', marginLeft: 8 }}>
          send us your price. we'll tell you if it can be done better.
        </span>
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* MARKET REALITY — three big numbers as anchors */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="02" label="MARKET REALITY" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 16 }}>
        {[
          ['↑', 'Europe', 'Costs keep rising. Labour and ops thinning the margin.'],
          ['?', 'China', 'Less predictable than it used to be. Quality wobbles.'],
          ['→', 'India', 'The natural shift. The hard part is who to trust.'],
        ].map(([n, k, p], i) => (
          <div key={i}>
            <div className="hwhead" style={{ fontSize: 96, lineHeight: 0.9, color: i === 2 ? 'var(--sea)' : 'var(--ink)' }}>{n}</div>
            <div className="hwhead" style={{ fontSize: 30, marginTop: 8 }}>{k}</div>
            <div className="wf-body" style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 6, lineHeight: 1.4 }}>{p}</div>
          </div>
        ))}
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    {/* WHAT POLYWEAVE DOES — quiet single statement + map mini */}
    <section style={{ padding: '56px 80px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <SectionTag num="03" label="WHAT WE DO" />
        <div className="hwhead" style={{ fontSize: 48, lineHeight: 1.05 }}>
          We help companies import from India without the usual issues.
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 22, fontFamily: 'Caveat, cursive', fontSize: 22, color: 'var(--ink-soft)' }}>
          <span>· no guesswork</span>
          <span>· no random suppliers</span>
          <span>· no surprises</span>
        </div>
      </div>
      <div className="sketch-box dashed" style={{ padding: 18 }}>
        {showMap ? <MapSketch width={340} height={180} dense={true} /> : <div className="ph" style={{ height: 180 }}>map</div>}
        <div className="wf-sans" style={{ fontSize: 10, letterSpacing: 1, color: 'var(--ink-soft)', marginTop: 6 }}>FIG.01 · ROUTE</div>
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* HOW IT WORKS — 4 numbered cards */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="04" label="HOW IT WORKS" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 16 }}>
        {[
          ['You share your product or current price.', '~5 min'],
          ['We find the right manufacturer in India.', '~1 wk'],
          ['We handle negotiation and alignment.', '~2 wk'],
          ['You get a better option.', 'decide'],
        ].map(([t, d], i) => (
          <div key={i} className="sketch-box" style={{ padding: 20, minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="numdot" style={{ marginBottom: 14 }}>{i + 1}</div>
              <div className="wf-body" style={{ fontSize: 17, lineHeight: 1.35 }}>{t}</div>
            </div>
            <div className="wf-sans" style={{ fontSize: 11, color: 'var(--sea)', letterSpacing: 1 }}>{d}</div>
          </div>
        ))}
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    {/* PRODUCT AREAS — table-like list with quiet numbers */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="05" label="WHAT WE COMMONLY WORK WITH" />
      <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 80px', gap: 0, marginTop: 16 }}>
        <div className="wf-sans" style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: 1, padding: '10px 0', borderBottom: '1.5px solid var(--ink)' }}>NO.</div>
        <div className="wf-sans" style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: 1, padding: '10px 0', borderBottom: '1.5px solid var(--ink)' }}>PRODUCT</div>
        <div className="wf-sans" style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: 1, padding: '10px 0', borderBottom: '1.5px solid var(--ink)' }}>NOTE</div>
        <div className="wf-sans" style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: 1, padding: '10px 0', borderBottom: '1.5px solid var(--ink)', textAlign: 'right' }}>READ</div>
        {[
          ['HDPE Twine', 'Coreless, fishing-net grade.'],
          ['Fishing Nets', 'PE and nylon, custom spec.'],
          ['Nylon Nets', 'Mono and multi filament.'],
          ['Ropes', 'Polysteel, PP, marine.'],
          ['Jute Yarn', 'Established export mills.'],
        ].map(([n, note], i) => (
          <React.Fragment key={i}>
            <div style={{ padding: '18px 0', borderBottom: '1px dashed var(--ink-soft)' }} className="wf-sans">0{i + 1}</div>
            <div style={{ padding: '14px 0', borderBottom: '1px dashed var(--ink-soft)' }} className="hwhead" >{<span style={{ fontSize: 30 }}>{n}</span>}</div>
            <div style={{ padding: '20px 0', borderBottom: '1px dashed var(--ink-soft)' }} className="wf-body">{note}</div>
            <div style={{ padding: '20px 0', borderBottom: '1px dashed var(--ink-soft)', textAlign: 'right' }} className="wf-sans" >→</div>
          </React.Fragment>
        ))}
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* EXAMPLE — single understated card with two numbers */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="06" label="A SIMPLE EXAMPLE" />
      <div className="sketch-box" style={{ padding: 32, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }}>
        <p className="wf-body" style={{ fontSize: 19, lineHeight: 1.5, margin: 0 }}>
          A company we worked with was sourcing HDPE twine from Europe.<br /><br />
          We rebuilt the same product through India. Lower cost, stable supply, no compromise on performance.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'end' }}>
          <div>
            <div className="wf-sans" style={{ fontSize: 10, letterSpacing: 1, color: 'var(--ink-soft)' }}>BEFORE</div>
            <div className="hwhead" style={{ fontSize: 56, color: 'var(--ink)', lineHeight: 1 }}>€X</div>
          </div>
          <div>
            <div className="wf-sans" style={{ fontSize: 10, letterSpacing: 1, color: 'var(--sea)' }}>AFTER</div>
            <div className="hwhead" style={{ fontSize: 56, color: 'var(--sea)', lineHeight: 1 }}>€X−</div>
          </div>
        </div>
      </div>
    </section>

    {showProof && (
      <>
        <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />
        <section style={{ padding: '56px 80px' }}>
          <SectionTag num="07" label="BUILT THROUGH REAL TRADE, NOT THEORY" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 12 }}>
            {[
              ['12+', 'Containers delivered across Europe'],
              ['€00s of K', 'In trade handled'],
              ['6', 'Countries served'],
            ].map(([k, v], i) => (
              <div key={i} style={{ borderTop: '2px solid var(--ink)', paddingTop: 14 }}>
                <div className="hwhead" style={{ fontSize: 72, lineHeight: 0.9, color: 'var(--sea)' }}>{k}</div>
                <div className="wf-body" style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 8 }}>{v}</div>
              </div>
            ))}
          </div>
          <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 14, letterSpacing: 0.5 }}>
            * placeholder figures — confirm with founder before launch
          </div>
        </section>
      </>
    )}

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* FINAL CTA */}
    <section style={{ padding: '72px 80px 56px' }}>
      <div className="hwhead" style={{ fontSize: 64, lineHeight: 1, marginBottom: 14 }}>
        Already working<br />with a supplier?
      </div>
      <p className="wf-body" style={{ fontSize: 22, color: 'var(--ink-soft)', maxWidth: 560 }}>
        Send us your current price. We'll tell you what's possible.
      </p>
      <button className="btn sea" style={{ marginTop: 24, fontSize: 14, padding: '14px 22px' }}>SEND YOUR PRICE →</button>
    </section>

    <WFFoot />
  </div>
);

window.HomeC = HomeC;

/* global React, MapSketch, WFNav, StickyForm, WFFoot, Note, SectionTag */

const HomeB = ({ showSticky = true, showMap = true, showProof = true }) => (
  <div className="wf" style={{ width: 1200, minHeight: 2400 }}>
    <WFNav active="Home" />

    {showSticky && <StickyForm />}

    {/* HERO — map-led, two columns: text + big map */}
    <section style={{ padding: '64px 80px 40px' }}>
      <div className="tag" style={{ marginBottom: 16 }}>01 / HERO · MAP-LED · INDIA ↔ EUROPE</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div className="tag" style={{ marginBottom: 12 }}>SOURCING · INDIA → EUROPE</div>
          <h1 className="hwhead" style={{ fontSize: 72, margin: '0 0 22px', lineHeight: 0.95 }}>
            You're probably<br />overpaying<br />for your imports.
          </h1>
          <p className="wf-body" style={{ fontSize: 20, color: 'var(--ink-soft)', lineHeight: 1.4, maxWidth: 460 }}>
            We help companies source from India at better prices, with less risk.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <button className="btn sea">SEND YOUR PRICE →</button>
            <button className="btn ghost">[ book a call ]</button>
          </div>
        </div>

        <div className="sketch-box" style={{ padding: 24, position: 'relative', background: 'rgba(255,255,255,0.5)' }}>
          <Note style={{ position: 'absolute', top: -36, right: 0, transform: 'rotate(2deg)' }}>
            big subtle map.<br />sets context fast.
          </Note>
          {showMap ? (
            <MapSketch width={460} height={260} dense={true} />
          ) : (
            <div className="ph" style={{ height: 260 }}>[ map placeholder · india ↔ europe ]</div>
          )}
          <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 1, marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span>FIG.01 — TRADE BRIDGE</span>
            <span>EU · IN</span>
          </div>
        </div>
      </div>

      <div className="wf-sans" style={{ fontSize: 13, marginTop: 36, color: 'var(--ink-soft)', maxWidth: 700, lineHeight: 1.5 }}>
        If you already have a supplier, send us your price. We'll tell you if it can be done better.
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* MARKET REALITY — vertical list, paired with map dots */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="02" label="MARKET REALITY" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          {[
            ['Europe is getting expensive.', 'Local labour and operations keep climbing.'],
            ['China is less predictable.', 'Quality and lead times are no longer easy.'],
            ['India is the natural shift.', 'Manufacturing depth is real. The hard part is trust.'],
          ].map(([h, p], i) => (
            <div key={i} style={{ borderTop: '1.5px solid var(--ink)', padding: '18px 0' }}>
              <div className="hwhead" style={{ fontSize: 28 }}>{h}</div>
              <div className="wf-body" style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 4 }}>{p}</div>
            </div>
          ))}
          <div style={{ borderTop: '1.5px solid var(--ink)' }} />
        </div>
        <div className="sketch-box dashed" style={{ padding: 22 }}>
          <div className="tag" style={{ marginBottom: 10 }}>FIG.02 — WHERE BUYERS ARE LOOKING</div>
          {showMap ? <MapSketch width={420} height={220} dense={true} /> : <div className="ph" style={{ height: 220 }}>map</div>}
          <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 8, lineHeight: 1.5 }}>
            ES · IT · PT · DE · FR · NO →← IN
          </div>
        </div>
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    {/* WHAT POLYWEAVE DOES */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="03" label="WHAT WE DO" />
      <div className="hwhead" style={{ fontSize: 56, lineHeight: 1.05, maxWidth: 760 }}>
        We sit between the two markets, and we know both.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 36 }}>
        {['No guesswork.', 'No random suppliers.', 'No surprises.', 'Just clear sourcing.'].map((x, i) => (
          <div key={i} className="sketch-box" style={{ padding: 16, fontFamily: 'Caveat, cursive', fontSize: 22, lineHeight: 1.1 }}>{x}</div>
        ))}
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* HOW IT WORKS — 4 cards with mini map progression */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="04" label="HOW IT WORKS" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 16 }}>
        {[
          ['You share your product or price.', 'YOU →'],
          ['We find the right manufacturer.', '→ INDIA'],
          ['We handle negotiation + alignment.', '↔'],
          ['You get a better option.', '← YOU'],
        ].map(([t, marker], i) => (
          <div key={i} className="sketch-box" style={{ padding: 20, minHeight: 200 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div className="numdot">{i + 1}</div>
              <div className="wf-sans" style={{ fontSize: 11, color: 'var(--sea)', letterSpacing: 1 }}>{marker}</div>
            </div>
            <div className="wf-body" style={{ fontSize: 17, lineHeight: 1.35 }}>{t}</div>
          </div>
        ))}
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    {/* PRODUCT AREAS — grid with sketchy material thumbs */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="05" label="WHAT WE COMMONLY WORK WITH" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginTop: 16 }}>
        {[
          ['HDPE Twine', 'twine macro'],
          ['Fishing Nets', 'net texture'],
          ['Nylon Nets', 'mesh detail'],
          ['Ropes', 'rope strand'],
          ['Jute Yarn', 'fibre close-up'],
        ].map(([n, ph], i) => (
          <div key={i}>
            <div className="ph sea" style={{ height: 120, marginBottom: 8 }}>[ {ph} ]</div>
            <div className="hwhead" style={{ fontSize: 22 }}>{n}</div>
            <div className="wf-sans" style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: 1 }}>READ →</div>
          </div>
        ))}
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* EXAMPLE */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="06" label="A SIMPLE EXAMPLE" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, alignItems: 'center', marginTop: 12 }}>
        <div className="sketch-box" style={{ padding: 22 }}>
          <div className="tag">BEFORE</div>
          <div className="hwhead" style={{ fontSize: 28, marginTop: 6 }}>HDPE twine, sourced in Europe.</div>
          <div className="wf-body" style={{ color: 'var(--ink-soft)', marginTop: 8 }}>Higher cost. Familiar terms.</div>
        </div>
        <div style={{ textAlign: 'center', fontFamily: 'Caveat, cursive', fontSize: 48, color: 'var(--sea)' }}>→</div>
        <div className="sketch-box" style={{ padding: 22, background: 'rgba(46,111,142,0.05)' }}>
          <div className="tag" style={{ color: 'var(--sea)' }}>AFTER</div>
          <div className="hwhead" style={{ fontSize: 28, marginTop: 6 }}>Same product, rebuilt through India.</div>
          <div className="wf-body" style={{ color: 'var(--ink-soft)', marginTop: 8 }}>Lower cost. Stable supply.</div>
        </div>
      </div>
    </section>

    {showProof && (
      <>
        <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />
        <section style={{ padding: '56px 80px' }}>
          <SectionTag num="07" label="BUILT THROUGH REAL TRADE" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 12 }}>
            {[
              ['Containers', 'delivered across Europe'],
              ['Hundreds of thousands', 'in trade handled'],
              ['Trusted relationships', 'on both sides'],
            ].map(([k, v], i) => (
              <div key={i} className="sketch-box" style={{ padding: 22 }}>
                <div className="hwhead" style={{ fontSize: 32, lineHeight: 1 }}>{k}</div>
                <div className="wf-body" style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 6 }}>{v}</div>
              </div>
            ))}
          </div>
        </section>
      </>
    )}

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* FINAL CTA */}
    <section style={{ padding: '72px 80px 56px', background: 'rgba(46,111,142,0.06)', borderTop: '1.5px solid var(--ink)' }}>
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

window.HomeB = HomeB;

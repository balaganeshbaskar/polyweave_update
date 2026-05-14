/* global React, MapSketch, WFNav, StickyForm, WFFoot, Note, SectionTag */

const HomeA = ({ showSticky = true, showMap = true, showProof = true }) =>
<div className="wf" style={{ width: 1200, minHeight: 3750, background: '#f7f4ee' }}>
    <WFNav active="Home" />

    {showSticky && <StickyForm />}

    {/* HERO — beige with navy block + sea-blue word */}
    <section style={{ padding: '80px 80px 60px', maxWidth: 880, position: 'relative' }}>
      <div className="tag" style={{ marginBottom: 24 }}>01 / HERO · EDITORIAL TYPE-LED</div>
      <Note style={{ position: 'absolute', right: 290, top: 110, transform: 'rotate(-3deg)', maxWidth: 180 }}>
        ← color-blocked word.<br />carries the eye.
      </Note>
      <h1 className="hwhead" style={{ fontSize: 84, margin: '0 0 28px' }}>
        You're probably<br />
        <span style={{
        background: '#14233a',
        color: '#f7f4ee',
        padding: '0 14px 6px',
        display: 'inline-block',
        transform: 'rotate(-1deg)',
        borderRadius: '6px 4px 7px 5px'
      }}>overpaying</span><br />
        for your <span style={{ color: '#2e6f8e' }}>imports</span>.
      </h1>
      <p className="wf-body" style={{ fontSize: 22, maxWidth: 620, lineHeight: 1.4, color: 'var(--ink-soft)' }}>
        We help companies source from India at better prices, with less risk.
      </p>
      <p className="wf-sans" style={{ fontSize: 13, maxWidth: 540, lineHeight: 1.6, marginTop: 24, color: 'var(--ink-soft)' }}>
        If you already have a supplier, send us your price.<br />
        We'll tell you if it can be done better.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
        <button className="btn sea">SEND YOUR PRICE →</button>
        <button className="btn ghost">[ book a call ]</button>
      </div>
    </section>

    {/* MARKET REALITY — sea-blue tinted band */}
    <section style={{ padding: '64px 80px', background: 'rgba(46,111,142,0.10)', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <SectionTag num="02" label="MARKET REALITY" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 36, marginTop: 16 }}>
        {[
      ['Europe is getting expensive.', 'Labour costs up. Operations up. Margins thinner each year.', '#14233a'],
      ['China is less predictable.', 'Labour costs up. Operations up. Margins thinner each year.', '#14233a'],
      ['India is the natural shift.', 'Labour costs up. Operations up. Margins thinner each year.', '#2e6f8e']].
      map(([h, p, c], i) =>
      <div key={i}>
            <div style={{ width: 28, height: 4, background: c, marginBottom: 14, borderRadius: 2 }} />
            <div className="hwhead" style={{ fontSize: 28, marginBottom: 10, color: c }}>{h}</div>
            <p className="wf-body" style={{ lineHeight: 1.4, color: 'var(--ink-soft)', fontSize: "20px" }}>{p}</p>
          </div>
      )}
      </div>
    </section>

    {/* WHAT POLYWEAVE DOES — navy block, beige text */}
    <section style={{ padding: '72px 80px', background: '#14233a', color: '#f7f4ee', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60 }}>
      <div>
        <div className="tag" style={{ color: 'rgba(247,244,238,0.6)', marginBottom: 12 }}>03 · WHAT WE DO</div>
        <div className="hwhead" style={{ fontSize: 56, lineHeight: 1.05, color: '#f7f4ee' }}>
          That's where<br /><span style={{ color: '#b9d3df' }}>Polyweave</span><br />comes in.
        </div>
      </div>
      <div className="wf-body" style={{ lineHeight: 1.5, paddingTop: 60, color: 'rgba(247,244,238,0.85)', fontSize: "24px", width: "658px" }}>
        We help companies import from India without the usual issues.
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
          {['No guesswork.', 'No random suppliers.', 'No surprises after the order.', 'Just clear sourcing and better decisions.'].map((x, i) =>
        <li key={i} style={{ borderTop: '1px dashed rgba(247,244,238,0.35)', padding: '10px 0' }}>— {x}</li>
        )}
        </ul>
      </div>
    </section>

    {/* HOW IT WORKS — alternating tinted cards */}
    <section style={{ padding: '64px 80px', background: '#f7f4ee' }}>
      <SectionTag num="04" label="HOW IT WORKS" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 16 }}>
        {[
      ['You share your product or current pricing.', '#f7f4ee', '#14233a'],
      ['We find the right manufacturer in India.', '#b9d3df', '#14233a'],
      ['We handle negotiation and alignment.', '#2e6f8e', '#f7f4ee'],
      ['You get a better option.', '#14233a', '#f7f4ee']].
      map(([t, bg, fg], i) =>
      <div key={i} className="sketch-box" style={{ padding: 20, minHeight: 200, background: bg, color: fg, borderColor: fg === '#f7f4ee' ? bg : '#14233a' }}>
            <div className="numdot" style={{ marginBottom: 14, background: bg, borderColor: fg, color: fg }}>{i + 1}</div>
            <div className="wf-body" style={{ fontSize: 17, lineHeight: 1.35, color: fg }}>{t}</div>
          </div>
      )}
      </div>
    </section>

    {/* PRODUCT AREAS — colored row stripes */}
    <section style={{ padding: '64px 80px', background: 'rgba(46,111,142,0.06)', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <SectionTag num="05" label="WHAT WE COMMONLY WORK WITH" />
      <div style={{ marginTop: 12 }}>
        {[
      ['HDPE Twine', '#14233a'],
      ['Fishing Nets', '#2e6f8e'],
      ['Nylon Nets', '#14233a'],
      ['Ropes', '#2e6f8e'],
      ['Jute Yarn', '#14233a']].
      map(([p, c], i) =>
      <div key={i} style={{ borderTop: '1.25px solid var(--ink)', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
              <span className="wf-sans" style={{ fontSize: 12, color: c, letterSpacing: 1 }}>0{i + 1}</span>
              <div className="hwhead" style={{ fontSize: 44, color: c }}>{p}</div>
            </div>
            <div className="wf-sans" style={{ fontSize: 11, color: c, letterSpacing: 1, border: `1px solid ${c}`, padding: '4px 10px', borderRadius: 4 }}>READ →</div>
          </div>
      )}
        <div style={{ borderTop: '1.25px solid var(--ink)' }} />
      </div>
    </section>

    {/* EXAMPLE — split: beige + sea card */}
    <section style={{ padding: '64px 80px', display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 60 }}>
      <div>
        <SectionTag num="06" label="A SIMPLE EXAMPLE" />
        <div className="hwhead" style={{ fontSize: 44, lineHeight: 1.05 }}>
          One quiet<br /><span style={{ color: '#2e6f8e' }}>switch.</span>
        </div>
      </div>
      <div className="sketch-box" style={{ padding: 28, background: '#2e6f8e', color: '#f7f4ee', borderColor: '#14233a' }}>
        <div className="tag" style={{ color: 'rgba(247,244,238,0.7)', marginBottom: 10 }}>CASE NOTE</div>
        <p className="wf-body" style={{ fontSize: 18, lineHeight: 1.5, margin: 0, color: '#f7f4ee' }}>
          A company we worked with was sourcing HDPE twine from Europe.<br /><br />
          We rebuilt the same product through India.<br /><br />
          The result was lower cost and stable supply, without compromising on performance.
        </p>
      </div>
    </section>

    {showProof &&
  <section style={{ padding: '72px 80px', background: '#14233a', color: '#f7f4ee' }}>
        <div className="tag" style={{ color: 'rgba(247,244,238,0.6)', marginBottom: 14 }}>07 · BUILT THROUGH REAL TRADE, NOT THEORY</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, marginTop: 12 }}>
          {[
      ['Containers', 'delivered across Europe.', '#f7f4ee'],
      ['Hundreds of thousands', 'in trade handled.', '#b9d3df'],
      ['Relationships', 'with buyers + manufacturers.', '#f7f4ee']].
      map(([k, v, c], i) =>
      <div key={i} style={{ borderTop: '2px solid ' + c, paddingTop: 14 }}>
              <div className="hwhead" style={{ fontSize: 36, lineHeight: 1, color: c }}>{k}</div>
              <div className="wf-body" style={{ fontSize: 16, color: 'rgba(247,244,238,0.75)', marginTop: 6 }}>{v}</div>
            </div>
      )}
        </div>
      </section>
  }

    {/* FINAL CTA — beige with sea-blue accent */}
    <section style={{ padding: '80px 80px 56px', background: '#f7f4ee' }}>
      <div className="hwhead" style={{ fontSize: 64, lineHeight: 1, marginBottom: 18 }}>
        Already working<br />with a <span style={{ color: '#2e6f8e' }}>supplier</span>?
      </div>
      <p className="wf-body" style={{ fontSize: 22, color: 'var(--ink-soft)', maxWidth: 560 }}>
        Send us your current price.<br />
        We'll tell you what's possible.
      </p>
      <button className="btn sea" style={{ marginTop: 24, fontSize: 14, padding: '14px 22px' }}>SEND YOUR PRICE →</button>
    </section>

    <WFFoot />
  </div>;


window.HomeA = HomeA;
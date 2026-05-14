/* global React, MapSketch, WFNav, StickyForm, WFFoot, Note, SectionTag */

const Page = ({ children, w = 1200, h = 1800 }) =>
<div className="wf" style={{ width: w, minHeight: h }}>{children}</div>;


// ─── ABOUT ─────────────────────────────────────────────────────
const AboutPage = ({ showSticky = true, showMap = true }) =>
<Page h={2450}>
    <WFNav active="About" />
    {showSticky && <StickyForm />}

    <section style={{ padding: '80px 80px 40px', maxWidth: 880 }}>
      <div className="tag" style={{ marginBottom: 18 }}>ABOUT · BUILT BETWEEN INDIA AND EUROPE</div>
      <h1 className="hwhead" style={{ fontSize: 80, lineHeight: 0.95, margin: '0 0 24px' }}>
        Built between<br /><span style={{ color: '#2e6f8e' }}>India</span> and <span style={{ background: '#14233a', color: '#f7f4ee', padding: '0 12px 4px', display: 'inline-block', transform: 'rotate(-1deg)', borderRadius: '6px 4px 7px 5px' }}>Europe</span>.
      </h1>
      <p className="wf-body" style={{ fontSize: 22, color: 'var(--ink-soft)', maxWidth: 640, lineHeight: 1.4 }}>
        Polyweave works between two markets.
      </p>
    </section>

    <section style={{ padding: '40px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: 'rgba(46,111,142,0.08)', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <div style={{ padding: '40px 40px 40px 0', borderRight: '1.5px dashed var(--ink)' }}>
        <div className="tag" style={{ marginBottom: 8 }}>SIDE A</div>
        <div className="hwhead" style={{ fontSize: 64, lineHeight: 1 }}>Europe<br /><span style={{ color: 'var(--ink-soft)' }}>buys.</span></div>
      </div>
      <div style={{ padding: '40px 0 40px 40px' }}>
        <div className="tag" style={{ marginBottom: 8, color: '#2e6f8e' }}>SIDE B</div>
        <div className="hwhead" style={{ fontSize: 64, lineHeight: 1, color: 'var(--sea)' }}>India<br /><span style={{ color: 'var(--ink-soft)' }}>produces.</span></div>
      </div>
    </section>

    <section style={{ padding: '56px 80px' }}>
      <div className="hwhead" style={{ fontSize: 36 }}>Making that work is not always simple.</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 28 }}>
        {[
      ['Suppliers don\'t always communicate clearly.', '#f7f4ee', '#14233a'],
      ['Buyers don\'t always see the full picture.', '#b9d3df', '#14233a'],
      ['Small mistakes in sourcing become expensive problems.', '#14233a', '#f7f4ee']].
      map(([t, bg, fg], i) =>
      <div key={i} className="sketch-box" style={{ padding: 20, background: bg, color: fg }}>
            <div className="wf-body" style={{ fontSize: 17, lineHeight: 1.4, color: fg }}>{t}</div>
          </div>
      )}
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    <section style={{ padding: '56px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <SectionTag num="02" label="OUR ROLE" />
        <div className="hwhead" style={{ fontSize: 44, lineHeight: 1.05 }}>
          Polyweave exists to<br />remove that gap.
        </div>
        <p className="wf-body" style={{ fontSize: 18, color: 'var(--ink-soft)', marginTop: 18, lineHeight: 1.5 }}>
          We work closely with manufacturers across India and buyers across Europe.<br /><br />
          Our role is to make sourcing smoother, clearer, and more reliable.
        </p>
      </div>
      <div className="sketch-box" style={{ padding: 22, background: 'rgba(255,255,255,0.5)' }}>
        {showMap ? <MapSketch width={420} height={220} dense={true} /> : <div className="ph" style={{ height: 220 }}>map</div>}
        <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 1, marginTop: 8 }}>FIG · TRADE BRIDGE</div>
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="03" label="ORIGIN" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
        <div className="hwhead" style={{ fontSize: 44, lineHeight: 1.05 }}>
          We started in fishing equipment.
        </div>
        <p className="wf-body" style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
          That is where our network was built.<br /><br />
          Today, we help companies source across sectors where India offers a real commercial advantage.
        </p>
      </div>
    </section>

    <hr className="sketch-rule dashed" style={{ margin: '0 80px' }} />

    {/* Founder note — quiet, company-first */}
    <section style={{ padding: '56px 80px' }}>
      <SectionTag num="04" label="LEADERSHIP" />
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 30, alignItems: 'start' }}>
        <div className="ph" style={{ height: 120, width: 120, borderRadius: '50%' }}>[ portrait ]</div>
        <div>
          <p className="wf-body" style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink)', maxWidth: 720 }}>
            The company is led by someone with deep familiarity with Indian manufacturing
            and direct experience working with European buyers.
          </p>
          <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 1, marginTop: 10 }}>FOUNDER · INDIA × SPAIN</div>
        </div>
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    <section style={{ padding: '72px 80px 56px' }}>
      <div className="hwhead" style={{ fontSize: 56, lineHeight: 1 }}>Want to see what's possible?</div>
      <button className="btn sea" style={{ marginTop: 24 }}>SEND YOUR PRICE →</button>
    </section>

    <WFFoot />
  </Page>;


// ─── SERVICES ──────────────────────────────────────────────────
const ServicesPage = ({ showSticky = true }) =>
<Page h={2320}>
    <WFNav active="Services" />
    {showSticky && <StickyForm />}

    <section style={{ padding: '80px 80px 40px', maxWidth: 880 }}>
      <div className="tag" style={{ marginBottom: 18 }}>SERVICES · WHAT WE DO</div>
      <h1 className="hwhead" style={{ fontSize: 80, lineHeight: 0.95, margin: '0 0 24px' }}>What we <span style={{ color: '#2e6f8e' }}>do</span>.</h1>
      <p className="wf-body" style={{ fontSize: 22, color: 'var(--ink-soft)', maxWidth: 600, lineHeight: 1.4 }}>
        We help companies source from India more efficiently.
      </p>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    {/* You come to us when — sea-blue tinted */}
    <section style={{ padding: '64px 80px', background: 'rgba(46,111,142,0.08)' }}>
      <SectionTag num="01" label="YOU COME TO US WHEN" />
      <div style={{ marginTop: 12 }}>
        {[
      ['You feel you are overpaying.', '#14233a'],
      ['You want alternative suppliers.', '#2e6f8e'],
      ['You want to explore India but reduce risk.', '#14233a'],
      ['You want to compare your current supplier price.', '#2e6f8e']].
      map(([t, c], i) =>
      <div key={i} style={{ borderTop: '1.5px solid var(--ink)', padding: '20px 0', display: 'flex', gap: 24, alignItems: 'baseline' }}>
            <span className="wf-sans" style={{ fontSize: 12, color: c, letterSpacing: 1 }}>0{i + 1}</span>
            <span className="hwhead" style={{ fontSize: 36, color: c }}>{t}</span>
          </div>
      )}
        <div style={{ borderTop: '1.5px solid var(--ink)' }} />
      </div>
    </section>

    {/* How we work — alternating tinted cards */}
    <section style={{ padding: '64px 80px', background: '#14233a', color: '#f7f4ee' }}>
      <div className="tag" style={{ color: 'rgba(247,244,238,0.6)', marginBottom: 14 }}>02 · HOW WE WORK</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 16 }}>
        {[
      ['Understand', 'You share your requirement, product, supplier, or current price.', '#f7f4ee', '#14233a'],
      ['Source', 'We identify suitable manufacturers in India.', '#b9d3df', '#14233a'],
      ['Align', 'We handle price discussions, specifications, and feasibility.', '#2e6f8e', '#f7f4ee'],
      ['Support', 'We help move the deal forward with clarity.', '#f7f4ee', '#14233a']].
      map(([h, p, bg, fg], i) =>
      <div key={i} className="sketch-box" style={{ padding: 20, minHeight: 220, background: bg, color: fg, borderColor: bg }}>
            <div className="numdot" style={{ marginBottom: 14, background: bg, borderColor: fg, color: fg }}>{i + 1}</div>
            <div className="hwhead" style={{ fontSize: 26, marginBottom: 8, color: fg }}>{h}</div>
            <div className="wf-body" style={{ fontSize: 15, lineHeight: 1.4, color: fg, opacity: 0.85 }}>{p}</div>
          </div>
      )}
      </div>
    </section>

    {/* Pricing — sea blue block */}
    <section style={{ padding: '72px 80px', background: '#2e6f8e', color: '#f7f4ee' }}>
      <div className="tag" style={{ color: 'rgba(247,244,238,0.65)', marginBottom: 14 }}>03 · PRICING</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div className="hwhead" style={{ fontSize: 120, lineHeight: 0.9, color: '#f7f4ee' }}>
          €0<br /><span style={{ fontSize: 32, color: 'rgba(247,244,238,0.85)' }}>upfront for buyers.</span>
        </div>
        <p className="wf-body" style={{ fontSize: 18, color: 'rgba(247,244,238,0.9)', lineHeight: 1.5 }}>
          Polyweave works closely with suppliers and aligns incentives based on successful transactions.<br /><br />
          You only see results, not invoices for exploration.
        </p>
      </div>
    </section>

    {/* Sectors */}
    <section style={{ padding: '64px 80px' }}>
      <SectionTag num="04" label="WHERE WE WORK MOST" />
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 12 }}>
        {[
      ['HDPE Twine', '#14233a', '#f7f4ee'],
      ['Fishing Nets', '#2e6f8e', '#f7f4ee'],
      ['Nylon Nets', '#b9d3df', '#14233a'],
      ['Ropes', '#14233a', '#f7f4ee'],
      ['Jute Yarn', '#2e6f8e', '#f7f4ee'],
      ['+ adjacent categories', '#f7f4ee', '#14233a']].
      map(([t, bg, fg], i) =>
      <div key={i} className="sketch-box" style={{ padding: '10px 18px', fontFamily: 'Caveat, cursive', fontSize: 24, background: bg, color: fg, borderColor: '#14233a' }}>{t}</div>
      )}
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    <section style={{ padding: '72px 80px 56px' }}>
      <div className="hwhead" style={{ fontSize: 56, lineHeight: 1 }}>Send your current price.</div>
      <p className="wf-body" style={{ fontSize: 20, color: 'var(--ink-soft)', marginTop: 10 }}>We'll tell you what's possible.</p>
      <button className="btn sea" style={{ marginTop: 24 }}>SEND YOUR PRICE →</button>
    </section>

    <WFFoot />
  </Page>;


// ─── CONTACT ───────────────────────────────────────────────────
const ContactPage = ({ showSticky = false }) =>
<Page h={1620}>
    <WFNav active="Contact" />

    <section style={{ padding: '80px 80px 40px', maxWidth: 900 }}>
      <div className="tag" style={{ marginBottom: 18 }}>CONTACT · A SIMPLE CHECK</div>
      <h1 className="hwhead" style={{ fontSize: 80, lineHeight: 0.95, margin: '0 0 24px' }}>
        Start with a<br /><span style={{ color: '#2e6f8e' }}>simple check.</span>
      </h1>
      <p className="wf-body" style={{ fontSize: 20, color: 'var(--ink-soft)', maxWidth: 640, lineHeight: 1.5 }}>
        If you are currently importing a product, there is a good chance it can be done differently.<br />
        Send us your product or current price. We will review and respond with what is possible.
      </p>
    </section>

    <section style={{ padding: '56px 80px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, background: 'rgba(46,111,142,0.08)', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      {/* Form */}
      <div style={{ padding: '30px 40px 30px 0' }}>
        <div className="sketch-box" style={{ padding: 30, background: '#f7f4ee' }}>
          <div className="tag" style={{ marginBottom: 16, color: '#2e6f8e' }}>FORM</div>
          {[
        ['Name', 'jane doe'],
        ['Company', 'co. name'],
        ['Email', 'name@co.eu'],
        ['Country', 'spain · italy · …'],
        ['Product / requirement', 'hdpe twine, 380d/12, …'],
        ['Current supplier price (optional)', '€ / kg']].
        map(([l, p], i) =>
        <div key={i} style={{ marginBottom: 18 }}>
              <div className="wf-sans" style={{ fontSize: 10, color: '#2e6f8e', letterSpacing: 1, marginBottom: 4 }}>{l.toUpperCase()}</div>
              <div style={{ borderBottom: '1.5px solid var(--ink)', padding: '6px 0', fontFamily: 'Caveat, cursive', fontSize: 18, color: 'var(--ink-faint)' }}>{p}</div>
            </div>
        )}
          <div style={{ marginBottom: 18 }}>
            <div className="wf-sans" style={{ fontSize: 10, color: '#2e6f8e', letterSpacing: 1, marginBottom: 4 }}>MESSAGE</div>
            <div className="sketch-box dashed" style={{ height: 90, padding: 8, fontFamily: 'Caveat, cursive', color: 'var(--ink-faint)', background: 'rgba(46,111,142,0.04)' }}>tell us what you're working on…</div>
          </div>
          <button className="btn sea" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>SEND YOUR PRICE →</button>
        </div>
      </div>

      {/* Side — navy block */}
      <div style={{ padding: 30, background: '#14233a', color: '#f7f4ee', margin: '30px 0' }}>
        <div className="hwhead" style={{ fontSize: 32, marginBottom: 16, color: '#f7f4ee' }}>Or, just write to us.</div>
        <div className="wf-body" style={{ fontSize: 18, color: 'rgba(247,244,238,0.85)', lineHeight: 1.6 }}>
          ajay@polyweave.net<br />
          (response within 1–2 business days)
        </div>
        <div style={{ borderTop: '1px dashed rgba(247,244,238,0.4)', margin: '24px 0' }} />
        <div className="tag" style={{ marginBottom: 8, color: '#b9d3df' }}>OPERATING BETWEEN</div>
        <div className="hwhead" style={{ fontSize: 28, lineHeight: 1.1, color: '#f7f4ee' }}>India ↔ <span style={{ color: '#b9d3df' }}>Spain</span><br /><span style={{ color: '#b9d3df' }}>Italy</span> · <span style={{ color: '#b9d3df' }}>Portugal</span><br /><span style={{ color: '#b9d3df' }}>Germany</span> · <span style={{ color: '#b9d3df' }}>Norway</span><br /><span style={{ color: '#b9d3df', fontSize: 22 }}>& other parts of Europe</span></div>
        <div style={{ borderTop: '1px dashed rgba(247,244,238,0.4)', margin: '24px 0' }} />
        <div className="stamp" style={{ borderColor: '#b9d3df', color: '#b9d3df' }}>PRIVATE · SECURE</div>
      </div>
    </section>

    <hr className="sketch-rule thick" style={{ margin: '0 80px' }} />

    <WFFoot />
  </Page>;


Object.assign(window, { AboutPage, ServicesPage, ContactPage });
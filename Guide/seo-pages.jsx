/* global React, WFNav, StickyForm, WFFoot, SectionTag */

// ─── SEO Landing Page template ────────────────────────────────
// One component, fed by data. Same color-blocked editorial language
// as Direction A — quieter, consulting-style, B2B intent.
const SEOPage = ({ data, showSticky = true }) => (
  <div className="wf" style={{ width: 1200, minHeight: 2950, background: '#f7f4ee' }}>
    <WFNav active="" />
    {showSticky && <StickyForm />}

    {/* SEO meta block — for review / handoff */}
    <section style={{ padding: '20px 80px 0' }}>
      <div className="sketch-box dashed" style={{ padding: '14px 18px', background: 'rgba(46,111,142,0.06)' }}>
        <div className="wf-sans" style={{ fontSize: 10, letterSpacing: 1.5, color: '#2e6f8e', marginBottom: 6 }}>SEO META · NOT VISIBLE ON PAGE</div>
        <div className="wf-sans" style={{ fontSize: 11, color: 'var(--ink)', lineHeight: 1.5 }}>
          <strong>title:</strong> {data.title}<br />
          <strong>desc:</strong> {data.meta}<br />
          <strong>url:</strong> polyweave.net{data.url}
        </div>
      </div>
    </section>

    {/* HERO */}
    <section style={{ padding: '56px 80px 40px', maxWidth: 880, position: 'relative' }}>
      <div className="tag" style={{ marginBottom: 18 }}>SOURCING · INDIA → EUROPE</div>
      <h1 className="hwhead" style={{ fontSize: 76, lineHeight: 0.95, margin: '0 0 28px' }}>
        {data.h1Pre}<br />
        <span style={{
          background: '#14233a',
          color: '#f7f4ee',
          padding: '0 14px 6px',
          display: 'inline-block',
          transform: 'rotate(-1deg)',
          borderRadius: '6px 4px 7px 5px'
        }}>{data.h1Mark}</span>
        {data.h1Post && <> <span style={{ color: '#2e6f8e' }}>{data.h1Post}</span></>}
      </h1>
      <div className="wf-body" style={{ fontSize: 19, color: 'var(--ink-soft)', lineHeight: 1.5, maxWidth: 720 }}>
        {data.intro.map((p, i) => (
          <p key={i} style={{ margin: '0 0 14px' }}>{p}</p>
        ))}
      </div>
    </section>

    {/* SECTION 2 — navy block (Polyweave's role) */}
    <section style={{ padding: '64px 80px', background: '#14233a', color: '#f7f4ee' }}>
      <div className="tag" style={{ color: 'rgba(247,244,238,0.6)', marginBottom: 14 }}>02 · WHERE POLYWEAVE FITS IN</div>
      <div className="hwhead" style={{ fontSize: 44, lineHeight: 1.1, marginBottom: 22, color: '#f7f4ee', maxWidth: 880 }}>
        That's where <span style={{ color: '#b9d3df' }}>Polyweave</span> comes in.
      </div>
      <div className="wf-body" style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(247,244,238,0.85)', maxWidth: 820 }}>
        {data.s2.map((p, i) => (
          <p key={i} style={{ margin: '0 0 14px' }}>{p}</p>
        ))}
      </div>
    </section>

    {/* SECTION 3 — what we work with */}
    <section style={{ padding: '64px 80px', background: 'rgba(46,111,142,0.08)', borderBottom: '1.5px solid var(--ink)' }}>
      <SectionTag num="03" label={data.s3Label || 'WHAT WE COMMONLY WORK WITH'} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, marginTop: 12 }}>
        {data.s3.map((item, i) => (
          <div key={i} style={{ padding: '20px 0', borderTop: '1.25px solid var(--ink)', display: 'flex', alignItems: 'baseline', gap: 18 }}>
            <span className="wf-sans" style={{ fontSize: 12, color: i % 2 === 0 ? '#14233a' : '#2e6f8e', letterSpacing: 1 }}>0{i + 1}</span>
            <span className="hwhead" style={{ fontSize: 28, color: i % 2 === 0 ? '#14233a' : '#2e6f8e' }}>{item}</span>
          </div>
        ))}
      </div>
    </section>

    {/* SECTION 4 — countries served + paragraph */}
    <section style={{ padding: '64px 80px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}>
      <div>
        <SectionTag num="04" label="WE SUPPORT BUYERS ACROSS" />
        <div className="hwhead" style={{ fontSize: 56, lineHeight: 1.05, marginTop: 6 }}>
          {data.countries.map((c, i) => (
            <div key={i} style={{ color: i % 2 === 0 ? '#14233a' : '#2e6f8e' }}>{c}</div>
          ))}
          <div className="wf-body" style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 12 }}>& other parts of Europe</div>
        </div>
      </div>
      <div className="wf-body" style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-soft)', paddingTop: 60 }}>
        {data.s4.map((p, i) => (
          <p key={i} style={{ margin: '0 0 14px' }}>{p}</p>
        ))}
      </div>
    </section>

    {/* SECTION 5 — our role (quiet, sea-blue rule) */}
    <section style={{ padding: '64px 80px', borderTop: '1.5px solid var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
        <div>
          <SectionTag num="05" label="OUR ROLE" />
          <div className="hwhead" style={{ fontSize: 44, lineHeight: 1.05 }}>
            Better sourcing,<br /><span style={{ color: '#2e6f8e' }}>fewer problems.</span>
          </div>
        </div>
        <div className="wf-body" style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink)', paddingTop: 28 }}>
          {data.s5.map((p, i) => (
            <p key={i} style={{ margin: '0 0 14px' }}>{p}</p>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA — sea-blue band */}
    <section style={{ padding: '80px 80px 56px', background: '#2e6f8e', color: '#f7f4ee' }}>
      <div className="tag" style={{ color: 'rgba(247,244,238,0.65)', marginBottom: 14 }}>FINAL · SEND YOUR PRICE</div>
      <div className="hwhead" style={{ fontSize: 64, lineHeight: 1, marginBottom: 18, color: '#f7f4ee' }}>
        {data.ctaH}
      </div>
      <div className="wf-body" style={{ fontSize: 20, color: 'rgba(247,244,238,0.9)', maxWidth: 640, lineHeight: 1.5, marginBottom: 24 }}>
        {data.ctaBody.map((p, i) => (
          <p key={i} style={{ margin: '0 0 8px' }}>{p}</p>
        ))}
      </div>
      <button className="btn" style={{ background: '#f7f4ee', color: '#14233a', borderColor: '#f7f4ee', fontSize: 14, padding: '14px 22px' }}>
        SEND YOUR PRICE →
      </button>
    </section>

    <WFFoot />
  </div>
);

// ─── SEO data — 5 pages ───────────────────────────────────────
const SEO_PAGES = {
  hdpe: {
    slug: 'hdpe',
    label: 'SEO · HDPE Twine',
    title: 'HDPE Twine Supplier India | Source HDPE Twine for Europe',
    meta: 'Source HDPE twine from trusted manufacturers in India. Polyweave helps European buyers reduce cost and risk when importing HDPE twine.',
    url: '/hdpe-twine-supplier-india',
    h1Pre: 'HDPE Twine',
    h1Mark: 'Supplier',
    h1Post: 'India.',
    intro: [
      'Many companies across Europe are now shifting part of their sourcing to India.',
      'HDPE twine is one of the product categories where the price difference is becoming difficult to ignore.',
      'If you are currently sourcing within Europe, there is a strong chance the same product can be manufactured in India more efficiently.',
      'The challenge is not finding suppliers. The challenge is finding suppliers that are reliable, consistent, and aligned with export expectations.',
    ],
    s2: [
      'We work with trusted manufacturers across India and help European buyers source HDPE twine with more clarity and less risk.',
      'Instead of dealing with unknown factories or random sourcing platforms, buyers work through an existing supplier network that already understands export requirements.',
    ],
    s3Label: 'WE REGULARLY WORK WITH',
    s3: [
      'Coreless HDPE twine',
      'HDPE twine for fishing applications',
      'Custom specifications for European buyers',
      'Industrial twine requirements',
      'Export-grade HDPE twine production',
    ],
    countries: ['Spain', 'Italy', 'Portugal', 'Germany', 'Norway'],
    s4: [
      'Many of the companies we work with are looking to reduce sourcing costs while maintaining stable supply and product consistency.',
    ],
    s5: [
      'Our role is simple. We help identify the right supplier, align pricing, verify expectations, and simplify communication between both sides.',
      'The objective is not just lower pricing. It is better sourcing with fewer problems.',
    ],
    ctaH: 'Already sourcing HDPE twine?',
    ctaBody: [
      'Send us your current price or specification.',
      'We will tell you what is realistically possible.',
    ],
  },

  fishing: {
    slug: 'fishing',
    label: 'SEO · Fishing Nets',
    title: 'Fishing Net Manufacturers India | PE & Nylon Fishing Nets',
    meta: 'Find trusted fishing net manufacturers in India for European importers. Source PE and nylon fishing nets with better pricing and lower sourcing risk.',
    url: '/fishing-net-manufacturers-india',
    h1Pre: 'Fishing Net',
    h1Mark: 'Manufacturers',
    h1Post: 'India.',
    intro: [
      'Fishing equipment sourcing across Europe is changing.',
      'Rising operational costs inside Europe are pushing many buyers to explore manufacturing alternatives in India.',
      'Fishing nets are one of the categories where India already has strong manufacturing capability.',
      'The issue is not availability. The issue is knowing which suppliers are reliable enough to work with long term.',
    ],
    s2: [
      'Polyweave helps European buyers source fishing nets from India with more confidence and less uncertainty.',
      'We work closely with manufacturers that already understand export requirements and commercial fishing applications.',
      'Instead of approaching factories blindly, buyers work through a network that has already been tested through real trade.',
    ],
    s3Label: 'WE REGULARLY WORK WITH',
    s3: [
      'PE fishing nets',
      'Nylon multifilament fishing nets',
      'Nylon monofilament fishing nets',
      'Custom fishing net specifications',
      'Commercial fishing net production',
    ],
    countries: ['Spain', 'Italy', 'Portugal', 'Germany', 'Norway'],
    s4: [
      'Many companies are now exploring India as a second sourcing option alongside existing European suppliers.',
    ],
    s5: [
      'Our role is to simplify sourcing.',
      'We help align suppliers, pricing, specifications, and communication before production moves forward.',
      'This reduces unnecessary risk and makes supplier transition easier.',
    ],
    ctaH: 'Sourcing fishing nets?',
    ctaBody: [
      'Send us your current specification or pricing.',
      'We will tell you what is possible.',
    ],
  },

  nylon: {
    slug: 'nylon',
    label: 'SEO · Nylon Nets',
    title: 'Nylon Net Supplier India | Monofilament & Multifilament Nets',
    meta: 'Source nylon fishing nets from trusted manufacturers in India. Polyweave helps European buyers import monofilament and multifilament nylon nets with lower risk.',
    url: '/nylon-net-supplier-india',
    h1Pre: 'Nylon Net',
    h1Mark: 'Supplier',
    h1Post: 'India.',
    intro: [
      'Nylon fishing nets continue to be widely used across Europe, but sourcing them efficiently has become more difficult over time.',
      'Costs are increasing and many buyers are now exploring India as an alternative manufacturing base.',
      'India offers strong production capability, but supplier selection remains the biggest challenge.',
    ],
    s2: [
      'Polyweave helps buyers source nylon nets from manufacturers in India that already produce for export markets.',
      'Our role is to reduce uncertainty and simplify the sourcing process.',
      'We help buyers avoid common problems related to communication, pricing alignment, and production expectations.',
    ],
    s3Label: 'WE REGULARLY WORK WITH',
    s3: [
      'Monofilament nylon nets',
      'Multifilament nylon nets',
      'Commercial fishing net applications',
      'Export-oriented nylon net manufacturing',
      'Custom sizing and specifications',
    ],
    countries: ['Spain', 'Italy', 'Portugal', 'Germany', 'Norway'],
    s4: [
      'Many buyers are now using India as an additional sourcing option to reduce dependence on a single supplier base.',
    ],
    s5: [
      'We work closely with both buyers and manufacturers to align product expectations before production begins.',
      'This helps create smoother sourcing relationships and more stable supply over time.',
    ],
    ctaH: 'Already sourcing nylon nets?',
    ctaBody: [
      'Send us your current product details or pricing.',
      'We will review and respond with what is realistically possible.',
    ],
  },

  ropes: {
    slug: 'ropes',
    label: 'SEO · Ropes',
    title: 'Rope Suppliers India | Industrial & Marine Rope Manufacturers',
    meta: 'Source industrial and marine ropes from trusted manufacturers in India. Polyweave helps European buyers import ropes with better pricing and lower sourcing risk.',
    url: '/rope-suppliers-india',
    h1Pre: 'Rope',
    h1Mark: 'Suppliers',
    h1Post: 'India.',
    intro: [
      'Rope sourcing is one of the product areas where the pricing gap between Europe and India continues to grow.',
      'Many companies still purchase locally even when more efficient sourcing options exist.',
      'India has a large manufacturing base for industrial and marine ropes, but supplier quality and consistency can vary significantly.',
    ],
    s2: [
      'Polyweave helps buyers identify rope manufacturers in India that are aligned with export expectations and long-term commercial relationships.',
      'Instead of approaching suppliers blindly, buyers work through a sourcing network that already understands production capability and communication requirements.',
    ],
    s3Label: 'WE REGULARLY WORK WITH',
    s3: [
      'Polysteel ropes',
      'Polypropylene ropes',
      'HDPE ropes',
      'Marine ropes',
      'Industrial ropes',
      'Commercial rope applications',
    ],
    countries: ['Spain', 'Italy', 'Portugal', 'Germany', 'Norway'],
    s4: [
      'Many of the companies we work with are looking to reduce import costs without creating unnecessary sourcing instability.',
    ],
    s5: [
      'Our role is to simplify sourcing decisions.',
      'We help buyers identify the right suppliers, align pricing expectations, and reduce communication friction before production begins.',
    ],
    ctaH: 'Sourcing ropes?',
    ctaBody: [
      'Send us your current specification or pricing.',
      'We will tell you what is realistically possible.',
    ],
  },

  jute: {
    slug: 'jute',
    label: 'SEO · Jute Yarn',
    title: 'Jute Yarn Exporters India | Source Jute Yarn from India',
    meta: 'Source jute yarn from reliable exporters and manufacturers in India. Polyweave helps European buyers import jute products with better clarity and control.',
    url: '/jute-yarn-exporters-india',
    h1Pre: 'Jute Yarn',
    h1Mark: 'Exporters',
    h1Post: 'India.',
    intro: [
      'Demand for jute products continues to increase across Europe.',
      'India remains one of the strongest manufacturing and export bases for jute yarn and related materials.',
      'At the same time, many buyers struggle with supplier communication, consistency, and sourcing clarity when working directly with manufacturers.',
    ],
    s2: [
      'Polyweave helps buyers source jute yarn from established manufacturers in India with more structure and less uncertainty.',
      'Our role is to simplify sourcing and create smoother communication between buyers and suppliers.',
    ],
    s3Label: 'WE REGULARLY WORK WITH',
    s3: [
      'Jute yarn',
      'Jute raw materials',
      'Export-oriented jute production',
      'Custom jute requirements',
      'Industrial jute applications',
    ],
    countries: ['Spain', 'Italy', 'Portugal', 'Germany', 'Norway'],
    s4: [
      'Many companies are now exploring India to improve pricing flexibility while maintaining long-term supply capability.',
    ],
    s5: [
      'We help buyers identify suitable suppliers, align pricing expectations, and simplify sourcing conversations before production begins.',
    ],
    ctaH: 'Already sourcing jute yarn?',
    ctaBody: [
      'Send us your current requirement or pricing.',
      'We will review and respond with what is realistically possible.',
    ],
  },
};

Object.assign(window, { SEOPage, SEO_PAGES });

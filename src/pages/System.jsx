import { memo } from 'react';
import { FiArrowRight, FiBox, FiCode, FiEye, FiGithub, FiLayers, FiShield, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import RuntimeVitals from '../components/RuntimeVitals';
import { performanceBudgets, roadmap } from '../data/siteContent';

const architecture = [
  { title: 'Semantic document', icon: FiEye, copy: 'Routes, headings, forms, links, and project evidence remain usable HTML before decorative rendering enters the frame.' },
  { title: 'Interaction shell', icon: FiLayers, copy: 'React Router, responsive components, a command menu, filters, and route-specific content form the application layer.' },
  { title: 'Motion director', icon: FiZap, copy: 'GSAP, Lenis, and CSS motion are progressive enhancement, bypassed when reduced motion or data constraints apply.' },
  { title: 'Lunar scene', icon: FiBox, copy: 'React Three Fiber and Drei load as a lazy visual island with capped DPR, offscreen pausing, and a static fallback.' },
  { title: 'Evidence model', icon: FiCode, copy: 'Case-study data distinguishes public-product facts, resume records, reasoned reflection, and undocumented implementation detail.' },
  { title: 'Delivery boundary', icon: FiShield, copy: 'Host headers, a validated contact function, CI, offline fallback, and privacy copy define the production edge.' },
];

function System() {
  return (
    <PageShell title="How This Portfolio Was Built" description="Architecture, accessibility, performance targets, asset provenance, and the delivery system behind Bhavya Lohami's lunar portfolio." image="/assets/lunar/system-orbit.webp" className="system-page">
      <PageHero
        eyebrow="Colophon / system disclosure"
        title={<>The portfolio is<br />also a case study.</>}
        lede="This page exposes the architecture, performance contract, accessibility decisions, generated-asset pipeline, and unfinished work behind the surface."
        image="/assets/lunar/system-orbit.webp"
        imageAlt="A tactile abstract system of graphite plates, silver arcs, and a coral lunar sphere."
        meta={[
          { label: 'Rendering', value: 'HTML + lazy WebGL' },
          { label: 'Motion', value: 'GSAP + reduced mode' },
          { label: 'Delivery', value: 'Static app + serverless edge' },
        ]}
      />

      <section className="mission-section">
        <SectionHeading index="01" eyebrow="Runtime observatory" title="Measured in this browser, right now." copy="These values are local observations from this visit—not lab scores, field data, or marketing claims." />
        <RuntimeVitals />
      </section>

      <section className="mission-section system-architecture">
        <SectionHeading index="02" eyebrow="System map" title="Meaning first. Atmosphere second." copy="The site isolates expensive visual work so the portfolio remains navigable, readable, and recoverable when that layer is absent." />
        <ol>
          {architecture.map((layer, index) => {
            const Icon = layer.icon;
            return <li key={layer.title}><span>{String(index + 1).padStart(2, '0')}</span><Icon aria-hidden="true" /><div><h3>{layer.title}</h3><p>{layer.copy}</p></div></li>;
          })}
        </ol>
      </section>

      <section className="mission-section system-contracts">
        <SectionHeading index="03" eyebrow="Quality contracts" title="Targets stay labeled as targets." copy={performanceBudgets.status} />
        <div className="budget-grid">
          {performanceBudgets.fieldMetrics.map((budget) => (
            <article key={budget.metric}><span>{budget.metric}</span><strong>{budget.target}</strong><p>{budget.scope}</p><EvidenceBadge level="not-documented">Target / field data pending</EvidenceBadge></article>
          ))}
        </div>
        <div className="delivery-budget">
          {performanceBudgets.deliveryBudgets.map((budget) => <div key={budget.metric}><span>{budget.metric}</span><strong>{budget.target}</strong><p>{budget.scope}</p></div>)}
        </div>
      </section>

      <section className="mission-section asset-ledger">
        <SectionHeading index="04" eyebrow="Asset ledger" title="Original visuals, with provenance." copy="The site does not borrow recognisable brand art. Each major lunar visual was generated specifically for this portfolio and then compressed locally." />
        <div>
          {[
            ['/assets/lunar/system-orbit.webp', 'System orbit', 'Generated editorial render / architecture and notes'],
            ['/assets/lunar/hospital-validation.webp', 'Validation lanes', 'Generated editorial render / scheduling story'],
            ['/assets/lunar/property-discovery.webp', 'Discovery terrain', 'Generated editorial render / search and property systems'],
          ].map(([image, title, label]) => <figure key={title}><img src={`${process.env.PUBLIC_URL || ''}${image}`} alt="" loading="lazy" /><figcaption><strong>{title}</strong><span>{label}</span></figcaption></figure>)}
        </div>
      </section>

      <section className="mission-section system-roadmap">
        <SectionHeading index="05" eyebrow="Open work" title="The roadmap is public." copy="Award-level craft is iterative. The next proof is documented rather than hidden behind a finished-looking screen." />
        <div>
          {roadmap.map((item) => <article key={item.id}><span>{item.priority} / {item.status}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="mission-section system-source">
        <FiGithub aria-hidden="true" />
        <div><span>Source boundary</span><h2>Public profile, local implementation.</h2><p>The source files exist in this workspace. No public repository URL for this portfolio is configured, so the site does not pretend one exists.</p></div>
        <Link to="/contact">Ask about the build <FiArrowRight aria-hidden="true" /></Link>
      </section>
    </PageShell>
  );
}

export default memo(System);

import { memo } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import { capabilityGroups } from '../data/siteContent';

function Skills() {
  return (
    <PageShell title="Capabilities" description="Frontend, API, search, validation, and operational product capabilities connected to real project evidence." image="/assets/lunar/system-orbit.webp" className="capabilities-page">
      <PageHero
        eyebrow="Capabilities / evidence map"
        title={<>Skills are useful<br />only in context.</>}
        lede="No arbitrary proficiency bars. Each capability is attached to a shipped problem, an implementation record, and a clear limit on what the evidence proves."
        image="/assets/lunar/system-orbit.webp"
        imageAlt="Abstract lunar system representing connected engineering capabilities."
        meta={[
          { label: 'Primary', value: 'React / Next.js' },
          { label: 'Backend', value: 'Django / REST' },
          { label: 'Method', value: 'Evidence-linked' },
        ]}
      />
      <section className="mission-section capability-map">
        <SectionHeading index="01" eyebrow="Capability matrix" title="Tools connected to responsibility." />
        <div>
          {capabilityGroups.map((group, index) => (
            <article key={group.id}>
              <header><span>{String(index + 1).padStart(2, '0')}</span><EvidenceBadge level="documented">Project-linked</EvidenceBadge></header>
              <h2>{group.title}</h2><p>{group.summary}</p>
              <ul>{group.capabilities.map((capability) => <li key={capability}><FiCheckCircle aria-hidden="true" />{capability}</li>)}</ul>
              <footer><p>{group.evidenceBoundary}</p><div>{group.projectSlugs.map((slug) => <Link key={slug} to={`/work/${slug}`}>Project evidence <FiArrowRight aria-hidden="true" /></Link>)}</div></footer>
            </article>
          ))}
        </div>
      </section>
      <section className="mission-section capability-process">
        <SectionHeading index="02" eyebrow="From stack to outcome" title="What the technology is for." />
        <div>
          {[
            ['Interface architecture', 'Reusable composition, responsive behavior, accessible states, and a deliberate loading strategy.'],
            ['API integration', 'Stable contracts, predictable error handling, guarded writes, and a clear owner for shared state.'],
            ['Search and discovery', 'Normalized filter models, meaningful empty states, map-aware journeys, and reversible decisions.'],
            ['Operational workflows', 'Role-aware surfaces, scheduling, dashboards, validation, and next-step clarity under pressure.'],
            ['Performance', 'Code splitting, WebGL isolation, capped rendering cost, asset compression, and budgets that stay visible.'],
            ['Delivery quality', 'Testing strategy, security boundaries, monitoring readiness, privacy, CI, and honest documentation.'],
          ].map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </PageShell>
  );
}

export default memo(Skills);

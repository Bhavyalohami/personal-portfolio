import { memo } from 'react';
import { FiArrowRight, FiGithub, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import { profile } from '../data/portfolio';
import { now, professionalPrinciples, socialProof, verifiedSignals } from '../data/siteContent';

function About() {
  return (
    <PageShell title="About" description="Bhavya Lohami's engineering principles, working style, current focus, and evidence policy." image="/assets/lunar/bhavya-portrait.webp" className="about-page">
      <PageHero
        eyebrow="About / person behind the system"
        title={<>Product pressure<br />into usable flow.</>}
        lede="I am a Jaipur-based developer working across React interfaces, full-stack workflows, and the systems that make complex products easier to trust."
        image="/assets/lunar/bhavya-portrait.webp"
        imageAlt="Portrait of Bhavya Lohami, sourced from his public GitHub profile."
        meta={[
          { label: 'Base', value: profile.location },
          { label: 'Timezone', value: 'UTC+05:30' },
          { label: 'Focus', value: 'React / full-stack products' },
        ]}
      >
        <p className="portrait-source"><FiGithub aria-hidden="true" /> Portrait sourced from Bhavya's public GitHub profile.</p>
      </PageHero>

      <section className="mission-section about-story">
        <SectionHeading index="01" eyebrow="Origin story" title="Engineering gave me structure. Product work gave it consequence." />
        <div className="about-story__grid">
          <p>I started with computer science fundamentals and moved quickly toward the part of software people actually have to live with: the interface, its states, and the decisions behind it.</p>
          <p>Production work taught me that visual polish is only convincing when the system beneath it handles search, permissions, validation, loading, failure, and change with equal care.</p>
          <p>That is the work I want more of: operational products with real constraints, ambitious frontend craft, and enough engineering discipline to keep both reliable.</p>
        </div>
      </section>

      <section className="mission-section about-principles">
        <SectionHeading index="02" eyebrow="Operating principles" title="Rules I can be held to." copy="These are working commitments, not adjectives arranged to sound senior." />
        <div>
          {professionalPrinciples.map((principle, index) => <article key={principle.id}><span>{String(index + 1).padStart(2, '0')}</span><h3>{principle.title}</h3><p>{principle.statement}</p></article>)}
        </div>
      </section>

      <section className="mission-section about-method">
        <SectionHeading index="03" eyebrow="How I work" title="Ambiguity becomes a decision trail." />
        <ol>
          {[
            ['Frame', 'Name the user, desired change, evidence, constraints, and what is still unknown.'],
            ['Model', 'Map states, data ownership, failure paths, permissions, and the smallest reliable contract.'],
            ['Prototype', 'Build the critical path in semantic HTML and responsive layout before expensive visual layers.'],
            ['Pressure-test', 'Check empty, slow, invalid, denied, concurrent, mobile, keyboard, and reduced-motion states.'],
            ['Ship and learn', 'Measure the real outcome, document trade-offs, and make the next iteration explicit.'],
          ].map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
        </ol>
      </section>

      <section className="mission-section about-now">
        <SectionHeading index="04" eyebrow={`Now / updated ${now.lastUpdated}`} title="Current orbit." copy={now.learningBoundary} />
        <div className="about-now__grid">
          <article><span><FiMapPin aria-hidden="true" /> Focus</span><ul>{now.focus.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><span>Building</span><ul>{now.building.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </section>

      <section className="mission-section about-proof">
        <SectionHeading index="05" eyebrow="Proof policy" title="Evidence over borrowed authority." copy="Testimonials, awards, and talks are not shown because permission-backed records are not currently available." />
        <div className="verified-signal-grid">
          {verifiedSignals.map((signal) => <article key={signal.id}><EvidenceBadge level="documented">Verified signal</EvidenceBadge><h3>{signal.label}</h3><strong>{signal.value}</strong><p>{signal.limitation}</p>{signal.href && <a href={signal.href} target={signal.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Inspect evidence <FiArrowRight aria-hidden="true" /></a>}</article>)}
        </div>
        <details className="proof-unavailable"><summary>What is intentionally absent</summary><div>{socialProof.unavailable.map((item) => <p key={item.type}><strong>{item.type}</strong>{item.statement}</p>)}</div></details>
      </section>

      <section className="mission-section about-next">
        <span>Next signal</span><h2>Bring the difficult workflow.</h2><p>I am most useful where interface clarity, API behavior, and product risk meet.</p><Link to="/contact">Start a project conversation <FiArrowRight aria-hidden="true" /></Link>
      </section>
    </PageShell>
  );
}

export default memo(About);

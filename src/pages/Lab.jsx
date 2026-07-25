import { memo, useState } from 'react';
import { FiArrowRight, FiCpu, FiPauseCircle, FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import { labExperiments } from '../data/siteContent';

const atlasSignals = [
  { id: 'render', label: 'Render budget', detail: 'Pixel ratio is capped and the canvas pauses when the scene leaves the viewport.' },
  { id: 'motion', label: 'Motion contract', detail: 'System preferences and the local motion control remove nonessential choreography.' },
  { id: 'fallback', label: 'Fallback path', detail: 'Static content stays complete when WebGL is unavailable or deliberately disabled.' },
  { id: 'semantics', label: 'Semantic layer', detail: 'The canvas is atmosphere. Navigation, project proof, and contact actions remain HTML.' },
];

function SignalAtlas() {
  const [active, setActive] = useState(atlasSignals[0]);
  return (
    <div className="signal-atlas">
      <div className="signal-atlas__visual">
        <img src={`${process.env.PUBLIC_URL || ''}/assets/lunar/system-orbit.webp`} alt="Abstract orbital system used to map the portfolio's rendering safeguards." loading="lazy" />
        <div className="signal-atlas__controls" role="group" aria-label="Inspect rendering safeguards">
          {atlasSignals.map((signal, index) => <button key={signal.id} type="button" className={active.id === signal.id ? 'is-active' : ''} onClick={() => setActive(signal)} aria-pressed={active.id === signal.id}><span>{String(index + 1).padStart(2, '0')}</span>{signal.label}</button>)}
        </div>
      </div>
      <aside aria-live="polite"><span>Selected safeguard</span><h3>{active.label}</h3><p>{active.detail}</p></aside>
    </div>
  );
}

function Lab() {
  return (
    <PageShell title="Lab" description="Live frontend experiments, performance constraints, and planned engineering test benches." image="/assets/lunar/system-orbit.webp" className="lab-page">
      <PageHero
        eyebrow="Lab / experiments under constraint"
        title={<>Make the strange<br />behave responsibly.</>}
        lede="A small practice space for rendering, motion, state, and failure. Live experiments are separated from planned work so prototypes never masquerade as shipped proof."
        image="/assets/lunar/system-orbit.webp"
        imageAlt="Abstract lunar operations system in graphite, silver, and coral."
        meta={[
          { label: 'Live experiments', value: '02' },
          { label: 'Planned benches', value: '01' },
          { label: 'Source', value: 'Local workspace' },
        ]}
      />
      <section className="mission-section">
        <SectionHeading index="01" eyebrow="Interactive atlas" title="The spectacle has guardrails." copy="Inspect the practical contracts around the signature lunar scene. The underlying meaning remains available without WebGL." />
        <SignalAtlas />
      </section>
      <section className="mission-section lab-log">
        <SectionHeading index="02" eyebrow="Experiment log" title="Live, local, or planned—clearly labeled." />
        <div className="lab-grid">
          {labExperiments.map((experiment, index) => (
            <article key={experiment.slug}>
              <header><span>{String(index + 1).padStart(2, '0')}</span>{experiment.status === 'Planned' ? <FiPauseCircle aria-hidden="true" /> : <FiPlayCircle aria-hidden="true" />}</header>
              <EvidenceBadge level={experiment.status === 'Planned' ? 'not-documented' : 'documented'}>{experiment.status}</EvidenceBadge>
              <h2>{experiment.title}</h2>
              <p>{experiment.summary}</p>
              <dl><dt>Source status</dt><dd>{experiment.sourceAvailability.note}</dd></dl>
              {experiment.demoHref ? <Link to={experiment.demoHref}>Open live context <FiArrowRight aria-hidden="true" /></Link> : <span className="lab-grid__planned"><FiCpu aria-hidden="true" /> No demo yet</span>}
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default memo(Lab);

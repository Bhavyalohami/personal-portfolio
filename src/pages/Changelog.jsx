import { memo } from 'react';
import PageShell, { PageHero, SectionHeading } from '../components/PageShell';
import { changelog, roadmap } from '../data/siteContent';

function Changelog() {
  return (
    <PageShell title="Changelog" description="Dated releases, refinements, and public roadmap for the Lunar Atelier portfolio." className="changelog-page">
      <PageHero eyebrow="Release log / portfolio evolution" title={<>A finished site<br />that keeps learning.</>} lede="Dated changes make the craft inspectable. Completed work and future intent are kept in separate records." meta={[
        { label: 'Current release', value: 'Lunar Atelier' },
        { label: 'Last updated', value: '19 Jul 2026' },
        { label: 'Roadmap', value: `${roadmap.length} recorded items` },
      ]} />
      <section className="mission-section">
        <SectionHeading index="01" eyebrow="Completed releases" title="What actually changed." />
        <div className="changelog-list">
          {changelog.map((entry, index) => (
            <article key={`${entry.date}-${entry.version}`}>
              <aside><span>{String(index + 1).padStart(2, '0')}</span><time dateTime={entry.date}>{entry.date}</time><b>{entry.status}</b></aside>
              <div><h2>{entry.version}</h2><ul>{entry.changes.map((change) => <li key={change}>{change}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="mission-section">
        <SectionHeading index="02" eyebrow="Public roadmap" title="What still needs proof." />
        <div className="roadmap-table">
          {roadmap.map((item) => <article key={item.id}><span>{item.priority}</span><h3>{item.title}</h3><p>{item.detail}</p><strong>{item.status}</strong></article>)}
        </div>
      </section>
    </PageShell>
  );
}

export default memo(Changelog);

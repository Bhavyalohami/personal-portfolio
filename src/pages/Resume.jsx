import { memo } from 'react';
import { FiArrowUpRight, FiDownload, FiMail, FiMapPin, FiPrinter } from 'react-icons/fi';
import PageShell, { EvidenceBadge, PageHero } from '../components/PageShell';
import { caseStudies } from '../data/caseStudies';
import { certificates, education, experiences, profile } from '../data/portfolio';
import { capabilityGroups } from '../data/siteContent';
import { trackEvent } from '../utils/analytics';

function Resume() {
  return (
    <PageShell title="Resume" description="A semantic, printable resume for Bhavya Lohami, React and full-stack product developer." className="resume-page">
      <PageHero eyebrow="Resume / candidate dossier" title={<>Bhavya<br />Lohami.</>} lede={profile.intro} meta={[
        { label: 'Role', value: profile.role },
        { label: 'Location', value: profile.location },
        { label: 'Updated', value: '19 Jul 2026' },
      ]} actions={<><a className="lunar-button lunar-button--primary" href={profile.resume} download onClick={() => trackEvent('resume_download', { format: 'pdf' })}><FiDownload aria-hidden="true" /> Download PDF</a><button type="button" className="lunar-button" onClick={() => window.print()}><FiPrinter aria-hidden="true" /> Print this page</button></>} />
      <article className="mission-section semantic-resume">
        <header className="semantic-resume__header"><div><h1>{profile.name}</h1><p>{profile.role}</p></div><address><span><FiMapPin aria-hidden="true" />{profile.location}</span><a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" />{profile.email}</a>{profile.socials.filter((social) => social.href.startsWith('http')).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<FiArrowUpRight aria-hidden="true" /></a>)}</address></header>
        <section><h2>Profile</h2><p>{profile.intro} I focus on reliable operational interfaces, reusable systems, search, scheduling, API integration, and product states that remain clear under pressure.</p></section>
        <section><h2>Experience</h2><div className="semantic-resume__timeline">{experiences.map((item) => <article key={`${item.role}-${item.period}`}><header><div><h3>{item.role}</h3><p>{item.company} / {item.location}</p></div><time>{item.period}</time></header><p>{item.description}</p><ul>{item.wins.map((win) => <li key={win}>{win}</li>)}</ul></article>)}</div></section>
        <section><h2>Selected project evidence</h2><div className="semantic-resume__projects">{caseStudies.map((study) => <article key={study.slug}><h3>{study.title}</h3><p>{study.summary}</p><div>{study.outcomes.slice(0, 2).map((outcome) => <span key={outcome.label}><strong>{outcome.value}</strong>{outcome.label}</span>)}</div><EvidenceBadge level={study.evidence.sources[0].type}>Qualified evidence</EvidenceBadge></article>)}</div></section>
        <section><h2>Capabilities</h2><div className="semantic-resume__capabilities">{capabilityGroups.map((group) => <article key={group.id}><h3>{group.title}</h3><p>{group.capabilities.join(' / ')}</p></article>)}</div></section>
        <section><h2>Education and training</h2><div className="semantic-resume__education">{[...education, ...certificates].map((item) => <article key={item.degree || item.title}><div><h3>{item.degree || item.title}</h3><p>{item.institution || item.issuer}</p></div><time>{item.period}</time></article>)}</div></section>
        <footer><p>Metrics in this resume remain qualified in the linked case studies. Public repositories and independent testimonials are not presented where documentation is unavailable.</p></footer>
      </article>
    </PageShell>
  );
}

export default memo(Resume);

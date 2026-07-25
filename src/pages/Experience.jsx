import { memo } from 'react';
import { FiArrowRight, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import { certificates, education, experiences } from '../data/portfolio';

function Experience() {
  return (
    <PageShell title="Experience" description="Bhavya Lohami's professional experience, recorded outcomes, education, and production engineering practice." className="experience-page">
      <PageHero
        eyebrow="Experience / production mission log"
        title={<>Responsibility<br />increased by shipping.</>}
        lede="A chronological record of production work, ownership themes, and the evidence currently available for each chapter."
        meta={[
          { label: 'Current role', value: experiences[0].role },
          { label: 'Current base', value: experiences[0].location },
          { label: 'Practice', value: 'Product engineering' },
        ]}
      />
      <section className="mission-section experience-timeline">
        <SectionHeading index="01" eyebrow="Professional timeline" title="Role by role, without inflation." />
        <div>
          {experiences.map((experience, index) => (
            <article key={`${experience.company}-${experience.period}`}>
              <aside><span>{String(index + 1).padStart(2, '0')}</span><time>{experience.period}</time></aside>
              <div className="experience-timeline__role"><FiBriefcase aria-hidden="true" /><h2>{experience.role}</h2><strong>{experience.company}</strong><p><FiMapPin aria-hidden="true" />{experience.location}</p></div>
              <div className="experience-timeline__detail"><p>{experience.description}</p><ul>{experience.wins.map((win) => <li key={win}>{win}</li>)}</ul><EvidenceBadge level="resume-record">Resume record</EvidenceBadge></div>
            </article>
          ))}
        </div>
      </section>
      <section id="education" className="mission-section education-grid">
        <SectionHeading index="02" eyebrow="Foundation" title="Education and structured training." />
        <div>
          {education.map((item) => <article key={`${item.degree}-${item.institution}`}><span>{item.period}</span><h2>{item.degree}</h2><strong>{item.field}</strong><p>{item.institution} / {item.location}</p><ul>{item.notes.map((note) => <li key={note}>{note}</li>)}</ul></article>)}
        </div>
      </section>
      <section className="mission-section certificate-grid">
        <SectionHeading index="03" eyebrow="Practice records" title="Training, roles, and focus areas." />
        <div>
          {certificates.map((certificate) => <article key={certificate.title}><span>{certificate.period}</span><h3>{certificate.title}</h3><strong>{certificate.issuer}</strong><p>{certificate.focus}</p><div>{certificate.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></article>)}
        </div>
      </section>
      <section className="mission-section experience-cta"><span>Readable dossier</span><h2>Need the compact version?</h2><Link to="/resume">Open the semantic resume <FiArrowRight aria-hidden="true" /></Link></section>
    </PageShell>
  );
}

export default memo(Experience);

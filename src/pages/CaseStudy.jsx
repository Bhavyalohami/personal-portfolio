import { memo, useEffect, useMemo } from 'react';
import { FiArrowLeft, FiArrowRight, FiCheck, FiExternalLink, FiShield } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, PrimaryLink, SectionHeading } from '../components/PageShell';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies';
import NotFound from './NotFound';
import { trackEvent } from '../utils/analytics';

const generatedVisuals = {
  'uphomes-rental-marketplace': '/assets/lunar/system-orbit.webp',
  'real-estate-management-system': '/assets/lunar/property-discovery.webp',
  'hospital-management-system': '/assets/lunar/hospital-validation.webp',
};

function EvidenceLine({ level }) {
  const labels = {
    'public-product': 'Observed on public product',
    'portfolio-record': 'Portfolio record',
    'resume-record': 'Resume-backed record',
    'reasoned-reflection': 'Retrospective reasoning',
    'not-documented': 'Not documented',
  };
  return <EvidenceBadge level={level}>{labels[level] || level}</EvidenceBadge>;
}

function ContentList({ items }) {
  return (
    <ul className="case-list">
      {items.map((item) => <li key={typeof item === 'string' ? item : item.title || item.name}><FiCheck aria-hidden="true" /><span>{typeof item === 'string' ? item : item.detail || item.need}</span></li>)}
    </ul>
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  const jsonLd = useMemo(() => study ? ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: study.title,
    description: study.summary,
    creator: { '@type': 'Person', name: 'Bhavya Lohami' },
    url: `/work/${study.slug}`,
    sameAs: study.links.live || undefined,
  }) : null, [study]);

  useEffect(() => {
    if (study) trackEvent('case_study_view', { slug: study.slug });
  }, [study]);

  if (!study) return <NotFound />;

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previous = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];
  const chapterVisual = generatedVisuals[study.slug];

  return (
    <PageShell
      title={`${study.title} Case Study`}
      description={study.summary}
      image={chapterVisual || study.media.hero}
      type="article"
      jsonLd={jsonLd}
      className="case-study"
    >
      <PageHero
        eyebrow={`Case study ${String(currentIndex + 1).padStart(2, '0')} / ${study.category}`}
        title={study.title}
        lede={study.summary}
        image={study.media.hero}
        imageAlt={study.media.alt}
        meta={[
          { label: 'Status', value: study.status.label },
          { label: 'Period', value: study.period },
          { label: 'Role', value: study.role.title },
        ]}
        actions={
          <>
            {study.links.live && <PrimaryLink href={study.links.live}>Open live product</PrimaryLink>}
            <PrimaryLink to="/work" variant="ghost">Back to work</PrimaryLink>
          </>
        }
      >
        <div className="case-hero__evidence">
          <EvidenceLine level={study.evidence.sources[0]?.type} />
          <span>Last evidence check: {study.status.lastVerified}</span>
        </div>
      </PageHero>

      <nav className="case-toc" aria-label="Case study chapters">
        {['Context', 'Role', 'Architecture', 'Decisions', 'Quality', 'Outcomes', 'Reflection'].map((item, index) => (
          <a key={item} href={`#chapter-${index + 1}`}><span>{String(index + 1).padStart(2, '0')}</span>{item}</a>
        ))}
      </nav>

      <section id="chapter-1" className="mission-section case-chapter">
        <SectionHeading index="01" eyebrow="Context" title="The pressure behind the interface." copy={study.problem.whyItMatters} />
        <div className="case-split">
          <article className="case-callout">
            <span>Problem statement</span>
            <p>{study.problem.statement}</p>
            <EvidenceLine level={study.problem.evidence} />
          </article>
          <div>
            <h3>Who the system serves</h3>
            <div className="case-user-grid">
              {study.users.map((user) => <article key={user.name}><span>{user.name}</span><p>{user.need}</p></article>)}
            </div>
          </div>
        </div>
        <div className="case-constraint-grid">
          {study.constraints.map((constraint) => (
            <article key={constraint.title}>
              <EvidenceLine level={constraint.evidence} />
              <h3>{constraint.title}</h3>
              <p>{constraint.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="chapter-2" className="mission-section case-chapter case-chapter--role">
        <SectionHeading index="02" eyebrow="Ownership" title="What I can claim—and what I cannot." />
        <div className="case-role-card">
          <div><span>Recorded role</span><strong>{study.role.title}</strong></div>
          <p>{study.role.ownership}</p>
          <p><b>Team record:</b> {study.role.team}</p>
          {(study.role.exclusions || study.role.publishingRule) && <aside><FiShield aria-hidden="true" />{study.role.exclusions || study.role.publishingRule}</aside>}
        </div>
        <div className="case-evidence-ledger">
          {study.evidence.sources.map((source) => (
            <article key={source.label}>
              <EvidenceLine level={source.type} />
              <h3>{source.label}</h3>
              <p>{source.supports}</p>
              {source.href && <a href={source.href} target="_blank" rel="noreferrer">Inspect source <FiExternalLink aria-hidden="true" /></a>}
            </article>
          ))}
        </div>
      </section>

      <section id="chapter-3" className="mission-section case-chapter case-chapter--architecture">
        <SectionHeading index="03" eyebrow="Architecture" title="A system described at the evidence boundary." copy={study.architecture.summary} />
        <figure className="case-generated-visual">
          <img src={`${process.env.PUBLIC_URL || ''}${chapterVisual}`} alt="Abstract editorial visualization of the project system architecture." loading="lazy" decoding="async" />
          <figcaption>Portfolio editorial visual / generated for this case study / not a production screenshot</figcaption>
        </figure>
        <ol className="architecture-stack">
          {study.architecture.layers.map((layer, index) => (
            <li key={layer.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{layer.name}</h3><p>{layer.detail}</p><EvidenceLine level={layer.evidence} /></div>
            </li>
          ))}
        </ol>
        <div className="case-undocumented">
          <h3>Implementation details not documented</h3>
          <ContentList items={study.architecture.notDocumented} />
        </div>
      </section>

      <section id="chapter-4" className="mission-section case-chapter">
        <SectionHeading index="04" eyebrow="Decision log" title="Choices, reasons, and their cost." />
        <div className="decision-grid">
          {study.decisions.map((decision, index) => (
            <article key={decision.title}>
              <span>{String(index + 1).padStart(2, '0')} / Decision</span>
              <h3>{decision.title}</h3>
              <p>{decision.decision}</p>
              <dl><dt>Why</dt><dd>{decision.rationale}</dd></dl>
              <EvidenceLine level={decision.evidence} />
            </article>
          ))}
        </div>
        <div className="tradeoff-table" role="table" aria-label="Project trade-offs">
          <div role="row" className="tradeoff-table__head"><span role="columnheader">Choice</span><span role="columnheader">Benefit</span><span role="columnheader">Cost</span></div>
          {study.tradeoffs.map((tradeoff) => (
            <div role="row" key={tradeoff.choice}><strong role="cell">{tradeoff.choice}</strong><p role="cell">{tradeoff.benefit}</p><p role="cell">{tradeoff.cost}</p></div>
          ))}
        </div>
      </section>

      <section id="chapter-5" className="mission-section case-chapter case-chapter--quality">
        <SectionHeading index="05" eyebrow="Quality systems" title="Accessibility, security, and testing without theatre." copy="Where project records are incomplete, the gap stays visible instead of being converted into an unsupported claim." />
        <div className="quality-grid">
          <article><span>Accessibility</span><p>{study.accessibility.verification}</p><ContentList items={study.accessibility.productConsiderations} /></article>
          <article><span>Security and privacy</span><p>{study.security.boundary}</p><ContentList items={study.security.notDocumented} /></article>
          <article><span>Testing</span><p>{study.testing.honestSummary}</p><ContentList items={study.testing.notDocumented} /></article>
        </div>
      </section>

      <section id="chapter-6" className="mission-section case-chapter">
        <SectionHeading index="06" eyebrow="Outcomes" title="Recorded signals, with context attached." />
        <div className="outcome-grid">
          {study.outcomes.map((outcome) => (
            <article key={outcome.label}>
              <span>{outcome.label}</span>
              <strong>{outcome.value}</strong>
              <p>{outcome.detail}</p>
              <small>{outcome.scope}</small>
              <EvidenceLine level={outcome.evidence} />
            </article>
          ))}
        </div>
      </section>

      <section id="chapter-7" className="mission-section case-chapter case-chapter--reflection">
        <SectionHeading index="07" eyebrow="Reflection" title="What stays useful after shipping." />
        <div className="reflection-grid">
          <div>
            <h3>Lessons</h3>
            {study.lessons.map((lesson) => <article key={lesson.title}><span>{lesson.title}</span><p>{lesson.detail}</p></article>)}
          </div>
          <div>
            <h3>Next proof to add</h3>
            <ContentList items={study.nextSteps} />
          </div>
        </div>
      </section>

      <nav className="case-pagination" aria-label="Case study navigation">
        <Link to={`/work/${previous.slug}`}><FiArrowLeft aria-hidden="true" /><span>Previous case study<strong>{previous.title}</strong></span></Link>
        <Link to={`/work/${next.slug}`}><span>Next case study<strong>{next.title}</strong></span><FiArrowRight aria-hidden="true" /></Link>
      </nav>
    </PageShell>
  );
}

export default memo(CaseStudy);

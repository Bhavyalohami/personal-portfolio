import { memo, useMemo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero } from '../components/PageShell';
import { caseStudies } from '../data/caseStudies';
import { getTechnicalNoteBySlug, technicalNotes } from '../data/siteContent';
import NotFound from './NotFound';

function NoteDetail() {
  const { slug } = useParams();
  const note = getTechnicalNoteBySlug(slug);
  const jsonLd = useMemo(() => note ? ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    description: note.excerpt,
    author: { '@type': 'Person', name: 'Bhavya Lohami' },
    isBasedOn: note.sourceProjectSlugs,
  }) : null, [note]);
  if (!note) return <NotFound />;

  const index = technicalNotes.findIndex((item) => item.slug === note.slug);
  const previous = technicalNotes[(index - 1 + technicalNotes.length) % technicalNotes.length];
  const next = technicalNotes[(index + 1) % technicalNotes.length];
  const relatedStudies = caseStudies.filter((study) => note.sourceProjectSlugs.includes(study.slug));

  return (
    <PageShell title={note.title} description={note.excerpt} image="/assets/lunar/system-orbit.webp" type="article" jsonLd={jsonLd} className="note-detail">
      <PageHero
        eyebrow={`${note.topic} / ${note.status}`}
        title={note.title}
        lede={note.excerpt}
        meta={[
          { label: 'Reading time', value: note.readingTime },
          { label: 'Publication', value: 'Portfolio original' },
          { label: 'Evidence', value: 'Boundary disclosed' },
        ]}
      >
        <div className="note-detail__boundary"><EvidenceBadge level="reasoned-reflection">Reasoned reflection</EvidenceBadge><p>{note.evidenceNote}</p></div>
      </PageHero>

      <article className="mission-section note-article">
        <aside className="note-article__toc">
          <span>In this note</span>
          {note.bodySections.map((section, sectionIndex) => <a key={section.heading} href={`#note-section-${sectionIndex + 1}`}>{String(sectionIndex + 1).padStart(2, '0')} {section.heading}</a>)}
        </aside>
        <div className="note-article__body">
          {note.bodySections.map((section, sectionIndex) => (
            <section key={section.heading} id={`note-section-${sectionIndex + 1}`}>
              <span>{String(sectionIndex + 1).padStart(2, '0')}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {note.codeSnippets[sectionIndex] && (
                <figure className="code-window">
                  <figcaption><i aria-hidden="true" />{note.codeSnippets[sectionIndex].caption}<span>{note.codeSnippets[sectionIndex].language}</span></figcaption>
                  <pre tabIndex="0"><code>{note.codeSnippets[sectionIndex].code}</code></pre>
                </figure>
              )}
            </section>
          ))}
          <section className="note-related">
            <span>Related evidence</span>
            <h2>Project records behind the lesson</h2>
            <div>{relatedStudies.map((study) => <Link key={study.slug} to={`/work/${study.slug}`}>{study.title}<FiArrowRight aria-hidden="true" /></Link>)}</div>
          </section>
        </div>
      </article>

      <nav className="case-pagination" aria-label="Note navigation">
        <Link to={`/notes/${previous.slug}`}><FiArrowLeft aria-hidden="true" /><span>Previous note<strong>{previous.title}</strong></span></Link>
        <Link to={`/notes/${next.slug}`}><span>Next note<strong>{next.title}</strong></span><FiArrowRight aria-hidden="true" /></Link>
      </nav>
    </PageShell>
  );
}

export default memo(NoteDetail);

import { memo, useMemo, useState } from 'react';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { PageHero, SectionHeading } from '../components/PageShell';
import { technicalNotes } from '../data/siteContent';

function Notes() {
  const [query, setQuery] = useState('');
  const topics = useMemo(() => ['All', ...new Set(technicalNotes.map((note) => note.topic))], []);
  const [topic, setTopic] = useState('All');
  const notes = useMemo(() => technicalNotes.filter((note) => {
    const term = query.trim().toLowerCase();
    const matchesTopic = topic === 'All' || note.topic === topic;
    const matchesQuery = !term || `${note.title} ${note.excerpt} ${note.topic}`.toLowerCase().includes(term);
    return matchesTopic && matchesQuery;
  }), [query, topic]);

  return (
    <PageShell title="Engineering Notes" description="Original engineering field notes on validation, search state, authorization, and trustworthy product interfaces." image="/assets/lunar/system-orbit.webp" className="notes-index">
      <PageHero
        eyebrow="Field notes / engineering decisions"
        title={<>Ideas that survived<br />contact with constraints.</>}
        lede="Short, original notes grounded in project work. They are not retroactive claims about private systems; each note makes its evidence boundary explicit."
        image="/assets/lunar/system-orbit.webp"
        imageAlt="Abstract graphite and coral orbital system used as an editorial illustration."
        meta={[
          { label: 'Notes', value: String(technicalNotes.length).padStart(2, '0') },
          { label: 'Format', value: 'Original portfolio notes' },
          { label: 'RSS', value: 'Available' },
        ]}
      />
      <section className="mission-section" aria-labelledby="notes-list-title">
        <SectionHeading index="01" eyebrow="Knowledge log" title="Read by problem space." copy="Search the current collection or narrow it to one engineering concern." />
        <div className="notes-tools">
          <label><FiSearch aria-hidden="true" /><span className="sr-only">Search notes</span><input type="search" placeholder="Search notes" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <div role="group" aria-label="Filter notes by topic">
            {topics.map((item) => <button type="button" key={item} className={topic === item ? 'is-active' : ''} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>)}
          </div>
        </div>
        <div className="notes-grid" id="notes-list-title" aria-live="polite">
          {notes.map((note, index) => (
            <article className="note-card" key={note.slug}>
              <span>{String(index + 1).padStart(2, '0')} / {note.topic}</span>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
              <footer><small>{note.readingTime} / {note.status}</small><Link to={`/notes/${note.slug}`} aria-label={`Read ${note.title}`}>Read note <FiArrowRight aria-hidden="true" /></Link></footer>
            </article>
          ))}
          {notes.length === 0 && <p>No note matches that signal.</p>}
        </div>
      </section>
    </PageShell>
  );
}

export default memo(Notes);

import { memo, useMemo, useState } from 'react';
import { FiArrowRight, FiArrowUpRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageShell, { EvidenceBadge, PageHero, SectionHeading } from '../components/PageShell';
import { caseStudies } from '../data/caseStudies';
import { projects } from '../data/portfolio';
import { trackEvent } from '../utils/analytics';

const caseSlugByProjectId = {
  1: 'uphomes-rental-marketplace',
  2: 'real-estate-management-system',
  3: 'hospital-management-system',
};

const filters = ['All', 'Product systems', 'Frontend', 'Brand websites', 'Concept'];

function bucketForProject(project) {
  if ([1, 2, 3].includes(project.id)) return 'Product systems';
  if ([4, 5].includes(project.id)) return 'Brand websites';
  return 'Concept';
}

function ProjectLink({ project }) {
  const slug = caseSlugByProjectId[project.id];
  if (slug) {
    return <Link to={`/work/${slug}`}>Read the full case study <FiArrowRight aria-hidden="true" /></Link>;
  }
  if (project.source && project.id !== 6) {
    return <a href={project.source} target="_blank" rel="noreferrer" onClick={() => trackEvent('project_exit', { project: project.title })}>Visit public project <FiArrowUpRight aria-hidden="true" /></a>;
  }
  return <span className="work-card__unavailable">Project note / public proof unavailable</span>;
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesBucket = activeFilter === 'All' || bucketForProject(project) === activeFilter || (activeFilter === 'Frontend' && [1, 2, 3].includes(project.id));
      const matchesSearch = !term || `${project.title} ${project.category} ${project.story} ${project.tags.join(' ')}`.toLowerCase().includes(term);
      return matchesBucket && matchesSearch;
    });
  }, [activeFilter, query]);

  const projectJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Selected work by Bhavya Lohami',
    hasPart: caseStudies.map((study) => ({
      '@type': 'CreativeWork',
      name: study.title,
      description: study.summary,
      url: `/work/${study.slug}`,
    })),
  }), []);

  return (
    <PageShell
      title="Work"
      description="Product systems, frontend engineering, and evidence-aware case studies by Bhavya Lohami."
      image="/assets/lunar/property-discovery.webp"
      jsonLd={projectJsonLd}
      className="work-index"
    >
      <PageHero
        eyebrow="Work archive / shipped systems"
        title={<>Products made for<br />real operating pressure.</>}
        lede="A curated record of product systems, interface work, and experiments. Flagship projects include the decisions, trade-offs, gaps, and evidence behind the polished surface."
        image="/assets/lunar/property-discovery.webp"
        imageAlt="Abstract property discovery system with a coral route across layered dark terrain."
        meta={[
          { label: 'Flagship studies', value: '03' },
          { label: 'Public products', value: '04 verified links' },
          { label: 'Evidence policy', value: 'Claims qualified' },
        ]}
      />

      <section className="mission-section work-index__archive" aria-labelledby="work-archive-title">
        <SectionHeading
          index="01"
          eyebrow="Complete archive"
          title="Browse by problem, not hype."
          copy="Search by domain or technology. Every card identifies whether a deeper case study or only public-product evidence is available."
        />
        <div className="work-filter" aria-label="Filter projects">
          <label>
            <FiSearch aria-hidden="true" />
            <span className="sr-only">Search projects</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search work, stack, or domain" />
          </label>
          <div role="group" aria-label="Project categories">
            {filters.map((filter) => (
              <button key={filter} type="button" className={activeFilter === filter ? 'is-active' : ''} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>
            ))}
          </div>
        </div>

        <div className="work-archive-grid" aria-live="polite">
          {filteredProjects.map((project, index) => {
            const hasCaseStudy = Boolean(caseSlugByProjectId[project.id]);
            return (
              <article className="work-card" key={project.id}>
                <div className="work-card__media">
                  <img src={project.image} alt={`${project.title} project preview`} loading={index > 1 ? 'lazy' : 'eager'} decoding="async" />
                  <span>{String(project.id).padStart(2, '0')}</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__topline">
                    <span>{project.period}</span>
                    <EvidenceBadge level={hasCaseStudy ? 'documented' : 'public-product'}>{hasCaseStudy ? 'Deep dive' : 'Public record'}</EvidenceBadge>
                  </div>
                  <p>{project.category}</p>
                  <h2>{project.title}</h2>
                  <strong>{project.summary}</strong>
                  <ul aria-label={`${project.title} project signals`}>
                    {project.metrics.map((metric) => <li key={metric}>{metric}</li>)}
                  </ul>
                  <ProjectLink project={project} />
                </div>
              </article>
            );
          })}
          {filteredProjects.length === 0 && <p className="work-empty">No project matches that signal. Clear the search or choose another filter.</p>}
        </div>
      </section>
    </PageShell>
  );
}

export default memo(Projects);

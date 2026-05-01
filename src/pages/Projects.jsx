import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaSearch } from 'react-icons/fa';
import { MagneticButton, OptimizedImage, PageShell, SectionHeader, TiltPanel, reveal } from '../components/Premium';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], []);

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const matchCategory = filter === 'All' || project.category === filter;
        const haystack = `${project.title} ${project.summary} ${project.tags.join(' ')}`.toLowerCase();
        return matchCategory && haystack.includes(query.toLowerCase());
      }),
    [filter, query]
  );

  const featured = projects.find((project) => project.featured) || projects[0];

  return (
    <PageShell>
      <section className="px-4 pb-16 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Projects"
            title="Work that feels like a product launch"
            copy="A premium showcase with editorial cards, filtering, hover reveals, and case-study style storytelling."
          />

          <TiltPanel className="mb-10 overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px] overflow-hidden">
                <OptimizedImage
                  priority
                  src={featured.image}
                  alt={featured.title}
                  aspect="absolute inset-0"
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-ice-blue px-3 py-1 font-mono text-xs font-bold text-graphite">Featured</span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-ice-blue">{featured.period}</p>
                <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">{featured.title}</h2>
                <p className="mt-5 leading-7 text-white/64">{featured.story}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {featured.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/62">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltPanel>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition ${
                    filter === category ? 'bg-ice-blue text-graphite' : 'border border-white/10 bg-white/[0.04] text-white/58 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="relative block">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search stack or project"
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-5 text-sm outline-none transition focus:border-ice-blue md:w-72"
              />
            </label>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid auto-rows-fr gap-6 md:grid-cols-2">
              {filtered.map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  variants={reveal}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.94 }}
                  custom={index * 0.06}
                  className="group premium-card flex h-full flex-col overflow-hidden rounded-[1.75rem]"
                >
                  <div className="relative">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      aspect="aspect-[16/10]"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-black/45 px-3 py-1 font-mono text-xs text-ice-blue backdrop-blur">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/38">{project.period}</p>
                    <h3 className="mt-3 font-display text-3xl font-bold">{project.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-white/60">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex items-center gap-3">
                      <a href="https://github.com/" className="rounded-full border border-white/10 p-3 text-white/58 transition hover:text-ice-blue" aria-label="GitHub">
                        <FaGithub />
                      </a>
                      <button type="button" className="rounded-full border border-white/10 p-3 text-white/58 transition hover:text-ice-blue" aria-label="Live preview">
                        <FaExternalLinkAlt />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <h2 className="font-display text-4xl font-bold">Have a build that needs this level of care?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/58">I can help shape the interface, ship the React frontend, and connect the experience to real product logic.</p>
            <div className="mt-7 flex justify-center">
              <MagneticButton to="/contact">Start a conversation</MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Projects;

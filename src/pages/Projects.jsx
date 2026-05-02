import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { MagneticButton, OptimizedImage, PageShell } from '../components/Premium';
import { profile, projects } from '../data/portfolio';

const ProjectCard = memo(function ProjectCard({ project, index, featured = false, reversed = false }) {
  const github = profile.socials.find((social) => social.label === 'GitHub')?.href;

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`story-panel story-panel-shadow grid overflow-hidden bg-card ${
        featured ? 'lg:grid-cols-[1.18fr_0.82fr]' : reversed ? 'lg:grid-cols-[0.72fr_1.28fr]' : ''
      }`}
    >
      <OptimizedImage
        src={project.image}
        alt={`${project.title} preview`}
        aspect={featured || reversed ? 'aspect-[16/10] lg:aspect-auto' : 'aspect-[4/3]'}
        className={reversed ? 'lg:order-2' : ''}
        imgClassName="group-hover:scale-105"
      />
      <div className="flex min-h-[330px] flex-col justify-between p-6 md:p-8">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="story-chip bg-soft-ice/60">{String(index + 1).padStart(3, '0')}</span>
            <span className="story-chip bg-card">{project.category}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="story-chip bg-soft-ice/55">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-6 font-display text-3xl font-black uppercase leading-[0.95] md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">{project.summary}</p>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a href={github} className="story-chip bg-card" aria-label="GitHub profile">
            <FaGithub />
          </a>
          <button type="button" className="story-chip bg-card" aria-label="Live preview">
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </motion.article>
  );
});

const Projects = () => {
  const [firstProject, secondProject, thirdProject, ...restProjects] = projects;

  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-20 pt-32 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-6 w-fit">WORK.INDEX</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
            <h1 className="font-display text-[clamp(4.4rem,10vw,10rem)] font-black uppercase leading-[0.82]">
              Work
            </h1>
            <div className="border-l-4 border-ice-blue pl-6">
              <p className="text-xl leading-8 text-slate-600">
                A curated selection of engineering projects built around clean architecture, performance, and polished user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-grid-bg border-b border-steel px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          {firstProject && <ProjectCard project={firstProject} index={0} featured />}
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            {secondProject && <ProjectCard project={secondProject} index={1} />}
            {thirdProject && <ProjectCard project={thirdProject} index={2} />}
          </div>
          {restProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 3} reversed />
          ))}
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center text-center">
            <div>
              <p className="story-chip mx-auto mb-5 w-fit">SYS.ARCHIVE_V3</p>
              <h2 className="story-heading">Project gallery</h2>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              The archive keeps the reference-site technical table feeling, but with your real project categories and stack.
            </p>
          </div>

          <div className="story-panel overflow-hidden bg-card">
            <div className="hidden grid-cols-[0.28fr_1.2fr_0.75fr_0.65fr] border-b border-steel bg-soft-ice/55 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500 md:grid">
              <span>ID</span>
              <span>System name</span>
              <span>Stack</span>
              <span>Signal</span>
            </div>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="grid gap-4 border-b border-steel px-5 py-6 last:border-b-0 md:grid-cols-[0.28fr_1.2fr_0.75fr_0.65fr] md:items-center"
              >
                <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(3, '0')}</span>
                <span className="font-display text-2xl font-black uppercase">{project.title}</span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-ice-blue">
                  {project.tags.slice(0, 3).join(' / ')}
                </span>
                <span className="text-sm text-slate-500">{project.metrics?.[0] || project.category}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MagneticButton to="/contact">Talk about a build</MagneticButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Projects);

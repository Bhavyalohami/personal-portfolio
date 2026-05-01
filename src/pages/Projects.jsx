import React, { memo } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { MagneticButton, PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets, useStoryRows } from '../components/Storytelling';
import { projects } from '../data/portfolio';

const Projects = () => {
  const archiveRows = useStoryRows(projects);
  const projectSteps = projects.map((project, index) => ({
    kicker: `${project.category} / ${project.period}`,
    title: project.title,
    body: project.story,
    visualBody: project.summary,
    points: project.metrics,
    tags: project.tags,
    image: storyAssets.projects,
    quadrant: index,
  }));

  return (
    <PageShell>
      <StoryHero
        eyebrow="SYS.ARCHIVE_V3"
        title="Projects that switch on scroll"
        copy="The work page is now a guided archive. Each project owns a scroll chapter, and the visual board highlights the matching product scene as you pass it."
        meta={['Real Estate', 'HRMS', 'Healthcare', 'Performance']}
        image={storyAssets.projects}
      />

      <StoryScroller
        eyebrow="Active project log"
        title="One product story at a time"
        copy="Scroll through the cards on the left. React Intersection Observer updates the sticky visual, project label, stack, and highlighted quadrant."
        steps={projectSteps}
        image={storyAssets.projects}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="story-chip mb-5 w-fit">Archive table</p>
            <h2 className="story-heading">Project index</h2>
          </div>
          <ArchiveTable rows={archiveRows} />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="story-panel bg-card p-6 transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_rgba(31,111,235,0.22)]">
                <p className="story-chip mb-5 w-fit">{String(index + 1).padStart(3, '0')}</p>
                <h3 className="font-display text-3xl font-black uppercase leading-none">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="story-chip bg-soft-ice/60">{tag}</span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <a href="https://github.com/" className="story-chip bg-card" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <button type="button" className="story-chip bg-card" aria-label="Live preview">
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </article>
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

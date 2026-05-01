import React, { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MagneticButton, Marquee, PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets, useStoryRows } from '../components/Storytelling';
import { profile, projects, skillGroups } from '../data/portfolio';

const marqueeItems = ['Architecture', 'React', 'Django', 'Motion', 'Dashboards', 'APIs', 'Performance'];

const buildSteps = [
  {
    kicker: '01 / intent',
    title: 'Decode the brief',
    body: 'I start by turning a vague product ask into a usable interface story: who needs it, what they do first, and what must feel effortless.',
    visualBody: 'The first chapter maps the product, user path, and technical constraints before any component gets built.',
    points: ['User path', 'Product goal', 'Interface hierarchy'],
    tags: ['UX', 'Story', 'Scope'],
  },
  {
    kicker: '02 / system',
    title: 'Design the engine',
    body: 'The UI becomes a system: reusable sections, consistent cards, loading states, responsive grids, and data-ready components.',
    visualBody: 'The portfolio now behaves like a system map instead of a static page: chapters, panels, and signals.',
    points: ['Component logic', 'Reusable patterns', 'Responsive rules'],
    tags: ['React', 'Tailwind', 'State'],
  },
  {
    kicker: '03 / launch',
    title: 'Ship the feel',
    body: 'Motion is used like punctuation. Scroll reveals, active project switching, and tactile hover states guide attention without slowing the site.',
    visualBody: 'The final pass is polish: movement, performance, spacing, and images that feel intentionally created for the story.',
    points: ['Intersection observer', 'Transform motion', 'Fast image paths'],
    tags: ['Motion', 'Speed', 'Deploy'],
  },
];

const Home = () => {
  const archiveRows = useStoryRows(projects);
  const skillSteps = skillGroups.map((group, index) => ({
    kicker: `0${index + 1} / module`,
    title: group.title,
    body: `${group.title} is part of the operating system behind the portfolio: ${group.items
      .slice(0, 4)
      .map((item) => item.name)
      .join(', ')}.`,
    visualBody: 'Each stack group is presented as a module in the wider build system.',
    points: group.items.slice(0, 3).map((item) => `${item.name} / ${item.level}%`),
    tags: group.items.slice(0, 4).map((item) => item.name),
  }));

  return (
    <PageShell>
      <StoryHero
        eyebrow={`${profile.role} / Jaipur`}
        title="Portfolio as product system"
        copy="A Stitch-inspired rebuild with our blue brand colors: visible grid, hard panels, active scroll states, generated visuals, and a page-by-page story of how I build."
        meta={['React', 'Intersection Observer', 'Framer Motion', 'Vercel ready']}
        image={storyAssets.system}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <MagneticButton to="/projects">Watch projects switch</MagneticButton>
          <MagneticButton to="/contact" variant="secondary">Start contact flow</MagneticButton>
        </div>
      </StoryHero>

      <Marquee items={marqueeItems} />

      <StoryScroller
        eyebrow="Build narrative"
        title="Scroll the system from idea to launch"
        copy="Every section is now a story checkpoint. As you move, the visual side stays anchored and the active chapter changes using react-intersection-observer."
        steps={buildSteps}
        image={storyAssets.system}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">Project archive</p>
              <h2 className="story-heading">Featured builds indexed</h2>
            </div>
            <a href="/projects" className="story-chip group bg-card">
              Open work log <FaArrowRight className="ml-2 transition group-hover:translate-x-1" />
            </a>
          </div>
          <ArchiveTable rows={archiveRows} />
        </div>
      </section>

      <StoryScroller
        eyebrow="Skill modules"
        title="The stack becomes the story"
        copy="Instead of a plain checklist, the skill groups read like system modules: frontend craft, backend flow, and delivery tools."
        steps={skillSteps}
        image={storyAssets.projects}
      />
    </PageShell>
  );
};

export default memo(Home);

import React, { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MagneticButton, Marquee, PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets, useStoryRows } from '../components/Storytelling';
import { profile, projects, skillGroups } from '../data/portfolio';

const marqueeItems = ['Architecture', 'Product UX', 'Dashboards', 'APIs', 'Performance', 'Delivery', 'Polish'];

const buildSteps = [
  {
    kicker: '01 / intent',
    title: 'Decode the brief',
    body: 'I start by turning a vague product ask into a usable interface story: who needs it, what they do first, and what must feel effortless.',
    visualBody: 'The first chapter maps the product, user path, and technical constraints before the work begins.',
    points: ['User path', 'Product goal', 'Interface hierarchy'],
    tags: ['UX', 'Story', 'Scope'],
  },
  {
    kicker: '02 / system',
    title: 'Design the engine',
    body: 'The experience becomes a system: clear sections, consistent patterns, focused content, and layouts that stay easy to scan.',
    visualBody: 'Strong products feel organized before they feel decorative. This chapter turns scattered ideas into a usable structure.',
    points: ['Clear sections', 'Reusable patterns', 'Responsive flow'],
    tags: ['Structure', 'Clarity', 'Scale'],
  },
  {
    kicker: '03 / launch',
    title: 'Ship the feel',
    body: 'The final pass is about feel: every section should be fast, confident, polished, and simple to understand.',
    visualBody: 'The launch chapter focuses on the details people remember: rhythm, readability, spacing, and a sense of trust.',
    points: ['Smooth journey', 'Fast decisions', 'Polished handoff'],
    tags: ['Polish', 'Speed', 'Launch'],
  },
];

const Home = () => {
  const archiveRows = useStoryRows(projects);
  const skillSteps = skillGroups.map((group, index) => ({
    kicker: `0${index + 1} / module`,
    title: group.title,
    body: `${group.title} is part of my delivery toolkit for building polished product experiences: ${group.items
      .slice(0, 4)
      .map((item) => item.name)
      .join(', ')}.`,
    visualBody: 'Each stack group supports a different part of the work, from interface craft to reliable delivery.',
    points: group.items.slice(0, 3).map((item) => `${item.name} / ${item.level}%`),
    tags: group.items.slice(0, 4).map((item) => item.name),
  }));

  return (
    <PageShell>
      <StoryHero
        eyebrow={`${profile.role} / Jaipur`}
        title="Portfolio as product system"
        copy="A portfolio built like a polished product: clear stories, sharp visuals, confident layouts, and fast paths to the work that matters."
        meta={['Product UX', 'Clean systems', 'Fast interfaces', 'Production ready']}
        image={storyAssets.system}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <MagneticButton to="/projects">View featured work</MagneticButton>
          <MagneticButton to="/contact" variant="secondary">Start a project</MagneticButton>
        </div>
      </StoryHero>

      <Marquee items={marqueeItems} />

      <StoryScroller
        eyebrow="Build narrative"
        title="Scroll the system from idea to launch"
        copy="A guided look at how I turn product intent into clear interfaces, reliable systems, and launch-ready experiences."
        steps={buildSteps}
        image={storyAssets.system}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center text-center">
            <p className="story-chip mx-auto mb-5 w-fit">Project archive</p>
            <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:text-left">
              <h2 className="story-heading max-w-4xl">Featured builds indexed</h2>
              <a href="/projects" className="story-chip group shrink-0 bg-card">
                Open work log <FaArrowRight className="ml-2 transition group-hover:translate-x-1" />
              </a>
            </div>
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

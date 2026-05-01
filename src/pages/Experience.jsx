import React, { memo } from 'react';
import { MagneticButton, PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const steps = experiences.map((item) => ({
    kicker: `${item.company} / ${item.period}`,
    title: item.role,
    body: item.description,
    visualBody: `${item.company} - ${item.location}`,
    points: item.wins,
    tags: [item.company, item.location],
  }));

  const rows = experiences.map((item) => ({
    name: item.role,
    stack: item.company,
    signal: item.period,
  }));

  return (
    <PageShell>
      <StoryHero
        eyebrow="EXPERIENCE.LOG"
        title="A timeline of shipped interfaces"
        copy="Experience is now shown as a product log: each role becomes a chapter with wins, constraints, and outcomes."
        meta={experiences.map((item) => item.period)}
        image={storyAssets.projects}
      />

      <StoryScroller
        eyebrow="Career sequence"
        title="Roles revealed as chapters"
        copy="Scroll through the timeline and the sticky panel updates with the active role, company, and delivery signals."
        steps={steps}
        image={storyAssets.projects}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-5 w-fit">Work archive</p>
          <h2 className="story-heading mb-10">Role index</h2>
          <ArchiveTable rows={rows} />
          <div className="mt-12 flex justify-center">
            <MagneticButton to="/resume">Open resume</MagneticButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Experience);

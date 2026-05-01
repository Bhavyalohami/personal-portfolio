import React, { memo } from 'react';
import { PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  const steps = skillGroups.map((group, index) => ({
    kicker: `Module ${String(index + 1).padStart(2, '0')}`,
    title: group.title,
    body: `A ${group.title.toLowerCase()} chapter focused on the tools I use to turn interface ideas into working products.`,
    visualBody: group.items.map((item) => `${item.name} ${item.level}%`).join(' / '),
    points: group.items.map((item) => `${item.name} - ${item.level}%`),
    tags: group.items.slice(0, 5).map((item) => item.name),
  }));

  const rows = skillGroups.flatMap((group) =>
    group.items.slice(0, 3).map((item) => ({
      name: item.name,
      stack: group.title,
      signal: `${item.level}% command`,
    }))
  );

  return (
    <PageShell>
      <StoryHero
        eyebrow="SKILL.MODULES"
        title="Stack designed for expressive products"
        copy="Skills are presented like system modules: frontend surface, backend flow, and delivery tools working together."
        meta={['Frontend', 'Backend', 'Tools', 'Performance']}
        image={storyAssets.system}
      />

      <StoryScroller
        eyebrow="Skill story"
        title="Each module activates on scroll"
        copy="The page uses intersection observer to bring each skill chapter into focus, with the sticky visual updating as you move."
        steps={steps}
        image={storyAssets.system}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-5 w-fit">Capability archive</p>
          <h2 className="story-heading mb-10">Tech inventory</h2>
          <ArchiveTable rows={rows} />
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Skills);

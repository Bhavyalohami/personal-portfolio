import React, { memo } from 'react';
import { PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { education } from '../data/portfolio';

const Education = () => {
  const steps = education.map((item) => ({
    kicker: `${item.period} / ${item.location}`,
    title: item.degree,
    body: `${item.field} at ${item.institution}. This chapter supports the practical direction of my frontend and full-stack work.`,
    visualBody: item.notes.join(' / '),
    points: item.notes,
    tags: [item.field, item.institution],
  }));

  const rows = education.map((item) => ({
    name: item.degree,
    stack: item.field,
    signal: item.period,
  }));

  return (
    <PageShell>
      <StoryHero
        eyebrow="EDUCATION.BASE_LAYER"
        title="Academic roots practical direction"
        copy="Education is treated as the base layer: the fundamentals, the problem-solving habits, and the technical vocabulary behind the work."
        meta={education.map((item) => item.period)}
        image={storyAssets.system}
      />

      <StoryScroller
        eyebrow="Learning sequence"
        title="The foundation scrolls forward"
        copy="Each education card activates like a chapter in the wider system story, from computer science foundations to current product thinking."
        steps={steps}
        image={storyAssets.system}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-5 w-fit">Learning archive</p>
          <h2 className="story-heading mb-10">Education index</h2>
          <ArchiveTable rows={rows} />
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Education);

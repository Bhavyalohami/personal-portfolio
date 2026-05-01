import React, { memo } from 'react';
import { FaDownload } from 'react-icons/fa';
import { MagneticButton, PageShell } from '../components/Premium';
import { StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { education, experiences, profile, stats } from '../data/portfolio';

const About = () => {
  const storySteps = [
    {
      kicker: 'Origin',
      title: 'Curiosity became a system',
      body: 'I started by understanding how interfaces behave, then kept pushing until design, code, and product logic started working together.',
      points: ['Interface fundamentals', 'Problem solving', 'Visual hierarchy'],
      tags: ['Learning', 'UI', 'Craft'],
    },
    {
      kicker: 'Practice',
      title: 'Production shaped the eye',
      body: 'Client work and real product constraints taught me to care about loading states, role-based flows, data clarity, and maintainable frontend systems.',
      points: experiences.map((item) => item.company).slice(0, 3),
      tags: ['React', 'Django', 'Dashboards'],
    },
    {
      kicker: 'Direction',
      title: 'Now the work tells a story',
      body: 'This portfolio is designed as an operating manual for my taste: direct, technical, polished, and built for smooth interaction.',
      points: education.map((item) => item.degree),
      tags: ['Storytelling', 'Motion', 'Systems'],
    },
  ];

  return (
    <PageShell>
      <StoryHero
        eyebrow="ABOUT.SYSTEM_PROFILE"
        title="Developer with a designer's eye"
        copy={profile.intro}
        meta={stats.map((stat) => `${stat.value} ${stat.label}`)}
        image={storyAssets.system}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <MagneticButton to="/projects">See work</MagneticButton>
          <a href={profile.resume} download className="story-chip bg-card px-6 py-4">
            <FaDownload className="mr-2" /> Download resume
          </a>
        </div>
      </StoryHero>

      <StoryScroller
        eyebrow="Personal blueprint"
        title="From curiosity to shipped systems"
        copy="The About page now reads like a journey map: origin, production practice, and the way I now approach portfolio-grade interfaces."
        steps={storySteps}
        image={storyAssets.system}
      />
    </PageShell>
  );
};

export default memo(About);

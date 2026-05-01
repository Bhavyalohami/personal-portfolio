import React, { memo } from 'react';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { PageShell } from '../components/Premium';
import { ArchiveTable, StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { education, experiences, profile, projects, skillGroups, stats } from '../data/portfolio';

const Resume = () => {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name));
  const steps = [
    {
      kicker: 'Profile',
      title: profile.name,
      body: 'React / Full-Stack Developer building scalable web applications with responsive interfaces, reusable components, role-based dashboards, and API integrations.',
      points: [profile.email, profile.phone, profile.location],
      tags: [profile.role],
    },
    {
      kicker: 'Experience',
      title: 'Production record',
      body: 'Current work includes React, Next.js, Django, REST APIs, dashboards, product flows, and frontend performance improvements.',
      points: experiences.map((item) => `${item.role} / ${item.company}`),
      tags: experiences.map((item) => item.period),
    },
    {
      kicker: 'Proof',
      title: 'Projects and stack',
      body: 'The resume story closes with projects, skills, and the education base that supports the build process.',
      points: projects.slice(0, 3).map((project) => project.title),
      tags: skills.slice(0, 6),
    },
  ];

  const rows = [
    ...stats.map((stat) => ({ name: stat.label, stack: stat.value, signal: 'profile metric' })),
    ...education.map((item) => ({ name: item.degree, stack: item.field, signal: item.period })),
  ];

  return (
    <PageShell>
      <StoryHero
        eyebrow="RESUME.SNAPSHOT"
        title="A polished snapshot of the work"
        copy="The resume page becomes a compact story: profile, production record, projects, skills, and a direct PDF download."
        meta={[profile.email, profile.location, profile.role]}
        image={storyAssets.projects}
      >
        <a href={profile.resume} download className="story-chip mt-9 bg-ice-blue px-6 py-4 text-white">
          <FaDownload className="mr-2" /> Download PDF
        </a>
      </StoryHero>

      <StoryScroller
        eyebrow="Resume sequence"
        title="Scan the candidate card"
        copy="The core resume sections now reveal as scroll chapters, keeping the page polished without making the PDF link feel lonely."
        steps={steps}
        image={storyAssets.projects}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="story-panel story-panel-shadow bg-card p-7">
            <p className="story-chip mb-5 w-fit">Candidate card</p>
            <h2 className="font-display text-5xl font-black uppercase leading-none">{profile.name}</h2>
            <div className="mt-8 space-y-4 text-slate-600">
              <p className="flex items-center gap-3"><FaEnvelope className="text-ice-blue" /> {profile.email}</p>
              <p className="flex items-center gap-3"><FaPhone className="text-ice-blue" /> {profile.phone}</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-ice-blue" /> {profile.location}</p>
            </div>
          </aside>
          <ArchiveTable rows={rows} />
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Resume);

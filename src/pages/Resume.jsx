import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MagneticButton, PageShell } from '../components/Premium';
import { education, experiences, profile, projects, skillGroups, stats } from '../data/portfolio';

const Resume = () => {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name)).slice(0, 12);

  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-16 pt-32 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">RESUME.SNAPSHOT</p>
              <h1 className="font-display text-[clamp(3.4rem,9vw,9.4rem)] font-black uppercase leading-[0.82]">
                Candidate dossier
              </h1>
            </div>
            <div className="story-panel story-panel-shadow bg-card p-6">
              <p className="text-lg leading-8 text-slate-600">
                A compact scan of profile, current role, stack, education, and proof of work, with the PDF one tap away.
              </p>
              <a href={profile.resume} download className="story-chip mt-6 bg-ice-blue px-6 py-4 text-white">
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_1fr]">
          <aside className="story-panel story-panel-shadow bg-card p-7">
            <p className="story-chip mb-6 w-fit">Candidate card</p>
            <h2 className="font-display text-5xl font-black uppercase leading-none">{profile.name}</h2>
            <p className="mt-4 text-xl font-semibold text-ice-blue">{profile.role}</p>
            <div className="mt-8 space-y-4 text-slate-600">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-ice-blue" /> {profile.email}
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-ice-blue" /> {profile.phone}
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-ice-blue" /> {profile.location}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="story-panel bg-soft-ice/45 p-4">
                  <p className="font-display text-3xl font-black text-ice-blue">{stat.value}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-6">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="story-panel bg-card p-6 md:p-8"
            >
              <p className="story-chip mb-5 w-fit">Experience</p>
              <div className="space-y-6">
                {experiences.map((item) => (
                  <div key={`${item.role}-${item.company}`} className="border-b border-steel pb-5 last:border-b-0 last:pb-0">
                    <div className="flex flex-col justify-between gap-2 md:flex-row">
                      <h3 className="font-display text-3xl font-black uppercase">{item.role}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{item.period}</span>
                    </div>
                    <p className="text-ice-blue">{item.company}</p>
                    <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="story-panel bg-card p-6"
              >
                <p className="story-chip mb-5 w-fit">Projects</p>
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <p key={project.title} className="font-display text-2xl font-black uppercase leading-none">
                      {project.title}
                    </p>
                  ))}
                </div>
              </motion.article>
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="story-panel bg-card p-6"
              >
                <p className="story-chip mb-5 w-fit">Education</p>
                {education.map((item) => (
                  <div key={item.degree} className="mb-5 last:mb-0">
                    <p className="font-display text-2xl font-black uppercase leading-none">{item.degree}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.institution}</p>
                  </div>
                ))}
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <section className="story-grid-bg px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">Skill scan</p>
              <h2 className="story-heading">Readable stack</h2>
            </div>
            <MagneticButton to="/contact">Contact me</MagneticButton>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="story-chip bg-card px-4 py-3">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Resume);

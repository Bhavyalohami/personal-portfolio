import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaFilePdf, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { PageShell, SectionHeader, reveal } from '../components/Premium';
import { education, experiences, profile, projects, skillGroups, stats } from '../data/portfolio';

const Resume = () => {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name));

  return (
    <PageShell>
      <section className="px-4 pb-24 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Resume"
            title="A polished snapshot of the work"
            copy="Download the PDF or scan the high-signal version below."
          />

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="premium-card h-fit rounded-[2rem] p-7">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-ice-blue">Candidate card</p>
              <h1 className="mt-4 font-display text-5xl font-bold">{profile.name}</h1>
              <p className="mt-2 text-xl text-slate-600">{profile.role}</p>
              <div className="mt-8 space-y-4 text-slate-600">
                <p className="flex items-center gap-3"><FaEnvelope className="text-ice-blue" /> {profile.email}</p>
                <p className="flex items-center gap-3"><FaPhone className="text-ice-blue" /> {profile.phone}</p>
                <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-ice-blue" /> {profile.location}</p>
              </div>
              <a
                href={profile.resume}
                download
                className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-ice-blue px-6 py-4 font-bold uppercase tracking-[0.18em] text-white"
              >
                <FaDownload /> Download PDF
              </a>
            </aside>

            <div className="space-y-6">
              <motion.section variants={reveal} initial="hidden" animate="visible" className="rounded-[2rem] border border-steel bg-card/70 p-7">
                <h2 className="font-display text-3xl font-bold text-ice-blue">Profile</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  React / Full-Stack Developer with 2+ years of experience building scalable web applications using
                  React.js, Next.js, JavaScript, Tailwind CSS, Node.js, Django, REST APIs, SQL, and MongoDB. Skilled in
                  responsive interfaces, reusable components, role-based dashboards, state management, and performance optimization.
                </p>
              </motion.section>

              <div className="grid gap-4 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={index * 0.06}
                    className="rounded-3xl border border-steel bg-card/70 p-5"
                  >
                    <p className="font-display text-3xl font-bold text-ice-blue">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <section className="rounded-[2rem] border border-steel bg-card/70 p-7">
                <h2 className="mb-5 flex items-center gap-3 font-display text-3xl font-bold text-ice-blue"><FaFilePdf /> Experience</h2>
                <div className="space-y-5">
                  {experiences.map((item) => (
                    <div key={`${item.company}-${item.period}`} className="border-l border-ice-blue/25 pl-5">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
                      <h3 className="mt-1 font-display text-2xl font-bold">{item.role}</h3>
                      <p className="text-slate-500">{item.company}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[2rem] border border-steel bg-card/70 p-7">
                <h2 className="font-display text-3xl font-bold text-ice-blue">Featured projects</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {projects.slice(0, 4).map((project) => (
                    <div key={project.title} className="rounded-3xl bg-card/80 p-5">
                      <h3 className="font-display text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{project.summary}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[2rem] border border-steel bg-card/70 p-7">
                  <h2 className="font-display text-3xl font-bold text-ice-blue">Skills</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-steel px-3 py-2 text-sm text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[2rem] border border-steel bg-card/70 p-7">
                  <h2 className="font-display text-3xl font-bold text-ice-blue">Education</h2>
                  {education.slice(0, 1).map((item) => (
                    <div key={item.degree} className="mt-5">
                      <h3 className="font-display text-2xl font-bold">{item.degree}</h3>
                      <p className="text-slate-500">{item.field}</p>
                      <p className="text-slate-400">{item.institution} - {item.period}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Resume;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBookOpen, FaCode, FaCompass, FaDownload } from 'react-icons/fa';
import { MagneticButton, PageShell, SectionHeader, TiltPanel, reveal } from '../components/Premium';
import { education, experiences, profile, stats } from '../data/portfolio';

const chapters = [
  {
    icon: FaCompass,
    title: 'Curiosity became a direction',
    copy: 'I started by wanting to understand how interfaces work, then kept going until design, code, and product thinking began to feel like one language.',
  },
  {
    icon: FaCode,
    title: 'Production sharpened the craft',
    copy: 'React, Next.js, Django, APIs, dashboards, and real clients taught me to care about speed, clarity, edge cases, and the tiny details users feel.',
  },
  {
    icon: FaBookOpen,
    title: 'Still learning, still building',
    copy: 'The next version of my work is more cinematic, more useful, and more intentional. This portfolio is designed to show that trajectory.',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-32 md:px-6">
        <motion.div style={{ y }} className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-ice-blue/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="About"
              title="A developer with a designer's eye"
              copy="I build interfaces that are practical under the hood and memorable on the surface."
            />
            <div className="flex flex-wrap gap-4">
              <MagneticButton to="/projects">See projects</MagneticButton>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-3 rounded-full border border-steel px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-ice-blue hover:text-ice-blue"
              >
                <FaDownload /> Download resume
              </a>
            </div>
          </div>
          <TiltPanel className="rounded-[2rem] p-5">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1300"
                alt="Developer desk"
                className="h-[520px] w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3F]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/45 bg-white/88 p-6 shadow-[0_24px_70px_rgba(31,111,235,0.18)] backdrop-blur-xl">
                <h3 className="font-display text-3xl font-bold">{profile.name}</h3>
                <p className="mt-2 text-slate-600">{profile.intro}</p>
              </div>
            </div>
          </TiltPanel>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.08}
                viewport={{ once: true }}
                className="premium-card rounded-3xl p-6"
              >
                <p className="font-display text-5xl font-bold text-ice-blue">{stat.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Narrative" title="The story arc" copy="A cleaner, more human version of the usual portfolio timeline." />
          <div className="grid gap-6 lg:grid-cols-3">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <motion.div
                  key={chapter.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={index * 0.1}
                  viewport={{ once: true }}
                  className="premium-card rounded-[1.75rem] p-7"
                >
                  <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-ice-blue text-white">
                    <Icon />
                  </div>
                  <h3 className="font-display text-3xl font-bold">{chapter.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{chapter.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-steel bg-card/70 p-8 md:p-10">
            <h2 className="font-display text-4xl font-bold text-ice-blue">Work timeline</h2>
            <div className="mt-8 space-y-5">
              {experiences.map((item) => (
                <div key={`${item.company}-${item.period}`} className="border-l border-ice-blue/25 pl-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-ice-blue">{item.period}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.role}</h3>
                  <p className="text-slate-500">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-steel bg-card/70 p-8 md:p-10">
            <h2 className="font-display text-4xl font-bold text-ice-blue">Education</h2>
            <div className="mt-8 space-y-5">
              {education.map((item) => (
                <div key={item.degree} className="rounded-2xl bg-card/70 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.degree}</h3>
                  <p className="text-slate-500">{item.field} - {item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { MagneticButton, PageShell, SectionHeader, reveal } from '../components/Premium';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <PageShell>
      <section className="px-4 pb-24 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Experience"
            title="A timeline of shipped interfaces"
            copy="Each step is shown like a product milestone, with the work, context, and practical outcomes easy to scan."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ice-blue/45 to-transparent md:left-1/2 md:block" />
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  custom={index * 0.08}
                  viewport={{ once: true, margin: '-80px' }}
                  className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'}`}
                >
                  <div className="premium-card rounded-[1.75rem] p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-ice-blue">{item.period}</p>
                    <h2 className="mt-3 font-display text-3xl font-bold">{item.role}</h2>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2"><FaBuilding /> {item.company}</span>
                      <span className="flex items-center gap-2"><FaMapMarkerAlt /> {item.location}</span>
                    </div>
                    <p className="mt-5 leading-7 text-slate-600">{item.description}</p>
                    <div className="mt-6 grid gap-2">
                      {item.wins.map((win) => (
                        <span key={win} className="rounded-full border border-steel bg-card/70 px-4 py-2 text-sm text-slate-600">
                          {win}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <MagneticButton to="/resume">View resume</MagneticButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Experience;

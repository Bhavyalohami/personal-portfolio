import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { PageShell, SectionHeader, TiltPanel, reveal } from '../components/Premium';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <PageShell>
      <section className="px-4 pb-24 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Education"
            title="Academic roots, practical direction"
            copy="A clean, animated education page that keeps the focus on computer science foundations and continuous learning."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((item, index) => (
              <TiltPanel key={item.degree} className="rounded-[2rem] p-7">
                <motion.div variants={reveal} initial="hidden" animate="visible" custom={index * 0.08}>
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ice-blue text-2xl text-white">
                    <FaGraduationCap />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-ice-blue">{item.period}</p>
                  <h2 className="mt-4 font-display text-4xl font-bold">{item.degree}</h2>
                  <p className="mt-2 text-xl text-slate-700">{item.field}</p>
                  <p className="mt-2 text-slate-400">{item.institution} - {item.location}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.notes.map((note) => (
                      <span key={note} className="rounded-full border border-steel px-3 py-2 text-sm text-slate-500">
                        {note}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltPanel>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-steel bg-card/70 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-ice-blue">Learning loop</p>
            <h2 className="mt-4 font-display text-4xl font-bold">The degree is the base layer. The portfolio is the proof.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              My current learning focus is advanced frontend motion, scalable component systems, API integration patterns,
              and making complex dashboards feel lighter to use.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Education;

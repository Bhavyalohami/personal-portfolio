import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton, PageShell } from '../components/Premium';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-16 pt-32 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">EXPERIENCE.LOG</p>
              <h1 className="font-display text-[clamp(3rem,10vw,10rem)] font-black uppercase leading-[0.78] [overflow-wrap:anywhere]">
                Career sequence
              </h1>
            </div>
            <div className="story-panel bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-ice-blue">Current operating mode</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A role-by-role log of shipped interfaces, reusable systems, product flows, and delivery habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_1fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="story-chip mb-5 w-fit">Timeline</p>
            <h2 className="font-display text-4xl font-black uppercase leading-none">Shipped work</h2>
            <div className="mt-8 hidden h-72 w-px bg-ice-blue lg:block" />
          </aside>

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="story-panel story-panel-shadow bg-card p-6 md:p-8"
              >
                <div className="grid gap-5 border-b border-steel pb-6 md:grid-cols-[1fr_auto]">
                  <div>
                    <p className="story-chip mb-5 w-fit">{String(index + 1).padStart(2, '0')} / Role</p>
                    <h3 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">{item.role}</h3>
                  </div>
                  <div className="font-mono text-sm uppercase tracking-[0.18em] text-slate-500 md:text-right">
                    <p>{item.period}</p>
                    <p className="mt-2 text-ice-blue">{item.location}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-8 md:grid-cols-[0.36fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-black uppercase">{item.company}</p>
                  </div>
                  <div>
                    <p className="leading-8 text-slate-600">{item.description}</p>
                    <div className="mt-6 grid gap-3 md:grid-cols-3">
                      {item.wins.map((win) => (
                        <span key={win} className="story-chip bg-soft-ice/55">
                          {win}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-grid-bg px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="story-panel grid gap-8 bg-card p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="story-chip mb-5 w-fit">Resume handoff</p>
              <h2 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">
                Want the clean PDF version?
              </h2>
            </div>
            <MagneticButton to="/resume">Open resume</MagneticButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Experience);

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/Premium';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-20 pt-32 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-6 w-fit">EDUCATION.BASE_LAYER</p>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <h1 className="font-display text-[clamp(3rem,7vw,7.2rem)] font-black uppercase leading-[0.88]">
                Foundation map
              </h1>
            </div>
            <p className="story-panel bg-card p-6 text-lg leading-8 text-slate-600">
              Education is treated as the base layer: fundamentals, problem solving, and technical vocabulary behind the work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.62, delay: index * 0.08 }}
                className={`story-panel story-panel-shadow bg-card p-7 md:p-8 ${
                  index === 0 ? 'lg:min-h-[520px]' : 'lg:mt-24 lg:min-h-[430px]'
                }`}
              >
                <div className="mb-8 flex items-start justify-between gap-5 border-b border-steel pb-6">
                  <span className="story-chip bg-soft-ice/60">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">{item.period}</span>
                </div>
                <h2 className="font-display text-3xl font-black uppercase leading-tight md:text-5xl">{item.degree}</h2>
                <p className="mt-5 text-xl font-semibold text-ice-blue">{item.field}</p>
                <p className="mt-2 text-slate-600">{item.institution}</p>
                <p className="mt-1 font-mono text-sm uppercase tracking-[0.16em] text-slate-500">{item.location}</p>

                <div className="mt-10 grid gap-3">
                  {item.notes.map((note) => (
                    <span key={note} className="story-panel bg-soft-ice/45 px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] text-slate-600">
                      {note}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-grid-bg px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-5xl text-center">
            <p className="story-chip mx-auto mb-5 w-fit">Learning logic</p>
            <h2 className="story-heading">How it compounds</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {['Computer science fundamentals', 'Structured problem solving', 'Product-minded implementation'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="story-panel bg-card p-6"
              >
                <p className="story-chip mb-10 w-fit">0{index + 1}</p>
                <p className="font-display text-3xl font-black uppercase leading-none">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Education);

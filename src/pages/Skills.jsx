import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/Premium';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  const allSkills = skillGroups.flatMap((group) => group.items.map((item) => ({ ...item, group: group.title })));
  const topSkills = allSkills.slice(0, 9);

  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-16 pt-32 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="story-chip mb-5 w-fit">CORE MODULES</p>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.82]">
            <span className="block">System</span>
            <span className="block text-[clamp(2.6rem,8.2vw,7.4rem)]">Architecture</span>
          </h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:items-start">
            <p className="max-w-sm text-lg leading-8 text-slate-600">
              A board-style view of the stack behind the portfolio, grouped by the way each layer supports real product work.
            </p>
            <div className="story-panel story-panel-shadow bg-card p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-steel pb-5">
                <h2 className="font-display text-2xl font-black uppercase">System status</h2>
                <span className="story-chip bg-soft-ice/60">v.24.0.1</span>
              </div>
              <div className="mt-7 space-y-6">
                {skillGroups.map((group) => {
                  const average = Math.round(group.items.reduce((sum, item) => sum + item.level, 0) / group.items.length);
                  return (
                    <div key={group.title}>
                      <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-slate-600">
                        <span>{group.title} architecture</span>
                        <span>{average}%</span>
                      </div>
                      <div className="h-3 border border-slate-300 bg-white">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${average}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full bg-ice-blue"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">Capability board</p>
              <h2 className="story-heading">Mapped stack</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Each module is grouped by how it supports the product: interface, data flow, delivery, and performance.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`story-panel bg-card p-6 ${index === 0 ? 'lg:row-span-2' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="story-chip bg-soft-ice/60">{String(index + 1).padStart(2, '0')}</span>
                    <Icon className="text-4xl text-ice-blue" />
                  </div>
                  <h3 className="mt-10 font-display text-4xl font-black uppercase leading-none">{group.title}</h3>
                  <div className="mt-7 space-y-5">
                    {group.items.map((item) => {
                      const SkillIcon = item.icon;
                      return (
                        <div key={item.name}>
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <span className="flex items-center gap-3 font-semibold text-slate-700">
                              <SkillIcon className="text-ice-blue" /> {item.name}
                            </span>
                            <span className="font-mono text-xs text-slate-500">{item.level}%</span>
                          </div>
                          <div className="h-2 bg-soft-ice">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.7 }}
                              className="h-full origin-left bg-ice-blue"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="story-grid-bg px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="story-chip mb-5 w-fit">Tech archive</p>
              <h2 className="story-heading">Inventory</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              A faster scan view for recruiters and collaborators who want the exact stack signal.
            </p>
          </div>
          <div className="story-panel overflow-hidden bg-card">
            {topSkills.map((item, index) => (
              <div
                key={`${item.group}-${item.name}`}
                className="grid gap-4 border-b border-steel px-5 py-5 last:border-b-0 md:grid-cols-[0.25fr_1fr_0.55fr_0.35fr] md:items-center"
              >
                <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(3, '0')}</span>
                <span className="font-display text-2xl font-black uppercase">{item.name}</span>
                <span className="story-chip w-fit bg-soft-ice/60">{item.group}</span>
                <span className="font-mono text-sm font-bold text-ice-blue">{item.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Skills);

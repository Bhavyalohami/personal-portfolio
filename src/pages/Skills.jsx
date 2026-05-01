import React from 'react';
import { motion } from 'framer-motion';
import { PageShell, SectionHeader, TiltPanel, reveal } from '../components/Premium';
import { skillGroups } from '../data/portfolio';

const Skills = () => {
  return (
    <PageShell>
      <section className="px-4 pb-16 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skills"
            title="A stack designed for expressive products"
            copy="Interactive indicators, icon systems, and motion reveal the technologies behind the work without turning the page into a checklist."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const GroupIcon = group.icon;
              return (
                <TiltPanel key={group.title} className="rounded-[2rem] p-7">
                  <motion.div
                    variants={reveal}
                    initial="hidden"
                    animate="visible"
                    custom={index * 0.08}
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400">Category</p>
                        <h2 className="mt-2 font-display text-4xl font-bold">{group.title}</h2>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ice-blue text-2xl text-white">
                        <GroupIcon />
                      </div>
                    </div>
                    <div className="space-y-6">
                      {group.items.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div key={skill.name}>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="flex items-center gap-3 font-semibold text-text-light">
                                <Icon style={{ color: group.accent }} /> {skill.name}
                              </span>
                              <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-soft-ice">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full rounded-full"
                                style={{ background: `linear-gradient(90deg, ${group.accent}, #ffffff)` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </TiltPanel>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 md:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-steel bg-card/70 p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-ice-blue">Working style</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ['Design-sensitive frontend', 'Interfaces are built with hierarchy, rhythm, responsive constraints, and purposeful motion.'],
              ['API-ready architecture', 'Components are designed around clear data contracts, loading states, and realistic product flows.'],
              ['Performance awareness', 'Animations stay transform-based and assets are lazy-loaded so the polish does not become drag.'],
            ].map(([title, copy], index) => (
              <motion.div
                key={title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.08}
                viewport={{ once: true }}
                className="rounded-3xl bg-card/80 p-6"
              >
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Skills;

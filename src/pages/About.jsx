import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { MagneticButton, OptimizedImage, PageShell } from '../components/Premium';
import { storyAssets } from '../components/Storytelling';
import { education, experiences, profile, skillGroups, stats } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const toolkit = skillGroups.map((group) => ({
    title: group.title,
    copy: group.items.slice(0, 2).map((item) => item.name).join(' + '),
    tags: group.items.slice(0, 4).map((item) => item.name),
  }));

  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-20 pt-32 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-xl">
            <p className="story-chip mb-5 w-fit">THE PERSPECTIVE</p>
            <p className="text-lg leading-8 text-slate-600">
              I bridge polished interface craft and practical delivery.
            </p>
          </motion.div>

          <div className="mt-16 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="story-panel story-panel-shadow bg-card"
            >
              <OptimizedImage src={storyAssets.system} alt="System architecture visual" priority aspect="aspect-[4/5]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pl-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-ice-blue">Engineering as a creative act.</p>
              <h1 className="mt-5 font-display text-[clamp(2.9rem,6.2vw,6.8rem)] font-black uppercase leading-[0.88]">
                Developer with a designer's eye
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{profile.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Design', 'Engineering', 'Delivery'].map((item) => (
                  <span key={item} className="story-chip bg-card">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <MagneticButton to="/projects">See work</MagneticButton>
                <a href={profile.resume} download className="story-chip bg-card px-6 py-4">
                  <FaDownload className="mr-2" /> Download resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/64 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="story-chip mx-auto mb-5 w-fit">The toolkit</p>
            <h2 className="story-heading">Modules I rely on</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {toolkit.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.06 }}
                className={`story-panel min-h-[250px] bg-card p-6 ${index === 3 ? 'md:col-span-2 xl:col-span-1' : ''}`}
              >
                <p className="story-chip mb-8 w-fit">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-3xl font-black uppercase leading-none">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.copy}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="story-chip bg-soft-ice/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="story-panel bg-ice-blue p-6 text-white md:col-span-2"
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/76">Current direction</p>
              <h3 className="mt-8 font-display text-3xl font-black uppercase leading-tight md:text-5xl">
                Build interfaces that feel precise, fast, and memorable.
              </h3>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="story-grid-bg px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <aside className="mx-auto mb-10 max-w-4xl text-center">
            <p className="story-chip mx-auto mb-5 w-fit">Profile log</p>
            <h2 className="font-display text-4xl font-black uppercase leading-none">Signals</h2>
          </aside>

          <div className="space-y-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="story-panel grid gap-4 bg-card p-5 md:grid-cols-[0.2fr_1fr_0.35fr] md:items-center"
              >
                <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(3, '0')}</span>
                <span className="font-display text-2xl font-black uppercase">{stat.label}</span>
                <span className="font-display text-4xl font-black text-ice-blue">{stat.value}</span>
              </motion.div>
            ))}
            <div className="story-panel grid gap-6 bg-card p-6 md:grid-cols-2">
              <div>
                <p className="story-chip mb-4 w-fit">Education</p>
                <p className="font-display text-2xl font-black uppercase">{education[0]?.degree}</p>
                <p className="mt-2 text-slate-600">{education[0]?.institution}</p>
              </div>
              <div>
                <p className="story-chip mb-4 w-fit">Current work</p>
                <p className="font-display text-2xl font-black uppercase">{experiences[0]?.role}</p>
                <p className="mt-2 text-slate-600">{experiences[0]?.company}</p>
              </div>
            </div>
            <MagneticButton to="/contact">Start a conversation</MagneticButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(About);

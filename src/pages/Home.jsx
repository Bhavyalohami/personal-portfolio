import React, { memo, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBolt, FaCode, FaCubes, FaLayerGroup, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  MagneticButton,
  Marquee,
  OptimizedImage,
  PageShell,
  SectionHeader,
  TiltPanel,
  reveal,
} from '../components/Premium';
import { profile, projects, skillGroups } from '../data/portfolio';

const heroWords = ['Ship', 'premium', 'web', 'products'];
const marqueeItems = ['React', 'Next.js', 'Django', 'Tailwind', 'REST APIs', 'Motion UI'];

const whatIDo = [
  {
    icon: FaLayerGroup,
    title: 'Premium Frontends',
    copy: 'Responsive React interfaces with hierarchy, interaction polish, and production-ready component structure.',
  },
  {
    icon: FaCubes,
    title: 'Full-Stack Flow',
    copy: 'Django, REST APIs, dashboards, forms, auth-minded UX, and data states that feel calm instead of clunky.',
  },
  {
    icon: FaBolt,
    title: 'Performance Feel',
    copy: 'Motion that stays transform-based, images that reserve space, and sections that feel fast on real devices.',
  },
];

const whyMe = [
  'Design-sensitive developer',
  'Scalable component habits',
  'Clean product storytelling',
  'Practical API integration',
];

const HeroVisual = memo(function HeroVisual({ featured }) {
  return (
    <TiltPanel className="rounded-[2rem] p-3 md:p-4">
      <div className="relative min-h-[500px] overflow-hidden rounded-[1.55rem] bg-[#0B2A5B]">
        <OptimizedImage
          priority
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1300"
          alt="Developer workstation"
          aspect="absolute inset-0"
          className="absolute inset-0"
          imgClassName="opacity-68 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3F] via-[#0B4DB3]/35 to-transparent" />
        <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-[#071B3F]/65 p-4 text-white backdrop-blur-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ice-blue">Featured build</p>
          <p className="mt-2 max-w-xs font-display text-3xl font-bold">{featured.title}</p>
        </div>
        <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
          {[
            ['2+', 'Years'],
            ['5', 'Projects'],
            ['15+', 'Stack'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/20 bg-white/92 p-4 backdrop-blur-xl">
              <p className="font-display text-3xl font-bold text-ice-blue">{value}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </TiltPanel>
  );
});

const WhatIDoCard = memo(function WhatIDoCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index * 0.08}
      className="premium-card rounded-[1.75rem] p-7"
    >
      <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-ice-blue text-white">
        <Icon />
      </div>
      <h3 className="font-display text-3xl font-bold">{item.title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{item.copy}</p>
    </motion.article>
  );
});

const FeaturedProjectCard = memo(function FeaturedProjectCard({ project, index }) {
  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={index * 0.08}
      className="group premium-card flex h-full flex-col overflow-hidden rounded-[1.75rem]"
    >
      <OptimizedImage
        src={project.image}
        alt={project.title}
        aspect="aspect-[16/10]"
        imgClassName="transition-transform duration-700 group-hover:scale-110"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-ice-blue px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            {project.category}
          </span>
          <span className="font-mono text-xs text-slate-400">{project.period}</span>
        </div>
        <h3 className="font-display text-3xl font-bold">{project.title}</h3>
        <p className="mt-4 flex-1 leading-7 text-slate-600">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-steel px-3 py-1 text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
});

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yGrid = useTransform(scrollYProgress, [0, 0.5], [0, -110]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.42], [1, 0.35]);
  const featuredProjects = useMemo(() => projects.slice(0, 3), []);
  const primarySkills = useMemo(() => skillGroups.flatMap((group) => group.items.slice(0, 3)), []);

  return (
    <PageShell>
      <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-6">
        <motion.div style={{ y: yGrid, opacity: heroOpacity }} className="pointer-events-none absolute inset-0 orbital-grid opacity-35" />
        <div className="pointer-events-none absolute -right-40 top-16 h-[36rem] w-[36rem] rounded-full border border-ice-blue/10" />
        <div className="pointer-events-none absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-ice-blue/10 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 max-w-[calc(100vw-2rem)] lg:max-w-[42rem]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex rounded-full border border-steel bg-card/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-ice-blue"
            >
              {profile.role} / Jaipur, India
            </motion.p>

            <h1 className="max-w-full font-display text-[clamp(2.8rem,10.5vw,7.1rem)] font-bold uppercase leading-[0.86] lg:text-[clamp(4.25rem,7.4vw,7.1rem)]">
              {heroWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.64, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${index === 1 ? 'animated-gradient-text' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-7 max-w-[21.5rem] text-base leading-8 text-slate-600 sm:max-w-xl md:text-xl"
            >
              I create fast, polished developer experiences that combine product logic, premium motion, and clean React
              architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton to="/projects">Explore work</MagneticButton>
              <MagneticButton to="/contact" variant="secondary">Build with me</MagneticButton>
            </motion.div>
          </div>

          <HeroVisual featured={projects[0]} />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What I do"
            title="Frontend craft with full-stack context"
            copy="A premium Home page should explain value quickly, then reward attention with motion, depth, and detail."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {whatIDo.map((item, index) => (
              <WhatIDoCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeader
              align="left"
              eyebrow="Featured projects"
              title="Interactive previews, consistent images"
              copy="Every preview uses the same aspect ratio, object-fit cover, WebP delivery, and a skeleton placeholder to reduce layout shift."
            />
            <Link to="/projects" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-ice-blue">
              View all <FaRocket className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Tech stack"
              title="Tools that keep the experience sharp"
              copy="The stack section is lightweight: icon cards, hover states, and no expensive canvas work."
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {primarySkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index * 0.035}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-steel bg-card/80 p-5 transition hover:border-ice-blue/45"
                >
                  <Icon className="mb-8 text-3xl text-ice-blue" />
                  <h3 className="font-display text-2xl font-bold">{skill.name}</h3>
                  <div className="mt-4 h-1.5 rounded-full bg-soft-ice">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-ice-blue"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-28 md:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-steel bg-card/70">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 md:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-ice-blue">Why me</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">I bridge polished UI and practical delivery.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                The result is a portfolio that feels creative, but is still engineered for real-world performance,
                maintainability, and responsive behavior.
              </p>
              <div className="mt-8">
                <MagneticButton to="/resume">See resume</MagneticButton>
              </div>
            </div>
            <div className="grid gap-px bg-steel sm:grid-cols-2">
              {whyMe.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="flex min-h-[180px] flex-col justify-between bg-card p-6"
                >
                  <FaCode className="text-3xl text-ice-blue" />
                  <span className="font-display text-2xl font-bold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Home);

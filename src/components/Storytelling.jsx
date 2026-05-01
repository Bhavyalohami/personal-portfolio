import React, { memo, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCode, FaCube, FaDatabase, FaServer } from 'react-icons/fa';

const assetBase =
  typeof window !== 'undefined' && window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '';

export const storyAssets = {
  system: `${assetBase}/assets/portfolio-story-system.jpg`,
  projects: `${assetBase}/assets/portfolio-project-story.jpg`,
};

const quadrantClass = {
  0: 'left-[3%] top-[4%]',
  1: 'right-[3%] top-[4%]',
  2: 'left-[3%] bottom-[4%]',
  3: 'right-[3%] bottom-[4%]',
};

export const StoryHero = memo(function StoryHero({
  eyebrow,
  title,
  copy,
  meta = [],
  image = storyAssets.system,
  children,
  variant = 'split',
}) {
  const words = title.split(' ');
  const centered = variant === 'poster';
  const visualLeft = variant === 'visual-left';
  const compact = variant === 'compact';
  const shellClass = compact ? 'min-h-[72vh]' : 'min-h-[calc(100vh-8rem)]';
  const gridClass = centered
    ? `${shellClass} flex items-center`
    : `grid ${shellClass} items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]`;
  const textClass = centered ? 'mx-auto max-w-6xl text-center' : visualLeft ? 'lg:order-2' : '';
  const visualClass = visualLeft ? 'lg:order-1' : '';

  return (
    <section className={`story-grid-bg relative overflow-hidden border-b border-steel px-4 pb-20 pt-32 md:px-6 ${compact ? 'md:pb-16' : ''}`}>
      <div className={`mx-auto max-w-7xl ${gridClass}`}>
        <div className={textClass}>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className={`story-chip mb-6 w-fit ${centered ? 'mx-auto' : ''}`}
          >
            {eyebrow}
          </motion.p>
          <h1 className={`story-display ${centered ? 'mx-auto max-w-6xl' : 'max-w-5xl'}`}>
            {words.map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                <motion.span
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
                {index < words.length - 1 ? ' ' : null}
              </React.Fragment>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={`mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl ${centered ? 'mx-auto' : ''}`}
          >
            {copy}
          </motion.p>
          <div className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
            {meta.map((item) => (
              <span key={item} className="story-chip bg-card">
                {item}
              </span>
            ))}
          </div>
          {children}
        </div>

        {!centered && (
          <div className={visualClass}>
            <StoryVisual
              image={image}
              label="01 / STORY"
              title={variant === 'visual-left' ? 'Profile map' : 'System map'}
              body="A product-minded developer portfolio told as a sequence of decisions, interfaces, and shipped outcomes."
            />
          </div>
        )}
      </div>
    </section>
  );
});

export const StoryVisual = memo(function StoryVisual({ image, label, title, body, tags = [], quadrant }) {
  return (
    <div className="story-panel story-panel-shadow relative overflow-hidden bg-card">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-steel bg-soft-ice/40">
        {image ? (
          <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <BlueprintGraphic />
        )}
        {Number.isInteger(quadrant) && (
          <div
            className={`pointer-events-none absolute h-[42%] w-[45%] border-2 border-ice-blue bg-ice-blue/10 ${quadrantClass[quadrant] || quadrantClass[0]}`}
          />
        )}
        <div className="absolute left-4 top-4 story-chip border-white/30 bg-white/86 text-ice-blue">{label}</div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display text-3xl font-black uppercase leading-none md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-xl leading-7 text-slate-600">{body}</p>
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="story-chip bg-soft-ice/65">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

const StoryStep = memo(function StoryStep({ step, index, active, onActive }) {
  const { ref, inView } = useInView({ threshold: 0.58, rootMargin: '-18% 0px -28% 0px' });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0.45, x: -18 }}
      animate={{ opacity: active ? 1 : 0.58, x: active ? 0 : -8 }}
      transition={{ duration: 0.32 }}
      className={`story-panel p-6 transition-colors md:p-8 ${active ? 'bg-card story-panel-shadow' : 'bg-card/54'}`}
    >
      <div className="mb-6 flex items-center justify-between border-b border-steel pb-4">
        <span className="story-chip bg-soft-ice/70">{String(index + 1).padStart(2, '0')}</span>
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400">{step.kicker}</span>
      </div>
      <h3 className="font-display text-3xl font-black uppercase leading-[0.95] md:text-5xl">{step.title}</h3>
      <p className="mt-5 leading-7 text-slate-600">{step.body}</p>
      {step.points?.length > 0 && (
        <div className="mt-6 grid gap-2">
          {step.points.map((point) => (
            <span key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
              <FaArrowRight className="text-ice-blue" /> {point}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
});

export const StoryScroller = memo(function StoryScroller({ eyebrow, title, copy, steps, image, className = '', variant = 'split' }) {
  const [active, setActive] = useState(0);
  const activeStep = steps[active] || steps[0];
  const activeImage = activeStep?.image || image;
  const cardsOnly = variant === 'cards-only';
  const dense = variant === 'dense';

  return (
    <section className={`story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`mb-12 grid gap-6 lg:items-end ${cardsOnly ? 'lg:grid-cols-[1fr_0.75fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'}`}>
          <div>
            <p className="story-chip mb-5 w-fit">{eyebrow}</p>
            <h2 className="story-heading">{title}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">{copy}</p>
        </div>

        <div className={`grid gap-8 ${cardsOnly ? '' : 'lg:grid-cols-[0.84fr_1.16fr]'}`}>
          <div className={`${cardsOnly ? 'grid gap-5 md:grid-cols-2 xl:grid-cols-3' : `space-y-8 ${dense ? 'lg:py-10' : 'lg:py-[20vh]'}`}`}>
            {steps.map((step, index) => (
              <StoryStep
                key={`${step.title}-${index}`}
                step={step}
                index={index}
                active={active === index}
                onActive={setActive}
              />
            ))}
          </div>

          {!cardsOnly && (
          <div data-story-sticky className="hidden lg:sticky lg:top-32 lg:block lg:self-start">
            <StoryVisual
              image={activeImage}
              label={`${String(active + 1).padStart(2, '0')} / ${String(steps.length).padStart(2, '0')}`}
              title={activeStep.title}
              body={activeStep.visualBody || activeStep.body}
              tags={activeStep.tags}
              quadrant={activeStep.quadrant}
            />
          </div>
          )}
        </div>
      </div>
    </section>
  );
});

export const ArchiveTable = memo(function ArchiveTable({ rows }) {
  return (
    <div className="story-panel overflow-hidden bg-card">
      <div className="grid grid-cols-[0.45fr_1.6fr_1fr] border-b border-steel bg-soft-ice/55 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500 md:grid-cols-[0.45fr_1.7fr_1fr_1fr]">
        <span>ID</span>
        <span>System name</span>
        <span>Stack</span>
        <span className="hidden md:block">Signal</span>
      </div>
      {rows.map((row, index) => (
        <div
          key={row.name}
          className="grid grid-cols-[0.45fr_1.6fr_1fr] items-center gap-3 border-b border-steel px-4 py-6 last:border-b-0 md:grid-cols-[0.45fr_1.7fr_1fr_1fr]"
        >
          <span className="font-mono text-sm text-slate-500">{String(index + 1).padStart(3, '0')}</span>
          <span className="font-display text-2xl font-black uppercase">{row.name}</span>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-ice-blue">{row.stack}</span>
          <span className="hidden text-sm text-slate-500 md:block">{row.signal}</span>
        </div>
      ))}
    </div>
  );
});

export const BlueprintGraphic = memo(function BlueprintGraphic() {
  const nodes = [
    ['API', 'left-[10%] top-[16%]', FaServer],
    ['UI', 'right-[12%] top-[20%]', FaCode],
    ['DB', 'left-[15%] bottom-[16%]', FaDatabase],
    ['UX', 'right-[16%] bottom-[18%]', FaCube],
  ];
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#071b3f]">
      <div className="absolute inset-0 orbital-grid opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 border border-ice-blue bg-ice-blue/20 shadow-[0_0_55px_rgba(31,111,235,0.45)]" />
      <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-ice-blue/50" />
      <div className="absolute bottom-[18%] top-[18%] left-1/2 w-px bg-ice-blue/50" />
      {nodes.map(([label, position, Icon]) => (
        <div key={label} className={`absolute ${position} border border-ice-blue bg-white/90 p-4 text-ice-blue`}>
          <Icon className="mb-2 text-2xl" />
          <span className="font-mono text-xs font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
});

export const useStoryRows = (projects) =>
  useMemo(
    () =>
      projects.map((project) => ({
        name: project.title,
        stack: project.tags.slice(0, 3).join(' / '),
        signal: project.metrics?.[0] || project.category,
      })),
    [projects]
  );

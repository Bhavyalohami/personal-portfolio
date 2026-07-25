import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const pageVariants = {
  initial: { opacity: 0, y: 18, scale: 0.992 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.996 },
};

export const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const PageShell = memo(function PageShell({ children, className = '' }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`relative min-h-screen bg-graphite text-text-light ${className}`}
    >
      <div className="pointer-events-none fixed inset-0 z-0 premium-bg" />
      <div className="pointer-events-none fixed inset-0 z-0 noise-layer opacity-[0.035]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

export const SectionHeader = memo(function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const words = useMemo(() => title.split(' '), [title]);
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-10 ${align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-ice-blue/80">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl font-bold leading-[0.95] md:text-6xl">
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <motion.span
              initial={{ opacity: 0, y: 30, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              className="inline-block origin-bottom"
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? ' ' : null}
          </React.Fragment>
        ))}
      </h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-light/62 md:text-lg">{copy}</p>}
    </motion.div>
  );
});

export const MagneticButton = memo(function MagneticButton({ to, href, children, variant = 'primary', className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });
  const Comp = to ? Link : 'a';
  const props = to ? { to } : { href };

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const base =
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors shadow-[0_0_0_1px_rgba(20,32,51,0.08)]';
  const styles =
    variant === 'primary'
      ? 'bg-ice-blue text-white shadow-[0_18px_55px_rgba(31,111,235,0.22)] hover:bg-deep-ice'
      : 'border border-steel bg-card/80 text-text-light hover:border-ice-blue/60 hover:text-ice-blue';

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Comp {...props} className={`${base} ${styles} ${className}`}>
        {children}
        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
      </Comp>
    </motion.div>
  );
});

export const TiltPanel = memo(function TiltPanel({ children, className = '' }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 24 });

  return (
    <motion.div
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      onMouseMove={(event) => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
        rotateX.set(-((event.clientY - rect.top) / rect.height - 0.5) * 8);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      className={`premium-card ${className}`}
    >
      {children}
    </motion.div>
  );
});

export const Marquee = memo(function Marquee({ items }) {
  const row = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className="marquee-container overflow-hidden border-y border-steel py-5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="flex min-w-max gap-8"
      >
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="font-display text-3xl font-bold uppercase text-slate-400/35 md:text-5xl">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
});

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  aspect = 'aspect-[16/10]',
}) {
  const [loaded, setLoaded] = useState(false);
  const webpSrc = useMemo(() => {
    if (!src) return src;
    if (src.includes('images.pexels.com')) {
      return src.includes('fm=') ? src : `${src}${src.includes('?') ? '&' : '?'}fm=webp`;
    }
    return src;
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-slate-950/[0.04] ${aspect} ${className}`}>
      {!loaded && <div className="absolute inset-0 image-skeleton" aria-hidden="true" />}
      <img
        src={webpSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-700 ${imgClassName}`}
      />
    </div>
  );
});

export function ExperienceChrome() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('MOVE');
  const [progress, setProgress] = useState(0);
  const visibleRef = useRef(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 520, damping: 34, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 520, damping: 34, mass: 0.45 });
  const size = useSpring(active ? 86 : 34, { stiffness: 280, damping: 24 });
  const cursorOffset = useTransform(size, (value) => value / -2);

  useEffect(() => {
    const move = (event) => {
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      x.set(event.clientX);
      y.set(event.clientY);
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    const detectTarget = (event) => {
      const target = event.target.closest?.('a, button, [role="button"], input, textarea, select, .project-panel, .philosophy-item');
      if (!target) {
        setActive(false);
        setLabel('MOVE');
        return;
      }

      setActive(true);
      if (target.matches('a')) setLabel('LOCK');
      else if (target.matches('button, [role="button"]')) setLabel('SEND');
      else if (target.matches('input, textarea, select')) setLabel('INPUT');
      else if (target.matches('.project-panel')) setLabel('CASE');
      else setLabel('VIEW');
    };

    const syncProgress = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    syncProgress();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', detectTarget);
    window.addEventListener('scroll', syncProgress, { passive: true });
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', detectTarget);
      window.removeEventListener('scroll', syncProgress);
      window.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <>
      <div className="experience-spotlight pointer-events-none fixed inset-0 z-[3]" />
      <div className="experience-vignette pointer-events-none fixed inset-0 z-[71]" />
      <div className="fixed right-4 top-1/2 z-[76] hidden h-40 w-px -translate-y-1/2 bg-ice-blue/15 md:block">
        <motion.div
          className="absolute left-0 top-0 w-px origin-top bg-ice-blue shadow-[0_0_18px_rgba(125,249,255,0.72)]"
          style={{ height: `${Math.max(progress * 100, 8)}%` }}
        />
      </div>
      <div className="fixed bottom-4 left-4 z-[76] hidden font-mono text-[10px] uppercase tracking-[0.24em] text-ice-blue/70 md:block">
        scroll / {String(Math.round(progress * 100)).padStart(3, '0')}%
      </div>
      <motion.div
        style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[85] hidden lg:block"
      >
        <motion.div
          style={{ width: size, height: size, x: cursorOffset, y: cursorOffset }}
          className={`relative rounded-full border transition-colors duration-300 ${
            active ? 'border-[rgba(var(--scene-accent),0.95)] bg-[rgba(var(--scene-accent),0.10)]' : 'border-[rgba(var(--scene-accent),0.70)] bg-transparent'
          }`}
        >
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--scene-accent))] shadow-[0_0_20px_rgba(var(--scene-accent),0.9)]" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--scene-accent))]">
            {active ? label : ''}
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}

export const CustomCursor = ExperienceChrome;

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.motion === 'off';
    if (reduced) {
      setDone(true);
      return undefined;
    }
    let alreadySeen = false;
    try { alreadySeen = window.sessionStorage.getItem('bl-lunar-intro'); } catch {}
    if (alreadySeen) {
      setDone(true);
      return undefined;
    }

    const timer = setTimeout(() => {
      try { window.sessionStorage.setItem('bl-lunar-intro', 'seen'); } catch {}
      setDone(true);
    }, 720);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.48, duration: 0.24, ease: 'easeOut' }}
      className="lunar-preloader"
      aria-hidden="true"
    >
      <div>
        <b className="lunar-preloader__mark">BL</b>
        <span>Initializing portfolio / BL-26</span>
        <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }} />
      </div>
    </motion.div>
  );
}

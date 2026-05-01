import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
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
      className={`relative min-h-screen overflow-hidden bg-graphite text-text-light ${className}`}
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
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 30, rotateX: -45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.035 }}
            className="mr-3 inline-block origin-bottom"
          >
            {word}
          </motion.span>
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
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-ice-blue text-graphite shadow-[0_18px_55px_rgba(106,226,255,0.26)] hover:bg-soft-ice'
      : 'border border-white/15 bg-white/[0.04] text-text-light hover:border-ice-blue/60 hover:text-ice-blue';

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
    <div className="marquee-container overflow-hidden border-y border-white/10 py-5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="flex min-w-max gap-8"
      >
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="font-display text-3xl font-bold uppercase text-white/16 md:text-5xl">
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
    <div className={`relative overflow-hidden bg-white/[0.06] ${aspect} ${className}`}>
      {!loaded && <div className="absolute inset-0 image-skeleton" aria-hidden="true" />}
      <img
        src={webpSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  );
});

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35 });
  const springY = useSpring(y, { stiffness: 450, damping: 35 });

  useEffect(() => {
    const move = (event) => {
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };
    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={`pointer-events-none fixed left-0 top-0 z-[80] hidden h-7 w-7 rounded-full border border-ice-blue/80 mix-blend-difference transition-opacity md:block ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 650);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 0.45, duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#05070A]"
    >
      <div className="text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-ice-blue to-transparent"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 font-mono text-xs uppercase tracking-[0.45em] text-ice-blue"
        >
          Loading portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}

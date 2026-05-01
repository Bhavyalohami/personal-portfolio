import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, profile } from '../data/portfolio';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-6">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 ${
          scrolled
            ? 'border-white/12 bg-[#080B10]/78 shadow-2xl shadow-black/30 backdrop-blur-2xl'
            : 'border-white/8 bg-white/[0.035] backdrop-blur-xl'
        }`}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ice-blue/35 bg-ice-blue/10">
            <span className="absolute inset-0 bg-ice-blue/20 blur-xl transition-transform group-hover:scale-150" />
            <span className="relative font-display text-sm font-bold text-ice-blue">BL</span>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-bold text-white">Bhavya Lohami</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Developer portfolio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  active ? 'text-graphite' : 'text-white/58 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ice-blue"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-graphite transition hover:bg-ice-blue md:flex"
          >
            <FiDownload /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 p-3 text-ice-blue lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#080B10]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`rounded-2xl px-4 py-3 font-display text-lg ${
                    location.pathname === item.path ? 'bg-ice-blue text-graphite' : 'bg-white/[0.04] text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

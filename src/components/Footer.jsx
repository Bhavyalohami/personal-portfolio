import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { navLinks, profile } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-steel bg-[#e7f0fb]">
      <div className="absolute inset-0 premium-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-ice-blue">Available for ambitious builds</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Let us make the web feel less ordinary.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-ice-blue px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white">
                Start a project
              </Link>
              <a href={profile.resume} download className="rounded-full border border-steel bg-card/70 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-text-light">
                Download resume
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-500">Navigate</h3>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((item) => (
                <Link key={item.name} to={item.path} className="text-sm text-slate-600 transition hover:text-ice-blue">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-slate-500">Connect</h3>
            <div className="space-y-3">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} className="flex items-center gap-3 text-slate-600 transition hover:text-ice-blue">
                    <Icon /> {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-steel pt-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>Copyright {year} Bhavya Lohami. Designed and engineered with care.</p>
          <motion.button
            whileHover={{ y: -4 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-steel bg-card text-ice-blue"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

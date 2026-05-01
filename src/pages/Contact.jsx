import React, { memo, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle, FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa';
import { OptimizedImage, PageShell } from '../components/Premium';
import { storyAssets } from '../components/Storytelling';
import { contactCards, profile } from '../data/portfolio';

const prompts = ['Project idea', 'Timeline', 'Budget range', 'What should feel premium?'];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const filled = useMemo(() => Object.values(form).filter(Boolean).length, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <PageShell>
      <section className="story-grid-bg border-b border-steel px-4 pb-20 pt-32 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="story-chip mb-6 w-fit">STATUS: AVAILABLE FOR WORK</p>
              <h1 className="font-display text-[clamp(4.2rem,11vw,11rem)] font-black uppercase leading-[0.78]">
                Init contact_
              </h1>
              <p className="mt-7 max-w-xl text-xl leading-8 text-slate-600">
                Execute a connection sequence. Drop a line below to initiate a collaboration or request a secure transmission.
              </p>
            </div>

            <aside className="border-l-4 border-ice-blue pl-7 lg:mt-24">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">Direct channels</p>
              <div className="mt-8 space-y-5">
                {contactCards
                  .filter((card) => card.href)
                  .map((card) => (
                    <a
                      key={card.label}
                      href={card.href}
                      className="group flex items-center justify-between border-b border-steel pb-3 font-display text-4xl font-black uppercase"
                    >
                      {card.label}
                      <FaExternalLinkAlt className="text-2xl text-ice-blue transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ))}
                <a
                  href={profile.socials.find((social) => social.label === 'GitHub')?.href}
                  className="group flex items-center justify-between border-b border-steel pb-3 font-display text-4xl font-black uppercase"
                >
                  GitHub
                  <FaExternalLinkAlt className="text-2xl text-ice-blue transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href={profile.socials.find((social) => social.label === 'LinkedIn')?.href}
                  className="group flex items-center justify-between border-b border-steel pb-3 font-display text-4xl font-black uppercase"
                >
                  LinkedIn
                  <FaExternalLinkAlt className="text-2xl text-ice-blue transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <div className="story-panel story-panel-shadow mt-12 bg-card p-2">
                <OptimizedImage src={storyAssets.projects} alt="Portfolio system preview" aspect="aspect-[16/9]" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-steel bg-card/70 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={handleSubmit} className="story-panel story-panel-shadow bg-card">
            <div className="flex items-center justify-between border-b border-steel bg-soft-ice/55 px-5 py-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em]">~/contact/form.sh</span>
              <span className="story-chip bg-card">{filled}/3</span>
            </div>
            <div className="p-6 md:p-8">
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 flex items-center gap-3 border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-700"
                  >
                    <FaCheckCircle /> Transmission staged. I will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              {[
                ['name', '$USER_NAME', 'Enter your designation...'],
                ['email', '$REPLY_ADDRESS', 'name@domain.com'],
              ].map(([name, label, placeholder]) => (
                <label key={name} className="mb-8 block">
                  <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-[0.18em] text-ice-blue">{label}</span>
                  <input
                    name={name}
                    value={form[name]}
                    onChange={(event) => setForm({ ...form, [name]: event.target.value })}
                    required
                    placeholder={placeholder}
                    className="w-full border-0 border-b-2 border-steel bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-slate-400 focus:border-ice-blue focus:ring-0"
                  />
                </label>
              ))}

              <label className="block">
                <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-[0.18em] text-ice-blue">$PAYLOAD</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                  rows="7"
                  placeholder="Enter transmission details..."
                  className="w-full resize-none border-0 border-b-2 border-steel bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-slate-400 focus:border-ice-blue focus:ring-0"
                />
              </label>

              <div className="mt-6 flex flex-wrap gap-2">
                {prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, message: `${prev.message}${prev.message ? '\n' : ''}${prompt}: ` }))}
                    className="story-chip bg-soft-ice/60"
                  >
                    + {prompt}
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ x: -4, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex w-full items-center justify-center gap-3 bg-ice-blue px-6 py-5 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[8px_8px_0_rgba(20,32,51,0.16)]"
              >
                <FaPaperPlane /> Execute submit
              </motion.button>
            </div>
          </form>

          <aside className="story-panel bg-card p-7">
            <p className="story-chip mb-6 w-fit">Message brief</p>
            <h2 className="font-display text-4xl font-black uppercase leading-none">What helps me reply fast</h2>
            <div className="mt-8 space-y-4">
              {prompts.map((prompt, index) => (
                <div key={prompt} className="story-panel bg-soft-ice/45 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ice-blue">0{index + 1}</p>
                  <p className="mt-2 font-display text-2xl font-black uppercase">{prompt}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Contact);

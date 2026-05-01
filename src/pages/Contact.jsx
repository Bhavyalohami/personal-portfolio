import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { PageShell, SectionHeader, TiltPanel, reveal } from '../components/Premium';
import { contactCards, profile } from '../data/portfolio';

const prompts = ['Project idea', 'Timeline', 'Budget range', 'What should feel premium?'];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const filled = useMemo(
    () => Object.values(form).filter(Boolean).length,
    [form]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <PageShell>
      <section className="px-4 pb-20 pt-32 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title="Let us turn the brief into momentum"
            copy="A more conversational contact flow with focus animations, progress feedback, and a clear path to reach me directly."
          />

          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-6">
              <TiltPanel className="rounded-[2rem] p-7">
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-ice-blue">Open to work</p>
                <h2 className="mt-4 font-display text-4xl font-bold">Tell me what you are building.</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  I respond best to product goals, user problems, and technical constraints. Send the rough version.
                  I can help shape it.
                </p>
                <div className="mt-8 space-y-4">
                  {contactCards.map((card) => {
                    const Icon = card.icon;
                    const content = (
                      <div className="flex items-center gap-4 rounded-2xl border border-steel bg-card/70 p-4 transition hover:border-ice-blue/45">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice-blue text-white">
                          <Icon />
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                          <p className="text-slate-700">{card.value}</p>
                        </div>
                      </div>
                    );
                    return card.href ? (
                      <a key={card.label} href={card.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={card.label}>{content}</div>
                    );
                  })}
                </div>
              </TiltPanel>

              <div className="grid grid-cols-2 gap-3">
                {profile.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="rounded-3xl border border-steel bg-card/70 p-5 text-slate-600 transition hover:border-ice-blue/50 hover:text-ice-blue"
                    >
                      <Icon className="mb-5 text-2xl" />
                      <span className="font-display text-xl font-bold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <TiltPanel className="rounded-[2rem] p-7 md:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-ice-blue">Message console</p>
                  <h2 className="mt-3 font-display text-4xl font-bold">Start the signal</h2>
                </div>
                <div className="h-16 w-16 rounded-full border border-ice-blue/30 p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-ice-blue text-lg font-bold text-white">
                    {filled}/3
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-700"
                  >
                    <FaCheckCircle /> Message staged successfully. I will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  ['name', 'Your name', 'Bhavya'],
                  ['email', 'Email address', 'you@example.com'],
                ].map(([name, label, placeholder]) => (
                  <motion.label key={name} variants={reveal} initial="hidden" animate="visible" className="block">
                    <span className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-slate-400">{label}</span>
                    <input
                      name={name}
                      value={form[name]}
                      onChange={(event) => setForm({ ...form, [name]: event.target.value })}
                      required
                      placeholder={placeholder}
                      className="w-full rounded-2xl border border-steel bg-card/80 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-ice-blue focus:bg-ice-blue/5"
                    />
                  </motion.label>
                ))}

                <label className="block">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-slate-400">Project note</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    required
                    rows="7"
                    placeholder="Tell me what you want to build, improve, launch, or redesign."
                    className="w-full resize-none rounded-2xl border border-steel bg-card/80 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-ice-blue focus:bg-ice-blue/5"
                  />
                </label>

                <div className="flex flex-wrap gap-2">
                  {prompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, message: `${prev.message}${prev.message ? '\n' : ''}${prompt}: ` }))}
                      className="rounded-full border border-steel px-3 py-2 text-xs text-slate-500 transition hover:border-ice-blue hover:text-ice-blue"
                    >
                      + {prompt}
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-ice-blue px-6 py-4 font-bold uppercase tracking-[0.18em] text-white"
                >
                  <FaPaperPlane /> Send message
                </motion.button>
              </form>
            </TiltPanel>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;

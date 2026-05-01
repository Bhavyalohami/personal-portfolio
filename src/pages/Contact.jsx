import React, { memo, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { PageShell } from '../components/Premium';
import { StoryHero, StoryScroller, storyAssets } from '../components/Storytelling';
import { contactCards, profile } from '../data/portfolio';

const prompts = ['Project idea', 'Timeline', 'Budget range', 'What should feel premium?'];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const filled = useMemo(() => Object.values(form).filter(Boolean).length, [form]);

  const contactSteps = [
    {
      kicker: '01 / Signal',
      title: 'Open a direct channel',
      body: 'The contact page starts like a terminal: identify the sender, attach the reply address, and transmit the project payload.',
      points: contactCards.map((card) => `${card.label}: ${card.value}`),
      tags: ['Email', 'Phone', 'Location'],
    },
    {
      kicker: '02 / Context',
      title: 'Describe the build',
      body: 'The strongest messages include what you are building, why it matters, what feels broken today, and what timeline matters.',
      points: prompts,
      tags: ['Brief', 'UX', 'Scope'],
    },
    {
      kicker: '03 / Response',
      title: 'Turn the brief into next steps',
      body: 'After the message, the flow should confirm the transmission and make the next action clear without losing the premium feel.',
      points: ['Success feedback', 'Direct email fallback', 'Vercel API ready'],
      tags: ['Submit', 'Email', 'Lead'],
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3200);
  };

  return (
    <PageShell>
      <StoryHero
        eyebrow="CONTACT.TRANSMISSION"
        title="Init contact sequence"
        copy="A Stitch-inspired terminal contact page, rebuilt in our blue palette with direct channels and a cleaner message console."
        meta={['Available for work', profile.email, profile.location]}
        image={storyAssets.system}
      />

      <StoryScroller
        eyebrow="Contact protocol"
        title="A message flow with a story"
        copy="The form is no longer just inputs. It explains the channel, the context, and the response loop as the user scrolls."
        steps={contactSteps}
        image={storyAssets.system}
      />

      <section className="story-grid-bg border-b border-steel px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="story-panel bg-card p-7">
            <p className="story-chip mb-6 w-fit">Direct channels</p>
            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="story-panel flex items-center gap-4 bg-card p-4 transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(31,111,235,0.2)]">
                    <div className="flex h-12 w-12 items-center justify-center bg-ice-blue text-white">
                      <Icon />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                      <p className="text-slate-700">{card.value}</p>
                    </div>
                  </div>
                );
                return card.href ? <a key={card.label} href={card.href}>{content}</a> : <div key={card.label}>{content}</div>;
              })}
            </div>
          </aside>

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
        </div>
      </section>
    </PageShell>
  );
};

export default memo(Contact);

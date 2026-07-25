import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import {
  contactCards,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  stats,
  systemLayers,
} from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const asset = (path) => {
  const base = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '';
  return `${base}${path}`;
};

const pageMeta = {
  about: {
    eyebrow: 'Identity film / human system',
    title: ['Not a profile', 'A signal trail'],
    copy: 'A product-minded developer with a systems brain and a taste for interfaces that feel alive without becoming confusing.',
    image: '/assets/generated-pages/about-interface-craft.png',
    accent: '#ef4b3f',
  },
  skills: {
    eyebrow: 'Capability engine / live modules',
    title: ['Stack as', 'machinery'],
    copy: 'Frontend craft, API thinking, validation, search, performance, and delivery habits arranged like an operating system.',
    image: '/assets/generated-pages/skills-machine-room.png',
    accent: '#dcd8d2',
  },
  projects: {
    eyebrow: 'Project universe / shipped proof',
    title: ['Worlds', 'of work'],
    copy: 'Marketplace systems, real-estate dashboards, healthcare operations, brand stories, and concept products shown as case-study worlds.',
    image: '/assets/generated-pages/projects-worlds.png',
    accent: '#ef4b3f',
  },
  experience: {
    eyebrow: 'Experience timeline / delivery arc',
    title: ['Career', 'sequence'],
    copy: 'Role-by-role proof of shipped systems, reusable components, API integrations, dashboards, and production delivery.',
    image: '/assets/generated-pages/experience-timeline.png',
    accent: '#ef4b3f',
  },
  education: {
    eyebrow: 'Foundation archive / source layer',
    title: ['Foundation', 'map'],
    copy: 'The engineering base underneath the taste: computer science, structured problem solving, and product-minded implementation.',
    image: '/assets/generated-pages/education-foundation.png',
    accent: '#9f9b96',
  },
  resume: {
    eyebrow: 'Candidate dossier / compact scan',
    title: ['Candidate', 'dossier'],
    copy: 'A fast readable scan of profile, stack, work history, education, and proof—with the PDF one action away.',
    image: '/assets/generated-pages/resume-dossier.png',
    accent: '#dcd8d2',
  },
  contact: {
    eyebrow: 'Open channel / transmission room',
    title: ['Send the', 'next signal'],
    copy: 'Tell me what you are building. I will help shape the system, interface, and the path from idea to shipped experience.',
    image: '/assets/generated-pages/contact-transmission.png',
    accent: '#ef4b3f',
  },
};

export function useCinematicPage(scene = 'award') {
  const ref = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.scene = scene;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      ref.current?.querySelectorAll('[data-cinema]').forEach((node) => {
        node.style.opacity = 1;
        node.style.transform = 'none';
        node.style.filter = 'none';
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from('[data-title-line]', {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'expo.out',
      });

      gsap.utils.toArray('[data-cinema]').forEach((node) => {
        gsap.fromTo(
          node,
          { autoAlpha: 0, y: 54, filter: 'blur(16px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.86,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: node,
              start: 'top 84%',
            },
          }
        );
      });

      gsap.to('[data-parallax-media]', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [scene]);

  return ref;
}

export const CinematicHero = memo(function CinematicHero({ meta, children }) {
  return (
    <section className="aw-hero" style={{ '--accent': meta.accent }}>
      <div className="aw-hero__copy">
        <p className="aw-kicker" data-cinema>{meta.eyebrow}</p>
        <h1 className="aw-title" aria-label={meta.title.join(' ')}>
          {meta.title.map((line) => (
            <span className="aw-title__mask" key={line}>
              <span data-title-line>{line}</span>
            </span>
          ))}
        </h1>
        <p className="aw-lede" data-cinema>{meta.copy}</p>
        {children}
      </div>
      <div className="aw-hero__visual" data-cinema>
        <CinematicPoster image={meta.image} label={meta.eyebrow} title={meta.title.join(' / ')} accent={meta.accent} />
      </div>
    </section>
  );
});

export const CinematicPoster = memo(function CinematicPoster({ image, label, title, accent = '#67e8f9' }) {
  return (
    <figure className="aw-poster" style={{ '--accent': accent }}>
      <div className="aw-poster__image" data-parallax-media>
        <img src={asset(image)} alt="" loading="lazy" />
      </div>
      <figcaption>
        <span>{label}</span>
        <strong>{title}</strong>
      </figcaption>
      <i />
      <b />
    </figure>
  );
});

export const MagneticLink = memo(function MagneticLink({ to, href, children, variant = 'primary', download = false }) {
  const Comp = to ? Link : 'a';
  const props = to ? { to } : { href, target: href?.startsWith('http') ? '_blank' : undefined, rel: href?.startsWith('http') ? 'noreferrer' : undefined, download };

  return (
    <Comp {...props} className={`aw-button aw-button--${variant}`}>
      {children}
      <FaArrowRight />
    </Comp>
  );
});

export const StatRail = memo(function StatRail({ items = stats }) {
  return (
    <div className="aw-stat-rail" data-cinema>
      {items.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
});

export const MarqueeWall = memo(function MarqueeWall({ items }) {
  const row = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <section className="aw-marquee" aria-hidden="true">
      <div>
        {row.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
});

export const ChapterGrid = memo(function ChapterGrid({ eyebrow, title, copy, children }) {
  return (
    <section className="aw-section">
      <div className="aw-section__head" data-cinema>
        <p className="aw-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <span>{copy}</span>}
      </div>
      {children}
    </section>
  );
});

export const ProofCard = memo(function ProofCard({ eyebrow, title, copy, accent = '#67e8f9', index }) {
  return (
    <article className="aw-card" style={{ '--accent': accent }} data-cinema>
      <span>{String(index + 1).padStart(2, '0')} / {eyebrow}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
});

export const PageFrame = memo(function PageFrame({ type, children }) {
  const meta = pageMeta[type];
  const ref = useCinematicPage(type);

  return (
    <main ref={ref} className={`aw-page aw-page--${type}`} style={{ '--accent': meta.accent }}>
      <CinematicHero meta={meta}>
        <div className="aw-actions" data-cinema>
          <MagneticLink to="/projects">See work</MagneticLink>
          <MagneticLink to="/contact" variant="ghost">Open channel</MagneticLink>
        </div>
      </CinematicHero>
      {children}
    </main>
  );
});

export function AboutExperience() {
  return (
    <PageFrame type="about">
      <StatRail />
      <ChapterGrid
        eyebrow="Human operating system"
        title="Craft that behaves like product logic."
        copy="This is not about decorative UI. It is about rhythm, trust, clarity, performance, and the confidence to ship."
      >
        <div className="aw-card-grid aw-card-grid--three">
          {[
            ['Origin', 'Systems first, visuals second, feeling always.', 'Interfaces should be clear enough to trust and expressive enough to remember.'],
            ['Method', 'Product pressure becomes usable flow.', 'Search, dashboards, bookings, APIs, and validation become one calm operating surface.'],
            ['Signal', 'Motion explains what changed.', 'Animation should direct attention, not ask for it.'],
          ].map(([eyebrow, title, copy], index) => (
            <ProofCard key={eyebrow} eyebrow={eyebrow} title={title} copy={copy} accent={pageMeta.about.accent} index={index} />
          ))}
        </div>
      </ChapterGrid>
    </PageFrame>
  );
}

export function SkillsExperience() {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name));
  return (
    <PageFrame type="skills">
      <MarqueeWall items={skills} />
      <ChapterGrid eyebrow="Module topology" title="The stack is staged as machinery.">
        <div className="aw-card-grid aw-card-grid--three">
          {skillGroups.map((group, index) => (
            <ProofCard
              key={group.title}
              eyebrow="Capability"
              title={group.title}
              copy={group.items.map((item) => item.name).join(' / ')}
              accent={group.accent}
              index={index}
            />
          ))}
        </div>
      </ChapterGrid>
      <ChapterGrid eyebrow="Operating logic" title="Tools become outcomes.">
        <div className="aw-card-grid aw-card-grid--three">
          {systemLayers.map((layer, index) => (
            <ProofCard key={layer.title} eyebrow={layer.principle} title={layer.title} copy={layer.body} accent="#9cffb1" index={index} />
          ))}
        </div>
      </ChapterGrid>
    </PageFrame>
  );
}

export function ProjectsExperience() {
  return (
    <PageFrame type="projects">
      <section className="aw-case-list">
        {projects.map((project, index) => (
          <article className="aw-case" key={project.id} style={{ '--accent': index % 2 ? '#ff9ab4' : '#67e8f9' }} data-cinema>
            <div className="aw-case__media">
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            </div>
            <div className="aw-case__copy">
              <span>{String(index + 1).padStart(2, '0')} / {project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.story}</p>
              <div className="aw-tags">
                {project.metrics.map((metric) => <b key={metric}>{metric}</b>)}
              </div>
              {project.source && (
                <a href={project.source} target="_blank" rel="noreferrer" className="aw-inline">
                  Visit project <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </PageFrame>
  );
}

export function ExperienceExperience() {
  return (
    <PageFrame type="experience">
      <ChapterGrid eyebrow="Work chapters" title="Every role is a shipped sequence.">
        <div className="aw-timeline">
          {experiences.map((item, index) => (
            <article key={`${item.company}-${item.role}`} data-cinema>
              <span>{String(index + 1).padStart(2, '0')} / {item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company} — {item.location}</p>
              <strong>{item.description}</strong>
              <div className="aw-tags">
                {item.wins.map((win) => <b key={win}>{win}</b>)}
              </div>
            </article>
          ))}
        </div>
      </ChapterGrid>
    </PageFrame>
  );
}

export function EducationExperience() {
  return (
    <PageFrame type="education">
      <ChapterGrid eyebrow="Foundation nodes" title="The base layer under the work.">
        <div className="aw-card-grid aw-card-grid--two">
          {education.map((item, index) => (
            <ProofCard
              key={item.degree}
              eyebrow={item.period}
              title={`${item.degree} / ${item.field}`}
              copy={`${item.institution}. ${item.notes.join(' / ')}`}
              accent={pageMeta.education.accent}
              index={index}
            />
          ))}
        </div>
      </ChapterGrid>
    </PageFrame>
  );
}

export function ResumeExperience() {
  const skills = skillGroups.flatMap((group) => group.items.map((item) => item.name)).slice(0, 16);
  return (
    <PageFrame type="resume">
      <section className="aw-resume-grid">
        <aside data-cinema>
          <p className="aw-kicker">Candidate card</p>
          <h2>{profile.name}</h2>
          <span>{profile.role}</span>
          <a href={profile.resume} download className="aw-button aw-button--primary"><FaDownload /> Download PDF</a>
        </aside>
        <div data-cinema>
          <ChapterGrid eyebrow="Readable stack" title="Fast scan, no fluff.">
            <div className="aw-tags">
              {skills.map((skill) => <b key={skill}>{skill}</b>)}
            </div>
          </ChapterGrid>
        </div>
      </section>
    </PageFrame>
  );
}

export function ContactExperience() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const filled = Object.values(form).filter(Boolean).length;

  return (
    <PageFrame type="contact">
      <section className="aw-contact-grid">
        <aside data-cinema>
          <p className="aw-kicker">Direct channels</p>
          {[...contactCards, ...profile.socials].map((card, index) => {
            const Icon = card.icon || (card.label === 'GitHub' ? FaGithub : card.label === 'LinkedIn' ? FaLinkedin : FaEnvelope);
            return card.href ? (
              <a key={`${card.label}-${index}`} href={card.href} className="aw-contact-link">
                <Icon /> {card.label}<FaExternalLinkAlt />
              </a>
            ) : (
              <span key={`${card.label}-${index}`} className="aw-contact-link"><FaMapMarkerAlt /> {card.value}</span>
            );
          })}
        </aside>
        <form
          data-cinema
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = `mailto:${profile.email}?subject=Portfolio inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
          }}
        >
          <div className="aw-form-status">
            <span>Transmission strength</span>
            <strong>{Math.round((filled / 3) * 100)}%</strong>
          </div>
          {[
            ['name', 'Your name', 'text'],
            ['email', 'Return channel', 'email'],
          ].map(([name, label, type]) => (
            <label key={name}>
              <span>{label}</span>
              <input type={type} value={form[name]} onChange={(event) => setForm((prev) => ({ ...prev, [name]: event.target.value }))} required />
            </label>
          ))}
          <label>
            <span>What are we building?</span>
            <textarea rows="8" value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} required />
          </label>
          <button className="aw-button aw-button--primary" type="submit"><FaPaperPlane /> Send signal</button>
        </form>
      </section>
    </PageFrame>
  );
}

export { pageMeta };

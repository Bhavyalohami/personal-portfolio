import React, { lazy, memo, Suspense, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiTerminal,
} from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiDjango, SiNextdotjs } from 'react-icons/si';
import { experiences, profile, projects, skillGroups, stats } from '../data/portfolio';
import { capabilityGroups, now, technicalNotes, verifiedSignals } from '../data/siteContent';
import Seo from '../components/Seo';
import useMediaQuery from '../hooks/useMediaQuery';
import usePortfolioMotion from '../hooks/usePortfolioMotion';

gsap.registerPlugin(ScrollTrigger);

const LunarScene = lazy(() => import('../components/3d/Scene'));

const featuredProjects = [
  {
    ...projects[0],
    number: '01',
    cover: `${process.env.PUBLIC_URL}/assets/lunar/project-uphomes.webp`,
    type: 'Marketplace platform',
    caseSlug: 'uphomes-rental-marketplace',
    tools: [
      { label: 'React', icon: FaReact },
      { label: 'Product UX', icon: FiLayers },
      { label: 'REST APIs', icon: FiDatabase },
    ],
  },
  {
    ...projects[2],
    number: '02',
    cover: `${process.env.PUBLIC_URL}/assets/lunar/hospital-operations.webp`,
    type: 'Healthcare operations',
    caseSlug: 'hospital-management-system',
    tools: [
      { label: 'React', icon: FaReact },
      { label: 'Django', icon: SiDjango },
      { label: 'Scheduling', icon: FiLayers },
    ],
  },
  {
    ...projects[1],
    number: '03',
    cover: `${process.env.PUBLIC_URL}/assets/lunar/project-real-estate.webp`,
    type: 'Operations dashboard',
    caseSlug: 'real-estate-management-system',
    tools: [
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'React', icon: FaReact },
      { label: 'Data systems', icon: FiDatabase },
    ],
  },
];

const orbitLinks = [
  { label: 'Work', href: '#work', className: 'is-work' },
  { label: 'About', href: '#about', className: 'is-about' },
  { label: 'Skills', href: '#skills', className: 'is-skills' },
  { label: 'Contact', href: '#contact', className: 'is-contact' },
];

function SignalVideo() {
  const videoRef = useRef(null);
  const reducedMotion = usePortfolioMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    if (reducedMotion) {
      video.pause();
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { rootMargin: '160px' });
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <video
      ref={videoRef}
      className="lunar-contact__video"
      muted
      loop
      playsInline
      preload="metadata"
      poster={`${process.env.PUBLIC_URL}/assets/lunar/starfield.webp`}
      aria-hidden="true"
    >
      <source src={`${process.env.PUBLIC_URL}/assets/lunar/signal-loop.webm`} type="video/webm" />
      <source src={`${process.env.PUBLIC_URL}/assets/lunar/signal-loop.mp4`} type="video/mp4" />
    </video>
  );
}

function ProjectCard({ project }) {
  const destination = `/work/${project.caseSlug}`;

  return (
    <article className="lunar-project-card" data-lunar-reveal>
      <div className="lunar-project-card__media">
        <img src={project.cover} alt={`${project.title} project interface`} loading="lazy" decoding="async" />
        <span>{project.number}</span>
      </div>
      <div className="lunar-project-card__body">
        <header>
          <span>{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </header>
        <ul aria-label={`${project.title} technologies`}>
          {project.tools.map(({ label, icon: Icon }) => (
            <li key={label}><Icon aria-hidden="true" /> {label}</li>
          ))}
        </ul>
        <Link to={destination} aria-label={`Read the ${project.title} case study`}>
          Read case study <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const rootRef = useRef(null);
  const wordsRef = useRef(null);
  const reduceMotion = usePortfolioMotion();
  const compactHero = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    document.documentElement.dataset.scene = 'lunar';
    const root = rootRef.current;
    const words = wordsRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.lunar-hero__word', { yPercent: 105, opacity: 0, duration: 1.05, stagger: 0.065 }, 0.05)
        .from('.lunar-identity > *', { y: 22, opacity: 0, duration: 0.72, stagger: 0.075 }, 0.3)
        .from('.lunar-orbit-link', { scale: 0.75, opacity: 0, duration: 0.55, stagger: 0.09 }, 0.62)
        .from('.lunar-mission > *', { x: 18, opacity: 0, duration: 0.55, stagger: 0.07 }, 0.7);

      gsap.utils.toArray('[data-lunar-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 38,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        });
      });

      if (!compactHero) {
        gsap.to(words, {
          yPercent: -7,
          ease: 'none',
          scrollTrigger: { trigger: '.lunar-hero', start: 'top top', end: 'bottom top', scrub: 0.7 },
        });
      }
    }, root);

    let moveHandler;
    if (!reduceMotion && !compactHero && words) {
      const xTo = gsap.quickTo(words, 'x', { duration: 0.8, ease: 'power3.out' });
      const yTo = gsap.quickTo(words, 'y', { duration: 0.8, ease: 'power3.out' });
      moveHandler = (event) => {
        xTo((event.clientX / window.innerWidth - 0.5) * -16);
        yTo((event.clientY / window.innerHeight - 0.5) * -10);
      };
      window.addEventListener('pointermove', moveHandler, { passive: true });
    }

    return () => {
      if (moveHandler) window.removeEventListener('pointermove', moveHandler);
      gsap.killTweensOf(words);
      ctx.revert();
      delete document.documentElement.dataset.scene;
    };
  }, [compactHero, reduceMotion]);

  return (
    <main id="main-content" tabIndex="-1" data-route="/" ref={rootRef} className="lunar-home">
      <Seo
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            email: profile.email,
            address: profile.location,
            sameAs: profile.socials.filter((social) => social.href.startsWith('http')).map((social) => social.href),
          },
        }}
      />
      <section className="lunar-hero" aria-labelledby="lunar-hero-title">
        <div ref={wordsRef} className="lunar-hero__words" aria-hidden="true">
          <span className="lunar-hero__word">Digital</span>
          <span className="lunar-hero__word">Worlds</span>
          <span className="lunar-hero__word">Built</span>
          <span className="lunar-hero__word">To work</span>
        </div>

        <div className="lunar-identity">
          <p>Engineer. Problem solver. Builder.</p>
          <h1 id="lunar-hero-title">Bhavya<br />Lohami</h1>
          <strong>React / Full-stack developer</strong>
          <span><FiMapPin aria-hidden="true" /> {profile.location} / UTC+05:30</span>
          <div className="lunar-identity__actions">
            <a href="#work" className="lunar-button lunar-button--primary">
              Enter selected work <FiArrowRight aria-hidden="true" />
            </a>
            <Link to="/contact" className="lunar-button">
              Start a conversation <i aria-hidden="true" />
            </Link>
            <a href={profile.resume} download className="lunar-identity__resume">Download resume <FiArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="lunar-stage">
          <Suspense fallback={<div className="lunar-stage__fallback" role="status">Preparing lunar scene</div>}>
            <LunarScene />
          </Suspense>
          <nav className="lunar-orbit-nav" aria-label="Hero shortcuts">
            {orbitLinks.map((link) => (
              <a key={link.label} href={link.href} className={`lunar-orbit-link ${link.className}`}>
                {link.label}<i aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <aside className="lunar-mission" aria-label="Portfolio mission status">
          <div>
            <span>Mission progress</span>
            <b>01 - 07</b>
          </div>
          <i aria-hidden="true"><b /></i>
          <p>Focus: reliable, scalable, human-centered web applications.</p>
        </aside>

        <a href="#work" className="lunar-hero__scroll">
          Scroll to work <FiArrowDownRight aria-hidden="true" />
        </a>
      </section>

      <section id="work" className="lunar-work lunar-section" aria-labelledby="selected-work-title">
        <header className="lunar-section-label" data-lunar-reveal>
          <div><span>01</span><h2 id="selected-work-title">Selected work</h2></div>
          <i aria-hidden="true" />
          <Link to="/work">View all projects <FiArrowUpRight aria-hidden="true" /></Link>
        </header>
        <div className="lunar-project-grid">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="lunar-proof lunar-section" aria-labelledby="proof-title">
        <header className="lunar-section-label" data-lunar-reveal>
          <div><span>02</span><h2 id="proof-title">Engineering proof</h2></div>
          <i aria-hidden="true" />
          <Link to="/system">Inspect the system <FiArrowUpRight aria-hidden="true" /></Link>
        </header>
        <div className="lunar-proof__lead" data-lunar-reveal>
          <span>Polish is the visible layer.</span>
          <h2>Reliability is the product.</h2>
          <p>Every flagship study exposes ownership, architecture, trade-offs, accessibility, security, testing gaps, and qualified outcomes.</p>
        </div>
        <div className="lunar-proof__grid">
          {capabilityGroups.map((group, index) => (
            <article key={group.id} data-lunar-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <FiCheckCircle aria-hidden="true" />
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <Link to={`/work/${group.projectSlugs[0]}`}>See project evidence <FiArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <div className="lunar-proof__signals" data-lunar-reveal>
          {verifiedSignals.slice(0, 3).map((signal) => (
            <div key={signal.id}><span>{signal.label}</span><strong>{signal.value}</strong><small>{signal.limitation}</small></div>
          ))}
        </div>
      </section>

      <section id="about" className="lunar-about lunar-section" aria-labelledby="about-title">
        <div className="lunar-about__statement" data-lunar-reveal>
          <span>03 / Mission dossier</span>
          <h2 id="about-title">Interfaces with clarity. Systems with staying power.</h2>
        </div>
        <div className="lunar-about__body" data-lunar-reveal>
          <p>{profile.intro}</p>
          <p>I translate operational complexity into interfaces people can understand, trust, and use under pressure.</p>
          <Link to="/about">Read the full profile <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="lunar-stat-grid" data-lunar-reveal>
          {stats.slice(0, 4).map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </section>

      <section id="skills" className="lunar-skills lunar-section" aria-labelledby="skills-title">
        <header className="lunar-section-label" data-lunar-reveal>
          <div><span>04</span><h2 id="skills-title">System matrix</h2></div>
          <i aria-hidden="true" />
          <Link to="/capabilities">Full capability map <FiArrowUpRight aria-hidden="true" /></Link>
        </header>
        <div className="lunar-skill-grid">
          {skillGroups.map((group, groupIndex) => (
            <article key={group.title} data-lunar-reveal>
              <span>{String(groupIndex + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.slice(0, 5).map((item) => <li key={item.name}>{item.name}<i aria-hidden="true" /></li>)}
              </ul>
            </article>
          ))}
          <article className="lunar-skill-grid__principle" data-lunar-reveal>
            <FiCode aria-hidden="true" />
            <p>Reusable components protect quality. Stable API contracts protect momentum.</p>
          </article>
        </div>
      </section>

      <section id="experience" className="lunar-experience lunar-section" aria-labelledby="experience-title">
        <div className="lunar-experience__intro" data-lunar-reveal>
          <span>05 / Mission log</span>
          <h2 id="experience-title">Production experience, logged.</h2>
          <Link to="/experience">Open full timeline <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="lunar-log">
          {experiences.map((experience, index) => (
            <article key={`${experience.company}-${experience.period}`} data-lunar-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><b>{experience.period}</b><small>{experience.location}</small></div>
              <div><h3>{experience.role}</h3><p>{experience.company}</p></div>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lunar-notes lunar-section" aria-labelledby="home-notes-title">
        <header className="lunar-section-label" data-lunar-reveal>
          <div><span>06</span><h2 id="home-notes-title">Field notes</h2></div>
          <i aria-hidden="true" />
          <Link to="/notes">Open all notes <FiArrowUpRight aria-hidden="true" /></Link>
        </header>
        <div className="lunar-notes__grid">
          {technicalNotes.slice(0, 3).map((note, index) => (
            <article key={note.slug} data-lunar-reveal>
              <header><FiFileText aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')} / {note.topic}</span></header>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <footer><small>{note.readingTime}</small><Link to={`/notes/${note.slug}`}>Read note <FiArrowRight aria-hidden="true" /></Link></footer>
            </article>
          ))}
          <article className="lunar-notes__lab" data-lunar-reveal>
            <FiTerminal aria-hidden="true" />
            <span>Live lab</span>
            <h3>See the visual system under constraint.</h3>
            <p>Rendering safeguards, reduced motion, fallbacks, and planned engineering benches.</p>
            <Link to="/lab">Enter the lab <FiArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="lunar-now lunar-section" aria-labelledby="home-now-title">
        <div data-lunar-reveal><span>07 / Now</span><h2 id="home-now-title">Currently building in public.</h2><p>Updated {now.lastUpdated} / {now.location}</p></div>
        <ul data-lunar-reveal>{now.building.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link to="/changelog" data-lunar-reveal>Read the changelog <FiArrowRight aria-hidden="true" /></Link>
      </section>

      <section id="contact" className="lunar-contact lunar-section" aria-labelledby="contact-title">
        <SignalVideo />
        <div className="lunar-contact__content" data-lunar-reveal>
          <span>Final transmission / channel open</span>
          <h2 id="contact-title">Let's build something useful - and unforgettable.</h2>
          <div>
            <Link to="/contact" className="lunar-button lunar-button--primary">
              Start a project <FiArrowRight aria-hidden="true" />
            </Link>
            <a href={`mailto:${profile.email}`} className="lunar-contact__email">{profile.email}</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(Home);

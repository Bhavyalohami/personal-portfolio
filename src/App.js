import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Header from './components/Header';
import { Preloader } from './components/Premium';
import useMediaQuery from './hooks/useMediaQuery';
import './index.css';
import './mission.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const Notes = lazy(() => import('./pages/Notes'));
const NoteDetail = lazy(() => import('./pages/NoteDetail'));
const Lab = lazy(() => import('./pages/Lab'));
const System = lazy(() => import('./pages/System'));
const Changelog = lazy(() => import('./pages/Changelog'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function useLocalMotionReduction() {
  const [disabled, setDisabled] = useState(() => document.documentElement.dataset.motion === 'off');
  useEffect(() => {
    const update = (event) => setDisabled(Boolean(event.detail?.reduced));
    window.addEventListener('portfolio-motion-change', update);
    return () => window.removeEventListener('portfolio-motion-change', update);
  }, []);
  return disabled;
}

function useSaveDataPreference() {
  const connection = navigator.connection;
  const [saveData, setSaveData] = useState(() => Boolean(connection?.saveData));
  useEffect(() => {
    if (!connection?.addEventListener) return undefined;
    const update = () => setSaveData(Boolean(connection.saveData));
    connection.addEventListener('change', update);
    return () => connection.removeEventListener('change', update);
  }, [connection]);
  return saveData;
}

function SmoothScroller() {
  const lenisRef = useRef(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const coarsePointer = useMediaQuery('(pointer: coarse)');
  const localReduction = useLocalMotionReduction();
  const saveData = useSaveDataPreference();
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (reducedMotion || localReduction || coarsePointer || saveData) return undefined;
    const lenis = new Lenis({ duration: 1.05, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), orientation: 'vertical', gestureOrientation: 'vertical', smoothWheel: true, syncTouch: false, wheelMultiplier: 1, infinite: false });
    lenisRef.current = lenis;
    let frameId;
    const raf = (time) => { lenis.raf(time); frameId = requestAnimationFrame(raf); };
    frameId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frameId); lenis.destroy(); lenisRef.current = null; };
  }, [coarsePointer, localReduction, reducedMotion, saveData]);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function HashScroller() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return undefined;
    const findAndScroll = () => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return false;
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      if (!target.matches('a, button, input, select, textarea, [tabindex]')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      return true;
    };
    if (findAndScroll()) return undefined;
    const observer = new MutationObserver(() => { if (findAndScroll()) observer.disconnect(); });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname, hash]);
  return null;
}

function GitHubPagesRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath && redirectPath.startsWith('/') && !redirectPath.startsWith('//') && redirectPath.length < 2048) navigate(redirectPath, { replace: true });
  }, [navigate]);
  return null;
}

function RouteAccessibility() {
  const { pathname, hash } = useLocation();
  const [announcement, setAnnouncement] = useState('');
  useEffect(() => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      const main = Array.from(document.querySelectorAll('#main-content')).find((node) => node.dataset.route === pathname);
      const heading = main?.querySelector('h1');
      if ((!main || !heading) && attempts < 40) { attempts += 1; return; }
      window.clearInterval(timer);
      const label = heading?.textContent?.trim() || 'Page';
      setAnnouncement(`${label} loaded`);
      if (!hash && main) main.focus({ preventScroll: true });
    }, 50);
    return () => window.clearInterval(timer);
  }, [hash, pathname]);
  return <div className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</div>;
}

function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let ticking = false;
    let frameId = 0;
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; frameId = requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frameId); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return <div className="scroll-progress" aria-hidden="true"><i ref={barRef} /></div>;
}

function RouteFallback() {
  return <div className="route-fallback" role="status" aria-live="polite"><b aria-hidden="true">BL</b><span>Loading route</span></div>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Skills />} />
          <Route path="/skills" element={<Navigate to="/capabilities" replace />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/projects" element={<Navigate to="/work" replace />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/system" element={<System />} />
          <Route path="/colophon" element={<Navigate to="/system" replace />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const basename = window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '/';
  const reportError = useCallback((error, info) => {
    if (process.env.NODE_ENV !== 'production') console.error('Portfolio error boundary', error, info);
  }, []);
  return (
    <ErrorBoundary onError={reportError}>
      <BrowserRouter basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SmoothScroller />
        <HashScroller />
        <GitHubPagesRedirect />
        <RouteAccessibility />
        <ScrollProgress />
        <Preloader />
        <div className="relative z-10 min-h-screen" style={{ '--lunar-starfield-url': `url(${process.env.PUBLIC_URL}/assets/lunar/starfield.webp)` }}>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

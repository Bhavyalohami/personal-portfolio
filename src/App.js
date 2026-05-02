import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { CustomCursor, Preloader } from './components/Premium';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Education = lazy(() => import('./pages/Education'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  return null;
}

function GitHubPagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    const validRoutes = new Set([
      '/',
      '/about',
      '/skills',
      '/projects',
      '/experience',
      '/education',
      '/resume',
      '/contact',
    ]);

    if (redirectPath && validRoutes.has(redirectPath)) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-screen bg-graphite px-4 pt-32 text-text-light md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="h-4 w-40 animate-pulse rounded-full bg-soft-ice" />
        <div className="mt-8 h-20 max-w-2xl animate-pulse rounded-3xl bg-soft-ice" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="h-52 animate-pulse rounded-3xl bg-soft-ice" />
          <div className="h-52 animate-pulse rounded-3xl bg-soft-ice" />
          <div className="h-52 animate-pulse rounded-3xl bg-soft-ice" />
        </div>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const basename =
    window.location.hostname.endsWith('github.io') ? '/personal-portfolio' : '/';

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <GitHubPagesRedirect />
      <Preloader />
      <CustomCursor />
      <div className="min-h-screen bg-graphite font-sans text-text-light selection:bg-ice-blue selection:text-white">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

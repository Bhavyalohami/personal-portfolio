import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { FiArrowRight, FiCommand, FiSearch, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const staticCommands = [
  { label: 'Home', hint: 'Overview and selected work', to: '/' },
  { label: 'Work', hint: 'Projects and case studies', to: '/work' },
  { label: 'About', hint: 'Principles and working style', to: '/about' },
  { label: 'Capabilities', hint: 'Skills connected to proof', to: '/capabilities' },
  { label: 'Experience', hint: 'Professional mission log', to: '/experience' },
  { label: 'Lab', hint: 'Experiments and prototypes', to: '/lab' },
  { label: 'Notes', hint: 'Engineering field notes', to: '/notes' },
  { label: 'System', hint: 'How this site was built', to: '/system' },
  { label: 'Resume', hint: 'Readable and printable profile', to: '/resume' },
  { label: 'Changelog', hint: 'Portfolio release history', to: '/changelog' },
  { label: 'Contact', hint: 'Open a project conversation', to: '/contact' },
];

function CommandPalette({ open, onClose, openerRef }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const restoreFocusRef = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();

  const commands = useMemo(() => [
    ...staticCommands,
    ...caseStudies.map((study) => ({
      label: study.title,
      hint: `Case study / ${study.category}`,
      to: `/work/${study.slug}`,
    })),
  ], []);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return commands;
    return commands.filter((command) => `${command.label} ${command.hint}`.toLowerCase().includes(term));
  }, [commands, query]);

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    previousFocusRef.current = document.activeElement;
    restoreFocusRef.current = true;
    const focusReturnTarget = openerRef?.current || previousFocusRef.current;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    const backgroundNodes = [
      document.querySelector('.lunar-nav'),
      document.getElementById('main-content'),
      document.querySelector('.lunar-footer'),
    ].filter(Boolean);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    backgroundNodes.forEach((node) => node.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      backgroundNodes.forEach((node) => node.removeAttribute('inert'));
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      if (restoreFocusRef.current) {
        window.requestAnimationFrame(() => focusReturnTarget?.focus?.());
      }
    };
  }, [onClose, open, openerRef]);

  useEffect(() => onClose(), [location.pathname, onClose]);

  if (!open) return null;

  const run = (to) => {
    restoreFocusRef.current = false;
    navigate(to);
    onClose();
  };

  return (
    <div className="command-palette" role="dialog" aria-modal="true" aria-labelledby="command-title" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div ref={panelRef} className="command-palette__panel">
        <header>
          <div>
            <FiCommand aria-hidden="true" />
            <span id="command-title">Navigate the portfolio</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close command menu"><FiX /></button>
        </header>
        <label className="command-palette__search">
          <FiSearch aria-hidden="true" />
          <span className="sr-only">Search pages and projects</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type a page, project, or topic..."
            onKeyDown={(event) => {
              if (event.key === 'Enter' && results[0]) run(results[0].to);
            }}
          />
          <kbd>ESC</kbd>
        </label>
        <div className="command-palette__results" aria-label="Navigation results">
          {results.map((command, index) => (
            <button key={`${command.to}-${command.label}`} type="button" data-primary={index === 0} onClick={() => run(command.to)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{command.label}<small>{command.hint}</small></strong>
              <FiArrowRight aria-hidden="true" />
            </button>
          ))}
          {results.length === 0 && <p>No matching signal. Try “work”, “React”, or a project name.</p>}
        </div>
        <footer><span>Press Enter to open the first result</span><span><kbd>Ctrl</kbd> + <kbd>K</kbd></span></footer>
      </div>
    </div>
  );
}

export function useCommandMenu(blocked = false) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const editing = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
      if (blocked) return;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      } else if (!editing && event.key === '/') {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [blocked]);
  return { open, setOpen };
}

export function CommandButton({ onClick, buttonRef }) {
  return <button ref={buttonRef} type="button" className="lunar-nav__command" onClick={onClick} aria-label="Open command menu"><FiCommand /><span>Ctrl K</span></button>;
}

export default memo(CommandPalette);

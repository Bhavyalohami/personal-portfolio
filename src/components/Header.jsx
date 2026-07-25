import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { FiMenu, FiPause, FiPlay, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import CommandPalette, { CommandButton, useCommandMenu } from './CommandPalette';

const primaryLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Lab', to: '/lab' },
  { label: 'Notes', to: '/notes' },
];

const utilityLinks = [
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Experience', to: '/experience' },
  { label: 'Resume', to: '/resume' },
  { label: 'System', to: '/system' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [motionOff, setMotionOff] = useState(() => {
    try { return window.localStorage.getItem('portfolio-motion') === 'off'; } catch { return false; }
  });
  const { open: commandOpen, setOpen: setCommandOpen } = useCommandMenu(open);
  const location = useLocation();
  const triggerRef = useRef(null);
  const commandTriggerRef = useRef(null);
  const closeRef = useRef(null);
  const menuRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const closeCommand = useCallback(() => setCommandOpen(false), [setCommandOpen]);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    document.documentElement.dataset.motion = motionOff ? 'off' : 'on';
    try { window.localStorage.setItem('portfolio-motion', motionOff ? 'off' : 'on'); } catch {}
    window.dispatchEvent(new CustomEvent('portfolio-motion-change', { detail: { reduced: motionOff } }));
  }, [motionOff]);

  useEffect(() => {
    const focusTarget = triggerRef.current;
    document.body.style.overflow = open ? 'hidden' : '';
    const backgroundNodes = [document.querySelector('.lunar-nav'), document.querySelector('main'), document.querySelector('.lunar-footer')].filter(Boolean);
    if (open) {
      backgroundNodes.forEach((node) => node.setAttribute('inert', ''));
      closeRef.current?.focus();
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) { restoreFocusRef.current = true; setOpen(false); }
      if (event.key === 'Tab' && open && menuRef.current) {
        const focusable = Array.from(menuRef.current.querySelectorAll('a[href], button:not([disabled])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      backgroundNodes.forEach((node) => node.removeAttribute('inert'));
      window.removeEventListener('keydown', onKeyDown);
      if (restoreFocusRef.current) { restoreFocusRef.current = false; requestAnimationFrame(() => focusTarget?.focus()); }
    };
  }, [open]);

  const closeMenu = () => { restoreFocusRef.current = true; setOpen(false); };
  const isCurrent = (to) => location.pathname === to || (to !== '/' && location.pathname.startsWith(`${to}/`));

  return (
    <>
      <header className="lunar-nav">
        <Link to="/" className="lunar-brand" aria-label="Bhavya Lohami home"><span aria-hidden="true">BL</span><b>Bhavya Lohami</b></Link>
        <nav className="lunar-nav__links" aria-label="Primary navigation">
          {primaryLinks.map((item) => <Link key={item.to} to={item.to} aria-current={isCurrent(item.to) ? 'page' : undefined}>{item.label}</Link>)}
        </nav>
        <div className="lunar-nav__tools">
          <button type="button" className="lunar-nav__motion" onClick={() => setMotionOff((value) => !value)} aria-pressed={motionOff} aria-label={motionOff ? 'Enable portfolio motion' : 'Reduce portfolio motion'}>{motionOff ? <FiPlay /> : <FiPause />}<span>{motionOff ? 'Motion off' : 'Motion on'}</span></button>
          <CommandButton buttonRef={commandTriggerRef} onClick={() => setCommandOpen(true)} />
          <Link className="lunar-nav__contact" to="/contact" aria-current={isCurrent('/contact') ? 'page' : undefined}>Contact <i aria-hidden="true" /></Link>
          <button ref={triggerRef} type="button" className="lunar-nav__menu" onClick={() => { restoreFocusRef.current = false; setOpen(true); }} aria-label="Open navigation" aria-expanded={open} aria-controls="lunar-mobile-menu"><FiMenu /></button>
        </div>
      </header>

      {open && (
        <div ref={menuRef} id="lunar-mobile-menu" className="lunar-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="lunar-menu__top"><span>Navigation / BL-26</span><button ref={closeRef} type="button" onClick={closeMenu} aria-label="Close navigation"><FiX /></button></div>
          <nav aria-label="Mobile navigation">
            {[...primaryLinks, ...utilityLinks].map((item, index) => <Link key={item.to} to={item.to} onClick={closeMenu} aria-current={isCurrent(item.to) ? 'page' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><i aria-hidden="true" /></Link>)}
          </nav>
        </div>
      )}
      <CommandPalette open={commandOpen} onClose={closeCommand} openerRef={commandTriggerRef} />
    </>
  );
}

export default memo(Header);

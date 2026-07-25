import React, { memo } from 'react';
import { FiArrowUpRight, FiClock, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio';
import { availability } from '../data/siteContent';

const footerGroups = [
  { title: 'Explore', links: [['Work', '/work'], ['About', '/about'], ['Lab', '/lab'], ['Notes', '/notes']] },
  { title: 'Evidence', links: [['Capabilities', '/capabilities'], ['Experience', '/experience'], ['Resume', '/resume'], ['System', '/system']] },
  { title: 'Site', links: [['Changelog', '/changelog'], ['Privacy', '/privacy'], ['Contact', '/contact']] },
];

function Footer() {
  return (
    <footer className="lunar-footer">
      <div className="lunar-footer__signal">
        <span>Build the useful thing.</span>
        <h2>
          <span>Open for a</span>
          <span className="is-accent">considered</span>
          <span>next project.</span>
        </h2>
        <Link to="/contact">Start a conversation <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="lunar-footer__map">
        <div className="lunar-footer__identity"><Link to="/" className="lunar-brand"><span aria-hidden="true">BL</span><b>{profile.name}</b></Link><p>{profile.role}</p><span><FiMapPin aria-hidden="true" />{availability.location}</span><span><FiClock aria-hidden="true" />{availability.timezone}</span></div>
        {footerGroups.map((group) => <nav key={group.title} aria-label={`${group.title} links`}><span>{group.title}</span>{group.links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</nav>)}
        <nav aria-label="Social links"><span>Elsewhere</span>{profile.socials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{social.label}<FiArrowUpRight aria-hidden="true" /></a>)}</nav>
      </div>
      <div className="lunar-footer__base"><span>&copy; {new Date().getFullYear()} {profile.name}</span><span className="lunar-footer__availability"><i aria-hidden="true" />{availability.status}</span><span>Designed and built in Jaipur</span></div>
    </footer>
  );
}

export default memo(Footer);

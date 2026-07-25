import { memo, useEffect } from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Seo from './Seo';

const asset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

export const EvidenceBadge = memo(function EvidenceBadge({ level = 'documented', children }) {
  return <span className={`evidence-badge evidence-badge--${level}`}>{children || level.replaceAll('-', ' ')}</span>;
});

export const PageHero = memo(function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = '',
  meta = [],
  actions,
  children,
}) {
  return (
    <header className={`mission-hero${image ? ' mission-hero--visual' : ''}`}>
      <div className="mission-hero__copy">
        <p className="mission-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="mission-hero__lede">{lede}</p>}
        {meta.length > 0 && (
          <dl className="mission-hero__meta">
            {meta.map((item) => (
              <div key={`${item.label}-${item.value}`}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {actions && <div className="mission-actions">{actions}</div>}
        {children}
      </div>
      {image && (
        <figure className="mission-hero__media">
          <img src={asset(image)} alt={imageAlt} decoding="async" />
          <figcaption><span>Visual record</span><i aria-hidden="true" /></figcaption>
        </figure>
      )}
    </header>
  );
});

export const SectionHeading = memo(function SectionHeading({ index, eyebrow, title, copy, action }) {
  return (
    <header className="mission-section__heading">
      <div>
        {index && <span>{index}</span>}
        <p>{eyebrow}</p>
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
      {action}
    </header>
  );
});

export function PrimaryLink({ to, href, children, variant = 'primary', download = false }) {
  const className = `lunar-button${variant === 'primary' ? ' lunar-button--primary' : ''}`;
  if (to) {
    return <Link to={to} className={className}>{children}<FiArrowRight aria-hidden="true" /></Link>;
  }
  return (
    <a
      href={href}
      className={className}
      target={href?.startsWith('http') && !download ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      download={download || undefined}
    >
      {children}{href?.startsWith('http') ? <FiArrowUpRight aria-hidden="true" /> : <FiArrowRight aria-hidden="true" />}
    </a>
  );
}

export default function PageShell({
  title,
  description,
  image,
  type,
  jsonLd,
  className = '',
  children,
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.dataset.scene = 'lunar';
    return () => delete document.documentElement.dataset.scene;
  }, []);

  return (
    <main id="main-content" tabIndex="-1" data-route={pathname} className={`mission-page ${className}`.trim()}>
      <Seo title={title} description={description} image={image} type={type} jsonLd={jsonLd} />
      {children}
    </main>
  );
}

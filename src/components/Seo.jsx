import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Bhavya Lohami | React & Full-Stack Developer';
const DEFAULT_DESCRIPTION =
  'Bhavya Lohami builds reliable React, Next.js, and Django products with thoughtful interfaces, resilient workflows, and measurable outcomes.';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function absoluteUrl(value, base) {
  if (!value) return base;
  try {
    return new URL(value, base).toString();
  } catch {
    return value;
  }
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = '/assets/lunar/og-image.png',
  type = 'website',
  jsonLd,
  noIndex = false,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const configuredBase = process.env.REACT_APP_SITE_URL;
    const origin = configuredBase || window.location.origin;
    const pageTitle = title ? `${title} | Bhavya Lohami` : DEFAULT_TITLE;
    const canonical = absoluteUrl(pathname, origin);
    const socialImage = absoluteUrl(`${process.env.PUBLIC_URL || ''}${image}`, origin);

    document.title = pageTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: socialImage });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const scriptId = 'portfolio-structured-data';
    document.getElementById(scriptId)?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => document.getElementById(scriptId)?.remove();
  }, [description, image, jsonLd, noIndex, pathname, title, type]);

  return null;
}

export { DEFAULT_DESCRIPTION, DEFAULT_TITLE };

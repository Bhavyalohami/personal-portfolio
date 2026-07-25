import { memo, useEffect, useState } from 'react';

const initialMetrics = [
  { label: 'First paint', value: 'Measuring', note: 'Browser paint timing' },
  { label: 'Largest paint', value: 'Measuring', note: 'Live LCP observation' },
  { label: 'Layout shift', value: 'Measuring', note: 'Live CLS observation' },
  { label: 'Runtime', value: 'Active', note: 'Client instrumentation' },
];

function formatMilliseconds(value) {
  return Number.isFinite(value) ? `${Math.round(value)} ms` : 'Unavailable';
}

function RuntimeVitals() {
  const [metrics, setMetrics] = useState(initialMetrics);

  useEffect(() => {
    let lcp = null;
    let cls = 0;
    const observers = [];

    const paint = performance.getEntriesByType('paint').find((entry) => entry.name === 'first-contentful-paint');
    const update = () => setMetrics([
      { label: 'First paint', value: formatMilliseconds(paint?.startTime), note: 'This visit / FCP' },
      { label: 'Largest paint', value: formatMilliseconds(lcp), note: 'This visit / LCP' },
      { label: 'Layout shift', value: Number.isFinite(cls) ? cls.toFixed(3) : 'Unavailable', note: 'This visit / CLS' },
      {
        label: 'Runtime',
        value: `${navigator.hardwareConcurrency || '?'} cores`,
        note: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Reduced motion requested' : 'Motion enabled',
      },
    ]);

    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          lcp = entries[entries.length - 1]?.startTime ?? lcp;
          update();
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        observers.push(lcpObserver);
      } catch {}
      try {
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) cls += entry.value;
          });
          update();
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        observers.push(clsObserver);
      } catch {}
    }
    const timer = window.setTimeout(update, 1200);
    return () => {
      window.clearTimeout(timer);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="runtime-vitals" aria-label="Live performance observations">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
          <small>{metric.note}</small>
        </div>
      ))}
    </div>
  );
}

export default memo(RuntimeVitals);

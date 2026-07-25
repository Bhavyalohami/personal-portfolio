import { useEffect, useState } from 'react';
import useMediaQuery from './useMediaQuery';

export default function usePortfolioMotion() {
  const systemReduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [localReduced, setLocalReduced] = useState(() => document.documentElement.dataset.motion === 'off');

  useEffect(() => {
    const update = (event) => setLocalReduced(Boolean(event.detail?.reduced));
    window.addEventListener('portfolio-motion-change', update);
    return () => window.removeEventListener('portfolio-motion-change', update);
  }, []);

  return systemReduced || localReduced;
}

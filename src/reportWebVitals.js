import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import { reportVital } from './utils/analytics';

export default function reportWebVitals() {
  if (!process.env.REACT_APP_WEB_VITALS_ENDPOINT) return;
  onCLS(reportVital);
  onFCP(reportVital);
  onINP(reportVital);
  onLCP(reportVital);
  onTTFB(reportVital);
}

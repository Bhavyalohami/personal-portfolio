import { memo } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFound() {
  const { pathname } = useLocation();
  return (
    <main id="main-content" tabIndex="-1" data-route={pathname} className="not-found">
      <Seo title="Signal Not Found" description="This portfolio route could not be found." noIndex />
      <div className="not-found__code" aria-hidden="true">404</div>
      <div className="not-found__copy">
        <span>Navigation anomaly / route unavailable</span>
        <h1>This signal left orbit.</h1>
        <p>The page may have moved, the address may be incomplete, or this route never existed.</p>
        <div><Link to="/" className="lunar-button lunar-button--primary"><FiArrowLeft aria-hidden="true" /> Return home</Link><Link to="/work" className="lunar-button">Browse work <FiArrowRight aria-hidden="true" /></Link></div>
      </div>
    </main>
  );
}

export default memo(NotFound);

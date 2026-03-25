import {StrictMode, useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import { Layout } from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Approach from './pages/Approach.tsx';
import Pricing from './pages/Pricing.tsx';
import Contact from './pages/Contact.tsx';
import Analytics from './pages/Analytics.tsx';
import './index.css';

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Listen for custom navigation events if any
    window.addEventListener('pushstate', handleLocationChange);
    window.addEventListener('replacestate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
      window.removeEventListener('replacestate', handleLocationChange);
    };
  }, []);

  // Simple routing logic
  let Page = Home;
  const path = pathname.toLowerCase();

  if (path === '/about' || path === '/about.html') Page = About;
  else if (path === '/services' || path === '/services.html') Page = Services;
  else if (path === '/approach' || path === '/approach.html') Page = Approach;
  else if (path === '/pricing' || path === '/pricing.html') Page = Pricing;
  else if (path === '/contact' || path === '/contact.html') Page = Contact;
  else if (path === '/analytics' || path === '/analytics.html') Page = Analytics;

  return (
    <Layout>
      <Page />
    </Layout>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

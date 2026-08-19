import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Feedback from './pages/Feedback';
import Interactive from './pages/Interactive';
import Tutorial from './pages/Tutorial';
import Media from './pages/Media';
import Navigation from './pages/Navigation';
import Layout from './pages/Layout';
import Observers from './pages/Observers';

function useInterceptShadowLinks() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

      const anchor = e.composedPath().find(
        (el) => el instanceof HTMLAnchorElement
      );
      if (!anchor) return;

      const root = anchor.getRootNode();
      if (!(root instanceof ShadowRoot)) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (anchor.hasAttribute('download') || anchor.target === '_blank') return;

      e.preventDefault();
      navigate(url.pathname + url.search + url.hash);
    }

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [navigate]);
}

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/forms', label: 'Forms' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/interactive', label: 'Interactive' },
  { to: '/media', label: 'Media' },
  { to: '/navigation', label: 'Navigation' },
  { to: '/layout', label: 'Layout' },
  { to: '/observers', label: 'Observers' },
  { to: '/tutorial', label: 'Tutorial' },
];

function AppShell() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('wa-color-scheme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useInterceptShadowLinks();

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    localStorage.setItem('wa-color-scheme', checked ? 'dark' : 'light');
  };

  return (
    <div className={darkMode ? 'wa-dark' : 'wa-light'}>
      <wa-page>
        <div slot="header" className="page-header">
          <h1>React 19 + Web Awesome</h1>
          <wa-switch
            checked={darkMode || undefined}
            onChange={(e) => toggleDarkMode(e.target.checked)}
            size="s"
          >
            Dark Mode
          </wa-switch>
        </div>

        <div slot="navigation" className="page-nav">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end || undefined}>{label}</NavLink>
          ))}
        </div>

        <div className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/media" element={<Media />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/observers" element={<Observers />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/tutorial/:step" element={<Tutorial />} />
          </Routes>
        </div>
      </wa-page>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;

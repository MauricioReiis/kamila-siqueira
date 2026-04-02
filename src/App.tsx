import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { initAnalytics, trackPageView } from './lib/analytics';

const ProposalPage = lazy(() => import('./pages/Proposal').then((m) => ({ default: m.ProposalPage })));
const InsightsPage = lazy(() => import('./pages/Insights').then((m) => ({ default: m.InsightsPage })));

const RouteAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RouteAnalytics />
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <div id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proposta" element={<ProposalPage />} />
            <Route path="/painel-metricas" element={<InsightsPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';

const ProposalPage = lazy(() => import('./pages/Proposal').then((m) => ({ default: m.ProposalPage })));

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <div id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proposta" element={<ProposalPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ProposalPage } from './pages/Proposal';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proposta" element={<ProposalPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

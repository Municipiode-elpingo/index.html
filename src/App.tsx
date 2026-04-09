import { useState } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Municipio from './pages/Municipio';
import HCDMain from './pages/HCDMain';
import Ordenanzas from './pages/Ordenanzas';
import Actas from './pages/Actas';
import Tramites from './pages/Tramites';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio': return <Home onNavigate={setCurrentPage} />;
      case 'municipio': return <Municipio />;
      case 'hcd': return <HCDMain onNavigate={setCurrentPage} />;
      case 'hcd-ordenanzas': return <Ordenanzas onNavigate={setCurrentPage} />;
      case 'hcd-actas': return <Actas onNavigate={setCurrentPage} />;
      case 'tramites': return <Tramites />;
      case 'noticias': return <Noticias />;
      case 'contacto': return <Contacto />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

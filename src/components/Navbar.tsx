import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageId, NavItem } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'municipio', label: 'El Municipio' },
  {
    id: 'hcd',
    label: 'H. Concejo Deliberante',
    children: [
      { id: 'hcd-ordenanzas', label: 'Ordenanzas' },
      { id: 'hcd-actas', label: 'Actas y Resoluciones' },
    ],
  },
  { id: 'tramites', label: 'Trámites y Servicios' },
  { id: 'noticias', label: 'Noticias' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hcdOpen, setHcdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileOpen(false);
    setHcdOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHcdActive = ['hcd', 'hcd-ordenanzas', 'hcd-actas'].includes(currentPage);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNav('inicio')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/WhatsApp_Image_2026-04-09_at_1.32.01_PM.jpeg"
              alt="Municipio de El Pingo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-medium text-[#8FBF5A] uppercase tracking-widest leading-none">
                Municipio de
              </p>
              <p className="text-lg font-bold text-black leading-tight">El Pingo</p>
              <p className="text-xs text-gray-500 leading-none">Entre Ríos, Argentina</p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => setHcdOpen(!hcdOpen)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isHcdActive
                          ? 'text-[#E2B95B] bg-[#E2B95B]/10'
                          : 'text-gray-700 hover:text-[#E2B95B] hover:bg-[#E2B95B]/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${hcdOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 min-w-48 ${
                        hcdOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNav(child.id)}
                          className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                            currentPage === child.id
                              ? 'bg-[#E2B95B]/10 text-[#E2B95B]'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-[#E2B95B]'
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'text-[#E2B95B] bg-[#E2B95B]/10'
                      : 'text-gray-700 hover:text-[#E2B95B] hover:bg-[#E2B95B]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setHcdOpen(!hcdOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isHcdActive ? 'bg-[#E2B95B]/10 text-[#E2B95B]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${hcdOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {hcdOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNav(child.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentPage === child.id
                                ? 'bg-[#E2B95B]/10 text-[#E2B95B]'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-[#E2B95B]/10 text-[#E2B95B]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

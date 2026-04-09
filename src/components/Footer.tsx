import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/WhatsApp_Image_2026-04-09_at_1.32.01_PM.jpeg"
                alt="Logo Municipio"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-[#E2B95B] text-xs font-semibold uppercase tracking-widest">Municipio de</p>
                <p className="text-white text-xl font-bold leading-tight">El Pingo</p>
                <p className="text-gray-400 text-xs">Entre Ríos, Argentina</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trabajando por el bienestar y el desarrollo de nuestra comunidad en el Pueblo San Julián, Entre Ríos.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E2B95B] transition-colors duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E2B95B] transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Accesos Rápidos</h4>
            <ul className="space-y-2">
              {[
                { id: 'inicio' as PageId, label: 'Inicio' },
                { id: 'municipio' as PageId, label: 'El Municipio' },
                { id: 'hcd-ordenanzas' as PageId, label: 'Ordenanzas' },
                { id: 'hcd-actas' as PageId, label: 'Actas y Resoluciones' },
                { id: 'tramites' as PageId, label: 'Trámites y Servicios' },
                { id: 'noticias' as PageId, label: 'Noticias' },
                { id: 'contacto' as PageId, label: 'Contacto' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-gray-400 hover:text-[#E2B95B] text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E2B95B] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Calle Principal s/n, El Pingo, Entre Ríos, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E2B95B] shrink-0" />
                <span className="text-gray-400 text-sm">+54 (343) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#E2B95B] shrink-0" />
                <span className="text-gray-400 text-sm">contacto@municipioelpingo.gob.ar</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Horarios</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#E2B95B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Administración Municipal</p>
                  <p className="text-gray-400 text-xs">Lunes a Viernes: 7:00 - 14:00 hs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#8FBF5A] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Concejo Deliberante</p>
                  <p className="text-gray-400 text-xs">Lunes a Viernes: 8:00 - 13:00 hs</p>
                </div>
              </li>
              <li className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[#E2B95B] text-xs font-semibold uppercase tracking-wider mb-1">Urgencias</p>
                <p className="text-white text-sm font-bold">+54 (343) 000-0001</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Municipio de El Pingo. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">Pueblo San Julián &mdash; Entre Ríos, Argentina</p>
        </div>
      </div>
    </footer>
  );
}

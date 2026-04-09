import { FileText, BookOpen, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface HCDMainProps {
  onNavigate: (page: PageId) => void;
}

const concejales = [
  { nombre: 'Concejal/a Nombre Apellido', bloque: 'Bloque Oficial', cargo: 'Presidente del Bloque' },
  { nombre: 'Concejal/a Nombre Apellido', bloque: 'Bloque Oficial', cargo: 'Secretario/a' },
  { nombre: 'Concejal/a Nombre Apellido', bloque: 'Bloque Oposición', cargo: 'Concejal/a' },
  { nombre: 'Concejal/a Nombre Apellido', bloque: 'Bloque Oposición', cargo: 'Concejal/a' },
  { nombre: 'Concejal/a Nombre Apellido', bloque: 'Bloque Oficial', cargo: 'Concejal/a' },
];

export default function HCDMain({ onNavigate }: HCDMainProps) {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">Poder Legislativo</span>
              <h1 className="text-4xl md:text-6xl font-black text-black mt-2 mb-5 leading-tight">
                Honorable<br />Concejo<br />Deliberante
              </h1>
              <p className="text-black/70 text-lg leading-relaxed">
                El cuerpo legislativo del Municipio de El Pingo, responsable de dictar las ordenanzas y resoluciones que regulan la vida de nuestra comunidad.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-110" />
                <img
                  src="/WhatsApp_Image_2026-04-09_at_3.01.22_PM.jpeg"
                  alt="HCD El Pingo"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white/40 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => handleNav('hcd-ordenanzas')}
              className="group bg-white rounded-2xl p-8 text-left shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#E2B95B]/30 hover:-translate-y-1 transition-all duration-250"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E2B95B] transition-colors duration-200" style={{ background: 'linear-gradient(135deg, #E2B95B22, #8FBF5A22)' }}>
                <FileText size={26} className="text-[#E2B95B] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Ordenanzas</h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                Accedé al listado completo de ordenanzas municipales vigentes. Marco normativo que regula la vida en El Pingo.
              </p>
              <div className="flex items-center gap-2 text-[#E2B95B] font-semibold text-sm">
                Ver ordenanzas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => handleNav('hcd-actas')}
              className="group bg-white rounded-2xl p-8 text-left shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#8FBF5A]/30 hover:-translate-y-1 transition-all duration-250"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8FBF5A] transition-colors duration-200" style={{ background: 'linear-gradient(135deg, #8FBF5A22, #E2B95B22)' }}>
                <BookOpen size={26} className="text-[#8FBF5A] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Actas y Resoluciones</h3>
              <p className="text-gray-500 leading-relaxed mb-5">
                Consultá las actas de sesiones y resoluciones del Concejo Deliberante. Transparencia en cada decisión.
              </p>
              <div className="flex items-center gap-2 text-[#8FBF5A] font-semibold text-sm">
                Ver actas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#E2B95B] text-sm font-semibold uppercase tracking-widest">Cuerpo Legislativo</span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-2">Concejales y Concejalas</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Los representantes elegidos por la ciudadanía para legislar en nombre de toda la comunidad de El Pingo.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {concejales.map((c, i) => (
              <div key={i} className="bg-[#F5F5F5] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-black"
                  style={{ background: 'linear-gradient(135deg, #E2B95B, #8FBF5A)' }}
                >
                  {i + 1}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-black text-sm leading-snug">{c.nombre}</h3>
                  <p className="text-[#E2B95B] text-xs font-semibold mt-1">{c.cargo}</p>
                  <span className="inline-block mt-2 bg-gray-200 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">
                    {c.bloque}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-4">Sesiones del Concejo</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            El Honorable Concejo Deliberante de El Pingo sesiona de manera ordinaria los primeros y terceros miércoles de cada mes, a las 20:00 horas. Las sesiones son abiertas al público en general.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Sesiones ordinarias', value: '2° y 4° miércoles' },
              { label: 'Horario', value: '20:00 hs' },
              { label: 'Lugar', value: 'Sede del HCD' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-[#E2B95B] font-bold text-base">{item.value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { BookOpen, Download, Search, ChevronLeft, Filter } from 'lucide-react';
import { PageId } from '../types';

interface ActasProps {
  onNavigate: (page: PageId) => void;
}

const documentos = [
  { numero: '008/2026', tipo: 'Acta' as const, titulo: 'Sesión Ordinaria N° 8 — Aprobación de proyectos de obras públicas', fecha: '02/04/2026', descripcion: 'Tratamiento y votación de proyectos de infraestructura para el ejido municipal.' },
  { numero: '004/2026', tipo: 'Resolución' as const, titulo: 'Designación del personal administrativo del HCD para el período 2026', fecha: '20/03/2026', descripcion: 'Nombramiento del equipo técnico del Concejo Deliberante.' },
  { numero: '007/2026', tipo: 'Acta' as const, titulo: 'Sesión Ordinaria N° 7 — Análisis del informe de gestión municipal', fecha: '18/03/2026', descripcion: 'Revisión del informe anual de la administración municipal.' },
  { numero: '003/2026', tipo: 'Resolución' as const, titulo: 'Aprobación del calendario de sesiones ordinarias 2026', fecha: '10/03/2026', descripcion: 'Establecimiento del cronograma de sesiones para el año en curso.' },
  { numero: '006/2026', tipo: 'Acta' as const, titulo: 'Sesión Ordinaria N° 6 — Tratamiento de ordenanza presupuestaria', fecha: '04/03/2026', descripcion: 'Análisis y aprobación del presupuesto municipal 2026.' },
  { numero: '005/2026', tipo: 'Acta' as const, titulo: 'Sesión Especial — Asunción de autoridades del HCD 2026', fecha: '10/02/2026', descripcion: 'Acto de asunción y conformación de las autoridades del Concejo para 2026.' },
  { numero: '002/2026', tipo: 'Resolución' as const, titulo: 'Reconocimiento a vecinos destacados del año 2025', fecha: '05/02/2026', descripcion: 'Declaración de interés municipal para ciudadanos destacados.' },
  { numero: '001/2026', tipo: 'Resolución' as const, titulo: 'Bienvenida institucional al nuevo período legislativo 2026', fecha: '20/01/2026', descripcion: 'Resolución de apertura del año legislativo del Concejo Deliberante.' },
  { numero: '024/2025', tipo: 'Acta' as const, titulo: 'Sesión Ordinaria N° 24 — Cierre del período legislativo 2025', fecha: '17/12/2025', descripcion: 'Última sesión del año legislativo 2025.' },
  { numero: '014/2025', tipo: 'Resolución' as const, titulo: 'Declaración de interés municipal para las Fiestas Patronales de El Pingo', fecha: '10/10/2025', descripcion: 'Reconocimiento oficial de las fiestas locales.' },
];

const tipoColors = {
  'Acta': 'bg-blue-100 text-blue-700',
  'Resolución': 'bg-green-100 text-green-700',
};

export default function Actas({ onNavigate }: ActasProps) {
  const [search, setSearch] = useState('');
  const [tipoFilter, setTipoFilter] = useState('Todos');

  const filtered = documentos.filter((d) => {
    const matchSearch = d.titulo.toLowerCase().includes(search.toLowerCase()) || d.numero.includes(search);
    const matchTipo = tipoFilter === 'Todos' || d.tipo === tipoFilter;
    return matchSearch && matchTipo;
  });

  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => { onNavigate('hcd'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 text-black/60 hover:text-black text-sm font-medium mb-6 transition-colors"
          >
            <ChevronLeft size={16} /> H. Concejo Deliberante
          </button>
          <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">HCD — El Pingo</span>
          <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-4">Actas y Resoluciones</h1>
          <p className="text-black/70 text-lg max-w-2xl">
            Documentos oficiales del Honorable Concejo Deliberante. Accedé a las actas de sesiones y resoluciones institucionales.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-5 mb-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por título o número..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors"
                />
              </div>
              <div className="relative">
                <Filter size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={tipoFilter}
                  onChange={(e) => setTipoFilter(e.target.value)}
                  className="pl-9 pr-8 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors appearance-none bg-white cursor-pointer"
                >
                  <option value="Todos">Todos los tipos</option>
                  <option value="Acta">Actas</option>
                  <option value="Resolución">Resoluciones</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <p className="text-gray-500 text-sm">
              Mostrando <span className="font-semibold text-black">{filtered.length}</span> documento{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid gap-4">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <BookOpen size={40} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No se encontraron documentos</p>
                <p className="text-gray-400 text-sm mt-1">Probá con otro término de búsqueda</p>
              </div>
            ) : (
              filtered.map((d) => (
                <div
                  key={`${d.tipo}-${d.numero}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#8FBF5A]/30 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #8FBF5A22, #E2B95B22)' }}>
                        <BookOpen size={18} className="text-[#8FBF5A]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[#8FBF5A] font-bold text-sm">{d.tipo} N° {d.numero}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tipoColors[d.tipo]}`}>
                            {d.tipo}
                          </span>
                          <span className="text-gray-400 text-xs">{d.fecha}</span>
                        </div>
                        <h3 className="font-semibold text-black text-sm leading-snug mb-1">{d.titulo}</h3>
                        <p className="text-gray-500 text-xs">{d.descripcion}</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 bg-[#8FBF5A] hover:bg-[#6FA040] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors duration-200 shrink-0 shadow-sm"
                    >
                      <Download size={13} /> Descargar PDF
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

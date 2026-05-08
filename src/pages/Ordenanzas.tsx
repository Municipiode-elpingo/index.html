import { useState } from 'react';
import { FileText, Download, Search, ChevronLeft, Filter } from 'lucide-react';
import { PageId } from '../types';

interface OrdenanzasProps {
  onNavigate: (page: PageId) => void;
}

const ordenanzas = [
  { numero: '192/2026', titulo: 'IMPOSITIVA', fecha: '2026', categoria: 'Impuestos', descripcion: 'Ordenanza impositiva municipal para el ejercicio 2026.' },
  { numero: '191/2025', titulo: 'PRESUPUESTO MUNICIPAL EJERCICIO FISCAL', fecha: '2025', categoria: 'Presupuesto', descripcion: 'Presupuesto General de Gastos y Recursos del Municipio para el ejercicio fiscal 2025.' },
  { numero: '193/2025', titulo: 'TASA POR INSTALACIÓN DE ANTENAS', fecha: '2025', categoria: 'Tasas', descripcion: 'Regulación de tasas por instalación de antenas de telefonía en el ejido municipal.' },
  { numero: '194/2025', titulo: 'NUEVOS VALORES DE ENTRADAS FIESTA DEL GUISO', fecha: '2025', categoria: 'Eventos', descripcion: 'Fijación de valores de entradas para la Fiesta Provincial del Guiso 2025.' },
  { numero: '166/2024', titulo: 'IMPOSITIVA 2025', fecha: '2024', categoria: 'Impuestos', descripcion: 'Ordenanza impositiva municipal para el ejercicio 2025.' },
  { numero: '167/2024', titulo: 'PRESUPUESTO 2025', fecha: '2024', categoria: 'Presupuesto', descripcion: 'Presupuesto General de Gastos y Recursos del Municipio para el ejercicio 2025.' },
];

const categorias = ['Todas', 'Presupuesto', 'Impuestos', 'Tasas', 'Eventos'];

const categoriaColors: Record<string, string> = {
  'Presupuesto': 'bg-yellow-100 text-yellow-700',
  'Impuestos': 'bg-orange-100 text-orange-700',
  'Tasas': 'bg-blue-100 text-blue-700',
  'Eventos': 'bg-pink-100 text-pink-700',
};

export default function Ordenanzas({ onNavigate }: OrdenanzasProps) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('Todas');

  const filtered = ordenanzas.filter((o) => {
    const matchSearch = o.titulo.toLowerCase().includes(search.toLowerCase()) || o.numero.includes(search);
    const matchCat = catFilter === 'Todas' || o.categoria === catFilter;
    return matchSearch && matchCat;
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
          <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-4">Ordenanzas</h1>
          <p className="text-black/70 text-lg max-w-2xl">
            Listado completo de ordenanzas municipales. Descargá los documentos en formato PDF.
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
                  value={catFilter}
                  onChange={(e) => setCatFilter(e.target.value)}
                  className="pl-9 pr-8 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors appearance-none bg-white cursor-pointer"
                >
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              Mostrando <span className="font-semibold text-black">{filtered.length}</span> ordenanza{filtered.length !== 1 ? 's' : ''}
            </p>
            <p className="text-[#8FBF5A] text-xs font-semibold">
              ¿No encontrás una ordenanza? <a href="mailto:hcdelpingo@gmail.com" className="underline hover:text-[#6FA040] transition-colors">Contactanos</a>
            </p>
          </div>

          <div className="grid gap-4">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <FileText size={40} className="text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No se encontraron ordenanzas</p>
                <p className="text-gray-400 text-sm mt-1">Probá con otro término de búsqueda</p>
              </div>
            ) : (
              filtered.map((o) => (
                <div
                  key={o.numero}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#E2B95B]/30 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #E2B95B22, #8FBF5A22)' }}>
                        <FileText size={18} className="text-[#E2B95B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[#E2B95B] font-bold text-sm">Ord. N° {o.numero}</span>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoriaColors[o.categoria] || 'bg-gray-100 text-gray-600'}`}>
                            {o.categoria}
                          </span>
                          <span className="text-gray-400 text-xs">{o.fecha}</span>
                        </div>
                        <h3 className="font-semibold text-black text-sm leading-snug mb-1">{o.titulo}</h3>
                        <p className="text-gray-500 text-xs">{o.descripcion}</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 bg-[#E2B95B] hover:bg-[#C49B3A] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors duration-200 shrink-0 shadow-sm"
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

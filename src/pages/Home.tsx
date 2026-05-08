import { ArrowRight, Users, FileText, Briefcase, Newspaper, Phone, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const quickLinks = [
  { id: 'tramites' as PageId, icon: Briefcase, label: 'Trámites y Servicios', desc: 'Gestiones municipales en línea' },
  { id: 'hcd-ordenanzas' as PageId, icon: FileText, label: 'Ordenanzas', desc: 'Marco normativo municipal' },
  { id: 'noticias' as PageId, icon: Newspaper, label: 'Noticias', desc: 'Últimas novedades del municipio' },
  { id: 'contacto' as PageId, icon: Phone, label: 'Contacto', desc: 'Comunícate con nosotros' },
];

const stats = [
  { value: '2.500+', label: 'Habitantes' },
  { value: '1893', label: 'Año de fundación' },
  { value: '48', label: 'Ordenanzas vigentes' },
  { value: '12', label: 'Servicios municipales' },
];

const newsPreview = [
  {
    titulo: 'Descubrí el Municipio y su Historia',
    fecha: '9 de abril, 2026',
    categoria: 'Historia',
    img: 'https://images.pexels.com/photos/3573347/pexels-photo-3573347.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    titulo: 'Fiesta Provincial del Guiso: Tradiciones y Eventos',
    fecha: '9 de abril, 2026',
    categoria: 'Eventos',
    img: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    titulo: 'Guía de Servicios en el Municipio de El Pingo',
    fecha: '9 de abril, 2026',
    categoria: 'Servicios',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-black/15 text-black/80 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Entre Ríos, Argentina
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] mb-6">
                Municipio<br />
                <span className="text-white drop-shadow-sm">de El Pingo</span>
              </h1>
              <p className="text-black/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Trabajamos cada día para mejorar la calidad de vida de los vecinos del Pueblo San Julián y construir juntos el futuro de nuestra comunidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleNav('tramites')}
                  className="flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full font-semibold hover:bg-black/80 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
                >
                  Ver Trámites <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => handleNav('municipio')}
                  className="flex items-center gap-2 bg-white/25 backdrop-blur-sm text-black px-7 py-3.5 rounded-full font-semibold hover:bg-white/40 transition-all duration-200 border border-black/10"
                >
                  Conocer más <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-110" />
                <img
                  src="/WhatsApp_Image_2026-04-09_at_1.32.01_PM.jpeg"
                  alt="Municipio de El Pingo"
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white/40"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80H1440V0C1440 0 1080 80 720 80C360 80 0 0 0 0V80Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <p className="text-3xl md:text-4xl font-black text-[#E2B95B] mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#E2B95B] text-sm font-semibold uppercase tracking-widest">Accesos directos</span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-2">¿Qué necesitás hoy?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map(({ id, icon: Icon, label, desc }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="group bg-white rounded-2xl p-7 text-left shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#E2B95B]/30 hover:-translate-y-1 transition-all duration-250"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-[#E2B95B]" style={{ background: 'linear-gradient(135deg, #E2B95B22, #8FBF5A22)' }}>
                  <Icon size={22} className="text-[#E2B95B] group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-bold text-black text-base mb-1">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 mt-4 text-[#E2B95B] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Ver más <ArrowRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-[#8FBF5A] text-sm font-semibold uppercase tracking-widest">Actualidad</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-1">Últimas Noticias</h2>
            </div>
            <button
              onClick={() => handleNav('noticias')}
              className="flex items-center gap-2 text-[#E2B95B] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Ver todas <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsPreview.map((n) => (
              <article
                key={n.titulo}
                className="group bg-[#F5F5F5] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-250 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleNav('noticias')}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#E2B95B]/15 text-[#C49B3A] text-xs font-semibold px-2.5 py-1 rounded-full">
                      {n.categoria}
                    </span>
                    <span className="text-gray-400 text-xs">{n.fecha}</span>
                  </div>
                  <h3 className="font-bold text-black text-base leading-snug group-hover:text-[#E2B95B] transition-colors duration-200">
                    {n.titulo}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fiesta Provincial del Guiso"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[#8FBF5A] text-sm font-semibold uppercase tracking-widest">Evento destacado</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-2 mb-4">Fiesta Provincial del Guiso</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                El evento cultural y gastronómico más importante de la región. Cada noviembre, El Pingo es anfitriona de la Fiesta Provincial del Guiso, una celebración de la identidad entrerriana.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gastronomía típica, música en vivo, tradiciones ancestrales y comunidad. Un encuentro que reúne a vecinos y visitantes para compartir la riqueza cultural de Entre Ríos.
              </p>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-[#8FBF5A]/10 border border-[#8FBF5A]/20 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#8FBF5A] text-white font-bold text-lg">
                  Nov
                </div>
                <div>
                  <p className="font-bold text-black">Noviembre de cada año</p>
                  <p className="text-gray-500 text-sm">Celebración provincial anual</p>
                </div>
              </div>
              <button
                onClick={() => handleNav('noticias')}
                className="flex items-center gap-2 bg-[#8FBF5A] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#6FA040] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver más sobre el evento <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Users size={48} className="text-black/40 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-black mb-5">
            Tu municipio al servicio de la comunidad
          </h2>
          <p className="text-black/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            En El Pingo trabajamos con transparencia y compromiso para brindar los mejores servicios a cada vecino. Tu participación hace más fuerte a nuestra comunidad. Construyendo Futuro Juntos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleNav('contacto')}
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contactar al Municipio
            </button>
            <button
              onClick={() => handleNav('hcd')}
              className="bg-white/30 backdrop-blur-sm text-black px-8 py-4 rounded-full font-bold hover:bg-white/50 transition-all duration-200 border border-black/10"
            >
              Concejo Deliberante
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

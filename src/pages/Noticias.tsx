import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const noticias = [
  {
    id: 1,
    titulo: 'Descubrí el Municipio y su Historia',
    fecha: '9 de abril, 2026',
    categoria: 'Historia',
    resumen: 'Historia de El Pingo, sus orígenes como San Julián y la influencia del ferrocarril en las lomadas entrerrianas. Construyendo Futuro Juntos.',
    contenido: 'El Pingo, conocido en sus orígenes como San Julián, se ubica en el corazón de las lomadas entrerrianas. Su historia está ligada inseparablemente al ferrocarril y al trabajo diario de su comunidad. La locomotora a vapor es el símbolo de su origen y desarrollo, representando el espíritu emprendedor que caracteriza a nuestro pueblo. Con el paso de los años, la comunidad fue creciendo alrededor de la estación, desarrollando una actividad agropecuaria próspera.',
    img: 'https://images.pexels.com/photos/3573347/pexels-photo-3573347.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: true,
  },
  {
    id: 2,
    titulo: 'Fiesta Provincial del Guiso: Tradiciones y Eventos',
    fecha: '9 de abril, 2026',
    categoria: 'Eventos',
    resumen: 'Cada noviembre, El Pingo es anfitriona de la Fiesta Provincial del Guiso, el evento cultural y gastronómico más importante de la región.',
    contenido: 'La Fiesta Provincial del Guiso es una celebración de la identidad entrerriana que reúne a vecinos y visitantes de toda la región. Gastronomía típica, música en vivo, tradiciones ancestrales y comunidad se conjugan en este encuentro único. El Pingo es la sede provincial de este festival, convirtiéndose en el corazón de la celebración cada mes de noviembre.',
    img: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Guía de Servicios en el Municipio de El Pingo',
    fecha: '9 de abril, 2026',
    categoria: 'Servicios',
    resumen: 'Conocé los servicios institucionales disponibles para vecinos y visitantes: atención municipal, salud, educación y más.',
    contenido: 'El Municipio de El Pingo ofrece una variedad de servicios para satisfacer las necesidades de la comunidad. Desde trámites municipales hasta servicios de salud, educación y apoyo social. Nuestro objetivo es brindar atención de calidad con transparencia y eficiencia. Contamos con personal capacitado y horarios de atención que facilitan el acceso de los vecinos a los servicios.',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
  {
    id: 4,
    titulo: 'Reparación de calles en el barrio norte',
    fecha: '20 de marzo, 2026',
    categoria: 'Obras Públicas',
    resumen: 'El municipio inicia los trabajos de reparación y nivelación de calles de tierra en el sector norte del ejido, con especial atención a los accesos escolares y centros de salud.',
    contenido: 'Los trabajos contemplan la colocación de tosca y ripio en 12 cuadras del sector norte, así como la instalación de badenes en las esquinas más transitadas. Los vecinos afectados fueron previamente notificados del cronograma de intervención.',
    img: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
  {
    id: 5,
    titulo: 'Conmemoración del aniversario de El Pingo',
    fecha: '15 de marzo, 2026',
    categoria: 'Cultura',
    resumen: 'El municipio prepara un extenso programa de actividades culturales, deportivas y sociales para celebrar el aniversario de la fundación de El Pingo los días 20 y 21 de junio.',
    contenido: 'La programación incluye un desfile cívico, espectáculos artísticos, actividades para niños, exposición de fotografías históricas y la tradicional Fiesta del Ferrocarril. El municipio invita a todos los vecinos y visitantes a participar de estos festejos.',
    img: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
  {
    id: 6,
    titulo: 'Concejo Deliberante aprueba nuevo programa ambiental',
    fecha: '5 de marzo, 2026',
    categoria: 'Ambiente',
    resumen: 'El HCD aprobó por unanimidad la Ordenanza de Adhesión al Programa Provincial de Reciclado, que implementa la separación en origen de residuos sólidos urbanos en todo el ejido municipal.',
    contenido: 'A partir de junio, los vecinos deberán separar los residuos en húmedos, secos y especiales según el cronograma de recolección diferenciada. El municipio distribuirá contenedores de colores y realizará jornadas de capacitación vecinal antes de la implementación.',
    img: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
];

const categorias = ['Todas', 'Historia', 'Eventos', 'Servicios', 'Obras Públicas', 'Cultura'];

const categoriaColors: Record<string, string> = {
  'Historia': 'bg-purple-100 text-purple-700',
  'Eventos': 'bg-pink-100 text-pink-700',
  'Servicios': 'bg-blue-100 text-blue-700',
  'Obras Públicas': 'bg-orange-100 text-orange-700',
  'Cultura': 'bg-yellow-100 text-yellow-700',
};

export default function Noticias() {
  const [catFilter, setCatFilter] = useState('Todas');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = catFilter === 'Todas' ? noticias : noticias.filter((n) => n.categoria === catFilter);
  const destacada = filtered.find((n) => n.destacada);
  const rest = filtered.filter((n) => !n.destacada);

  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">Actualidad</span>
          <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-4">Noticias</h1>
          <p className="text-black/70 text-lg max-w-2xl">
            Mantente informado sobre las actividades, obras y novedades del Municipio de El Pingo.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCatFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  catFilter === cat
                    ? 'text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                style={catFilter === cat ? { background: 'linear-gradient(135deg, #E2B95B, #8FBF5A)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {destacada && (
            <div className="mb-10 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img src={destacada.img} alt={destacada.titulo} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E2B95B] mb-3">Nota destacada</span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoriaColors[destacada.categoria] || 'bg-gray-100 text-gray-600'}`}>
                      {destacada.categoria}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar size={11} /> {destacada.fecha}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-black leading-tight mb-4">{destacada.titulo}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {expandedId === destacada.id ? destacada.contenido : destacada.resumen}
                  </p>
                  <button
                    onClick={() => setExpandedId(expandedId === destacada.id ? null : destacada.id)}
                    className="flex items-center gap-2 text-[#E2B95B] font-semibold text-sm hover:gap-3 transition-all duration-200 w-fit"
                  >
                    {expandedId === destacada.id ? 'Ver menos' : 'Leer más'} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((n) => (
                <article key={n.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-250">
                  <div className="aspect-video overflow-hidden">
                    <img src={n.img} alt={n.titulo} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoriaColors[n.categoria] || 'bg-gray-100 text-gray-600'}`}>
                        <Tag size={10} className="inline mr-1" />{n.categoria}
                      </span>
                      <span className="text-gray-400 text-xs">{n.fecha}</span>
                    </div>
                    <h3 className="font-bold text-black text-base leading-snug mb-2">{n.titulo}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {expandedId === n.id ? n.contenido : n.resumen}
                    </p>
                    <button
                      onClick={() => setExpandedId(expandedId === n.id ? null : n.id)}
                      className="flex items-center gap-1.5 text-[#E2B95B] font-semibold text-xs hover:gap-2.5 transition-all duration-200"
                    >
                      {expandedId === n.id ? 'Ver menos' : 'Leer más'} <ArrowRight size={12} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
              <p className="text-gray-500 font-medium">No hay noticias en esta categoría</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

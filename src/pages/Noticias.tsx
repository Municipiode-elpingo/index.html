import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const noticias = [
  {
    id: 1,
    titulo: 'Mejoras en el alumbrado público del casco urbano',
    fecha: '5 de abril, 2026',
    categoria: 'Obras Públicas',
    resumen: 'El municipio avanza con el recambio de luminarias convencionales por tecnología LED en las principales calles del casco urbano de El Pingo, mejorando la seguridad y reduciendo el consumo energético.',
    contenido: 'La administración municipal anunció que la renovación de luminarias alcanzará más de 80 puntos de luz en las calles principales del ejido urbano. La inversión, financiada con fondos municipales y un aporte provincial, busca mejorar la seguridad nocturna de los vecinos y reducir el gasto energético del municipio en un 40%.',
    img: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: true,
  },
  {
    id: 2,
    titulo: 'Nueva jornada de vacunación gratuita para mascotas',
    fecha: '2 de abril, 2026',
    categoria: 'Salud',
    resumen: 'El área de Salud municipal organiza una nueva jornada de vacunación antirrábica y antipulgas para perros y gatos de El Pingo. El servicio es completamente gratuito para los vecinos.',
    contenido: 'La jornada se realizará el próximo sábado 12 de abril en la Plaza Principal de 9:00 a 13:00 horas. Los vecinos deben concurrir con sus mascotas con correa o transportín. Se vacunarán hasta 300 animales en orden de llegada.',
    img: 'https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Apertura del registro de emprendedores locales 2026',
    fecha: '28 de marzo, 2026',
    categoria: 'Comercio',
    resumen: 'La Secretaría de Gobierno abre la inscripción al Registro Municipal de Emprendedores para acceder a beneficios, capacitaciones y financiamiento a tasa cero para proyectos productivos locales.',
    contenido: 'Los interesados pueden inscribirse hasta el 30 de abril presentando su proyecto y documentación en la Administración Municipal. Los emprendedores registrados tendrán acceso prioritario a ferias municipales, asesoramiento técnico y líneas de crédito del programa provincial Emprender Entre Ríos.',
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

const categorias = ['Todas', 'Obras Públicas', 'Salud', 'Comercio', 'Cultura', 'Ambiente'];

const categoriaColors: Record<string, string> = {
  'Obras Públicas': 'bg-orange-100 text-orange-700',
  'Salud': 'bg-red-100 text-red-700',
  'Comercio': 'bg-blue-100 text-blue-700',
  'Cultura': 'bg-yellow-100 text-yellow-700',
  'Ambiente': 'bg-green-100 text-green-700',
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

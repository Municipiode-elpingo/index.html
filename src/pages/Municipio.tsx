import { MapPin, Users, Landmark, Leaf, Brain as Train, Heart } from 'lucide-react';

const autoridades = [
  { cargo: 'Intendente Municipal', nombre: 'Sr. Nombre Apellido', img: null },
  { cargo: 'Secretario de Gobierno', nombre: 'Sr. Nombre Apellido', img: null },
  { cargo: 'Secretaria de Hacienda', nombre: 'Sra. Nombre Apellido', img: null },
  { cargo: 'Secretario de Obras Públicas', nombre: 'Sr. Nombre Apellido', img: null },
];

const pilares = [
  { icon: Leaf, titulo: 'Ambiente', desc: 'Protección del entorno natural y desarrollo sostenible de nuestro territorio.' },
  { icon: Users, titulo: 'Comunidad', desc: 'Fortalecimiento del tejido social y la participación ciudadana activa.' },
  { icon: Landmark, titulo: 'Gestión', desc: 'Administración transparente y eficiente de los recursos públicos.' },
  { icon: Heart, titulo: 'Bienestar', desc: 'Mejora continua de la calidad de vida de todos los vecinos.' },
];

export default function Municipio() {
  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">Conocenos</span>
            <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-5">El Municipio</h1>
            <p className="text-black/70 text-lg leading-relaxed">
              El Pingo es un pequeño municipio ubicado en el Departamento San Salvador, Entre Ríos. Con una historia ligada al ferrocarril y la actividad agropecuaria, nuestra comunidad crece con identidad y proyección de futuro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#E2B95B] text-sm font-semibold uppercase tracking-widest">Historia</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-2 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  El Pingo, conocido en sus orígenes como San Julián, se ubica en el corazón de las lomadas entrerrianas. Su historia está ligada inseparablemente al ferrocarril y al trabajo diario de su comunidad. La locomotora a vapor es el símbolo de su origen y desarrollo, representando el espíritu emprendedor que caracteriza a nuestro pueblo.
                </p>
                <p>
                  Con el paso de los años, la comunidad fue creciendo alrededor de la estación, desarrollando una actividad agropecuaria próspera basada en la ganadería, la agricultura y la producción avícola que caracterizan a la región entreriana. Nuestras raíces son profundas y nuestro compromiso con el trabajo es inquebrantable.
                </p>
                <p>
                  Hoy, El Pingo es un municipio consolidado que conserva su identidad histórica y trabaja con visión de futuro. Bajo el lema "Construyendo Futuro Juntos", trabajamos cada día para brindar a nuestros vecinos los servicios y la infraestructura que merecen.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 p-4 bg-white rounded-2xl border border-gray-100">
                <Train size={28} className="text-[#E2B95B] shrink-0" />
                <div>
                  <p className="font-bold text-black text-sm">Pueblo San Julián</p>
                  <p className="text-gray-500 text-xs">Departamento San Salvador, Entre Ríos</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#E2B95B]/20 to-[#8FBF5A]/20 flex items-center justify-center">
                <img
                  src="/WhatsApp_Image_2026-04-09_at_1.32.01_PM.jpeg"
                  alt="Municipio de El Pingo"
                  className="w-64 h-64 rounded-full object-cover shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#E2B95B]" />
                  <span className="text-xs font-semibold text-gray-700">Entre Ríos, Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#8FBF5A] text-sm font-semibold uppercase tracking-widest">Misión y valores</span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-2">Nuestros Pilares</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map(({ icon: Icon, titulo, desc }) => (
              <div key={titulo} className="bg-[#F5F5F5] rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #E2B95B33, #8FBF5A33)' }}>
                  <Icon size={22} className="text-[#E2B95B]" />
                </div>
                <h3 className="font-bold text-black text-lg mb-2">{titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#E2B95B] text-sm font-semibold uppercase tracking-widest">Gobierno</span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-2">Autoridades Municipales</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">El equipo de gobierno comprometido con el desarrollo de El Pingo y el bienestar de sus vecinos.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {autoridades.map((a) => (
              <div key={a.cargo} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black"
                  style={{ background: 'linear-gradient(135deg, #E2B95B, #8FBF5A)' }}
                >
                  {a.nombre.charAt(4).toUpperCase()}
                </div>
                <h3 className="font-bold text-black text-sm leading-snug">{a.nombre}</h3>
                <p className="text-[#E2B95B] text-xs font-medium mt-1">{a.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#8FBF5A] text-sm font-semibold uppercase tracking-widest">Datos del territorio</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-2 mb-8">Información General</h2>
              <div className="space-y-4">
                {[
                  { label: 'Provincia', value: 'Entre Ríos' },
                  { label: 'Departamento', value: 'San Salvador' },
                  { label: 'Pueblo', value: 'San Julián' },
                  { label: 'Población', value: 'Aproximadamente 2.500 habitantes' },
                  { label: 'Actividad principal', value: 'Ganadería, agricultura y avicultura' },
                  { label: 'Distancia a Paraná', value: 'Aprox. 130 km' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-sm w-40 shrink-0">{item.label}</span>
                    <span className="text-black font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-3xl p-8 border border-gray-100">
              <h3 className="font-bold text-black text-xl mb-5">Misión Institucional</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El Municipio de El Pingo tiene como misión promover el bienestar integral de sus habitantes, garantizando el acceso equitativo a los servicios públicos esenciales, fomentando el desarrollo económico local y preservando la identidad cultural de nuestra comunidad.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Actuamos con transparencia, eficiencia y compromiso, siendo los vecinos y vecinas el centro de todas nuestras acciones de gobierno.
              </p>
              <div className="mt-6 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, #E2B95B22, #8FBF5A22)' }}>
                <p className="text-black font-bold text-sm italic">
                  "Construimos juntos el futuro de El Pingo"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

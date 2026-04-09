import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    }, 1500);
  };

  const infoCards = [
    {
      icon: MapPin,
      titulo: 'Dirección',
      lineas: ['Calle Principal s/n', 'El Pingo, Pueblo San Julián', 'Entre Ríos, Argentina'],
      color: '#E2B95B',
    },
    {
      icon: Phone,
      titulo: 'Teléfonos',
      lineas: ['Municipio: +54 (343) 000-0000', 'HCD: +54 (343) 000-0002', 'Urgencias: +54 (343) 000-0001'],
      color: '#8FBF5A',
    },
    {
      icon: Mail,
      titulo: 'Correo Electrónico',
      lineas: ['contacto@municipioelpingo.gob.ar', 'hcd@municipioelpingo.gob.ar', 'obras@municipioelpingo.gob.ar'],
      color: '#E2B95B',
    },
    {
      icon: Clock,
      titulo: 'Horarios de Atención',
      lineas: ['Lunes a Viernes: 7:00 – 14:00 hs', 'HCD: Lunes a Viernes: 8:00 – 13:00 hs', 'Urgencias: 24 hs'],
      color: '#8FBF5A',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">Municipio de El Pingo</span>
          <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-4">Contacto</h1>
          <p className="text-black/70 text-lg max-w-2xl">
            Comunicate con nosotros. Estamos disponibles para atender tus consultas, sugerencias y requerimientos.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {infoCards.map(({ icon: Icon, titulo, lineas, color }) => (
              <div key={titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}22` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="font-bold text-black text-sm mb-2">{titulo}</h3>
                <ul className="space-y-1">
                  {lineas.map((linea, i) => (
                    <li key={i} className="text-gray-500 text-xs leading-relaxed">{linea}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#E2B95B] text-sm font-semibold uppercase tracking-widest">Formulario</span>
              <h2 className="text-3xl md:text-4xl font-black text-black mt-2 mb-3">Envianos tu mensaje</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Completá el formulario y nos comunicaremos con vos a la brevedad. También podés visitarnos personalmente en nuestras oficinas en el horario de atención.
              </p>

              {enviado ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-[#8FBF5A]/30 shadow-sm">
                  <CheckCircle size={48} className="text-[#8FBF5A] mx-auto mb-4" />
                  <h3 className="font-black text-black text-xl mb-2">Mensaje enviado</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Gracias por comunicarte con el Municipio de El Pingo. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-6 text-[#E2B95B] font-semibold text-sm hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Nombre completo *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre y apellido"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-1.5">Correo electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-black mb-1.5">Asunto *</label>
                    <select
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors appearance-none bg-white cursor-pointer text-gray-700"
                    >
                      <option value="">Seleccioná un asunto</option>
                      <option value="consulta">Consulta general</option>
                      <option value="tramite">Trámite municipal</option>
                      <option value="reclamo">Reclamo / Denuncia</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="obra">Obra pública</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-black mb-1.5">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describí tu consulta o solicitud con el mayor detalle posible..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#E2B95B] transition-colors resize-none placeholder:text-gray-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-white transition-all duration-200 disabled:opacity-70 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #E2B95B, #8FBF5A)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <span className="text-[#8FBF5A] text-sm font-semibold uppercase tracking-widest">Ubicación</span>
              <h2 className="text-3xl font-black text-black mt-2 mb-6">Dónde encontrarnos</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-[#E2B95B]/20 to-[#8FBF5A]/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-[#E2B95B] mx-auto mb-3" />
                    <p className="font-bold text-black">El Pingo</p>
                    <p className="text-gray-500 text-sm">Pueblo San Julián, Entre Ríos</p>
                    <a
                      href="https://maps.google.com/?q=El+Pingo+Entre+Rios+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-[#E2B95B] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C49B3A] transition-colors"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#E2B95B] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-black text-sm">Municipio de El Pingo</p>
                      <p className="text-gray-500 text-xs mt-0.5">Calle Principal s/n, El Pingo, Pueblo San Julián, Entre Ríos, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-black rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-4">Redes Sociales</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Seguinos en nuestras redes para estar al día con las novedades del municipio.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex-1 text-center bg-white/10 hover:bg-[#E2B95B] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200">
                    Facebook
                  </a>
                  <a href="#" className="flex-1 text-center bg-white/10 hover:bg-[#8FBF5A] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

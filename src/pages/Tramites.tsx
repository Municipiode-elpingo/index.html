import { useState } from 'react';
import { FileText, Home, Car, Trash2, Building, Users, Leaf, ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';

const tramites = [
  {
    icon: FileText,
    titulo: 'Certificado de Libre Deuda Municipal',
    descripcion: 'Obtené la certificación de que no tenés deudas pendientes con el municipio.',
    tiempo: '48-72 horas',
    requisitos: ['DNI del solicitante', 'CUIT/CUIL', 'Datos del inmueble o actividad comercial', 'Nota de solicitud'],
    pasos: ['Presentar la documentación en la ventanilla de Rentas Municipales', 'Abonar la tasa correspondiente', 'Retirar el certificado en el plazo indicado'],
  },
  {
    icon: Home,
    titulo: 'Habilitación de Comercios y Actividades',
    descripcion: 'Tramitá la habilitación municipal para iniciar o regularizar tu actividad comercial.',
    tiempo: '5-10 días hábiles',
    requisitos: ['DNI del titular', 'CUIT', 'Contrato de alquiler o escritura', 'Plano del local aprobado', 'Nota de solicitud', 'Aprobación de Bromatología (si aplica)'],
    pasos: ['Completar el formulario de solicitud', 'Presentar documentación completa', 'Pago de aranceles', 'Inspección del local', 'Emisión del certificado de habilitación'],
  },
  {
    icon: Building,
    titulo: 'Permiso de Construcción',
    descripcion: 'Solicitar permiso para construcción, ampliación o refacción de inmuebles.',
    tiempo: '15-30 días hábiles',
    requisitos: ['DNI del propietario', 'Título de propiedad', 'Planos firmados por profesional matriculado', 'Pago de derechos de construcción', 'Declaración jurada de obra'],
    pasos: ['Presentar planos y documentación en Obras Públicas', 'Revisión técnica por parte del área', 'Pago de derechos según superficie', 'Retiro del permiso aprobado'],
  },
  {
    icon: Car,
    titulo: 'Inscripción al Registro de Conductores',
    descripcion: 'Alta o renovación en el registro municipal de conductores de vehículos.',
    tiempo: '24-48 horas',
    requisitos: ['DNI vigente', 'Licencia de conducir vigente', 'Apto médico', 'Fotos carnet (2)', 'Comprobante de pago'],
    pasos: ['Solicitar turno en la oficina de Tránsito', 'Presentar documentación', 'Examen de conocimiento vial (para nuevos inscriptos)', 'Pago de tasa', 'Retiro de credencial'],
  },
  {
    icon: Trash2,
    titulo: 'Solicitud de Servicio de Recolección de Residuos Voluminosos',
    descripcion: 'Pedido especial para retiro de muebles, electrodomésticos y materiales de construcción.',
    tiempo: 'Coordinación en 24-48 horas',
    requisitos: ['Nombre completo', 'Domicilio', 'Teléfono de contacto', 'Descripción de los residuos'],
    pasos: ['Llamar al número municipal o enviar solicitud escrita', 'Coordinación de fecha y hora con el área de Higiene Urbana', 'Colocar los residuos en la vereda el día indicado'],
  },
  {
    icon: Users,
    titulo: 'Solicitud de Turno para Asistencia Social',
    descripcion: 'Atención y orientación para acceder a programas sociales municipales y provinciales.',
    tiempo: 'Atención en el día',
    requisitos: ['DNI del solicitante y grupo familiar', 'Documentación que respalde la situación', 'Domicilio actualizado'],
    pasos: ['Concurrir a la Secretaría de Desarrollo Social', 'Entrevista inicial con trabajador/a social', 'Evaluación del caso', 'Derivación al programa correspondiente'],
  },
  {
    icon: Leaf,
    titulo: 'Permiso de Poda y Extracción de Árboles',
    descripcion: 'Solicitar autorización municipal para intervenir el arbolado público o privado.',
    tiempo: '3-5 días hábiles',
    requisitos: ['DNI del solicitante', 'Domicilio del árbol a intervenir', 'Justificación de la solicitud', 'Nota firmada'],
    pasos: ['Presentar nota en la Mesa de Entradas', 'Inspección del árbol por técnico municipal', 'Resolución de aprobación o rechazo', 'Ejecución del trabajo con supervisión (si aplica)'],
  },
];

function TramiteCard({ tramite }: { tramite: typeof tramites[0] }) {
  const [open, setOpen] = useState(false);
  const Icon = tramite.icon;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #E2B95B22, #8FBF5A22)' }}>
            <Icon size={20} className="text-[#E2B95B]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-black text-base leading-snug">{tramite.titulo}</h3>
              {open ? <ChevronUp size={18} className="text-gray-400 shrink-0 mt-0.5" /> : <ChevronDown size={18} className="text-gray-400 shrink-0 mt-0.5" />}
            </div>
            <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{tramite.descripcion}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-semibold text-[#8FBF5A] bg-[#8FBF5A]/10 px-2.5 py-1 rounded-full">
                Tiempo estimado: {tramite.tiempo}
              </span>
            </div>
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-gray-100 px-6 pb-6 pt-5 bg-[#F5F5F5]">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-black text-sm mb-3">Documentación requerida</h4>
              <ul className="space-y-2">
                {tramite.requisitos.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#E2B95B] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black text-sm mb-3">Pasos a seguir</h4>
              <ol className="space-y-2">
                {tramite.pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#8FBF5A] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    {paso}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Tramites() {
  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #E2B95B 0%, #8FBF5A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-black/60 text-sm font-semibold uppercase tracking-widest">Municipio de El Pingo</span>
          <h1 className="text-5xl md:text-6xl font-black text-black mt-2 mb-4">Trámites y Servicios</h1>
          <p className="text-black/70 text-lg max-w-2xl leading-relaxed">
            Encontrá toda la información necesaria para realizar tus gestiones municipales. Conocé los requisitos, pasos y tiempos de cada trámite.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10 bg-white rounded-2xl p-6 border border-[#E2B95B]/30 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E2B95B] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-black text-base mb-1">¿Necesitás ayuda?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Si tenés dudas sobre algún trámite, comunicate con la administración municipal. Estamos para ayudarte.
                </p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Phone size={13} className="text-[#E2B95B]" /> +54 (343) 000-0000
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Mail size={13} className="text-[#E2B95B]" /> contacto@municipioelpingo.gob.ar
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {tramites.map((t) => (
              <TramiteCard key={t.titulo} tramite={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

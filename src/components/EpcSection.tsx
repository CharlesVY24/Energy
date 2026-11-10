import SectionHeading from '@/components/SectionHeading';

const STEPS = [
  { title: 'Diagnóstico', text: 'Análisis de carga 24/7, calidad de energía clase A, viabilidad técnica y económica.' },
  { title: 'Ingeniería', text: 'Planos unilineales, memorias de cálculo, coordinación de protecciones y diseño SCADA.' },
  { title: 'Suministro', text: 'Importación directa, gestión aduanera, IVA 0% y arancel 0% (Certificado UPME).' },
  { title: 'Instalación', text: 'Montaje, puesta en marcha, pruebas de aceptación (FAT/SAT) y certificación RETIE.' },
  { title: 'Soporte O&M', text: 'Monitoreo 24/7, mantenimiento preventivo, garantía de desempeño y soporte técnico.' },
];

const SERVICE_BLOCKS = [
  {
    title: 'Diagnóstico y optimización de redes',
    items: [
      'Análisis de calidad de energía clase A: armónicos, flicker, transitorios y huecos de tensión (IEC 61000-4-30)',
      'Análisis de cargabilidad: corriente medida vs. nominal en transformadores y conductores',
      'Informe ejecutivo con ahorro cuantificado en COP/año y recomendaciones de inversión priorizadas',
      'Dimensionamiento del sistema solar, almacenamiento y KVAR según el perfil de carga',
    ],
  },
  {
    title: 'Ingeniería y eficiencia energética',
    items: [
      'Diseño de sistemas fotovoltaicos, almacenamiento y microrred con planos unilineales certificados RETIE',
      'Cálculo de corto circuito, coordinación de protecciones y selectividad de fusibles y disyuntores',
      'Corrección del factor de potencia con bancos KVAR automáticos hasta FP ≥ 0.97',
      'Memorias técnicas, especificaciones de equipos y gestión de permisos ante el operador de red',
    ],
  },
  {
    title: 'Bancos de carga · Pruebas de respaldo',
    items: [
      'Pruebas de carga resistiva regulable sobre plantas eléctricas y UPS en condiciones reales',
      'Verificación de regulación de voltaje, frecuencia y tiempo de respuesta ante transitorios',
      'Validación de capacidad nominal vs. real: derating por temperatura, altitud o edad',
      'Certificación de sistemas de respaldo para hospitales, data centers e industria crítica',
    ],
  },
  {
    title: 'Movilidad eléctrica (E-Mobility)',
    items: [
      'Estudio de viabilidad: red eléctrica existente, capacidad del transformador y acometida',
      'Diseño e instalación de cargadores Nivel 1 (3.3 kW), Nivel 2 (7–22 kW) y Nivel 3 DC (50–150 kW)',
      'Smart Charging con gestión de demanda e integración solar',
      'Fleet EMS para flotas eléctricas con OCPP 1.6/2.0 y reportes de consumo por vehículo',
    ],
  },
];

export default function EpcSection() {
  return (
    <section id="epc" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Modelo de entrega"
          title={
            <>
              Servicios EPC <span className="text-amber-500">llave en mano</span>
            </>
          }
          description="Un único responsable desde el diagnóstico técnico hasta la puesta en marcha y el soporte post-instalación, respaldado por RETIE, IEEE, IEC y CREG."
        />

        <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="group relative text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-bold text-navy-950 shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                {index + 1}
              </span>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-navy-900">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-[1.5] text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {SERVICE_BLOCKS.map((block, index) => {
            const highlighted = index % 2 === 0;
            return (
              <article
                key={block.title}
                className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10 ${
                  highlighted
                    ? 'bg-amber-500 text-navy-950 hover:shadow-amber-500/25'
                    : 'bg-navy-900 text-white hover:shadow-navy-900/30'
                }`}
              >
                <h3 className={`text-lg font-bold ${highlighted ? 'text-navy-950' : 'text-amber-400'}`}>{block.title}</h3>
                <ul className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-[1.5]">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${highlighted ? 'bg-navy-950' : 'bg-amber-400'}`}
                      />
                      <span className={highlighted ? 'text-navy-950' : 'text-navy-50'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

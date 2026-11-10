import SectionHeading from '@/components/SectionHeading';

interface Technology {
  title: string;
  audience: string;
  description: string;
  specs: { label: string; value: string }[];
  standards: string[];
}

const TECHNOLOGIES: Technology[] = [
  {
    title: 'Sistema fotovoltaico',
    audience: 'Residencial · Comercial · Industrial',
    description:
      'Paneles mono/policristalinos de alta eficiencia. On-grid con inyección a red (CREG 030/2018), off-grid autónomo e híbrido. Desde 5 kW hasta escala MW.',
    specs: [
      { label: 'Eficiencia módulos', value: '19 – 23%' },
      { label: 'Inversores', value: 'String / Central / Micro' },
      { label: 'Topología DC', value: 'MPPT independiente por string' },
      { label: 'Monitoreo', value: 'SCADA + plataforma IoT' },
      { label: 'Protecciones', value: 'Anti-isla, sobrecorriente, DPS' },
    ],
    standards: ['IEC 61215', 'IEC 61730', 'RETIE 30', 'CREG 030/18'],
  },
  {
    title: 'Sistema eólico',
    audience: 'Costa · Llanos · Zonas rurales',
    description:
      'Aerogeneradores HAWT y VAWT para zonas no interconectadas y sistemas híbridos solar-eólico. Control vectorial de velocidad variable, adaptados al recurso eólico colombiano.',
    specs: [
      { label: 'Velocidad de arranque', value: '2.5 – 3.5 m/s' },
      { label: 'Velocidad nominal', value: '11 – 14 m/s' },
      { label: 'Velocidad de corte', value: '25 m/s' },
      { label: 'Control', value: 'Pitch + MPPT variable' },
      { label: 'Generador', value: 'PMSG / DFIG' },
    ],
    standards: ['IEC 61400-1', 'IEC 61400-12', 'RETIE 30', 'UPA'],
  },
  {
    title: 'Mareomotriz',
    audience: 'Caribe · Pacífico · Proyectos marinos',
    description:
      'Energía cinética y potencial de mareas y corrientes marinas. Generación predecible 24/7, ideal para comunidades insulares, puertos y zonas costeras.',
    specs: [
      { label: 'Tecnologías', value: 'Turbina axial / flujo cruzado (MCT)' },
      { label: 'Generador de oleaje', value: 'OWC (Oscillating Water Column)' },
      { label: 'Factor de capacidad', value: '25 – 40% (vs. 15–22% solar)' },
      { label: 'Velocidad de corriente mín.', value: '0.7 – 1.0 m/s' },
      { label: 'Ciclo mareal', value: 'Predecible a 100 años' },
    ],
    standards: ['IEC TS 62600', 'DNV-ST-0164', 'RETIE 30'],
  },
  {
    title: 'Geotérmico & biomasa',
    audience: 'Agroindustria · Rural · Baseload 24/7',
    description:
      'Geotérmico en zonas volcánicas de Colombia (Nariño, Huila, Cauca). Biomasa mediante gasificación y biogás de residuos agroindustriales, con cogeneración de calor y electricidad.',
    specs: [
      { label: 'Proceso biomasa', value: 'Gasificación / digestión anaerobia' },
      { label: 'Eficiencia eléctrica', value: '20 – 35% (ORC hasta 25%)' },
      { label: 'Eficiencia cogeneración', value: 'Hasta 85% (calor + electricidad)' },
      { label: 'Geotérmico', value: 'Flash / ORC ciclo binario' },
      { label: 'Disponibilidad', value: '> 90% · Baseload 24/7' },
    ],
    standards: ['IEC 60034', 'ISO 17225', 'ASTM E1755', 'CREG 15/18'],
  },
  {
    title: 'Co-energía',
    audience: 'Industria · Data centers · Hospitales',
    description:
      'Microrred inteligente con solar, eólico, almacenamiento y red. Sistema de gestión de energía con despacho óptimo y conmutación automática en el punto de conexión.',
    specs: [
      { label: 'Arquitectura', value: 'Microgrid AC/DC híbrida' },
      { label: 'Control EMS', value: 'SCADA + despacho óptimo' },
      { label: 'Conmutación isla', value: '< 20 ms (UPS integrado)' },
      { label: 'Protección de interconexión', value: 'Relé anti-isla IEEE 1547' },
      { label: 'Autoconsumo', value: 'Hasta 95% de la generación' },
    ],
    standards: ['IEEE 1547', 'IEC 62898', 'CREG 174/21'],
  },
];

function TechnologyCard({ tech }: { tech: Technology }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-white/10 bg-navy-950/70 p-7 shadow-xl shadow-navy-950/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 sm:p-8">
      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">{tech.audience}</p>
      <p className="mt-4 text-sm leading-[1.5] text-navy-100">{tech.description}</p>

      <dl className="mt-6 space-y-3 border-t border-white/10 pt-6">
        {tech.specs.map((spec) => (
          <div key={spec.label} className="text-sm">
            <dt className="font-semibold text-amber-400">{spec.label}</dt>
            <dd className="mt-0.5 text-navy-50">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {tech.standards.map((standard) => (
          <span key={standard} className="rounded-md bg-amber-500 px-2.5 py-1 text-[11px] font-semibold text-navy-950">
            {standard}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="relative isolate overflow-hidden bg-navy-900 py-24 lg:py-32">
      <img
        src="https://images.pexels.com/photos/17558873/pexels-photo-17558873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 via-navy-900/80 to-navy-900" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Portafolio renovable"
          title={
            <>
              Donde la naturaleza <span className="text-amber-500">genera poder.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TECHNOLOGIES.map((tech) => (
            <TechnologyCard key={tech.title} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

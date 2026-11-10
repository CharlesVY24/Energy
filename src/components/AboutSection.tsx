import { Activity, Cog, Gauge, Plug, ShieldCheck, Target, Telescope } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CAPABILITIES = [
  {
    icon: Cog,
    title: 'Ingeniería',
    description: 'Diseño eléctrico, planos unilineales, memorias técnicas, cálculo de corto circuito y coordinación de protecciones.',
  },
  {
    icon: Activity,
    title: 'Diagnóstico',
    description: 'Análisis de calidad de energía con equipos clase A (IEC 61000-4-30), perfiles de carga y estudio de cargabilidad.',
  },
  {
    icon: Plug,
    title: 'Suministro',
    description: 'Importación directa de equipos certificados con exención de IVA y arancel 0% (Ley 1715, Certificado UPME).',
  },
  {
    icon: Gauge,
    title: 'Instalación',
    description: 'Montaje, puesta en marcha y certificación RETIE con RETILAB. Soporte post-instalación y monitoreo remoto.',
  },
];

const STANDARDS = ['RETIE', 'NTC 2050', 'IEEE 519', 'IEC 61000', 'IEC 62109', 'CREG', 'Ley 1715', 'UPME'];

export default function AboutSection() {
  return (
    <section id="empresa" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Nuestra empresa" title={<>¿Quiénes <span className="text-amber-500">somos?</span></>} />
            <div className="mt-8 space-y-5 text-base leading-[1.5] text-slate-600">
              <p>
                Empresa colombiana especializada en la comercialización e instalación de sistemas de generación renovable
                y soluciones de eficiencia energética. Fundada en 2024, en Chía, Cundinamarca.
              </p>
              <p>
                Representamos a <strong className="text-navy-900">Vertiv, Schneider Electric y Legrand</strong>, el
                Tridente de Oro de la ingeniería eléctrica, siendo el puente entre la tecnología global y el mercado
                colombiano.
              </p>
              <p>
                Modelo de entrega EPC (Engineering, Procurement &amp; Construction) con un único responsable desde la
                ingeniería hasta el soporte post-instalación.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {STANDARDS.map((standard) => (
                <span
                  key={standard}
                  className="rounded-md bg-navy-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-400 transition-transform hover:-translate-y-0.5"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                <Target className="h-8 w-8 text-amber-500" />
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-navy-900">Nuestra misión</h3>
                <p className="mt-3 text-sm leading-[1.5] text-slate-600">
                  Conectar a Colombia y Latinoamérica con la energía renovable, entregando soluciones técnicamente
                  respaldadas, seguras y eficientes para la industria, el comercio y las comunidades.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5">
                <Telescope className="h-8 w-8 text-amber-500" />
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-navy-900">Nuestra visión 2030</h3>
                <p className="mt-3 text-sm leading-[1.5] text-slate-600">
                  Ser el referente técnico y comercial en energías renovables en Colombia y Latinoamérica. Presencia
                  consolidada en Ecuador, Perú y Panamá para 2030.
                </p>
              </article>
            </div>

            <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.15em] text-navy-900">Capacidades técnicas</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {CAPABILITIES.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-2xl bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-lg font-semibold text-amber-400">{title}</h4>
                  </div>
                  <p className="mt-4 text-sm leading-[1.5] text-navy-100">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <span className="text-5xl font-bold text-amber-500">3</span>
                <span className="text-sm font-medium text-slate-600">Marcas globales</span>
              </div>
              <div className="flex items-center gap-5 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <span className="text-5xl font-bold text-amber-500">6+</span>
                <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <ShieldCheck className="h-4 w-4 text-navy-600" />
                  Líneas de servicio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BatteryCharging, Clock, Cpu, Zap } from 'lucide-react';

const LINES = [
  {
    code: 'Línea 1',
    name: 'Seguridad total',
    chemistry: 'Polímero estado sólido',
    summary: 'Máxima seguridad para entornos sensibles.',
    cycles: '10.000 – 15.000',
    temperature: '-20 °C a +60 °C',
    efficiency: '92 – 95%',
    selfDischarge: '< 3% / mes',
    bms: 'Básico integrado',
  },
  {
    code: 'Línea 2',
    name: 'Equilibrio óptimo',
    chemistry: 'Polímero + litio parcial',
    summary: 'Balance entre seguridad, densidad y costo para comercio e industria mediana.',
    cycles: '6.000 – 10.000',
    temperature: '-10 °C a +55 °C',
    efficiency: '93 – 96%',
    selfDischarge: '< 2% / mes',
    bms: 'Avanzado, con gestión de celdas',
  },
  {
    code: 'Línea 3',
    name: 'Máximo rendimiento',
    chemistry: 'LFP / NMC alta densidad',
    summary: 'LiFePO4 para máxima seguridad entre litios, o NMC para máxima densidad. Data centers e industria intensiva.',
    cycles: '3.000 – 6.000 (DoD 80%)',
    temperature: '-20 °C a +60 °C (LFP)',
    efficiency: '95 – 98%',
    selfDischarge: '< 1.5% / mes',
    bms: 'Multi-nivel con gestión térmica',
  },
];

const SYSTEM_SPECS = [
  { label: 'Capacidad base', value: '5 kVA hasta +1 MW containerizado' },
  { label: 'Tiempo de carga', value: '60 min al 80% (carga rápida CC)' },
  { label: 'Autonomía base', value: '> 5 h sin red ni generación solar' },
  { label: 'Conmutación', value: '< 20 ms (detección automática de apagón)' },
  { label: 'Monitoreo', value: 'Remoto 24/7: producción, consumo, temperatura, voltaje' },
  { label: 'Instalación', value: 'Plug & Play (3–8 días hábiles)' },
];

const AUTONOMY = [
  { storage: '100 kWh', at50: '2 horas', at100: '1 hora' },
  { storage: '500 kWh', at50: '10 horas', at100: '5 horas' },
  { storage: '1 MWh', at50: '20 horas', at100: '10 horas' },
  { storage: '5 MWh', at50: '100 horas', at100: '50 horas' },
];

const CERTIFICATIONS = ['IEC 62619', 'IEC 62133', 'UL 9540', 'RETIE 30', 'UN 38.3'];

export default function StabilitySection() {
  return (
    <section id="stability" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Producto estrella</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.2] text-navy-900 sm:text-5xl">
              Syncro <span className="text-amber-500">Stability</span>
            </h2>
            <p className="mt-6 text-base leading-[1.5] text-slate-600 sm:text-lg">
              Garantiza la sincronización entre energías convencionales y renovables, asegurando suministro continuo
              24/7. Conmutación automática en menos de 20 ms ante cortes de red.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-navy-900 p-5 transition-transform hover:-translate-y-1">
                <Zap className="h-6 w-6 text-amber-400" />
                <p className="mt-3 text-2xl font-bold text-white">&lt; 20 ms</p>
                <p className="text-xs text-navy-200">Tiempo de conmutación</p>
              </div>
              <div className="rounded-2xl bg-navy-900 p-5 transition-transform hover:-translate-y-1">
                <Clock className="h-6 w-6 text-amber-400" />
                <p className="mt-3 text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-navy-200">Suministro continuo</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {LINES.map((line) => (
                <article
                  key={line.code}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-amber-500/60 hover:bg-white hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-navy-900">
                      <span className="text-amber-600">{line.code}</span> · {line.name}
                    </h3>
                    <span className="text-xs font-semibold text-navy-700">{line.chemistry}</span>
                  </div>
                  <p className="mt-2 text-sm leading-[1.5] text-slate-600">{line.summary}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-xs text-slate-500">Ciclos (DoD 80%)</dt>
                      <dd className="font-semibold text-navy-900">{line.cycles}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Temperatura</dt>
                      <dd className="font-semibold text-navy-900">{line.temperature}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Eficiencia ida y vuelta</dt>
                      <dd className="font-semibold text-navy-900">{line.efficiency}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-500">Auto-descarga</dt>
                      <dd className="font-semibold text-navy-900">{line.selfDischarge}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-xs text-slate-500">BMS</dt>
                      <dd className="font-semibold text-navy-900">{line.bms}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:pt-20">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <img
                src="https://images.pexels.com/photos/36594160/pexels-photo-36594160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Técnico revisando baterías industriales en una instalación"
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96"
              />
            </div>

            <div className="rounded-3xl bg-navy-900 p-7 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-[0.15em]">Especificaciones del sistema</h3>
              </div>
              <dl className="mt-6 space-y-4">
                {SYSTEM_SPECS.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:gap-4">
                    <dt className="shrink-0 text-sm font-semibold text-amber-400 sm:w-40">{spec.label}</dt>
                    <dd className="text-sm text-navy-50">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <BatteryCharging className="h-5 w-5 text-amber-600" />
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-navy-900">Cálculo de autonomía</h3>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                      <th className="py-3 font-semibold">Almacenamiento</th>
                      <th className="py-3 font-semibold">Consumo 50 kW</th>
                      <th className="py-3 font-semibold">Consumo 100 kW</th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUTONOMY.map((row) => (
                      <tr key={row.storage} className="border-b border-slate-100 transition-colors last:border-0 hover:bg-amber-50">
                        <td className="py-3 font-semibold text-navy-900">{row.storage}</td>
                        <td className="py-3 text-slate-600">{row.at50}</td>
                        <td className="py-3 text-slate-600">{row.at100}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert} className="rounded-md bg-amber-500 px-2.5 py-1 text-[11px] font-semibold text-navy-950">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

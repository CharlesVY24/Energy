import { BatteryFull, Building2, Car, Gauge, ShieldCheck, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface ChargerLevel {
  level: string;
  power: string;
  icon: LucideIcon;
  details: { label: string; value: string }[];
}

const CHARGER_LEVELS: ChargerLevel[] = [
  {
    level: 'Nivel 1 · AC residencial',
    power: '3.3 kW / 16 A / 230 V',
    icon: Car,
    details: [
      { label: 'Autonomía por hora', value: '15 – 25 km' },
      { label: 'Conector', value: 'Schuko / IEC 62196 Tipo 2' },
      { label: 'Instalación', value: 'Toma doméstica o wallbox dedicado' },
      { label: 'Ideal para', value: 'Vehículos particulares, carga nocturna' },
      { label: 'Protección', value: 'RCBO + medidor inteligente' },
    ],
  },
  {
    level: 'Nivel 2 · AC semi-rápido',
    power: '7.4 – 22 kW / 32 A / 400 V',
    icon: Building2,
    details: [
      { label: 'Autonomía por hora', value: '40 – 120 km' },
      { label: 'Conector', value: 'IEC 62196 Tipo 2 / Mennekes' },
      { label: 'Instalación', value: 'Tablero trifásico dedicado' },
      { label: 'Ideal para', value: 'Flotas corporativas, parqueaderos, hoteles' },
      { label: 'Protocolo', value: 'OCPP 1.6 / 2.0 + Smart Charging' },
    ],
  },
  {
    level: 'Nivel 3 · DC ultra-rápido',
    power: '50 – 150 kW / DC',
    icon: BatteryFull,
    details: [
      { label: 'Carga al 80%', value: '20 – 45 min según batería' },
      { label: 'Conector', value: 'CCS2 / CHAdeMO / GB/T' },
      { label: 'Instalación', value: 'Acometida de media o baja tensión reforzada' },
      { label: 'Ideal para', value: 'Electrolineras, corredores viales, buses' },
      { label: 'Protocolo', value: 'OCPP 2.0 + gestión dinámica de potencia' },
    ],
  },
];

const FLEET_FEATURES = [
  {
    icon: Gauge,
    title: 'Monitoreo',
    text: 'Estado de carga, energía consumida y reportes por vehículo en tiempo real vía plataforma web y app.',
  },
  {
    icon: Sun,
    title: 'Integración solar',
    text: 'V2G ready. Priorización de carga con excedente fotovoltaico. Reducción de hasta 80% en el costo de carga.',
  },
  {
    icon: BatteryFull,
    title: 'Gestión de demanda',
    text: 'Balanceo dinámico de carga para no exceder la potencia contratada. Compatible con OCPP 1.6 / 2.0.',
  },
  {
    icon: ShieldCheck,
    title: 'Protección de red',
    text: 'Protección contra sobrecarga. Programación horaria, restricción de acceso y facturación por usuario.',
  },
];

export default function EMobilitySection() {
  return (
    <section id="movilidad" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Soluciones de transporte limpio"
            title={
              <>
                Movilidad <span className="text-amber-500">eléctrica</span>
              </>
            }
            description="Infraestructura de carga inteligente para vehículos eléctricos, flotas corporativas y electrolineras públicas. Integración solar nativa, gestión remota de flotas y cumplimiento normativo completo."
          />
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15">
            <img
              src="https://images.pexels.com/photos/9800004/pexels-photo-9800004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Estación de carga para vehículos eléctricos"
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CHARGER_LEVELS.map(({ level, power, icon: Icon, details }) => (
            <article
              key={level}
              className="group flex flex-col rounded-3xl bg-navy-900 p-7 shadow-xl shadow-navy-900/10 transition-all duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">{level}</p>
              <p className="mt-2 text-2xl font-bold text-white">{power}</p>
              <dl className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {details.map((detail) => (
                  <div key={detail.label} className="text-sm">
                    <dt className="font-semibold text-amber-400">{detail.label}</dt>
                    <dd className="mt-0.5 text-navy-50">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-navy-900">Fleet EMS · Gestión inteligente de flotas</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET_FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group">
                <Icon className="h-6 w-6 text-amber-500 transition-transform group-hover:scale-110" />
                <h4 className="mt-4 font-semibold text-navy-900">{title}</h4>
                <p className="mt-2 text-sm leading-[1.5] text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

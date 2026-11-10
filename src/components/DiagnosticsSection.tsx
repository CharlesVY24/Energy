import { Gauge, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const POWER_QUALITY = [
  { label: 'Armónicos (THD-V/I)', text: 'Medición hasta armónico 50. Límite V: <5% total, <3% por armónico (IEEE 519).' },
  { label: 'Flicker Pst/Plt', text: 'Índice de severidad de parpadeo en ventanas de 10 min (Pst) y 2 h (Plt). Límite Pst ≤ 1.0 (IEC 61000-4-15).' },
  { label: 'Desequilibrio de tensión', text: 'Factor de secuencia negativa / positiva. Límite < 2% en redes industriales.' },
  { label: 'Transitorios / picos', text: 'Registro de impulsos > 10 kV/µs. Clasificación según curva ITIC.' },
  { label: 'Huecos de tensión', text: 'Profundidad ≥ 10% Un, duración 10 ms – 1 min. Impacto en PLC, variadores y UPS.' },
  { label: 'Frecuencia', text: 'Rango nominal ±0.2 Hz (CREG), con resolución de 10 ms.' },
];

const LOAD_PROFILE = [
  { label: 'Demanda activa (P)', text: 'Curva de carga en intervalos de 15 min. Demanda máxima facturable y factor de carga.' },
  { label: 'Demanda reactiva (Q)', text: 'Diagnóstico de energía reactiva inductiva o capacitiva. Base para el banco KVAR.' },
  { label: 'Factor de potencia', text: 'FP = P/S = cos(φ). Umbral mínimo CREG: 0.9 inductivo.' },
  { label: 'Cargabilidad', text: 'Corriente medida vs. nominal en conductores y transformadores.' },
  { label: 'Eficiencia energética', text: 'Indicadores EUI y oportunidades de reducción por circuito.' },
  { label: 'Informe ejecutivo', text: 'Diagnóstico completo con ahorro cuantificado en COP/año.' },
];

const KVAR_STATS = [
  { value: '-30%', label: 'Factura eléctrica' },
  { value: 'FP ≥ 0.97', label: 'Factor de potencia corregido' },
  { value: '12–18 m', label: 'ROI típico' },
];

const KVAR_DETAILS = [
  { label: 'Tecnología', text: 'Banco automático de condensadores de polipropileno (PP) con contactores de vacío o tiristores.' },
  { label: 'Controlador', text: 'Electrónico microprocesado con medición THD, anti-resonancia para cargas con armónicos.' },
  { label: 'Protecciones', text: 'Descarga automática, fusibles individuales por escalón, protección contra sobretensión y armónicos.' },
  { label: 'Tensiones', text: '230 V / 400 V / 480 V / 6.6 kV. Media tensión disponible.' },
  { label: 'Reducción de pérdidas', text: '2–8% en conductores. Libera 10–15% de la capacidad de los transformadores.' },
];

const STANDARDS = ['IEEE 519', 'IEC 61642', 'NTC-IEC 60831', 'CREG 024/2005'];

function DetailList({ items }: { items: { label: string; text: string }[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label} className="border-l-2 border-amber-500/60 pl-4 transition-colors hover:border-amber-400">
          <p className="text-sm font-semibold text-amber-400">{item.label}</p>
          <p className="mt-1 text-sm leading-[1.5] text-navy-100">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function DiagnosticsSection() {
  return (
    <section id="diagnostico" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Diagnóstico especializado"
          title={
            <>
              Calidad de energía <span className="text-amber-500">y diagnóstico</span>
            </>
          }
          description="Medición clase A (IEC 61000-4-30 Ed.3) con equipos de alta precisión. Identificamos perturbaciones que dañan equipos, encarecen la factura y provocan paros no planeados."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-navy-900 p-8 shadow-xl shadow-navy-900/10 transition-transform duration-300 hover:-translate-y-1 sm:p-10">
            <div className="flex items-center gap-3">
              <Gauge className="h-6 w-6 text-amber-400" />
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Análisis de calidad de energía</h3>
            </div>
            <p className="mt-1 text-xs text-navy-200">IEC 61000-4-30</p>
            <div className="mt-8">
              <DetailList items={POWER_QUALITY} />
            </div>
          </article>

          <article className="rounded-3xl bg-navy-900 p-8 shadow-xl shadow-navy-900/10 transition-transform duration-300 hover:-translate-y-1 sm:p-10">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-amber-400" />
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Análisis de carga energética</h3>
            </div>
            <p className="mt-1 text-xs text-navy-200">Perfil 24/7</p>
            <div className="mt-8">
              <DetailList items={LOAD_PROFILE} />
            </div>
          </article>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-navy-950 text-white shadow-2xl shadow-navy-950/20">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Optimización KVAR</p>
              <h3 className="mt-3 text-2xl font-bold leading-[1.2] sm:text-3xl">Corrección automática del factor de potencia</h3>
              <p className="mt-4 text-base leading-[1.5] text-navy-100">
                Banco de condensadores automático con controlador de pasos que mide el FP en tiempo real y conmuta
                capacitores para mantenerlo ≥ 0.97. Elimina cargos por energía reactiva y reduce pérdidas en
                conductores.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {KVAR_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-amber-400/50"
                  >
                    <p className="text-xl font-bold text-amber-400 sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-navy-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <DetailList items={KVAR_DETAILS} />
              <div className="mt-8 flex flex-wrap gap-2">
                {STANDARDS.map((standard) => (
                  <span key={standard} className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-semibold text-navy-950">
                    {standard}
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

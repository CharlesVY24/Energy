import { BadgeDollarSign, FileCheck2, Percent, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const ROI_ROWS = [
  { technology: 'Solar fotovoltaico', roi: '3 – 6 años', savings: '40 – 70% de la factura', life: '25 – 30 años', benefit: '3 – 5× la inversión', incentive: 'IVA 0% + renta -50%' },
  { technology: 'Corrección KVAR', roi: '12 – 18 meses', savings: '15 – 30% de la factura', life: '15 – 20 años', benefit: '8 – 12× la inversión', incentive: 'Deducción operacional' },
  { technology: 'Syncro Stability', roi: '4 – 8 años', savings: 'Variable por cortes', life: '15 años (garantía)', benefit: '2 – 4× la inversión', incentive: 'Depreciación 33% / año' },
  { technology: 'Solar + almacenamiento', roi: '4 – 7 años', savings: '60 – 90% de la factura', life: '25+ años', benefit: '4 – 6× la inversión', incentive: 'IVA 0% + renta -50%' },
  { technology: 'E-Mobility + solar', roi: '5 – 9 años', savings: 'Reduce 80% el costo de carga', life: '20 años', benefit: '3 – 5× la inversión', incentive: 'IVA 0% importación' },
];

const INCENTIVES: { value: string; label: string; text: string; icon: LucideIcon }[] = [
  { value: 'IVA 0%', label: 'Exclusión total de equipos FNCER importados', text: 'Aplica a paneles, inversores, baterías, controladores y estructuras.', icon: Percent },
  { value: 'Arancel 0%', label: 'Sin derechos arancelarios', text: 'Equipos no producidos en Colombia y certificados por la UPME.', icon: BadgeDollarSign },
  { value: '-50%', label: 'Deducción de renta en 15 años', text: 'Hasta 50% de la inversión sobre la renta líquida gravable anual.', icon: TrendingUp },
  { value: '33% / año', label: 'Depreciación acelerada', text: 'Recuperación contable del activo en 3 años, frente a 10–20 años convencional.', icon: FileCheck2 },
];

const UPME_STEPS = [
  'Radicar la solicitud en el SUU de la UPME (www1.upme.gov.co).',
  'Resolución en máximo 20 días hábiles (Res. UPME 735/2025).',
  'El certificado incluye las subpartidas arancelarias para la DIAN.',
  'Si se pagó IVA antes del certificado, es posible solicitar devolución ante la DIAN.',
  'Sincro Energía acompaña el trámite completo como parte del servicio.',
];

export default function RoiSection() {
  return (
    <section id="roi" className="bg-navy-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Valor económico para el cliente"
          title={
            <>
              Retorno de <span className="text-amber-500">inversión — ROI</span>
            </>
          }
          description="Referencias típicas para Colombia. El ROI real depende de la tarifa eléctrica, el recurso solar o eólico, las horas de operación y el tamaño del sistema."
        />

        <div className="mt-14 overflow-x-auto rounded-3xl border border-white/10 bg-navy-900/60">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-[0.12em] text-amber-400">
                <th className="px-6 py-4 font-semibold">Tecnología</th>
                <th className="px-6 py-4 font-semibold">ROI típico</th>
                <th className="px-6 py-4 font-semibold">Ahorro</th>
                <th className="px-6 py-4 font-semibold">Vida útil</th>
                <th className="px-6 py-4 font-semibold">Beneficio acumulado</th>
                <th className="px-6 py-4 font-semibold">Incentivo clave</th>
              </tr>
            </thead>
            <tbody>
              {ROI_ROWS.map((row) => (
                <tr key={row.technology} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/5">
                  <td className="px-6 py-4 font-semibold text-white">{row.technology}</td>
                  <td className="px-6 py-4 font-bold text-amber-400">{row.roi}</td>
                  <td className="px-6 py-4 text-navy-100">{row.savings}</td>
                  <td className="px-6 py-4 text-navy-100">{row.life}</td>
                  <td className="px-6 py-4 text-navy-100">{row.benefit}</td>
                  <td className="px-6 py-4 text-navy-100">{row.incentive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Incentivos fiscales · Ley 1715 de 2014</p>
          <p className="mt-2 text-sm text-navy-200">Modificada por la Ley 2099 de 2021</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {INCENTIVES.map(({ value, label, text, icon: Icon }) => (
              <article
                key={value}
                className="group rounded-3xl border border-white/10 bg-navy-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50"
              >
                <Icon className="h-6 w-6 text-amber-400 transition-transform group-hover:scale-110" />
                <p className="mt-5 text-4xl font-bold text-amber-500">{value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{label}</p>
                <p className="mt-3 text-sm leading-[1.5] text-navy-200">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-amber-500 p-8 text-navy-950 sm:p-10">
          <h3 className="text-lg font-bold">Proceso UPME</h3>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {UPME_STEPS.map((step, index) => (
              <li key={step} className="flex gap-4 text-sm leading-[1.5] font-medium">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950 text-xs font-bold text-amber-400">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

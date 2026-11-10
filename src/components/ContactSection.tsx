import { Mail, MapPin, Phone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CONTACT_CARDS: { label: string; value: string; href?: string; icon: LucideIcon }[] = [
  { label: 'Correo', value: 'sincroenergiasas@gmail.com', href: 'mailto:sincroenergiasas@gmail.com', icon: Mail },
  { label: 'Teléfono', value: '310 559 5811', href: 'tel:+573105595811', icon: Phone },
  { label: 'Dirección', value: 'Cr. 3 No. 22-01, Chía, Cundinamarca', icon: MapPin },
];

const CARD_CLASS =
  'group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300';
const INTERACTIVE_CARD_CLASS =
  'hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-xl hover:shadow-navy-900/10';

function ContactCardContent({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-semibold text-navy-900">{value}</p>
    </>
  );
}

export default function ContactSection() {
  return (
    <>
      <section id="contacto" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Contacto</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.2] text-navy-900 sm:text-5xl">
            Energía sincronizada, <span className="text-amber-500">futuro asegurado.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.5] text-slate-600 sm:text-lg">
            Energías renovables y convencionales, sincronizadas para un futuro energético sostenible.
          </p>

          <div className="mx-auto mt-14 grid gap-5 sm:grid-cols-3">
            {CONTACT_CARDS.map(({ label, value, href, icon }) =>
              href ? (
                <a key={label} href={href} className={`${CARD_CLASS} ${INTERACTIVE_CARD_CLASS}`}>
                  <ContactCardContent label={label} value={value} icon={icon} />
                </a>
              ) : (
                <div key={label} className={CARD_CLASS}>
                  <ContactCardContent label={label} value={value} icon={icon} />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <footer className="bg-navy-950 py-12 text-navy-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">Sincro Energía S.A.S.</p>
              <p className="text-xs text-navy-300">NIT: 901861981-2 · Chía, Cundinamarca · Colombia</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <a href="#empresa" className="transition-colors hover:text-amber-400">Empresa</a>
            <a href="#portafolio" className="transition-colors hover:text-amber-400">Portafolio</a>
            <a href="#roi" className="transition-colors hover:text-amber-400">ROI</a>
            <a href="#contacto" className="transition-colors hover:text-amber-400">Contacto</a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-navy-300">
          © {new Date().getFullYear()} Sincro Energía S.A.S. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

import sincroLogo from '@/assets/sincro_logo.png.asset.json';
const NAV_ITEMS = [
  { href: '#empresa', label: 'Empresa' },
  { href: '#diagnostico', label: 'Diagnóstico' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#stability', label: 'Syncro Stability' },
  { href: '#movilidad', label: 'Movilidad' },
  { href: '#epc', label: 'Llave en mano' },
  { href: '#roi', label: 'ROI' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy-950/95 shadow-lg shadow-navy-950/30 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img src={import.meta.env['VITE_SELF_HOSTED_ASSETS'] === 'true' ? '/assets/sincro_logo.png' : sincroLogo.url} alt="Sincro Energía S.A.S." className="h-10 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-navy-100 transition-colors hover:bg-white/10 hover:text-amber-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 xl:inline-flex"
        >
          Contáctanos
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 xl:hidden ${
          menuOpen ? 'max-h-[32rem] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 bg-navy-950/95 px-5 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/10 hover:text-amber-400"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-amber-500 px-5 py-3 text-center text-base font-semibold text-navy-950"
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

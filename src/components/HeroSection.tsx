import { ArrowRight, ChevronDown } from 'lucide-react';

const TECHNOLOGIES = [
  'Fotovoltaico',
  'Eólico',
  'Mareomotriz',
  'Geotérmico & Biomasa',
  'Co-Energía',
  'Syncro Stability',
  'KVAR',
  'E-Mobility',
  'EPC Llave en Mano',
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen flex-col overflow-hidden bg-navy-950">
      <img
        src="https://images.pexels.com/photos/12956299/pexels-photo-12956299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        srcSet="https://images.pexels.com/photos/12956299/pexels-photo-12956299.jpeg?auto=compress&cs=tinysrgb&w=1280 1280w, https://images.pexels.com/photos/12956299/pexels-photo-12956299.jpeg?auto=compress&cs=tinysrgb&w=2000 2000w"
        sizes="100vw"
        alt="Aerogeneradores frente al mar al atardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-900/75 to-navy-950" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 lg:px-8">
        <div className="max-w-4xl animate-fadeUp">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-navy-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 backdrop-blur">
            Sincro Energía S.A.S. · Chía, Colombia
          </p>
          <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Energías renovables y convencionales,
            <span className="mt-2 block text-amber-500">sincronizadas</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg italic leading-[1.5] text-navy-100 sm:text-xl">
            para un futuro energético sostenible.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#portafolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
            >
              Explorar soluciones
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              Hablar con un ingeniero
            </a>
          </div>
        </div>

        <ul className="mt-16 flex flex-wrap gap-2 sm:gap-3">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-navy-100 backdrop-blur transition-colors hover:border-amber-400/60 hover:text-amber-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#empresa"
        aria-label="Desplazarse a la sección de empresa"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-amber-400 md:block"
      >
        <ChevronDown className="h-8 w-8 animate-float" />
      </a>
    </section>
  );
}

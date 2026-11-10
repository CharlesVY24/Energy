import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl ${
          isDark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-[1.5] sm:text-lg ${isDark ? 'text-navy-100' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

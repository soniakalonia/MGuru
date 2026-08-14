import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumb?: string;
  cta?: ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle, crumb, cta }: Props) {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container-x relative py-16 md:py-24">
        {eyebrow && <span className="badge mb-4">{eyebrow}</span>}
        <nav className="mb-4 flex items-center gap-1.5 text-sm text-slatey-500">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slatey-700">{crumb ?? title}</span>
        </nav>
        <h1 className="font-display text-4xl font-bold text-slatey-900 md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-slatey-600">{subtitle}</p>
        )}
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import DonutChart from './DonutChart';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-float" />
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-x relative grid items-start gap-12 py-20 md:py-28 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-in-up">
          <span className="badge mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 120+ organizations
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight text-slatey-900 md:text-5xl lg:text-6xl">
            Deliver projects with{' '}
            <span className="gradient-text">
              clarity & confidence
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slatey-600">
            MGuru is your partner for project management Infotech and
            training. From certification prep to enterprise PMO
            transformation, we help teams ship the work that matters.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/courses" className="btn-primary">
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/services" className="btn-secondary">
              <Play className="h-4 w-4" />
              Our Services
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slatey-600">
            {[
              'PMI Authorized Partner',
              '96% Pass Rate',
              '15+ Years Experience',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative animate-scale-in lg:pl-8">
          <DonutChart />

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slatey-200 bg-white p-4 shadow-card animate-float md:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>

              <div>
                <p className="text-sm font-semibold text-slatey-900">
                  PMP Certified
                </p>
                <p className="text-xs text-slatey-500">
                  8,420 professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
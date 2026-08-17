import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Building2, X, Users, BarChart3, Megaphone, PenTool } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { portfolioItems, type PortfolioItem } from '@/data/content';

const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Analytics'] as const;

const catColors: Record<string, string> = {
  SEO: 'from-blue-700 to-blue-500',
  'Social Media': 'from-orange-600 to-orange-400',
  'Content Marketing': 'from-emerald-700 to-emerald-500',
  PPC: 'from-purple-700 to-purple-500',
  Analytics: 'from-slatey-800 to-slatey-600',
};

export default function Portfolio() {
  const [category, setCategory] = useState<string>('All');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    return category === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === category);
  }, [category]);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Digital marketing results we're proud of"
        subtitle="A selection of campaigns and strategies where we helped businesses grow their online presence, drive traffic, and increase conversions."
        crumb="Portfolio"
      />

      {/* Filter */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-slatey-100 text-slatey-700 hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <button
                  onClick={() => setSelected(item)}
                  className="card group flex h-full w-full flex-col overflow-hidden text-left"
                >
                  <div className={`relative h-40 bg-gradient-to-br ${catColors[item.category]} p-5`}>
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <span className="relative badge bg-white/20 text-white">{item.category}</span>
                    <div className="relative mt-auto flex items-end justify-between">
                      <div>
                        <p className="font-display text-3xl font-bold text-white">{item.metric}</p>
                        <p className="text-xs text-white/80">{item.metricLabel}</p>
                      </div>
                      <TrendingUp className="h-6 w-6 text-white/60" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-slatey-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slatey-500">{item.client}</p>
                    <p className="mt-3 flex-1 text-sm text-slatey-600">{item.summary}</p>
                    <div className="mt-5 flex items-center gap-4 border-t border-slatey-100 pt-4 text-xs text-slatey-500">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {item.duration}</span>
                      <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" /> {item.client}</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case study modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slatey-900/60 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="my-8 w-full max-w-2xl animate-scale-in rounded-2xl bg-white shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative rounded-t-2xl bg-gradient-to-br ${catColors[selected.category]} p-8`}>
              <div className="absolute inset-0 bg-grid opacity-10" />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="relative badge bg-white/20 text-white">{selected.category}</span>
              <h2 className="relative mt-3 font-display text-2xl font-bold text-white">{selected.title}</h2>
              <p className="relative mt-1 text-sm text-white/80">{selected.client} &middot; {selected.duration}</p>
            </div>
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-3 gap-4 rounded-xl bg-slatey-50 p-5 text-center">
                <div>
                  <p className="font-display text-2xl font-bold text-brand-700">{selected.metric}</p>
                  <p className="text-xs text-slatey-500">{selected.metricLabel}</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-700">{selected.duration}</p>
                  <p className="text-xs text-slatey-500">Campaign</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-brand-700">{selected.category}</p>
                  <p className="text-xs text-slatey-500">Service</p>
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-slatey-900">The challenge</h3>
              <p className="mt-2 leading-relaxed text-slatey-600">{selected.summary}</p>
              <h3 className="mt-6 font-display text-lg font-semibold text-slatey-900">The outcome</h3>
              <p className="mt-2 leading-relaxed text-slatey-600">{selected.result}. The campaign delivered measurable growth and built sustainable marketing practices for the client.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:gap-2.5 transition-all">
                Discuss a similar campaign <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="section-title">Want results like these?</h2>
            <p className="mx-auto mt-4 max-w-xl section-subtitle">
              Every business is unique. Let's talk about your digital marketing goals and how we can help you grow.
            </p>
            <Link to="/contact" className="mt-8 btn-primary">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
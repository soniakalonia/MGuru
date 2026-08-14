import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { faqs } from '@/data/content';

const categories = ['All', 'Courses', 'Certification', 'Consulting', 'General'] as const;

export default function FAQ() {
  const [category, setCategory] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat = category === 'All' || f.category === category;
      const matchQuery = f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about our courses, certifications, and consulting services. Can't find an answer? Reach out to us."
        crumb="FAQ"
      />

      <section className="bg-white section-pad">
        <div className="container-x max-w-3xl">
          {/* Search */}
          <Reveal>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slatey-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full rounded-xl border border-slatey-300 bg-white py-3.5 pl-12 pr-4 text-base focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-brand-600 text-white'
                      : 'bg-slatey-100 text-slatey-700 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Accordion */}
          <div className="mt-8 space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slatey-300 bg-slatey-50 py-16 text-center text-slatey-600">
                <HelpCircle className="mx-auto h-8 w-8 text-slatey-400" />
                <p className="mt-3">No questions match your search.</p>
              </div>
            ) : (
              filtered.map((faq, i) => {
                const isOpen = open === faq.id;
                return (
                  <Reveal key={faq.id} delay={i * 50}>
                    <div className={`overflow-hidden rounded-xl border transition-colors ${isOpen ? 'border-brand-300 bg-brand-50/30' : 'border-slatey-200 bg-white'}`}>
                      <button
                        onClick={() => setOpen(isOpen ? null : faq.id)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="badge shrink-0">{faq.category}</span>
                          <span className="font-medium text-slatey-900">{faq.question}</span>
                        </div>
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isOpen ? 'bg-brand-600 text-white' : 'bg-slatey-100 text-slatey-600'}`}>
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 leading-relaxed text-slatey-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="section-title">Still have questions?</h2>
            <p className="mx-auto mt-4 max-w-xl section-subtitle">
              Our team is happy to help. Reach out and we'll get back to you within one business day.
            </p>
            <Link to="/contact" className="mt-8 btn-primary">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

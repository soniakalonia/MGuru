import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Play, ChevronLeft, ChevronRight, ArrowRight, X, Video } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/content';

const videoTestimonials = [
  { id: 'v1', name: 'Priya Sharma', company: 'Nexora Technologies', title: 'How MGuru transformed our PMO' },
  { id: 'v2', name: 'David Chen', company: 'Meridian Financial', title: 'Pragmatic agile transformation' },
  { id: 'v3', name: 'Marco Rossi', company: 'Lumen Manufacturing', title: 'Rescuing a 9-month delayed project' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What our clients and learners say"
        subtitle="Over 120 organizations and 40,000 professionals have trusted MGuru. Here are some of their stories."
        crumb="Testimonials"
      />

      {/* Featured carousel */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="relative rounded-2xl border border-slatey-200 bg-slatey-50 p-8 shadow-soft md:p-12">
                <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-100" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl leading-relaxed text-slatey-800 md:text-2xl">
                  "{testimonials[active].quote}"
                </p>
                {testimonials[active].project && (
                  <p className="mt-4 text-sm font-medium text-brand-700">
                    Project: {testimonials[active].project}
                  </p>
                )}
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white">
                    {testimonials[active].avatar}
                  </span>
                  <div>
                    <p className="font-semibold text-slatey-900">{testimonials[active].name}</p>
                    <p className="text-sm text-slatey-500">
                      {testimonials[active].role}, {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slatey-300 bg-white text-slatey-600 transition-colors hover:border-brand-500 hover:text-brand-700"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(i)}
                    className={`h-2.5 rounded-full transition-all ${i === active ? 'w-8 bg-brand-600' : 'w-2.5 bg-slatey-300'}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((i) => (i + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slatey-300 bg-white text-slatey-600 transition-colors hover:border-brand-500 hover:text-brand-700"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="More reviews"
            title="Stories from our community"
            subtitle="A selection of reviews from professionals and organizations we've partnered with."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 70}>
                <div className="card h-full p-7">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed text-slatey-700">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-slatey-100 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                      {t.avatar}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slatey-900">{t.name}</p>
                      <p className="text-xs text-slatey-500">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Video stories"
            title="Hear it straight from our clients"
            subtitle="Short video testimonials from leaders who partnered with MGuru."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.id} delay={i * 100}>
                <button
                  onClick={() => setVideoOpen(v.id)}
                  className="card group relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-10 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-700 to-brand-500 opacity-90" />
                  <div className="absolute inset-0 bg-grid opacity-10" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-transform group-hover:scale-110">
                    <Play className="h-7 w-7 fill-white" />
                  </span>
                  <p className="relative mt-5 font-display text-lg font-semibold text-white">{v.title}</p>
                  <p className="relative mt-1 text-sm text-brand-100">{v.name} &middot; {v.company}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slatey-900/80 p-4 backdrop-blur-sm"
          onClick={() => setVideoOpen(null)}
        >
          <div className="w-full max-w-3xl animate-scale-in rounded-2xl bg-white shadow-card" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex aspect-video items-center justify-center rounded-t-2xl bg-gradient-to-br from-brand-800 to-brand-600">
              <button
                onClick={() => setVideoOpen(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center text-white">
                <Video className="mx-auto h-12 w-12" />
                <p className="mt-3 text-sm text-brand-100">Video player — demo placeholder</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-slatey-900">
                {videoTestimonials.find((v) => v.id === videoOpen)?.title}
              </h3>
              <p className="mt-1 text-sm text-slatey-500">
                {videoTestimonials.find((v) => v.id === videoOpen)?.name} &middot;{' '}
                {videoTestimonials.find((v) => v.id === videoOpen)?.company}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-brand-800 py-16">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Become our next success story
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-brand-100">
              Partner with MGuru and join 120+ organizations delivering with confidence.
            </p>
            <Link to="/contact" className="mt-6 inline-flex btn-primary bg-white text-brand-700 hover:bg-brand-50">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

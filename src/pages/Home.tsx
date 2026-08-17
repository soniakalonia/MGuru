import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Quote, ChevronLeft, ChevronRight, Compass,
  Users, ShieldCheck, Target, Briefcase, Sparkles,
  BarChart3, Megaphone, PenTool, Mail,
} from 'lucide-react';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CountUp from '@/components/CountUp';
import Icon from '@/components/Icon';
import {
  stats, services, testimonials, trustedLogos,
} from '@/data/content';

const heroServices = [
  { icon: Compass, label: 'SEO' },
  { icon: Users, label: 'Social Media' },
  { icon: PenTool, label: 'Content' },
  { icon: BarChart3, label: 'Analytics' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const statsNum = stats.map((s) => parseInt(s.value.replace(/\D/g, '')) || 0);

  return (
    <>
      <Hero />

      {/* Trusted by */}
      <section className="border-y border-slatey-200 bg-slatey-50">
        <div className="container-x py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slatey-500">
            Trusted by businesses across industries
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold text-slatey-400 transition-colors hover:text-slatey-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <div className="font-display text-4xl font-bold text-brand-700 md:text-5xl">
                  <CountUp value={statsNum[i]} />{s.value.replace(/[0-9]/g, '')}
                </div>
                <p className="mt-2 text-sm text-slatey-600">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Digital marketing services built for growth"
            subtitle="From SEO to social media, content marketing to analytics — we help you build a powerful online presence and drive measurable results."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <Link
                  to={`/services#${service.id}`}
                  className="card group flex h-full flex-col p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-slatey-900">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slatey-600">{service.short}</p>
                  <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-700">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach strip */}
      <section className="bg-brand-800 section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="badge bg-brand-700/50 text-brand-100"><Sparkles className="h-3.5 w-3.5" /> Our approach</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              Data-driven, results-focused
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100">
              We combine creative strategy with data-driven execution. No guesswork — 
              just proven digital marketing techniques tailored to your business goals, 
              audience, and industry.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Target, t: 'Goal-oriented', d: 'Every campaign tied to your business objectives.' },
                { icon: Users, t: 'Audience-first', d: 'We build strategies around your ideal customers.' },
                { icon: ShieldCheck, t: 'Data-backed', d: 'Decisions grounded in analytics and performance data.' },
                { icon: BarChart3, t: 'Results-driven', d: 'Continuous optimization for maximum ROI.' },
              ].map((item) => (
                <div key={item.t} className="rounded-xl bg-brand-700/40 p-4">
                  <item.icon className="h-5 w-5 text-brand-300" />
                  <p className="mt-3 text-sm font-semibold text-white">{item.t}</p>
                  <p className="mt-1 text-xs text-brand-100">{item.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {heroServices.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-2xl border border-brand-700/40 bg-brand-700/30 p-6 ${i % 2 === 1 ? 'mt-8' : ''}`}
              >
                <s.icon className="h-7 w-7 text-brand-300" />
                <p className="mt-4 font-display text-lg font-semibold text-white">{s.label}</p>
                <p className="mt-1 text-xs text-brand-100">Explore our expertise</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Testimonial carousel */}
      <section className="relative overflow-hidden bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client stories"
            title="What our clients say"
            subtitle="Businesses that partnered with MGuru to grow their digital presence."
          />
          <div className="mx-auto mt-14 max-w-4xl">
            <Reveal>
              <div className="relative rounded-2xl border border-slatey-200 bg-white p-8 shadow-card md:p-12">
                <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-100" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-6 font-display text-xl leading-relaxed text-slatey-800 md:text-2xl">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-display font-bold text-white">
                    {testimonials[activeTestimonial].avatar}
                  </span>
                  <div>
                    <p className="font-semibold text-slatey-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-slatey-500">
                      {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slatey-300 bg-white text-slatey-600 transition-colors hover:border-brand-500 hover:text-brand-700"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === activeTestimonial ? 'w-8 bg-brand-600' : 'w-2.5 bg-slatey-300'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial((i) => (i + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slatey-300 bg-white text-slatey-600 transition-colors hover:border-brand-500 hover:text-brand-700"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative py-20 text-center md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Ready to grow your digital presence?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-100">
              Book a free 30-minute consultation. We'll analyze your current digital strategy
              and recommend the right next steps — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-white text-brand-700 hover:bg-brand-50 hover:text-brand-800">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-700">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
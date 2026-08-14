import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Users, GraduationCap, Globe, CheckCircle2, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { jobs, type Job } from '@/data/content';

const benefits = [
  { icon: Heart, title: 'Health & wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: GraduationCap, title: 'Learning budget', desc: 'Annual stipend for courses, certifications, and conferences — practice what we preach.' },
  { icon: Globe, title: 'Remote-friendly', desc: 'Hybrid or fully remote options. We trust you to deliver, wherever you work best.' },
  { icon: Zap, title: 'Flexible hours', desc: 'Outcomes over hours. Build a schedule that fits your life and your energy.' },
  { icon: Users, title: 'Collaborative culture', desc: 'No egos, no politics. Just smart people helping each other do great work.' },
  { icon: Briefcase, title: 'Real impact', desc: 'Work on engagements that shape how major organizations deliver.' },
];

const culture = [
  'We are practitioners first — everyone ships, teaches, or advises, no pure managers.',
  'We invest in your growth with mentorship, stretch assignments, and a real career path.',
  'We celebrate curiosity. Asking "why" is encouraged, not penalized.',
  'We keep meetings few and decisions fast. Your calendar belongs to you.',
];

export default function Careers() {
  const [selected, setSelected] = useState<Job | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Help us change how projects are delivered"
        subtitle="We're a team of practitioners who care deeply about our craft. If you love project delivery and helping others grow, you'll feel at home here."
        crumb="Careers"
      />

      {/* Culture */}
      <section className="bg-white section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="badge mb-4">Our culture</span>
            <h2 className="section-title">Built by practitioners, for practitioners</h2>
            <p className="mt-5 leading-relaxed text-slatey-600">
              MGuru is not a body-shop Infotech or a certificate mill. We're a tight-knit
              team of consultants, coaches, and educators who believe project management done
              well is a genuine craft.
            </p>
            <ul className="mt-6 space-y-3">
              {culture.map((c) => (
                <li key={c} className="flex items-start gap-3 text-slatey-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" /> {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {benefs().map((b, i) => (
              <div key={b.title} className={`rounded-2xl border border-slatey-200 bg-slatey-50 p-5 ${i % 2 === 1 ? 'mt-6' : ''}`}>
                <b.icon className="h-6 w-6 text-brand-600" />
                <p className="mt-3 font-display text-sm font-semibold text-slatey-900">{b.title}</p>
                <p className="mt-1 text-xs text-slatey-600">{b.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Benefits full grid */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Benefits"
            title="We take care of our people"
            subtitle="Great work comes from people who are rested, healthy, and growing. Here's what we offer."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <b.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slatey-900">{b.title}</h3>
                  <p className="mt-2 text-sm text-slatey-600">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No Openings */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="card p-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slatey-100">
                  <Briefcase className="h-8 w-8 text-slatey-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-slatey-900">No current openings</h3>
                <p className="mt-2 text-sm text-slatey-600">
                  We don't have any positions open right now, but we're always excited to meet great people.
                </p>
                <p className="mt-3 text-sm text-slatey-600">
                  Send your resume to{' '}
                  <a href="mailto:amit.kumar@mguru.in" className="font-medium text-brand-700 hover:underline">
                    amit.kumar@mguru.in
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="bg-brand-800 py-16">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Don't see the right role?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-brand-100">
              We're always looking for great practitioners. Tell us about yourself.
            </p>
            <Link to="/contact" className="mt-6 inline-flex btn-primary bg-white text-brand-700 hover:bg-brand-50">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function benefs() {
  return [
    { icon: Heart, title: 'Health', desc: 'Medical, dental, vision.' },
    { icon: GraduationCap, title: 'Learning', desc: 'Annual stipend.' },
    { icon: Globe, title: 'Remote', desc: 'Work from anywhere.' },
    { icon: Zap, title: 'Flexibility', desc: 'Outcomes over hours.' },
  ];
}
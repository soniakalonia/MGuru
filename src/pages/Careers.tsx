import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Users, GraduationCap, Globe, CheckCircle2, X, Target, BarChart3, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { jobs, type Job } from '@/data/content';

const benefits = [
  { icon: Heart, title: 'Health & wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: Target, title: 'Growth & development', desc: 'Annual learning budget for courses, certifications, and conferences to keep you at the top of your game.' },
  { icon: Globe, title: 'Remote-friendly', desc: 'Hybrid or fully remote options. We trust you to deliver, wherever you work best.' },
  { icon: Zap, title: 'Flexible hours', desc: 'Outcomes over hours. Build a schedule that fits your life and your energy.' },
  { icon: Users, title: 'Collaborative culture', desc: 'No egos, no politics. Just smart people helping each other do great work.' },
  { icon: BarChart3, title: 'Real impact', desc: 'Work on campaigns that shape how major brands grow their digital presence.' },
];

const culture = [
  'We are practitioners first — everyone ships, creates, or advises, no pure managers.',
  'We invest in your growth with mentorship, stretch assignments, and a real career path.',
  'We celebrate curiosity. Asking "why" is encouraged, not penalized.',
  'We keep meetings few and decisions fast. Your calendar belongs to you.',
];

const benefsData = [
  { icon: Heart, title: 'Health', desc: 'Medical, dental, vision.' },
  { icon: Target, title: 'Growth', desc: 'Learning budget.' },
  { icon: Globe, title: 'Remote', desc: 'Work from anywhere.' },
  { icon: Zap, title: 'Flexibility', desc: 'Outcomes over hours.' },
];

export default function Careers() {
  const [selected, setSelected] = useState<Job | null>(null);
  const hasOpenings = jobs.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Help us grow businesses through digital marketing"
        subtitle="We're a team of digital marketing experts who care deeply about our craft. If you love helping businesses grow online, you'll feel at home here."
        crumb="Careers"
      />

      {/* Culture */}
      <section className="bg-white section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="badge mb-4">Our culture</span>
            <h2 className="section-title">Built by practitioners, for practitioners</h2>
            <p className="mt-5 leading-relaxed text-slatey-600">
              MGuru is not a typical agency. We're a tight-knit team of SEO experts, 
              content strategists, social media specialists, and analytics professionals 
              who believe digital marketing done well is a genuine craft.
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
            {benefsData.map((b, i) => (
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

      {/* Job Openings or No Openings */}
      <section className="bg-white section-pad">
        <div className="container-x">
          {hasOpenings ? (
            <>
              <SectionHeading
                eyebrow="Open positions"
                title="Join our team"
                subtitle="We're looking for talented individuals who are passionate about digital marketing and helping businesses grow."
              />
              <div className="mt-14 grid gap-6">
                {jobs.map((job, i) => (
                  <Reveal key={job.id} delay={i * 80}>
                    <div className="card flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-slatey-900">{job.title}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slatey-500">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5" /> {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {job.type}
                          </span>
                          <span className="badge">{job.level}</span>
                        </div>
                        <p className="mt-2 text-sm text-slatey-600">{job.blurb}</p>
                      </div>
                      <button
                        onClick={() => setSelected(job)}
                        className="btn-secondary shrink-0 text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
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
                  <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-brand-50 px-6 py-3">
                    <Send className="h-5 w-5 text-brand-600" />
                    <p className="text-sm text-slatey-700">
                      Send your resume to{' '}
                      <a href="mailto:amit.kumar@mguru.in" className="font-medium text-brand-700 hover:underline">
                        amit.kumar@mguru.in
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-slatey-900/60 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setSelected(null)}
        >
          <div
            className="my-8 w-full max-w-2xl animate-scale-in rounded-2xl bg-white shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-t-2xl bg-gradient-to-br from-brand-700 to-brand-500 p-8">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <h2 className="relative font-display text-2xl font-bold text-white">{selected.title}</h2>
              <p className="relative mt-1 text-sm text-white/80">{selected.department} &middot; {selected.location}</p>
            </div>
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-3 gap-4 rounded-xl bg-slatey-50 p-5 text-center">
                <div>
                  <p className="font-display text-sm font-semibold text-slatey-900">{selected.type}</p>
                  <p className="text-xs text-slatey-500">Employment</p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slatey-900">{selected.level}</p>
                  <p className="text-xs text-slatey-500">Level</p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-slatey-900">{selected.location}</p>
                  <p className="text-xs text-slatey-500">Location</p>
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-slatey-900">About this role</h3>
              <p className="mt-2 leading-relaxed text-slatey-600">{selected.blurb}</p>
              <div className="mt-6 rounded-xl bg-brand-50 p-4">
                <p className="text-sm text-slatey-700">
                  <span className="font-semibold">How to apply:</span> Send your resume to{' '}
                  <a href="mailto:amit.kumar@mguru.in" className="font-medium text-brand-700 hover:underline">
                    amit.kumar@mguru.in
                  </a>
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:gap-2.5 transition-all"
              >
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* General CTA */}
      <section className="bg-brand-800 py-16">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Don't see the right role?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-brand-100">
              We're always looking for great digital marketing talent. Tell us about yourself.
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
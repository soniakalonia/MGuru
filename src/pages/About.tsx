import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';
import CountUp from '@/components/CountUp';
import { team, achievements, stats } from '@/data/content';

const values = [
  { icon: Target, title: 'Outcomes over output', desc: 'We measure success by the value you ship, not the hours we bill.' },
  { icon: Heart, title: 'People-first', desc: 'Lasting change comes from enabled, confident teams — not from dependency.' },
  { icon: Zap, title: 'Pragmatic delivery', desc: 'The right practices for your context. No dogma, no ceremony for its own sake.' },
  { icon: Award, title: 'Excellence as standard', desc: 'We hold ourselves to the same rigor we help you build into your projects.' },
];

const achNum = achievements.map((a) => parseFloat(a.value.replace(/[^0-9.]/g, '')) || 0);

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About MGuru"
        title="We help teams deliver the work that matters"
        subtitle="Founded in 2024, MGuru is a growing Infotech and training partner for project management — helping professionals and organizations deliver successful projects with confidence."
        crumb="About"
      />

      {/* Mission / story */}
      <section className="bg-white section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="badge mb-4">Our story</span>
            <h2 className="section-title">From a training room to a delivery partner</h2>
            <div className="mt-5 space-y-4 text-slatey-600 leading-relaxed">
              <p>
                MGuru was founded in 2024 with a simple frustration: too many projects fail not
                because of poor technology, but because of unclear ownership, weak governance,
                and teams that were never taught how to deliver.
              </p>
              <p>
                We started by training project managers — and quickly realized our clients needed
                more than classrooms. They needed consultants who would roll up their sleeves,
                sit beside their teams, and build delivery capability that lasted.
              </p>
              <p>
                Today we offer end-to-end support: certification prep, corporate training,
                PMO setup, agile transformation, and executive coaching. Through it all, our
                north star hasn't changed — help teams deliver with clarity and confidence.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Our services <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-secondary">Work with us</Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            {stats.slice(0, 4).map((s, i) => (
              <div key={s.label} className="rounded-2xl bg-brand-50 p-6 text-center">
                <p className="font-display text-3xl font-bold text-brand-700">
                  <CountUp value={parseInt(s.value) || 0} />{s.value.replace(/[0-9]/g, '')}
                </p>
                <p className="mt-1 text-sm text-slatey-600">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slatey-200 bg-white p-8 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-slatey-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-slatey-600">
                To equip every project professional and organization with the skills, structure,
                and confidence to deliver successful outcomes — turning project management from
                a source of stress into a source of competitive advantage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-slatey-200 bg-white p-8 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-slatey-900">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-slatey-600">
                A world where every project has a capable leader, every team understands why
                they're doing the work, and every organization can rely on its delivery engine
                to turn strategy into reality.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we value"
            title="Principles that guide every engagement"
            subtitle="These aren't poster values — they're the standards we hold ourselves to in every client conversation."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slatey-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slatey-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our team"
            title="Practitioners, not just trainers"
            subtitle="Every member of our team has delivered in the real world before they taught a single class or advised a single client."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 80}>
                <div className="card flex h-full flex-col p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 font-display text-xl font-bold text-white">
                      {member.avatar}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slatey-900">{member.name}</h3>
                      <p className="text-sm text-brand-700">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slatey-600">{member.bio}</p>
                  <span className="mt-5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={member.icon} className="h-5 w-5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-brand-800 section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge bg-brand-700/50 text-brand-100"><TrendingUp className="h-3.5 w-3.5" /> Recognition</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Achievements & credentials</h2>
            <p className="mt-4 text-brand-100">Numbers that reflect the trust our clients and learners place in us.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 100} className="text-center">
                <p className="font-display text-3xl font-bold text-white md:text-4xl">
                  {isNaN(achNum[i]) ? a.value : <><CountUp value={achNum[i]} />{a.value.replace(/[0-9.]/g, '')}</>}
                </p>
                <p className="mt-2 text-sm text-brand-100">{a.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-pad">
        <div className="container-x text-center">
          <Reveal>
            <Users className="mx-auto h-10 w-10 text-brand-600" />
            <h2 className="mt-4 section-title">Let's build your delivery capability</h2>
            <p className="mx-auto mt-4 max-w-xl section-subtitle">
              Whether you're an individual growing your career or an organization scaling delivery, we'd love to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Get in touch <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/careers" className="btn-secondary">Join our team</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

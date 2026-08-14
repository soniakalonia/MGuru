import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';
import { services, pricingPlans } from '@/data/content';

const process = [
  { step: '01', title: 'Discover', desc: 'We diagnose your current delivery state — interviewing teams, reviewing artifacts, and identifying the highest-impact gaps.' },
  { step: '02', title: 'Design', desc: 'We craft a tailored plan: methodology choices, training curriculum, governance model, and a realistic timeline.' },
  { step: '03', title: 'Deliver', desc: 'Our consultants and trainers embed with your teams, building capability through real work, not just workshops.' },
  { step: '04', title: 'Sustain', desc: 'We hand over with enablement sessions, documentation, and a maturity roadmap so the change sticks.' },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Infotech and training that builds delivery capability"
        subtitle="From rescuing at-risk projects to certifying your workforce, we offer end-to-end project management services tailored to your organization."
        crumb="Services"
        cta={
          <Link to="/contact" className="btn-primary">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      {/* Services grid */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <div id={service.id} className="card h-full p-8 scroll-mt-28">
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon name={service.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slatey-900">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slatey-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slatey-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:gap-2.5 transition-all">
                    Discuss this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="A simple, proven engagement model"
            subtitle="Every engagement is different, but our approach follows the same four phases — designed to leave you stronger than we found you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-slatey-200 bg-white p-7 shadow-soft">
                  <span className="font-display text-4xl font-bold text-brand-100">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slatey-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-600">{p.desc}</p>
                  {i < process.length - 1 && (
                    <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-slatey-300" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            subtitle="Whether you're an individual learner or an enterprise, there's a plan that fits. All plans can be customized."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                    plan.highlighted
                      ? 'border-brand-600 bg-white shadow-card lg:-translate-y-3'
                      : 'border-slatey-200 bg-white shadow-soft'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-slatey-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slatey-600">{plan.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    {plan.price > 0 ? (
                      <>
                        <span className="font-display text-4xl font-bold text-slatey-900">${plan.price}</span>
                        <span className="text-sm text-slatey-500">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="font-display text-3xl font-bold text-slatey-900">Custom</span>
                    )}
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slatey-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.id === 'enterprise' ? '/contact' : '/courses'}
                    className={`mt-8 w-full ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slatey-500">
            Need something tailored? <Link to="/contact" className="font-medium text-brand-700 hover:underline">Talk to our team</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

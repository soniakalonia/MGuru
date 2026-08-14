import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { pricingPlans } from '@/data/content';

const comparisonFeatures = [
  { feature: 'Foundational courses', starter: true, professional: true, enterprise: true },
  { feature: 'Certification prep courses', starter: false, professional: true, enterprise: true },
  { feature: 'Mock exams & analytics', starter: false, professional: true, enterprise: true },
  { feature: 'Mentor support', starter: false, professional: '90 days', enterprise: 'Dedicated' },
  { feature: 'Template library', starter: 'Basic', professional: 'Full', enterprise: 'Full + custom' },
  { feature: 'Community forum', starter: true, professional: true, enterprise: true },
  { feature: 'Study groups', starter: false, professional: true, enterprise: true },
  { feature: 'Corporate training', starter: false, professional: false, enterprise: true },
  { feature: 'LMS integration', starter: false, professional: false, enterprise: true },
  { feature: 'Analytics dashboard', starter: false, professional: false, enterprise: true },
  { feature: 'Dedicated success manager', starter: false, professional: false, enterprise: true },
  { feature: 'SLA-backed support', starter: 'Email', professional: 'Priority', enterprise: '24/7' },
];

type Cell = boolean | string;

function CellRender({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-brand-600" />;
  if (value === false) return <X className="mx-auto h-4 w-4 text-slatey-300" />;
  return <span className="text-sm font-medium text-slatey-700">{value}</span>;
}

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Pricing that scales with your goals"
        subtitle="Whether you're an individual learner or an enterprise rolling out training across teams, we have a plan that fits — and every plan can be customized."
        crumb="Pricing"
      />

      {/* Billing toggle + plans */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-brand-700' : 'text-slatey-500'}`}>Monthly</span>
            <button
              onClick={() => setBilling((b) => (b === 'monthly' ? 'annual' : 'monthly'))}
              className="relative h-7 w-12 rounded-full bg-slatey-200 transition-colors data-[on=true]:bg-brand-600"
              data-on={billing === 'annual'}
              aria-label="Toggle billing period"
            >
              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${billing === 'annual' ? 'left-6' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium ${billing === 'annual' ? 'text-brand-700' : 'text-slatey-500'}`}>
              Annual <span className="text-xs text-emerald-600">(Save 20%)</span>
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => {
              const isCustom = plan.price === 0;
              const displayPrice = isCustom
                ? 'Custom'
                : billing === 'annual' && plan.period.includes('month')
                  ? Math.round(plan.price * 0.8)
                  : plan.price;
              return (
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
                        <Sparkles className="mr-1 inline h-3 w-3" /> Most popular
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-slatey-900">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slatey-600">{plan.tagline}</p>
                    <div className="mt-5 flex items-baseline gap-1">
                      {!isCustom && <span className="font-display text-4xl font-bold text-slatey-900">${displayPrice}</span>}
                      {isCustom && <span className="font-display text-3xl font-bold text-slatey-900">Custom</span>}
                      {!isCustom && plan.price > 0 && (
                        <span className="text-sm text-slatey-500">
                          /{billing === 'annual' && plan.period.includes('month') ? 'mo billed annually' : plan.period}
                        </span>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Compare plans"
            title="Full feature comparison"
            subtitle="A detailed look at what's included in each plan."
          />
          <Reveal className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] overflow-hidden rounded-2xl border border-slatey-200 bg-white shadow-soft">
              <thead>
                <tr className="border-b border-slatey-200 bg-slatey-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slatey-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slatey-900">Self-Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-brand-700">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slatey-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? 'bg-slatey-50/50' : ''}>
                    <td className="px-6 py-4 text-sm font-medium text-slatey-700">{row.feature}</td>
                    <td className="px-6 py-4"><CellRender value={row.starter as Cell} /></td>
                    <td className="px-6 py-4 bg-brand-50/30"><CellRender value={row.professional as Cell} /></td>
                    <td className="px-6 py-4"><CellRender value={row.enterprise as Cell} /></td>
                  </tr>
                ))}
                <tr className="border-t border-slatey-200">
                  <td className="px-6 py-5" />
                  <td className="px-6 py-5 text-center">
                    <Link to="/courses" className="text-sm font-medium text-brand-700 hover:underline">Choose</Link>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Link to="/courses" className="btn-primary px-4 py-2 text-sm">Choose</Link>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Link to="/contact" className="text-sm font-medium text-brand-700 hover:underline">Contact us</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-white section-pad">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Pricing FAQ" title="Common pricing questions" />
          <div className="mt-10 space-y-4">
            {[
              { q: 'Can I switch plans later?', a: 'Yes — you can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades take effect at the next billing cycle.' },
              { q: 'Do you offer installment payments for courses?', a: 'Yes. Course fees can be paid in three monthly installments at no extra charge. Contact us to set this up.' },
              { q: 'Are exam fees included in certification courses?', a: 'Course fees include all materials and instruction. Exam fees paid to the certifying body (PMI, Scrum Alliance, etc.) are separate and vary by credential.' },
              { q: 'Do you offer discounts for groups?', a: 'Absolutely. We offer tiered discounts for corporate cohorts starting at 10+ participants. Talk to our team for a custom quote.' },
            ].map((item) => (
              <Reveal key={item.q}>
                <div className="rounded-xl border border-slatey-200 bg-slatey-50 p-5">
                  <p className="font-medium text-slatey-900">{item.q}</p>
                  <p className="mt-2 text-sm text-slatey-600">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

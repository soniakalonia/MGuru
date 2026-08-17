import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Icon from '@/components/Icon';
import { services } from '@/data/content';

const process = [
  { step: '01', title: 'Discover', desc: 'We diagnose your current marketing state — analyzing your digital presence, reviewing campaigns, and identifying the highest-impact opportunities.' },
  { step: '02', title: 'Design', desc: 'We craft a tailored strategy: channel selection, content calendar, budget allocation, and a realistic timeline for execution.' },
  { step: '03', title: 'Deliver', desc: 'Our experts execute the campaigns, optimize in real-time, and ensure every dollar spent drives measurable results.' },
  { step: '04', title: 'Sustain', desc: 'We hand over with detailed analytics, optimization recommendations, and a growth roadmap so the momentum continues.' },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash routing for service navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          const navbarHeight = 80; // Adjust based on your navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Digital marketing solutions that drive results"
        subtitle="From SEO to social media, content marketing to analytics, we offer comprehensive digital marketing services tailored to your business goals."
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

      {/* CTA */}
      <section className="bg-white section-pad">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="section-title">Ready to grow your digital presence?</h2>
            <p className="mx-auto mt-4 max-w-xl section-subtitle">
              Let's talk about your digital marketing goals and how we can help you achieve them.
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
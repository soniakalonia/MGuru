import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckCircle2, Scale, Users, Shield, Clock, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';

const sections = [
  {
    icon: Scale,
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using the MGuru website and services, you agree to be bound by these Terms of Service.',
      'If you do not agree to these terms, please do not use our website or services.',
      'We reserve the right to update these terms at any time. Continued use constitutes acceptance of the updated terms.',
    ],
  },
  {
    icon: Users,
    title: 'Our Services',
    content: [
      'MGuru provides digital marketing services including SEO, Social Media Marketing, Content Marketing, Email Marketing, PPC Advertising, Analytics, and Campaign Planning.',
      'All services are delivered with professional care and industry best practices.',
      'Specific service deliverables and timelines will be outlined in individual service agreements.',
    ],
  },
  {
    icon: Shield,
    title: 'Client Responsibilities',
    content: [
      'Clients must provide accurate and complete information necessary for service delivery.',
      'Clients are responsible for obtaining all necessary permissions and rights for content provided to us.',
      'Clients must respond promptly to requests for information or feedback to ensure timely delivery.',
      'Payment must be made according to the agreed terms and schedule.',
    ],
  },
  {
    icon: Clock,
    title: 'Timelines & Deliverables',
    content: [
      'Project timelines will be agreed upon before the start of any engagement.',
      'We strive to deliver all services within the agreed timeframe.',
      'Delays caused by client non-responsiveness or incomplete information may extend project timelines.',
      'Any changes to scope or deliverables must be documented and agreed upon in writing.',
    ],
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    content: [
      'All content, strategies, and deliverables created by MGuru remain our intellectual property until full payment is received.',
      'Upon full payment, clients receive ownership of the final deliverables as specified in their service agreement.',
      'We retain the right to showcase completed work in our portfolio with client consent.',
      'Any unauthorized use of our intellectual property is strictly prohibited.',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Limitation of Liability',
    content: [
      'MGuru provides services "as is" and makes no warranties regarding specific outcomes or results.',
      'We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
      'Our liability is limited to the total amount paid for the specific service in question.',
      'We recommend that clients maintain their own insurance to cover business risks.',
    ],
  },
];

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Terms of Service"
        title="Our terms & conditions"
        subtitle="Please read these terms carefully before using our services. They outline your rights, responsibilities, and our commitments to you."
        crumb="Terms of Service"
      />

      {/* Last updated */}
      <section className="bg-white border-b border-slatey-100">
        <div className="container-x py-4">
          <p className="text-sm text-slatey-500">
            Last updated: {currentYear}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white section-pad">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-2xl bg-brand-50 p-8 mb-12">
              <h2 className="font-display text-xl font-bold text-slatey-900">Welcome to MGuru</h2>
              <p className="mt-3 leading-relaxed text-slatey-600">
                These Terms of Service govern your use of our website and services. By engaging with MGuru,
                you agree to comply with these terms. We are committed to providing high-quality digital
                marketing services and maintaining transparent, fair relationships with all our clients.
              </p>
            </div>
          </Reveal>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 100}>
                <div className="border-b border-slatey-100 pb-8 last:border-0">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <section.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slatey-900">{section.title}</h3>
                      <ul className="mt-4 space-y-2.5">
                        {section.content.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-slatey-600">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact Section */}
          <Reveal delay={600}>
            <div className="mt-12 rounded-2xl border border-slatey-200 bg-slatey-50 p-8 text-center">
              <h3 className="font-display text-lg font-bold text-slatey-900">Questions About Our Terms?</h3>
              <p className="mt-2 text-sm text-slatey-600">
                If you have any questions about our Terms of Service or would like to discuss a custom agreement,
                please don't hesitate to reach out to us.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:amit.kumar@mguru.in"
                  className="btn-secondary"
                >
                  Email Us
                </a>
              </div>
            </div>
          </Reveal>

          {/* Disclaimer */}
          <Reveal delay={700}>
            <div className="mt-8 text-center text-xs text-slatey-400">
              <p>MGuru Infotech Pvt. Ltd.</p>
              <p className="mt-1">These Terms of Service are subject to change. Please review them periodically.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
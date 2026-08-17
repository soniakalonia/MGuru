import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, Database, FileText, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const sections = [
  {
    icon: Shield,
    title: 'Information We Collect',
    content: [
      'Personal information you provide: name, email address, phone number, company name, and any other details you share through our contact forms or communications.',
      'Usage data: information about how you interact with our website, including pages visited, time spent, and actions taken.',
      'Device information: browser type, operating system, IP address, and device type for analytics and security purposes.',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To provide and improve our digital marketing services',
      'To communicate with you about our services, updates, and promotions',
      'To personalize your experience on our website',
      'To analyze and improve our marketing efforts',
      'To comply with legal obligations and protect our rights',
    ],
  },
  {
    icon: Database,
    title: 'Data Storage & Security',
    content: [
      'We implement industry-standard security measures to protect your personal information.',
      'Your data is stored securely and access is restricted to authorized personnel only.',
      'We regularly review and update our security practices to ensure your information remains safe.',
      'We do not sell, trade, or rent your personal information to third parties.',
    ],
  },
  {
    icon: FileText,
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal data at any time.',
      'You can opt-out of marketing communications at any time.',
      'You can request a copy of the data we hold about you.',
      'You can withdraw consent for data processing at any time.',
    ],
  },
  {
    icon: Lock,
    title: 'Cookies & Tracking',
    content: [
      'We use cookies to enhance your browsing experience and analyze website traffic.',
      'You can control cookie preferences through your browser settings.',
      'Third-party cookies may be used for analytics and marketing purposes.',
      'We respect your privacy choices and provide clear opt-out options.',
    ],
  },
];

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we protect your privacy"
        subtitle="Your privacy matters to us. Here's how we collect, use, and protect your personal information when you interact with MGuru."
        crumb="Privacy Policy"
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
              <h2 className="font-display text-xl font-bold text-slatey-900">Our Commitment to Privacy</h2>
              <p className="mt-3 leading-relaxed text-slatey-600">
                At MGuru, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services. We value your trust and are dedicated to being transparent about our data practices.
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
          <Reveal delay={500}>
            <div className="mt-12 rounded-2xl border border-slatey-200 bg-slatey-50 p-8 text-center">
              <h3 className="font-display text-lg font-bold text-slatey-900">Questions About Your Privacy?</h3>
              <p className="mt-2 text-sm text-slatey-600">
                If you have any questions about our privacy practices or would like to exercise your data rights,
                please don't hesitate to contact us.
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
          <Reveal delay={600}>
            <div className="mt-8 text-center text-xs text-slatey-400">
              <p>MGuru Infotech Pvt. Ltd.</p>
              <p className="mt-1">This Privacy Policy is subject to change. Please review it periodically.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
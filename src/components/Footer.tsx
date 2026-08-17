import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Linkedin, Mail, MapPin, ArrowRight, CheckCircle2,
} from 'lucide-react';
import logo from '/logo.png';
import { navLinks } from '@/data/content';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slatey-900 text-slatey-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="MGuru logo" className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-display text-xl font-bold text-white">
                M<span className="text-brand-400">Guru</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slatey-400">
              Project management Infotech and education that helps professionals and
              organizations deliver successful projects with confidence. Founded in 2024.
            </p>
          </div>

          {/* Quick links - Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks
                .filter((l) => l.label !== 'Courses' && l.label !== 'Pricing')
                .slice(0, 5)
                .map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-slatey-400 transition-colors hover:text-brand-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'FAQ', to: '/faq' },
                { label: 'Testimonials', to: '/testimonials' },
                { label: 'Careers', to: '/careers' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slatey-400 transition-colors hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slatey-400">Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a href="mailto:amit.kumar@mguru.in" className="text-slatey-400 hover:text-brand-400">amit.kumar@mguru.in</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/mguru-in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slatey-800 text-slatey-400 transition-all hover:bg-brand-600 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slatey-800 pt-8 text-sm text-slatey-500 md:flex-row">
          <p>&copy; 2024 MGuru Infotech Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-400">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
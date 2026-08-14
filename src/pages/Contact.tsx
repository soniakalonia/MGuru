import { useState } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle2, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

type FormState = { name: string; email: string; subject: string; message: string };
const empty: FormState = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'Noida, Uttar Pradesh, India' },
  { icon: Mail, label: 'Email', value: 'amit.kumar@mguru.in', href: 'mailto:amit.kumar@mguru.in' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9:00 AM – 6:30 PM IST' },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please enter a subject';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(empty);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your delivery goals"
        subtitle="Whether you need a consultant, a training program, or just have a question — we'd love to hear from you."
        crumb="Contact"
      />

      <section className="bg-white section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-slatey-200 bg-white p-8 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-bold text-slatey-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slatey-600">We typically respond within one business day.</p>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-700 animate-slide-down">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">Thanks! Your message has been sent. We'll be in touch shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slatey-700">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      className={`input-field mt-1.5 ${errors.name ? 'border-rose-400 focus:ring-rose-100' : ''}`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slatey-700">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      className={`input-field mt-1.5 ${errors.email ? 'border-rose-400 focus:ring-rose-100' : ''}`}
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slatey-700">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={update('subject')}
                    className={`input-field mt-1.5 ${errors.subject ? 'border-rose-400 focus:ring-rose-100' : ''}`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slatey-700">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={`input-field mt-1.5 resize-none ${errors.message ? 'border-rose-400 focus:ring-rose-100' : ''}`}
                    placeholder="Tell us about your project or training needs..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact info + socials */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 rounded-2xl border border-slatey-200 bg-slatey-50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slatey-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="mt-0.5 block font-medium text-slatey-800 hover:text-brand-700">{info.value}</a>
                    ) : (
                      <p className="mt-0.5 font-medium text-slatey-800">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slatey-200 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-slatey-900">Follow us</h3>
              <div className="mt-4 flex gap-3">
                {[
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Youtube, label: 'YouTube' },
                  { Icon: Facebook, label: 'Facebook' },
                ].map(({ Icon: I, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slatey-100 text-slatey-600 transition-all hover:bg-brand-600 hover:text-white"
                  >
                    <I className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
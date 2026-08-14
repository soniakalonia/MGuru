import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import logo from '/logo.png';
import { navLinks } from '@/data/content';

const dropdowns: Record<string, { label: string; to: string; desc: string }[]> = {
  Services: [
    { label: 'PM Consulting', to: '/services#consulting', desc: 'Expert delivery guidance' },
    { label: 'Corporate Training', to: '/services#training', desc: 'Upskill your teams' },
    { label: 'Certification Prep', to: '/services#certification', desc: 'Global credentials' },
    { label: 'PMO Setup', to: '/services#pmostartup', desc: 'Stand up a PMO' },
  ],
  Courses: [
    { label: 'All Courses', to: '/courses', desc: 'Browse the full catalog' },
    { label: 'Certification', to: '/courses?category=Certification', desc: 'PMP, CAPM, PRINCE2' },
    { label: 'Agile', to: '/courses?category=Agile', desc: 'Scrum, Kanban, PMI-ACP' },
    { label: 'Leadership', to: '/courses?category=Leadership', desc: 'Lead people & outcomes' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="MGuru home">
          <img src={logo} alt="MGuru logo" className="h-10 w-10 rounded-xl object-cover md:h-11 md:w-11" />
          <span className="font-display text-xl font-bold tracking-tight text-slatey-900">
            M<span className="text-brand-600">Guru</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const hasDropdown = dropdowns[link.label];
            return (
              <li
                key={link.to}
                className="relative"
                onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-brand-700' : 'text-slatey-700 hover:text-brand-700'
                    }`
                  }
                >
                  {link.label}
                  {hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </NavLink>
                {hasDropdown && openDropdown === link.label && (
                  <div className="absolute left-0 top-full pt-2 animate-slide-down">
                    <div className="w-64 rounded-2xl border border-slatey-200 bg-white p-2 shadow-card">
                      {dropdowns[link.label].map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                        >
                          <div className="text-sm font-semibold text-slatey-900">{item.label}</div>
                          <div className="text-xs text-slatey-500">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-ghost text-sm">Contact</Link>
          <Link to="/courses" className="btn-primary text-sm">
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-slatey-800 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-x max-h-[calc(100vh-4rem)] overflow-y-auto pb-8">
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => {
                const hasDropdown = dropdowns[link.label];
                return (
                  <li key={link.to}>
                    {hasDropdown ? (
                      <>
                        <button
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slatey-800"
                          onClick={() =>
                            setMobileSubOpen((s) => (s === link.label ? null : link.label))
                          }
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubOpen === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileSubOpen === link.label && (
                          <ul className="ml-3 border-l border-slatey-200 pl-3">
                            {dropdowns[link.label].map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-slatey-600 hover:text-brand-700"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={link.to}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-slatey-800 hover:bg-brand-50"
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}
              <li className="mt-3 flex flex-col gap-3">
                <Link to="/contact" className="btn-secondary w-full">Contact</Link>
                <Link to="/courses" className="btn-primary w-full">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

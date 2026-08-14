import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Clock, BarChart3, Users, ArrowRight, Search } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { courses, type Course } from '@/data/content';

const categories = ['All', 'Certification', 'Agile', 'Leadership', 'Fundamentals'] as const;
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

export default function Courses() {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get('category') as string) || 'All';

  const [category, setCategory] = useState<string>(initialCat);
  const [level, setLevel] = useState<string>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = category === 'All' || c.category === category;
      const matchLevel = level === 'All' || c.level === level;
      const matchQuery = c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.blurb.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchLevel && matchQuery;
    });
  }, [category, level, query]);

  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Project management courses for every stage of your career"
        subtitle="Globally recognized certifications and practical skills — taught live online by instructors with 15+ years of real delivery experience."
        crumb="Courses"
      />

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-slatey-200 bg-white/90 backdrop-blur-md md:top-20">
        <div className="container-x py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    category === cat
                      ? 'bg-brand-600 text-white'
                      : 'bg-slatey-100 text-slatey-700 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="rounded-lg border border-slatey-300 bg-white px-3 py-2 text-sm text-slatey-700 focus:border-brand-500 focus:outline-none"
              >
                {levels.map((l) => <option key={l} value={l}>Level: {l}</option>)}
              </select>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slatey-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full rounded-lg border border-slatey-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none lg:w-56"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course grid */}
      <section className="bg-white section-pad">
        <div className="container-x">
          <p className="mb-6 text-sm text-slatey-500">
            Showing {filtered.length} course{filtered.length !== 1 ? 's' : ''}
          </p>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slatey-300 bg-slatey-50 py-20 text-center">
              <p className="text-slatey-600">No courses match your filters.</p>
              <button
                onClick={() => { setCategory('All'); setLevel('All'); setQuery(''); }}
                className="mt-4 text-sm font-medium text-brand-700 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course, i) => (
                <Reveal key={course.id} delay={i * 60}>
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slatey-50 section-pad">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="section-title">Not sure which course is right for you?</h2>
            <p className="mx-auto mt-4 max-w-xl section-subtitle">
              Our advisors will help you pick the right path based on your experience and career goals.
            </p>
            <Link to="/contact" className="mt-8 btn-primary">
              Talk to an advisor <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden">
      <div className="relative bg-gradient-to-br from-brand-700 to-brand-500 p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
          <Icon name={course.icon} className="h-6 w-6" />
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {course.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1 text-xs font-medium text-amber-500">
          <Star className="h-3.5 w-3.5 fill-amber-400" /> {course.rating}
          <span className="text-slatey-400">({course.students.toLocaleString()} students)</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-slatey-900">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slatey-600">{course.blurb}</p>
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slatey-100 pt-4 text-xs text-slatey-500">
          <span className="flex flex-col items-center gap-1">
            <Clock className="h-4 w-4 text-brand-600" /> {course.duration}
          </span>
          <span className="flex flex-col items-center gap-1">
            <BarChart3 className="h-4 w-4 text-brand-600" /> {course.level}
          </span>
          <span className="flex flex-col items-center gap-1">
            <Users className="h-4 w-4 text-brand-600" /> {course.hours}h
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-brand-700">${course.price}</span>
          <Link to="/contact" className="btn-primary px-4 py-2 text-sm">
            Enroll <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export type NavLink = { label: string; to: string };

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Courses', to: '/courses' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQ', to: '/faq' },
];

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
};

export const services: Service[] = [
  {
    id: 'consulting',
    title: 'PM Consulting',
    short: 'Expert guidance to deliver complex projects on time and on budget.',
    description:
      'Our seasoned consultants embed with your teams to establish governance, rescue at-risk projects, and build delivery capability that lasts beyond our engagement.',
    icon: 'Compass',
    features: ['Project health checks', 'PMO setup & governance', 'Delivery rescue & recovery', 'Risk & issue management'],
  },
  {
    id: 'training',
    title: 'Corporate Training',
    short: 'Tailored workshops that upskill teams in modern project delivery.',
    description:
      'From foundational project management to advanced agile leadership, our corporate programs are customized to your industry and delivered on-site or online.',
    icon: 'GraduationCap',
    features: ['PMP & CAPM prep', 'Agile / Scrum coaching', 'Leadership for PMs', 'Custom curriculum design'],
  },
  {
    id: 'certification',
    title: 'Certification Prep',
    short: 'Structured prep paths with high pass rates for global credentials.',
    description:
      'Achieve globally recognized certifications with our structured preparation paths, mock exams, and mentor support designed around the latest exam blueprints.',
    icon: 'Award',
    features: ['PMP, PMI-ACP, PRINCE2', 'Mock exams & analytics', 'Mentor-led study groups', 'Application assistance'],
  },
  {
    id: 'pmostartup',
    title: 'PMO Setup',
    short: 'Stand up a high-performing PMO tailored to your organization.',
    description:
      'We design and launch Project Management Offices that fit your culture — defining templates, metrics, reporting cadence, and the operating model that drives consistency.',
    icon: 'Building2',
    features: ['Operating model design', 'Methodology & templates', 'Portfolio dashboards', 'Maturity roadmap'],
  },
  {
    id: 'agile',
    title: 'Agile Transformation',
    short: 'Shift from plan-driven to adaptive delivery with confidence.',
    description:
      'We guide organizations through agile transformations — from framework selection and coaching to enterprise scaling — with pragmatic, outcome-focused approaches.',
    icon: 'Repeat',
    features: ['Scrum / Kanban adoption', 'SAFe & scaling coaching', 'Agile maturity assessment', 'Team enablement'],
  },
  {
    id: 'coaching',
    title: 'Executive Coaching',
    short: 'One-on-one coaching for sponsors and senior project leaders.',
    description:
      'Strategic, confidential coaching for project sponsors and PM leaders — helping you navigate stakeholder politics, prioritization, and delivery trade-offs with clarity.',
    icon: 'Target',
    features: ['Sponsor coaching', 'Portfolio prioritization', 'Stakeholder alignment', 'Change leadership'],
  },
];

export type Course = {
  id: string;
  title: string;
  category: 'Certification' | 'Agile' | 'Leadership' | 'Fundamentals';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  hours: number;
  price: number;
  rating: number;
  students: number;
  blurb: string;
  icon: string;
};

export const courses: Course[] = [
  {
    id: 'pmp',
    title: 'PMP Certification Bootcamp',
    category: 'Certification',
    level: 'Advanced',
    duration: '12 weeks',
    hours: 42,
    price: 1299,
    rating: 4.9,
    students: 8420,
    blurb: 'Comprehensive PMP prep aligned to the latest PMBOK Guide, with mock exams and mentor support.',
    icon: 'Award',
  },
  {
    id: 'capm',
    title: 'CAPM Foundation',
    category: 'Certification',
    level: 'Beginner',
    duration: '8 weeks',
    hours: 28,
    price: 699,
    rating: 4.8,
    students: 3210,
    blurb: 'Start your PM career with the Certified Associate in Project Management — perfect for newcomers.',
    icon: 'BookOpen',
  },
  {
    id: 'agile-csm',
    title: 'Certified ScrumMaster (CSM)',
    category: 'Agile',
    level: 'Intermediate',
    duration: '2 weeks',
    hours: 16,
    price: 599,
    rating: 4.9,
    students: 5180,
    blurb: 'Become a licensed ScrumMaster with hands-on simulations and real-world sprint practice.',
    icon: 'Repeat',
  },
  {
    id: 'pmi-acp',
    title: 'PMI-ACP Agile Practitioner',
    category: 'Agile',
    level: 'Advanced',
    duration: '10 weeks',
    hours: 36,
    price: 1099,
    rating: 4.7,
    students: 2140,
    blurb: 'Master agile across frameworks — Scrum, Kanban, XP, and Lean — and earn the PMI-ACP credential.',
    icon: 'Zap',
  },
  {
    id: 'prince2',
    title: 'PRINCE2 Practitioner',
    category: 'Certification',
    level: 'Intermediate',
    duration: '6 weeks',
    hours: 24,
    price: 899,
    rating: 4.6,
    students: 1890,
    blurb: 'Structured, process-driven project management based on the globally recognized PRINCE2 method.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'leadership',
    title: 'Project Leadership Mastery',
    category: 'Leadership',
    level: 'Advanced',
    duration: '8 weeks',
    hours: 30,
    price: 1199,
    rating: 4.9,
    students: 1560,
    blurb: 'Move from managing tasks to leading people, influencing stakeholders, and driving outcomes.',
    icon: 'Users',
  },
  {
    id: 'fundamentals',
    title: 'Project Management Fundamentals',
    category: 'Fundamentals',
    level: 'Beginner',
    duration: '4 weeks',
    hours: 16,
    price: 349,
    rating: 4.7,
    students: 6730,
    blurb: 'A practical introduction to planning, scheduling, risk, and communication for new PMs.',
    icon: 'Compass',
  },
  {
    id: 'risk',
    title: 'Advanced Risk Management',
    category: 'Leadership',
    level: 'Advanced',
    duration: '5 weeks',
    hours: 20,
    price: 799,
    rating: 4.8,
    students: 980,
    blurb: 'Identify, quantify, and respond to project risks with quantitative and qualitative techniques.',
    icon: 'ShieldCheck',
  },
];

export type BlogPost = {
  id: string;
  title: string;
  category: 'Methodology' | 'Leadership' | 'Agile' | 'Career' | 'Tools';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [

];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string; // initials
  project?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'VP Delivery',
    company: 'Nexora Technologies',
    rating: 5,
    quote: 'MGuru transformed our PMO from a reporting function into a true delivery partner. Their consultants embedded with our teams and left us stronger than they found us.',
    avatar: 'PS',
    project: 'Enterprise PMO Transformation',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Head of Transformation',
    company: 'Meridian Financial',
    rating: 5,
    quote: 'The agile transformation was pragmatic, not dogmatic. We shipped value sooner and our teams actually enjoyed the change instead of resisting it.',
    avatar: 'DC',
    project: 'Agile Transformation',
  },
  {
    id: 't3',
    name: 'Aisha Khan',
    role: 'Director of Projects',
    company: 'Vertex Health',
    rating: 5,
    quote: 'I passed my PMP on the first attempt thanks to their bootcamp. The mock exams were harder than the real thing, which made all the difference.',
    avatar: 'AK',
  },
  {
    id: 't4',
    name: 'Marco Rossi',
    role: 'COO',
    company: 'Lumen Manufacturing',
    rating: 5,
    quote: 'They rescued a flagship project that was nine months behind. Within ten weeks we had a recovery plan, renewed governance, and a path to delivery.',
    avatar: 'MR',
    project: 'Delivery Recovery',
  },
  {
    id: 't5',
    name: 'Lena Fischer',
    role: 'Program Lead',
    company: 'Orbit Telecom',
    rating: 5,
    quote: 'The executive coaching was a game-changer for our sponsor group. We finally have a shared language for prioritization and trade-offs.',
    avatar: 'LF',
  },
  {
    id: 't6',
    name: 'Raj Patel',
    role: 'Engineering Manager',
    company: 'Cloudpeak SaaS',
    rating: 5,
    quote: 'Our ScrumMaster training was hands-on and immediately applicable. The simulations made the theory stick in a way lectures never do.',
    avatar: 'RP',
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: 'Courses' | 'Certification' | 'Consulting' | 'General';
};

export const faqs: FAQ[] = [
  { id: 'f1', question: 'Do you offer online or in-person training?', answer: 'Both. Our certification and agile courses run live online with an instructor, and we deliver corporate workshops on-site at your office or a venue of your choice.', category: 'Courses' },
  { id: 'f2', question: 'What is the typical pass rate for your PMP bootcamp?', answer: 'Our PMP bootcamp maintains a 96% first-attempt pass rate. This reflects our structured curriculum, extensive mock-exam bank, and dedicated mentor support throughout the program.', category: 'Certification' },
  { id: 'f3', question: 'Can you customize training for our industry?', answer: 'Absolutely. We tailor case studies, exercises, and examples to your industry — whether healthcare, finance, construction, or technology. Customized corporate programs are our specialty.', category: 'Courses' },
  { id: 'f4', question: 'How long does a typical consulting engagement last?', answer: 'Engagements range from focused 4-week health checks to multi-year PMO partnerships. Most rescue and setup engagements run 8-16 weeks; transformations typically span 6-12 months.', category: 'Consulting' },
  { id: 'f5', question: 'Are your instructors certified?', answer: 'Every instructor holds the relevant global credentials (PMP, PMI-ACP, CSM, PRINCE2, SAFe) and brings 15+ years of hands-on delivery experience. We never use theoretical trainers.', category: 'Courses' },
  { id: 'f6', question: 'Do you provide post-training support?', answer: 'Yes. Certification students get 90 days of mentor access and mock-exam practice. Corporate clients receive post-engagement enablement sessions to sustain the changes we introduced.', category: 'Courses' },
  { id: 'f7', question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, bank transfers, and corporate purchase orders. Course fees can also be paid in three monthly installments at no extra charge.', category: 'General' },
  { id: 'f8', question: 'Can you help with our PMP application?', answer: 'Yes. Our certification advisors guide you through the experience documentation, eligibility verification, and application submission as part of the bootcamp package.', category: 'Certification' },
  { id: 'f9', question: 'Do you work with startups or only enterprises?', answer: 'We work across the spectrum. Our lighter consulting packages and foundational courses are designed for startups and small teams, while our PMO and transformation practices serve enterprises.', category: 'Consulting' },
  { id: 'f10', question: 'Are course materials included in the price?', answer: 'Yes — all course materials, practice exams, templates, and reference guides are included. There are no hidden fees; exam fees paid to the certifying body are separate.', category: 'General' },
];

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  level: string;
  blurb: string;
};

export const jobs: Job[] = [
  { id: 'j1', title: 'Senior PM Consultant', department: 'Consulting', location: 'Bengaluru / Remote', type: 'Full-time', level: 'Senior', blurb: 'Lead client engagements, conduct health checks, and coach client teams to delivery maturity.' },
  { id: 'j2', title: 'Agile Coach', department: 'Transformation', location: 'Mumbai / Remote', type: 'Full-time', level: 'Mid-Senior', blurb: 'Guide organizations through agile transformations with hands-on team coaching and framework expertise.' },
  { id: 'j3', title: 'Certification Instructor', department: 'Education', location: 'Remote', type: 'Contract', level: 'Senior', blurb: 'Deliver live-online PMP, PMI-ACP, and Scrum courses with energy, rigor, and real-world stories.' },
  { id: 'j4', title: 'Instructional Designer', department: 'Education', location: 'Bengaluru', type: 'Full-time', level: 'Mid', blurb: 'Design blended learning experiences across our certification and corporate training portfolio.' },
  { id: 'j5', title: 'PMO Analyst', department: 'Consulting', location: 'Hyderabad', type: 'Full-time', level: 'Junior', blurb: 'Support PMO setup engagements — build templates, dashboards, and governance artifacts for clients.' },
  { id: 'j6', title: 'Account Manager', department: 'Growth', location: 'Bengaluru / Remote', type: 'Full-time', level: 'Mid-Senior', blurb: 'Own client relationships across consulting and training, identifying expansion and renewal opportunities.' },
];

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: 'Consulting' | 'Training' | 'Transformation' | 'PMO';
  duration: string;
  result: string;
  summary: string;
  metric: string;
  metricLabel: string;
};

export const portfolioItems: PortfolioItem[] = [
  { id: 'p1', title: 'Enterprise PMO Build-out', client: 'Global Fintech', category: 'PMO', duration: '9 months', result: '60% faster delivery reporting', summary: 'Designed and launched a centralized PMO serving 14 product teams, standardizing methodology and portfolio reporting across the organization.', metric: '60%', metricLabel: 'faster reporting' },
  { id: 'p2', title: 'Agile Transformation at Scale', client: 'Healthcare Network', category: 'Transformation', duration: '12 months', result: '3x throughput in 6 months', summary: 'Guided a 400-person delivery organization from waterfall to SAFe, coaching leadership and teams through the transition.', metric: '3x', metricLabel: 'throughput' },
  { id: 'p3', title: 'Flagship Project Rescue', client: 'Manufacturing Group', category: 'Consulting', duration: '10 weeks', result: 'Recovered 9-month delay', summary: 'Diagnosed root causes on a delayed ERP rollout, re-planned the critical path, and re-established governance to deliver within a revised realistic timeline.', metric: '9 mo', metricLabel: 'delay recovered' },
  { id: 'p4', title: 'PMP Enablement Program', client: 'Telecom Operator', category: 'Training', duration: '6 months', result: '120 PMs certified', summary: 'Ran a cohort-based PMP program for 150 project managers with a 96% pass rate, including application assistance and mentor support.', metric: '120', metricLabel: 'PMs certified' },
  { id: 'p5', title: 'Portfolio Prioritization Overhaul', client: 'SaaS Scale-up', category: 'Consulting', duration: '4 months', result: '40% less wasted effort', summary: 'Built a value-based prioritization framework and investment committee process that redirected spend toward highest-value initiatives.', metric: '40%', metricLabel: 'less wasted effort' },
  { id: 'p6', title: 'ScrumMaster Rollout', client: 'Retail Bank', category: 'Training', duration: '3 months', result: '45 CSMs in one quarter', summary: 'Delivered hands-on ScrumMaster certification across 8 squads, paired with team-level coaching to embed new practices.', metric: '45', metricLabel: 'CSMs certified' },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Self-Starter',
    price: 349,
    period: 'per course',
    tagline: 'For individual professionals beginning their PM journey.',
    features: ['Foundational courses access', 'Downloadable templates', 'Community forum access', 'Completion certificate', 'Email support'],
    cta: 'Enroll Now',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 99,
    period: 'per month',
    tagline: 'For PMs pursuing certification and career growth.',
    features: ['All certification prep courses', 'Unlimited mock exams', 'Mentor support (90 days)', 'Full template library', 'Study group access', 'Priority support'],
    highlighted: true,
    cta: 'Start Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 0,
    period: 'custom',
    tagline: 'For organizations scaling delivery capability.',
    features: ['Custom corporate training', 'Dedicated success manager', 'Consulting add-ons available', 'LMS integration', 'Cohort analytics dashboard', 'SLA-backed support'],
    cta: 'Talk to Sales',
  },
];

export const stats = [
  { value: '15+', label: 'Years of practice' },
  { value: '40K+', label: 'Professionals trained' },
  { value: '96%', label: 'Certification pass rate' },
  { value: '120+', label: 'Organizations served' },
];

export const achievements = [
  { value: 'PMI Authorized', label: 'Training Partner' },
  { value: '4.9/5', label: 'Average course rating' },
  { value: '20+', label: 'Industries served' },
  { value: '8', label: 'Countries reached' },
];

export const team = [

];

export const trustedLogos = ['Nexora', 'Meridian', 'Vertex Health', 'Lumen', 'Orbit Telecom', 'Cloudpeak', 'FinServe', 'Helix'];

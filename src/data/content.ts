export type NavLink = { label: string; to: string };

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
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
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    short: 'Boost your online visibility and drive organic traffic.',
    description:
      'Comprehensive SEO strategies to improve your search engine rankings, increase organic traffic, and grow your online presence with data-driven optimization techniques.',
    icon: 'Compass',
    features: ['Keyword research & analysis', 'On-page optimization', 'Technical SEO audits', 'Link building & authority'],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    short: 'Engage your audience and build brand presence.',
    description:
      'Strategic social media campaigns across all major platforms to build brand awareness, engage your audience, and drive meaningful conversions.',
    icon: 'Users',
    features: ['Platform strategy & management', 'Content creation & curation', 'Community engagement', 'Paid social advertising'],
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    short: 'Tell your story and attract your ideal customers.',
    description:
      'Create compelling content that educates, entertains, and converts. From blog posts to white papers, we help you build authority and trust.',
    icon: 'BookOpen',
    features: ['Content strategy & planning', 'Blog writing & articles', 'White papers & case studies', 'Video & multimedia content'],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    short: 'Nurture your leads and build lasting relationships.',
    description:
      'Design and execute email campaigns that engage subscribers, nurture leads, and drive conversions with personalized, targeted messaging.',
    icon: 'ClipboardCheck',
    features: ['Campaign strategy & design', 'Email automation workflows', 'Segmentation & personalization', 'A/B testing & optimization'],
  },
  {
    id: 'ppc',
    title: 'Advertising (PPC)',
    short: 'Drive targeted traffic and immediate results.',
    description:
      'Data-driven PPC campaigns across Google Ads, social media, and display networks to reach your target audience and maximize ROI.',
    icon: 'Target',
    features: ['Google Ads management', 'Social media advertising', 'Display & retargeting', 'Conversion optimization'],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    short: 'Make data-driven decisions with confidence.',
    description:
      'Comprehensive analytics solutions that track, measure, and report on your marketing performance. Get actionable insights to optimize every campaign.',
    icon: 'ShieldCheck',
    features: ['Performance tracking & reporting', 'Conversion analysis', 'ROI measurement', 'Data visualization dashboards'],
  },
  {
    id: 'campaign-planning',
    title: 'Campaign Planning',
    short: 'Strategic campaigns that deliver results.',
    description:
      'End-to-end campaign planning and execution services that align with your business goals, target the right audience, and deliver measurable results.',
    icon: 'Zap',
    features: ['Campaign strategy & ideation', 'Budget planning & allocation', 'Channel selection & planning', 'Performance optimization'],
  },
];

export type BlogPost = {
  id: string;
  title: string;
  category: 'SEO' | 'Social Media' | 'Content' | 'Analytics' | 'PPC';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [];

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
    role: 'Marketing Director',
    company: 'Nexora Technologies',
    rating: 5,
    quote: 'MGuru transformed our digital presence. Their SEO strategy drove 280% more organic traffic in just 6 months. We couldn\'t be happier with the results.',
    avatar: 'PS',
    project: 'SEO Growth Strategy',
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Head of Growth',
    company: 'Meridian Financial',
    rating: 5,
    quote: 'The social media campaigns from MGuru were game-changing. We grew our following by 450K+ and saw a significant increase in engagement and leads.',
    avatar: 'DC',
    project: 'Social Media Brand Building',
  },
  {
    id: 't3',
    name: 'Aisha Khan',
    role: 'Content Lead',
    company: 'Vertex Health',
    rating: 5,
    quote: 'Their content marketing engine is incredible. They helped us build a content strategy that attracts 180K monthly readers and establishes us as industry leaders.',
    avatar: 'AK',
  },
  {
    id: 't4',
    name: 'Marco Rossi',
    role: 'E-commerce Director',
    company: 'Lumen Manufacturing',
    rating: 5,
    quote: 'Our PPC campaigns with MGuru achieved a 4.8x ROAS. They optimized every aspect of our ad spend and delivered outstanding results.',
    avatar: 'MR',
    project: 'PPC Campaign Optimization',
  },
  {
    id: 't5',
    name: 'Lena Fischer',
    role: 'VP of Analytics',
    company: 'Orbit Telecom',
    rating: 5,
    quote: 'The analytics dashboard MGuru built for us is a game-changer. We can now track every marketing channel in real-time and make data-driven decisions.',
    avatar: 'LF',
  },
  {
    id: 't6',
    name: 'Raj Patel',
    role: 'Marketing Manager',
    company: 'Cloudpeak SaaS',
    rating: 5,
    quote: 'Their email marketing automation increased our conversions by 32%. The personalized campaigns and segmentation strategies are top-notch.',
    avatar: 'RP',
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: 'SEO' | 'Social Media' | 'Content Marketing' | 'PPC' | 'Analytics' | 'General';
};

export const faqs: FAQ[] = [
  {
    id: 'f1',
    question: 'What is SEO and why do I need it?',
    answer: 'SEO (Search Engine Optimization) helps your website rank higher in search results, making it easier for potential customers to find you. It drives organic traffic, builds credibility, and delivers long-term results without ongoing ad spend.',
    category: 'SEO',
  },
  {
    id: 'f2',
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. Typically, you can start seeing initial improvements in 3-6 months, with significant results in 6-12 months. The timeline depends on your industry, competition, and current website health.',
    category: 'SEO',
  },
  {
    id: 'f3',
    question: 'Which social media platforms should my business be on?',
    answer: 'The best platforms depend on your target audience and business goals. LinkedIn is ideal for B2B, Instagram and TikTok for visual brands, Facebook for community building, and Twitter/X for real-time engagement. We help you choose and optimize the right platforms.',
    category: 'Social Media',
  },
  {
    id: 'f4',
    question: 'How do you measure social media success?',
    answer: 'We track metrics that matter: engagement rate, follower growth, reach, impressions, click-through rates, and conversions. We provide regular reports with actionable insights to continuously improve performance.',
    category: 'Social Media',
  },
  {
    id: 'f5',
    question: 'What is content marketing and why is it important?',
    answer: 'Content marketing is the creation and distribution of valuable content to attract and engage your target audience. It builds trust, establishes authority, and drives organic traffic. Good content converts visitors into customers.',
    category: 'Content Marketing',
  },
  {
    id: 'f6',
    question: 'How often should I publish content?',
    answer: 'Consistency matters more than frequency. We typically recommend 4-8 blog posts per month, 2-3 social media posts per week, and 1-2 email newsletters monthly. We tailor a content calendar that works for your resources and goals.',
    category: 'Content Marketing',
  },
  {
    id: 'f7',
    question: 'What is PPC advertising and how does it work?',
    answer: 'PPC (Pay-Per-Click) is a paid advertising model where you pay only when someone clicks on your ad. Platforms like Google Ads and Meta Ads let you target specific audiences, control your budget, and track every dollar spent for maximum ROI.',
    category: 'PPC',
  },
  {
    id: 'f8',
    question: 'What is a good ROAS for PPC campaigns?',
    answer: 'A good ROAS (Return on Ad Spend) varies by industry, but generally a 3:1 to 5:1 ratio is considered healthy. That means earning $3-$5 for every $1 spent on ads. We optimize campaigns to achieve the highest possible ROAS for your business.',
    category: 'PPC',
  },
  {
    id: 'f9',
    question: 'What marketing metrics should I track?',
    answer: 'Key metrics include website traffic, conversion rate, cost per acquisition, ROI, engagement rate, and customer lifetime value. We help you identify and track the metrics that actually matter to your business goals.',
    category: 'Analytics',
  },
  {
    id: 'f10',
    question: 'How do I know if my marketing is working?',
    answer: 'Through comprehensive analytics and reporting. We track all marketing channels, measure performance against KPIs, and provide regular reports. If something isn\'t working, we identify it quickly and optimize for better results.',
    category: 'Analytics',
  },
  {
    id: 'f11',
    question: 'Do you offer custom marketing packages?',
    answer: 'Yes! Every business is unique, and we create custom packages tailored to your specific goals, budget, and industry. Contact us for a free consultation to discuss your needs.',
    category: 'General',
  },
  {
    id: 'f12',
    question: 'How much do your digital marketing services cost?',
    answer: 'Our pricing is customized based on your specific needs and goals. We offer flexible packages for businesses of all sizes. Contact us for a free consultation and we\'ll provide a tailored quote.',
    category: 'General',
  },
  {
    id: 'f13',
    question: 'Do you offer ongoing support and optimization?',
    answer: 'Absolutely. Marketing isn\'t a one-time effort. We provide ongoing management, regular reporting, and continuous optimization to ensure your campaigns keep delivering results over time.',
    category: 'General',
  },
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

export const jobs: Job[] = [];

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  category: 'SEO' | 'Social Media' | 'Content Marketing' | 'PPC' | 'Analytics';
  duration: string;
  result: string;
  summary: string;
  metric: string;
  metricLabel: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'SEO Growth Strategy',
    client: 'TechSaaS Startup',
    category: 'SEO',
    duration: '6 months',
    result: '280% organic traffic increase',
    summary: 'Comprehensive SEO strategy including keyword research, on-page optimization, and technical SEO improvements for a B2B SaaS company.',
    metric: '280%',
    metricLabel: 'traffic growth',
  },
  {
    id: 'p2',
    title: 'Social Media Brand Building',
    client: 'Fashion Retailer',
    category: 'Social Media',
    duration: '4 months',
    result: '450K+ new followers',
    summary: 'Instagram and TikTok strategy with influencer partnerships, user-generated content, and community engagement campaigns.',
    metric: '450K',
    metricLabel: 'new followers',
  },
  {
    id: 'p3',
    title: 'Content Marketing Engine',
    client: 'B2B Software Company',
    category: 'Content Marketing',
    duration: '8 months',
    result: '180K monthly readers',
    summary: 'Built a content marketing engine with blog posts, whitepapers, case studies, and video content that established thought leadership.',
    metric: '180K',
    metricLabel: 'monthly readers',
  },
  {
    id: 'p4',
    title: 'PPC Campaign Optimization',
    client: 'E-commerce Brand',
    category: 'PPC',
    duration: '3 months',
    result: '4.8x ROAS achieved',
    summary: 'Google Ads and Meta Ads optimization with audience targeting, A/B testing, and conversion rate optimization for an online store.',
    metric: '4.8x',
    metricLabel: 'ROAS',
  },
  {
    id: 'p5',
    title: 'Marketing Analytics Dashboard',
    client: 'Healthcare Platform',
    category: 'Analytics',
    duration: '5 months',
    result: '40% better decision-making',
    summary: 'Custom analytics dashboard integrating data from all marketing channels to provide real-time insights and ROI measurement.',
    metric: '40%',
    metricLabel: 'better decisions',
  },
  {
    id: 'p6',
    title: 'Email Marketing Automation',
    client: 'EdTech Company',
    category: 'Content Marketing',
    duration: '3 months',
    result: '32% increase in conversions',
    summary: 'Email marketing automation with personalized drip campaigns, segmentation, and A/B testing to nurture leads and drive conversions.',
    metric: '32%',
    metricLabel: 'conversion increase',
  },
];

export const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '500+', label: 'Campaigns delivered' },
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '120+', label: 'Businesses served' },
];

export const achievements = [
  { value: 'Google Partner', label: 'Certified Agency' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '20+', label: 'Industries served' },
  { value: '8', label: 'Countries reached' },
];

export const team = [
  {
    id: 't1',
    name: 'Amit Kumar',
    role: 'Founder & CEO',
    avatar: 'AK',
    bio: '15+ years in digital marketing with expertise in SEO, content strategy, and business growth. Previously led marketing at multiple startups.',
    icon: 'Compass',
  },
];

export const trustedLogos = ['Nexora', 'Meridian', 'Vertex Health', 'Lumen', 'Orbit Telecom', 'Cloudpeak', 'FinServe', 'Helix'];
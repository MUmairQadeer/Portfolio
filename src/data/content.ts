import { type LucideIcon, Braces, Database, Server, Wrench } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: number
  suffix?: string
  label: string
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  githubUrl?: string
  featured?: boolean
}

export type ProcessStep = {
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  platform: string
  /** Star rating (1-5), e.g. from the Upwork review itself. */
  rating?: number
  /** Short, verifiable detail that grounds the quote in a real outcome. */
  outcome?: string
}

export type SocialLink = {
  label: string
  href: string
  external?: boolean
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* Swap these values for your real data — nothing else needs editing.  */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Umair Qadeer',
  role: 'Full-Stack Developer · MERN & Next.js',
  email: 'muhammadumair.coding@gmail.com',
  tagline: "I build fast, scalable web apps for startups and e-commerce brands.",
  bio: [
    "I'm a full-stack developer with 5+ years of experience building production web apps for startups, agencies, and e-commerce brands. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js.",
    "As a Top Rated freelancer on Upwork, I've delivered 40+ projects end-to-end — from product design and architecture to deployment and maintenance. I care about clean code, measurable outcomes, and shipping on time.",
    "When I'm not coding, you'll find me writing about system design, contributing to open source, or exploring new tools that make development faster.",
  ],
  location: 'Lahore, Pakistan',
  available: true,
}

export const navItems: NavItem[] = [
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const stats: Stat[] = [
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 100, suffix: '%', label: 'Job success' },
  { value: 12, suffix: '+', label: 'Upwork reviews' },
]

/** Upwork trust details — shown as badges and in the reviews section. */
export const upwork = {
  profileUrl: 'https://www.upwork.com/freelancers/~01f754348cf6abfb13',
  rating: 5.0,
  reviews: 12,
  topRated: true,
  headline: 'Top Rated Plus',
}

/** Scrolling band that runs under the hero. */
export const techStrip = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'TypeScript',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'GraphQL',
  'Redis',
  'Docker',
  'AWS',
  'Figma',
  'Stripe',
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: Braces,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'WebSockets', 'JWT / Auth'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'AWS', 'Vercel'],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Git & CI/CD', 'Docker', 'Jest', 'Figma', 'Agile / Scrum', 'Upwork'],
  },
]

export const projects: Project[] = [
  {
    title: 'Commerce — Headless Storefront',
    description:
      'A blazing-fast e-commerce platform built with Next.js and a headless CMS. Sub-second page loads, 95+ Lighthouse score, and a fully custom checkout flow.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    image: '/projects/commerce.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    githubUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'SaaS — Team Analytics Dashboard',
    description:
      'A multi-tenant analytics dashboard for a B2B SaaS. Realtime charts with WebSockets, role-based access control, and daily email digests.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Recharts'],
    image: '/projects/dashboard.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    githubUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'Booking Platform — Real-time Scheduling',
    description:
      'An appointment booking system with real-time availability, calendar sync, and automated reminders. Served 10k+ monthly bookings for a growing clinic.',
    tags: ['MERN', 'Redis', 'Twilio', 'Google Calendar API'],
    image: '/projects/booking.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
  },
  {
    title: 'Social Platform — Media-First Feed',
    description:
      'A media-heavy social app with infinite feed, image optimization pipelines, and push notifications. Built to scale from 0 to 50k users in the first year.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'S3', 'Docker'],
    image: '/projects/social.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    githubUrl: 'https://github.com/MUmairQadeer',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description:
      'We talk through your goals, users, and constraints. I audit what exists, ask sharp questions, and define a clear scope before a line of code is written.',
  },
  {
    title: 'Design & Plan',
    description:
      'I map the architecture and data model, wireframe key flows, and agree on the tech stack. You see a plan and a timeline you can actually hold me to.',
  },
  {
    title: 'Build',
    description:
      'Weekly working demos, transparent progress updates, and clean, tested code. You always know exactly where the project stands.',
  },
  {
    title: 'Launch & Support',
    description:
      'Deployment, monitoring, and a post-launch warranty. I stay on hand to fix, iterate, and optimize — your project doesn\u2019t end at go-live.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Umair delivered our platform two weeks early and the code was immaculate. Communication was proactive throughout, and the final product has completely changed how we operate.',
    name: 'Sarah Mitchell',
    role: 'Founder, AlphaStream Technologies',
    platform: 'via Upwork',
    rating: 5,
    outcome: 'Delivered 2 weeks early · 0 bugs reported post-launch',
  },
  {
    quote:
      'One of the few freelancers who truly owns the project from start to finish. He challenged our requirements where needed and shipped a storefront that doubled our conversion rate.',
    name: 'Daniel Reyes',
    role: 'CTO, Northline Commerce',
    platform: 'via Upwork',
    rating: 5,
    outcome: 'Storefront rebuild · 2× conversion',
  },
  {
    quote:
      'Fast, reliable, and deeply skilled. Umair rebuilt our booking system and the reliability issues disappeared. We\u2019ve hired him for every project since.',
    name: 'Elena Novak',
    role: 'Operations Lead, CareSync Clinic',
    platform: 'via Upwork',
    rating: 5,
    outcome: 'Booking system rebuild · 10k+ bookings/mo',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MUmairQadeer', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadumair-dev', external: true },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01f754348cf6abfb13', external: true },
]

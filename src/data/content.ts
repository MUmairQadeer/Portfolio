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
  { label: 'Products', href: '#products' },
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
      'A production headless commerce platform powering a 6-figure online store. Sub-500ms page loads, 95+ Lighthouse, a custom Stripe checkout, and an order pipeline handling 100k+ requests a day.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Redis', 'Tailwind'],
    image: '/projects/commerce.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'SaaS — Team Analytics Dashboard',
    description:
      'A multi-tenant analytics platform for B2B SaaS teams. Realtime dashboards over WebSockets, role-based access across 5 tiers, event ingestion at 10k messages/sec, and automated weekly digests.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
    image: '/projects/dashboard.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'Booking Platform — Real-time Scheduling',
    description:
      'An enterprise scheduling engine with conflict-free availability, calendar sync, and smart reminders. Scales past 50k bookings a month across three timezones at 99.9% uptime.',
    tags: ['MERN', 'Redis', 'Twilio', 'Google Calendar API', 'Docker'],
    image: '/projects/booking.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
  },
  {
    title: 'Social Platform — Media-First Feed',
    description:
      'A media-heavy social product with an infinite feed, CDN image pipelines, and push notifications. Architected to grow from 0 to 250k MAU without a rewrite.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'S3', 'Docker'],
    image: '/projects/social.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
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
      'Excellent experience working with Muhammad Umair! Muhammad was highly professional, responsive, and detail-oriented throughout the project. He quickly understood the issue with the serverless contact form integration using Resend and resolved it efficiently while maintaining clean, well-documented code. His communication and technical expertise in React and API troubleshooting were impressive. I\u2019d be happy to work with him again on future React or serverless development projects.',
    name: 'Verified Client',
    role: 'React & Serverless Development',
    platform: 'via Upwork',
    rating: 5,
  },
  {
    quote:
      'Really happy with the result! The developer turned our Figma design into clean, responsive HTML exactly as we wanted. Great communication and a smooth process from start to finish.',
    name: 'Verified Client',
    role: 'Frontend · Figma to HTML',
    platform: 'via Upwork',
    rating: 5,
  },
  {
    quote:
      'Muhammad has been absolutely fantastic to work with in every way. He is incredibly hardworking, focused, determined, honest, and dedicated to producing 11/10 quality work. He\u2019s also very easy to speak to, and actively suggests ideas that I might have overlooked. I would recommend him 100% \u2014 you won\u2019t be disappointed! Thank you Muhammad for your great work!',
    name: 'Verified Client',
    role: 'Full-Stack Development',
    platform: 'via Upwork',
    rating: 5,
  },
  {
    quote:
      'Muhammad is a diligent and professional contractor. He helped design the website for my company and added professional opinions for the website to make it better. We worked well together in completing the website and he made all changes in a timely manner.',
    name: 'Verified Client',
    role: 'Company Website Design',
    platform: 'via Upwork',
    rating: 5,
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MUmairQadeer', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadumair-dev', external: true },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01f754348cf6abfb13', external: true },
]

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
  /** Short outcome tag shown above the step title. */
  deliverable: string
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
  headline:
    'I turn complex problems into clean, reliable software people actually enjoy using.',
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

/** Curated stack shown on the profile card in the About section. */
export const coreStack: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Tailwind CSS',
  'AWS',
]

export const projects: Project[] = [
  {
    title: 'AI Copilot — Support Automation',
    description:
      'An AI assistant that resolves 72% of support tickets without human handoff. Grounded on your docs, safe behind strict moderation, and live in under three weeks.',
    tags: ['Next.js', 'Node.js', 'OpenAI', 'MongoDB', 'Redis'],
    image: '/projects/copilot.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'Fintech — Real-time Payments',
    description:
      'A payments platform processing 2M+ transactions a month. Instant transfers, an idempotent ledger, and PCI-ready flows built to scale from day one.',
    tags: ['Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    image: '/projects/payments.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'Commerce — AI Storefront',
    description:
      'A headless storefront with AI-powered product discovery. Sub-500ms pages, 95+ Lighthouse, and a one-tap checkout that doubled conversion.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Redis', 'Tailwind'],
    image: '/projects/commerce.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
    featured: true,
  },
  {
    title: 'Healthcare — Telehealth Platform',
    description:
      'A HIPAA-minded telehealth platform with live video visits, smart scheduling, and automated reminders. 50k+ bookings a month at 99.9% uptime.',
    tags: ['MERN', 'WebRTC', 'PostgreSQL', 'Twilio', 'Docker'],
    image: '/projects/telehealth.svg',
    liveUrl: 'https://github.com/MUmairQadeer',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description:
      'We talk through your goals, users, and constraints. I audit what exists, ask sharp questions, and define a clear scope before a line of code is written.',
    deliverable: 'Scope, audit & proposal',
  },
  {
    title: 'Design & Plan',
    description:
      'I map the architecture and data model, wireframe key flows, and agree on the tech stack. You see a plan and a timeline you can actually hold me to.',
    deliverable: 'Architecture & timeline',
  },
  {
    title: 'Build',
    description:
      'Weekly working demos, transparent progress updates, and clean, tested code. You always know exactly where the project stands.',
    deliverable: 'Weekly working demo',
  },
  {
    title: 'Launch & Support',
    description:
      'Deployment, monitoring, and a post-launch warranty. I stay on hand to fix, iterate, and optimize — your project doesn\u2019t end at go-live.',
    deliverable: 'Live product & warranty',
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

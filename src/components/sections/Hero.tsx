import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown, BadgeCheck } from 'lucide-react'
import { site, upwork } from '@/data/content'
import { scrollToSection } from '@/lib/utils'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // Subtle parallax: background glow drifts slower than scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60])

  const headline = "I build fast, scalable web apps for startups and e-commerce brands."
  const words = headline.split(' ')

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax background glow */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)',
          }}
        />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-36 md:px-8"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {site.role}
          </motion.p>

          {/* Headline with staggered word reveal */}
          <h1 className="max-w-4xl font-display font-semibold leading-[1.05] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] text-foreground">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-top">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: reduce ? 0 : '0.6em' },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease },
                    },
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
            <span className="text-accent">.</span>
          </h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Full-stack MERN developer with 5+ years shipping production apps. I turn complex
            problems into clean, reliable, revenue-driving software — on time and on budget.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#products">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="secondary">
              Get In Touch
            </Button>
          </motion.div>

          {/* Trust row — social proof above the fold */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href={upwork.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <BadgeCheck size={17} className="text-accent" />
              <span className="font-medium text-foreground">{upwork.headline}</span>
              <Stars rating={upwork.rating} size={13} />
              <span>
                {upwork.rating.toFixed(1)} · {upwork.reviews} reviews
              </span>
            </a>
            <span className="hidden h-4 w-px bg-border md:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              Available for new projects
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-faint transition-colors hover:text-muted"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  )
}

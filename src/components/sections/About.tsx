import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { site, stats, type Stat } from '@/data/content'
import Reveal from '@/components/ui/Reveal'
import { Section, Container } from '@/components/ui/Section'

/** Animated counter — counts up once when scrolled into view. */
function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) {
      ref.current.textContent = `${stat.value}${stat.suffix ?? ''}`
      return
    }
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${stat.suffix ?? ''}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, stat])

  return (
    <div className="flex flex-col gap-3">
      <span className="font-display text-5xl font-semibold tabular-nums tracking-tight text-foreground md:text-6xl">
        <span ref={ref}>0</span>
        {stat.suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {stat.label}
      </span>
    </div>
  )
}

/**
 * Editorial About — typography, whitespace and hairlines. No boxes.
 */
export default function About() {
  return (
    <Section id="about">
      <Container>
        {/* Section index — magazine kicker */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-medium tracking-[0.3em] text-accent">
              01
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-faint">
              About
            </span>
          </div>
        </Reveal>

        {/* Statement headline */}
        <Reveal delay={0.08}>
          <h2 className="mt-12 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {site.headline}
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        {/* Bio — asymmetric split */}
        <Reveal delay={0.16}>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
              {site.bio[0]}
            </p>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {site.bio.slice(1).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Meta row — credit-line style */}
        <Reveal delay={0.22}>
          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-5 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-accent" /> {site.location}
            </span>
            <span className="text-faint" aria-hidden="true">·</span>
            <span>UTC+5</span>
            <span className="text-faint" aria-hidden="true">·</span>
            <span>~30 min reply</span>
            <span className="text-faint" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </div>
        </Reveal>

        {/* Stats — pure numbers */}
        <Reveal delay={0.28}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
            {stats.map((stat) => (
              <CountUp key={stat.label} stat={stat} />
            ))}
          </div>
        </Reveal>

        {/* Editorial text link */}
        <Reveal delay={0.34}>
          <div className="mt-16">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 font-display text-lg font-medium text-foreground transition-colors hover:text-accent"
            >
              See how I work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

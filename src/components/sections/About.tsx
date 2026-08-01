import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { site, stats, type Stat } from '@/data/content'
import Reveal from '@/components/ui/Reveal'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

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
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        <span ref={ref}>0</span>
        {stat.suffix}
      </span>
      <span className="text-sm text-muted">{stat.label}</span>
    </div>
  )
}

/** Terminal-style "whoami" card — the developer identity touch. */
function TerminalCard() {
  const lines = [
    { prompt: '$', cmd: 'whoami' },
    { out: 'full-stack dev · MERN & Next.js' },
    { prompt: '$', cmd: 'uptime' },
    { out: '5+ yrs · 40+ projects shipped' },
    { prompt: '$', cmd: 'status' },
    { out: 'open for new work' },
  ]

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#0c0c0e] font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-border bg-card/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 text-xs text-faint">umair — zsh</span>
      </div>
      <div className="space-y-1.5 p-5">
        {lines.map((line, i) =>
          line.out ? (
            <p key={i} className="text-muted">
              <span className="text-accent">▸ </span>
              {line.out}
            </p>
          ) : (
            <p key={i}>
              <span className="text-faint">{line.prompt}</span>{' '}
              <span className="text-foreground">{line.cmd}</span>
            </p>
          ),
        )}
        <p className="pt-1">
          <span className="text-accent">▮</span>
          <span className="sr-only">terminal cursor</span>
        </p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Terminal card */}
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <TerminalCard />
              <p className="mt-5 text-center text-xs text-faint">
                {site.location} · UTC+5 · usually replies within 30 minutes
              </p>
            </div>
          </Reveal>

          {/* Bio + stats */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Badge>About</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                I build products clients can hand to their own users without worry.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {site.bio.map((paragraph, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <MapPin size={16} className="text-accent" />
                  {site.location}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new projects
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <CountUp key={stat.label} stat={stat} />
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10">
                <Button href="#projects" variant="secondary">
                  See how I work <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}

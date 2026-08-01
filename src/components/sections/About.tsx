import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { site, stats, type Stat } from '@/data/content'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { Section, Container } from '@/components/ui/Section'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

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

/** Luxury "spec sheet" — the essentials of working with me. */
const sheet = [
  { label: 'Role', value: site.role },
  { label: 'Base', value: site.location },
  { label: 'Timezone', value: 'UTC+5 (PKT)' },
  { label: 'Response', value: '~30 minutes' },
] as const

/** Manifesto words that scroll behind the About statement. */
const MANIFEST = [
  'I build',
  'I ship',
  'I own outcomes',
  'Clean code',
  'Real products',
  'Zero surprises',
]

/** One half of the seamless marquee loop. */
function ManifestoRow({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-14 md:pr-14"
    >
      {MANIFEST.map((word, i) => (
        <span key={word} className="flex shrink-0 items-center gap-8 md:gap-14">
          <span
            className={cn(
              'whitespace-nowrap font-display text-[clamp(2.6rem,8vw,6.5rem)] font-semibold leading-none tracking-tight',
              i % 2 === 0 ? 'text-foreground' : 'text-transparent',
            )}
            style={i % 2 === 1 ? { WebkitTextStroke: '1.5px var(--accent)' } : undefined}
          >
            {word}
          </span>
          <span
            aria-hidden="true"
            className="font-display text-[clamp(1.6rem,4vw,3.5rem)] leading-none text-accent"
          >
            ◆
          </span>
        </span>
      ))}
    </div>
  )
}

/**
 * Kinetic Manifesto — a luxury editorial About. A giant auto-scrolling
 * manifesto headline sets the tone; a ghost monogram and a "spec sheet"
 * of working details ground it. No boxes, pure type and hairlines.
 */
export default function About() {
  const reduce = usePrefersReducedMotion()

  return (
    <Section id="about">
      <Container>
        {/* Kicker — availability lives in the header rule */}
        <Reveal>
          <div className="flex items-center gap-4">
            <Badge className="shrink-0 uppercase tracking-[0.2em]">About</Badge>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="hidden sm:inline">Available for Q3</span>
            </span>
          </div>
        </Reveal>

        {/* Manifesto marquee — bleeds past the container */}
        <div className="mt-14 -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:-mx-8">
          <div
            className={cn(
              'flex w-max',
              !reduce && 'animate-marquee hover:[animation-play-state:paused]'
            )}
            style={{ animationDuration: '38s' }}
          >
            <ManifestoRow />
            <ManifestoRow hidden />
          </div>
        </div>

        {/* Statement + spec sheet */}
        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <Reveal delay={0.1}>
            <div className="relative">
              {/* Ghost monogram watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -left-3 select-none font-display text-[9rem] font-bold leading-none tracking-tighter text-foreground/[0.04] lg:-left-6 lg:text-[12rem]"
              >
                UQ
              </span>
              <h2 className="relative font-display text-[1.7rem] font-medium leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {site.headline}
                <span className="text-accent">.</span>
              </h2>
              <p className="relative mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {site.bio[2]}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="border-t border-border">
              {sheet.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                    {row.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-foreground md:text-[15px]">
                    {row.value}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 border-b border-border py-4">
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                  Status
                </dt>
                <dd className="inline-flex items-center gap-2 text-sm font-medium text-foreground md:text-[15px]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">{site.bio[1]}</p>
          </Reveal>
        </div>

        {/* Stats — index-style row */}
        <Reveal delay={0.26}>
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 lg:mt-24">
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-6">
                <CountUp stat={stat} />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Signature CTA */}
        <Reveal delay={0.32}>
          <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
            <p className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Let&rsquo;s build the next thing together.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

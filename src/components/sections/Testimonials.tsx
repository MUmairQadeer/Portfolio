import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import { testimonials, upwork, type Testimonial } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import Stars from '@/components/ui/Stars'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

/**
 * Quote clamped to a fixed number of lines so every card reads the same
 * length. If the text overflows, a "Read more" toggle reveals the rest.
 */
function ClampedQuote({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      setOverflows(el.scrollHeight > el.clientHeight + 1)
    }
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => ro.disconnect()
  }, [text])

  return (
    <div>
      <p
        ref={ref}
        className={cn(
          'text-[15px] leading-relaxed text-foreground/90',
          !expanded && 'line-clamp-4'
        )}
      >
        "{text}"
      </p>
      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[85vw] max-w-[420px] shrink-0 flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-border-strong md:w-[420px]">
      <Stars rating={t.rating ?? 5} size={14} />

      <blockquote className="mt-5 flex-1">
        <ClampedQuote text={t.quote} />
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
          {initials(t.name)}
        </span>
        <div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            {t.name}
            <BadgeCheck size={14} className="text-accent" aria-label="Verified" />
          </div>
          <div className="text-xs text-muted">
            {t.role} · {t.platform}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

/**
 * Auto-scrolling horizontal carousel of reviews. Duplicates the list once so
 * translateX(-50%) loops seamlessly; pauses on hover; honors reduced motion.
 */
export default function Testimonials() {
  const reduce = usePrefersReducedMotion()
  const doubled = [...testimonials, ...testimonials]

  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Badge>Testimonials</Badge>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Feedback from clients who paid for the work.
            </h2>
          </Reveal>

          {/* Aggregate rating + verified link */}
          <Reveal delay={0.1}>
            <a
              href={upwork.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent"
            >
              <div className="text-left">
                <div className="font-display text-2xl font-semibold leading-none text-foreground">
                  {upwork.rating.toFixed(1)}
                </div>
                <Stars rating={upwork.rating} size={12} className="mt-1.5" />
              </div>
              <div className="h-8 w-px bg-border" aria-hidden="true" />
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">
                  <BadgeCheck size={14} className="mr-1 inline text-accent" />
                  {upwork.headline}
                </div>
                <div className="text-xs text-muted">
                  {upwork.reviews} reviews · verified on Upwork
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        </div>
      </Container>

      {/* Auto-scroll track */}
      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={cn(
            'flex w-max gap-6',
            !reduce && 'animate-marquee hover:[animation-play-state:paused]'
          )}
          style={{ animationDuration: '50s' }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </Section>
  )
}

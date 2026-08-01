import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { scrollToSection } from '@/lib/utils'
import { cn } from '@/lib/utils'

/**
 * How I work — an editorial journey. A sticky panel with scroll-linked
 * progress sits on the left while oversized, numbered steps pass on the
 * right. The active step highlights in the accent color as you scroll.
 */
export default function Process() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observers = processSteps.map((_, i) => {
      const el = stepRefs.current[i]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i)
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const progress = ((active + 1) / processSteps.length) * 100

  return (
    <Section id="process">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Sticky intro + progress */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Badge>How I Work</Badge>
              <h2 className="mt-6 max-w-md font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                A process built for clients who hate surprises.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                Four clear stages, weekly demos, and zero guesswork. Here's what working together
                actually looks like.
              </p>
            </Reveal>

            {/* Scroll-linked progress — desktop only */}
            <div className="mt-12 hidden lg:block">
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden="true" />
                <motion.div
                  className="absolute left-0 top-0 w-px bg-accent"
                  style={{ height: `${progress}%` }}
                  aria-hidden="true"
                />
                <ol className="space-y-7">
                  {processSteps.map((step, i) => (
                    <li key={step.title} className="relative pl-8">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border transition-colors duration-300',
                          active >= i ? 'border-accent bg-accent' : 'border-border-strong bg-card',
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => scrollToSection(`step-${i + 1}`)}
                        className={cn(
                          'text-sm font-medium transition-colors duration-300',
                          active === i ? 'text-foreground' : 'text-faint hover:text-muted',
                        )}
                      >
                        <span className="tabular-nums text-accent/80">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="mx-2 text-faint" aria-hidden="true">—</span>
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Editorial step rows */}
          <ol className="lg:mt-2">
            {processSteps.map((step, i) => (
              <li
                key={step.title}
                id={`step-${i + 1}`}
                ref={(el) => {
                  stepRefs.current[i] = el
                }}
                className="group border-t border-border py-12 first:border-t-0 md:py-14"
              >
                <Reveal y={20}>
                  <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:gap-8">
                    {/* Giant index */}
                    <span
                      className={cn(
                        'font-display text-5xl font-semibold tabular-nums tracking-tight transition-colors duration-500 md:text-7xl',
                        active === i ? 'text-accent' : 'text-faint/30 group-hover:text-faint/60',
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {step.deliverable}
                      </span>
                      <h3 className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}

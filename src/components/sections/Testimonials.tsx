import { motion } from 'framer-motion'
import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import { testimonials, upwork } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import Stars from '@/components/ui/Stars'

const ease = [0.22, 1, 0.36, 1] as const

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-border-strong"
            >
              <Stars rating={t.rating ?? 5} size={14} />

              <blockquote className="mt-5 flex-1">
                <p className="text-[15px] leading-relaxed text-foreground/90">"{t.quote}"</p>
              </blockquote>

              {t.outcome && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <span aria-hidden="true">→</span> {t.outcome}
                </p>
              )}

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
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

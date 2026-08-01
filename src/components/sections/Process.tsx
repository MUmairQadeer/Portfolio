import { motion } from 'framer-motion'
import { processSteps } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'

const ease = [0.22, 1, 0.36, 1] as const

export default function Process() {
  return (
    <Section id="process">
      <Container>
        <Reveal>
          <Badge>How I Work</Badge>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A process built for clients who hate surprises.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease }}
              className="relative"
            >
              {/* Animated connector between numbered steps */}
              {i < processSteps.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: i * 0.12 + 0.3, ease }}
                  className="absolute left-[22px] top-[44px] hidden h-px w-[calc(100%-22px)] origin-left bg-border lg:block"
                />
              )}

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong bg-card font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

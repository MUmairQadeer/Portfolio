import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { GithubIcon } from '@/components/ui/BrandIcons'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Selected products — a responsive card grid. Every card is one large link
 * back to the GitHub homepage. Previews are realistic UI mockups.
 */
export default function Products() {
  return (
    <Section id="products">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Badge>Selected Products</Badge>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              A short list of products I'd stake my reputation on.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
              AI, fintech, commerce, and healthcare — real products with real numbers. Source
              available on GitHub.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-border-strong"
            >
              {/* Preview */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {project.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-accent backdrop-blur">
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                    Featured
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {project.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm">
                  <span className="inline-flex items-center gap-2 font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                    <GithubIcon size={15} /> View on GitHub
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  )
}

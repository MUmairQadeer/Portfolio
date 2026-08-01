import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Reveal from '@/components/ui/Reveal'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const ease = [0.22, 1, 0.36, 1] as const
const PREVIEW_W = 440

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [finePointer, setFinePointer] = useState(false)
  const reduce = usePrefersReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 180, damping: 26, mass: 0.4 })
  const py = useSpring(my, { stiffness: 180, damping: 26, mass: 0.4 })

  useEffect(() => {
    setFinePointer(window.matchMedia('(pointer: fine)').matches)
  }, [])

  const handleMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const previewH = (PREVIEW_W * 9) / 16
    const x = Math.min(Math.max(e.clientX - rect.left + 28, 12), rect.width - PREVIEW_W - 12)
    const y = Math.min(Math.max(e.clientY - rect.top - previewH - 24, 12), rect.height - previewH - 12)
    mx.set(x)
    my.set(y)
  }

  const showPreview = active !== null && finePointer && !reduce
  const activeProject = active !== null ? projects[active] : null

  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <Badge>Selected Work</Badge>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A short list of projects I'd stake my reputation on.
          </h2>
        </Reveal>

        <div
          ref={sectionRef}
          onMouseMove={handleMove}
          className="relative mt-14"
        >
          {/* Cursor-following preview (desktop, fine pointer, motion allowed) */}
          {showPreview && activeProject && (
            <motion.div
              style={{ left: px, top: py }}
              className="pointer-events-none absolute z-20 hidden w-[440px] overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] lg:block"
              aria-hidden="true"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.title}
                  src={activeProject.image}
                  alt=""
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease }}
                  className="aspect-[16/9] w-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          )}

          <ul>
            {projects.map((project, i) => (
              <motion.li
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group grid gap-5 border-b border-border py-8 last:border-b-0 md:py-10 lg:grid-cols-[72px_1fr_auto] lg:gap-10"
              >
                {/* Index */}
                <span className="font-display text-sm font-medium tabular-nums text-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Body */}
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 md:text-3xl">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 group-hover:text-accent"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mobile/tablet thumbnail — floating preview is desktop-only */}
                  <div className="mt-6 overflow-hidden rounded-lg border border-border lg:hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      width={1200}
                      height={675}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      View case study <ArrowUpRight size={15} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <GithubIcon size={15} /> Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Desktop arrow affordance */}
                <div className="hidden items-center justify-end pt-2 lg:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

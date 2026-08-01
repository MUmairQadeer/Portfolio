import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { techStrip } from '@/data/content'
import { cn } from '@/lib/utils'

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const reduce = usePrefersReducedMotion()
  // Exactly two copies so translateX(-50%) loops seamlessly.
  const doubled = [...items, ...items]

  return (
    <div className="relative flex overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={cn('flex shrink-0 items-center', !reduce && 'animate-marquee')}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-sm font-medium uppercase tracking-wider text-faint"
          >
            <span className="whitespace-nowrap">{item}</span>
            <span className="mx-6 text-accent" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * Scrolling tech band under the hero. Quietly signals breadth without
 * a dated icon grid.
 */
export default function Marquee() {
  return (
    <div className="border-y border-border bg-card/40 py-2" aria-label="Technologies I work with">
      <Row items={techStrip} />
      <Row items={[...techStrip].reverse()} reverse />
    </div>
  )
}

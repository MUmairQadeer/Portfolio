import { cn } from '@/lib/utils'

/** Consistent max-width container, centered. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-8', className)}>{children}</div>
}

/**
 * Section wrapper enforcing consistent vertical rhythm
 * (mobile 80px, desktop 140px) and an optional id anchor.
 */
export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('py-20 md:py-[140px] scroll-mt-24', className)}>
      {children}
    </section>
  )
}

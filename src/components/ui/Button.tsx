import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-6 py-3 transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_0_1px_rgba(79,124,255,0.2)] hover:shadow-[0_8px_30px_rgba(79,124,255,0.35)]',
  secondary:
    'border border-border-strong text-foreground hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-foreground',
}

type ButtonProps = {
  href?: string
  variant?: ButtonVariant
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'children'>

/**
 * Shared button primitive. Renders an <a> when href is provided, otherwise a <button>.
 * Hover uses a subtle spring-like scale handled in CSS (transform + transition).
 */
export default function Button({
  href,
  variant = 'primary',
  external,
  disabled,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    'hover:-translate-y-0.5 active:translate-y-0',
    disabled && 'pointer-events-none opacity-60',
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...(rest as React.ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}

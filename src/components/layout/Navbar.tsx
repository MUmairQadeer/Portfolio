import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { navItems, site } from '@/data/content'
import { useTheme } from '@/hooks/useTheme'
import { useScrollspy } from '@/hooks/useScrollspy'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { scrollY } = useScroll()
  const activeId = useScrollspy(navItems.map((i) => i.href.replace('#', '')))

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24)
  })

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-[72px] md:px-8">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-foreground"
          >
            {site.name.split(' ')[0]}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeId === id
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative text-sm font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ duration: 0.3, ease }}
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="rounded-full p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              href="#contact"
              className="hidden md:inline-flex"
              variant="secondary"
            >
              Hire Me
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-card-hover md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-border bg-background p-6 md:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{site.name}</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 text-muted transition-colors hover:bg-card-hover hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease }}
                    className="rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-card-hover"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35, ease }}
                className="mt-auto"
              >
                <Button
                  href="#contact"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Hire Me <ArrowUpRight size={16} />
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

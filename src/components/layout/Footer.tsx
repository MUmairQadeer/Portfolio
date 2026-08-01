import { navItems, site, socialLinks } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-8">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="font-display font-semibold text-foreground">
            {site.name.split(' ')[0]}.
          </span>
          © {year} · {site.name}
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

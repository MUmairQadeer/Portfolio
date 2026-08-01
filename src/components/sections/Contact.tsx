import { useState } from 'react'
import { Mail, MessageSquare, Clock, ShieldCheck, Check, Copy, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { site, socialLinks, upwork } from '@/data/content'
import ContactForm from '@/components/ui/ContactForm'
import { Section, Container } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={17} />,
  LinkedIn: <LinkedinIcon size={17} />,
  Upwork: <MessageSquare size={17} />,
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <Section id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 md:px-16 md:py-20">
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[85%] -translate-x-1/2 rounded-full"
            style={{ background: 'radial-gradient(ellipse, var(--accent-soft), transparent 70%)' }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Pitch */}
            <div>
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Let's talk
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  Let's build something great.
                </h2>
                <p className="mt-6 max-w-md text-base text-muted md:text-lg">
                  Tell me where you are, where you want to be, and a rough timeline. I usually
                  reply within 30 minutes with honest next steps.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-2.5">
                    <Clock size={16} className="text-accent" /> Usually replies within 30 minutes
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-accent" /> Fixed scope, fixed timeline — no surprises
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={16} className="text-accent" /> {site.email}
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8">
                  <Button href={upwork.profileUrl} external variant="secondary">
                    <MessageSquare size={16} /> Hire on Upwork
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  aria-label={`Copy email address ${site.email}`}
                >
                  <Mail size={15} className="text-accent" />
                  {site.email}
                  {copied ? (
                    <Check size={14} className="text-accent" />
                  ) : (
                    <Copy size={14} className="opacity-60 transition-opacity group-hover:opacity-100" />
                  )}
                </button>
              </Reveal>

              <Reveal delay={0.26}>
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                    >
                      {socialIcons[link.label]}
                      {link.label}
                      <ArrowUpRight size={13} className="opacity-60" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Inquiry form */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-background/40 p-6 md:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Send an inquiry
                </h3>
                <p className="mt-1 mb-6 text-sm text-muted">
                  No retainer, no pressure — just a quick conversation.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}

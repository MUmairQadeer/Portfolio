import { useState, type FormEvent } from 'react'
import { Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { site, socialLinks, upwork } from '@/data/content'
import { Section, Container } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={17} />,
  LinkedIn: <LinkedinIcon size={17} />,
  Upwork: <MessageSquare size={17} />,
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend required: compose a mailto with the form contents.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(String(data.get('subject') || 'Project inquiry'))
    const body = encodeURIComponent(
      `Hi Umair,\n\n${String(data.get('message') || '')}\n\n— ${String(data.get('name') || '')}${data.get('email') ? ` (${data.get('email')})` : ''}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <Section id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 md:px-16 md:py-24">
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[85%] -translate-x-1/2 rounded-full"
            style={{ background: 'radial-gradient(ellipse, var(--accent-soft), transparent 70%)' }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Left: pitch */}
            <div>
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Let's talk
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                  Let's build something great.
                </h2>
                <p className="mt-6 max-w-md text-base text-muted md:text-lg">
                  Tell me where you are, where you want to be, and a rough timeline. I'll reply
                  within a few hours with honest next steps.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-2.5">
                    <Clock size={16} className="text-accent" /> Replies within a few hours · Mon–Sat
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-accent" /> Fixed scope, fixed timeline — no surprises
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={16} className="text-accent" /> {site.email}
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button href={`mailto:${site.email}`}>
                    <Mail size={16} /> Email me
                  </Button>
                  <Button href={upwork.profileUrl} external variant="secondary">
                    <MessageSquare size={16} /> Hire on Upwork
                  </Button>
                </div>

                <div className="mt-10 flex items-center gap-6 border-t border-border pt-8">
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
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <Reveal delay={0.15}>
              <form
                onSubmit={onSubmit}
                className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-background/40 p-7 md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Jane Doe"
                      className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@company.com"
                      className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="New web app · rebuild · hire for a sprint"
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you building? Timeline, budget range, links…"
                    className="flex-1 resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
                  />
                </div>

                <Button className="w-full">
                  {sent ? 'Opening your email client…' : 'Send inquiry'}
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}

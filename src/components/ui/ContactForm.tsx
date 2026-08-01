import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { site } from '@/data/content'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'sending' | 'success' | 'error'

type ContactFormProps = {
  nameInputRef?: React.RefObject<HTMLInputElement | null>
}

/**
 * Inquiry form. Sends via FormSubmit (free, no backend — forwards to the
 * owner email). Falls back to a prefilled mailto if the request fails.
 *
 * Note: the first submission triggers a one-time activation email from
 * FormSubmit to the owner address. Click the link in it once.
 */
export default function ContactForm({ nameInputRef }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  const fallbackMailto = (payload: Record<string, string>) => {
    const subject = encodeURIComponent(payload.subject || 'Project inquiry')
    const body = encodeURIComponent(
      `Hi Umair,\n\n${payload.message}\n\n— ${payload.name}${payload.email ? ` (${payload.email})` : ''}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      subject: String(data.get('subject') ?? 'Project inquiry'),
      message: String(data.get('message') ?? ''),
      _template: 'table',
      _captcha: 'false',
      _honey: String(data.get('_honey') ?? ''),
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await res.json().catch(() => null)) as { success?: string } | null
      if (res.ok && json?.success === 'true') {
        form.reset()
        setStatus('success')
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        fallbackMailto(payload)
        setStatus('error')
      }
    } catch {
      fallbackMailto(payload)
      setStatus('error')
    }
  }

  const fieldClasses =
    'w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus:outline-none'

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from humans */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            ref={nameInputRef}
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="jane@company.com"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          placeholder="New web app · rebuild · hire for a sprint"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="What are you building? Timeline, budget range, links…"
          className={cn(fieldClasses, 'resize-none')}
        />
      </div>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm font-medium text-accent">
          <CheckCircle2 size={16} /> Message sent — I'll get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-muted">
          Couldn't reach the mail service, so your email app opened with the message instead.
          If that also didn't work, email me directly at{' '}
          <a href={`mailto:${site.email}`} className="font-medium text-accent underline">
            {site.email}
          </a>.
        </p>
      )}

      <Button className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send inquiry'} {status === 'idle' && <Send size={15} />}
      </Button>
    </form>
  )
}

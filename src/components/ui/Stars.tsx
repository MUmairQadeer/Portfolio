import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, size = 14, className }: { rating?: number; size?: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-accent text-accent' : 'text-border-strong'}
        />
      ))}
    </div>
  )
}

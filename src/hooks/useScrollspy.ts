import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, used for
 * active-link highlighting in the navbar.
 */
export function useScrollspy(ids: string[], offset = 140) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= offset) current = id
      }
      // Near the bottom of the page, force the last section active.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 40 && ids.length) {
        current = ids[ids.length - 1]
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}

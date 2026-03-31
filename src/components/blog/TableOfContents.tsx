'use client'
import { useState, useEffect } from 'react'
import type { Heading } from '@/lib/headings'

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }),
      { rootMargin: '-80px 0% -70% 0%' }
    )
    headings.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [headings])

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const sh = el.scrollHeight - el.clientHeight
      setProgress(sh > 0 ? (el.scrollTop / sh) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!headings.length) return null
  return (
    <nav className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">İçindekiler</p>
      <ul className="space-y-1">
        {headings.map(h => (
          <li key={h.id} style={{ paddingLeft: `${(h.level - 2) * 12}px` }}>
            <a href={`#${h.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`block text-sm py-1 px-2 rounded-lg transition-all ${
                activeId === h.id ? 'text-pink-600 font-semibold bg-pink-50' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}>{h.text}</a>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5"><span>İlerleme</span><span>{Math.round(progress)}%</span></div>
        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#D15398,#D870AF)' }} />
        </div>
      </div>
    </nav>
  )
}

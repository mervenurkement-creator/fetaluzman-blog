'use client'
import { useState } from 'react'
export function SocialShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const e = encodeURIComponent
  const links = [
    { name: 'WhatsApp', href: `https://wa.me/?text=${e(title)}%20${e(url)}`, color: 'hover:bg-green-50 hover:text-green-600 hover:border-green-200' },
    { name: 'Twitter',  href: `https://twitter.com/intent/tweet?text=${e(title)}&url=${e(url)}`, color: 'hover:bg-slate-50 hover:text-slate-800' },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`, color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200' },
  ]
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-slate-500">Paylaş:</span>
      {links.map(l => (
        <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-500 font-medium transition-all ${l.color}`}>
          {l.name}
        </a>
      ))}
      <button onClick={copy}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
          copied ? 'bg-green-50 text-green-600 border-green-200' : 'border-slate-200 text-slate-500 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200'
        }`}>
        {copied ? '✓ Kopyalandı!' : '🔗 Kopyala'}
      </button>
    </div>
  )
}

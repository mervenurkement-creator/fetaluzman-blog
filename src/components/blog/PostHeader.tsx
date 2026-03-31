import Link from 'next/link'
import type { Post } from '@/lib/posts'

export function PostHeader({ post }: { post: Post }) {
  return (
    <header>
      <div style={{background:'linear-gradient(130deg,#0f0e2a 0%,#1e1458 40%,#2e195e 70%,#180f3a 100%)'}}
        className="w-full py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(t => (
              <span key={t} className="text-xs font-semibold bg-pink-500/20 text-pink-200 border border-pink-400/30 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>
          {post.excerpt && <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{background:'linear-gradient(135deg,#D15398,#D870AF)'}}>
                {(post.author || 'D').charAt(0)}
              </div>
              <span className="font-medium text-white/80">{post.author || 'Dr. Mervenur Kement'}</span>
            </div>
            <span className="text-white/30">·</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'})}</time>
            <span className="text-white/30">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 border-b border-slate-100 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-pink-600 transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-pink-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-xs">{post.title}</span>
          </nav>
        </div>
      </div>
    </header>
  )
}

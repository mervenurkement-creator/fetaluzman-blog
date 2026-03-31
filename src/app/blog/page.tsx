import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Blog' }

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-sm text-slate-400 hover:text-pink-600 mb-8 inline-block">← Ana Sayfa</Link>
      <h1 className="font-display text-4xl font-bold mb-10">Blog <span style={{color:'#D15398'}}>·</span> Tüm Yazılar</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="block border border-slate-100 rounded-2xl p-6 hover:border-pink-300 hover:shadow-md transition-all">
            <div className="flex gap-2 mb-2 flex-wrap">
              {post.tags.map(t => (
                <span key={t} className="text-xs bg-pink-50 text-pink-600 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900 mb-2">{post.title}</h2>
            <p className="text-slate-500 text-sm mb-3">{post.excerpt}</p>
            <div className="flex gap-3 text-xs text-slate-400">
              <time>{post.date}</time><span>·</span><span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

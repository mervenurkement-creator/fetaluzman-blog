import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-display text-5xl font-bold mb-4">
        Fetal <span style={{color:'#D15398'}}>Uzman</span>
      </h1>
      <p className="text-slate-500 mb-12">Gebelikte güvenli takip ve risk yönetimi.</p>
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
            <p className="text-slate-500 text-sm">{post.excerpt}</p>
            <div className="flex gap-3 text-xs text-slate-400 mt-3">
              <time>{post.date}</time><span>·</span><span>{post.readingTime}</span>
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-slate-400">Henüz yazı yok. content/posts/ klasörüne .mdx dosyası ekleyin.</p>
        )}
      </div>
    </div>
  )
}

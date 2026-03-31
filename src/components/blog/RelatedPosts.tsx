import Link from 'next/link'
import type { Post } from '@/lib/posts'
export function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">İlgili Yazılar</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-pink-300 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="h-28 flex items-center justify-center flex-wrap gap-2 px-4"
              style={{background:'linear-gradient(135deg,#1a1030 0%,#2d1060 100%)'}}>
              {post.tags.slice(0,2).map(t => (
                <span key={t} className="text-xs font-semibold text-pink-300 border border-pink-400/30 bg-pink-500/10 px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-slate-900 leading-snug mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <time>{new Date(post.date).toLocaleDateString('tr-TR',{day:'numeric',month:'long'})}</time>
                <span>·</span><span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

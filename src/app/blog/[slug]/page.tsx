import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PostHeader } from '@/components/blog/PostHeader'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { SocialShare } from '@/components/blog/SocialShare'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { extractHeadings } from '@/lib/headings'
import { renderMarkdown } from '@/lib/renderMarkdown'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)
  const headings = extractHeadings(post.content)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fetaluzman.com'
  const postUrl = `${siteUrl}/blog/${post.slug}`
  const htmlContent = await renderMarkdown(post.content)

  return (
    <div className="min-h-screen bg-white">
      <PostHeader post={post} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-12 items-start">
          <article className="flex-1 min-w-0 prose prose-slate max-w-none
            prose-headings:font-display prose-h2:text-3xl prose-h3:text-xl
            prose-a:text-pink-600 prose-code:text-pink-700 prose-code:bg-slate-100
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-pink-400 prose-blockquote:bg-pink-50
            prose-pre:bg-slate-900 prose-pre:rounded-xl">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <div className="mt-12 pt-8 border-t border-slate-100 not-prose">
              <SocialShare url={postUrl} title={post.title} />
            </div>
          </article>
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {headings.length > 0 && <TableOfContents headings={headings} />}
            </div>
          </aside>
        </div>
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-100">
            <RelatedPosts posts={related} />
          </div>
        )}
      </div>
    </div>
  )
}

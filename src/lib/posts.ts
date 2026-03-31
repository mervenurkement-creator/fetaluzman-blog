import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  coverImage?: string
  author?: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((fileName) => getPostBySlug(fileName.replace(/\.(mdx|md)$/, '')))
    .filter(Boolean) as Post[]
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath  = path.join(postsDirectory, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath
  if (!fs.existsSync(filePath)) return null
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)
  return {
    slug,
    title: data.title ?? 'Başlıksız',
    date: data.date ?? new Date().toISOString().split('T')[0],
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    readingTime: `${Math.ceil(stats.minutes)} dk okuma`,
    coverImage: data.coverImage ?? undefined,
    author: data.author ?? 'Dr. Mervenur Kement',
    content,
  }
}

export function getAllTags(): string[] {
  return [...new Set(getAllPosts().flatMap((p) => p.tags))]
}

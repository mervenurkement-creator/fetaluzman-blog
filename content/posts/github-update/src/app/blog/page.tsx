import { getAllPosts } from '@/lib/posts'
import BlogClientPage from '@/components/blog/BlogClientPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Gebelik Rehberi',
  description: 'Hafta hafta gebelik takibi, uzman makaleleri ve kanıta dayalı bilgiler.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogClientPage posts={posts} />
}

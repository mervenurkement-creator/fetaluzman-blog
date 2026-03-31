import { getAllPosts } from '@/lib/posts'
import HomePage from '@/components/HomePage'

export default function Page() {
  const posts = getAllPosts()
  return <HomePage posts={posts} />
}

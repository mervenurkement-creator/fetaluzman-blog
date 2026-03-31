import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export const remarkPlugins: any[] = [remarkGfm]

export const rehypePlugins: any[] = [
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['anchor-heading'] } }],
  [rehypePrettyCode, {
    theme: 'one-dark-pro',
    keepBackground: true,
    defaultLang: 'plaintext',
    onVisitLine(node: any) {
      if (node.children.length === 0) node.children = [{ type: 'text', value: ' ' }]
    },
  }],
]

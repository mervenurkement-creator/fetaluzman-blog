import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h2: ({ children, id, ...props }: any) => (
    <h2 id={id} className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-24 group flex items-center gap-2" {...props}>
      {children}
      {id && <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity text-xl" aria-hidden>#</a>}
    </h2>
  ),
  h3: ({ children, id, ...props }: any) => (
    <h3 id={id} className="font-display text-xl font-bold text-slate-800 mt-8 mb-3 scroll-mt-24 group flex items-center gap-2" {...props}>
      {children}
      {id && <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity" aria-hidden>#</a>}
    </h3>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="my-6 border-l-4 border-pink-400 pl-5 pr-4 py-3 bg-pink-50 rounded-r-xl italic">{children}</blockquote>
  ),
  Callout: ({ type = 'info', title, children }: any) => {
    const s: any = {
      info:    { bg: 'bg-blue-50',   border: 'border-blue-300',  text: 'text-blue-800',  icon: 'ℹ️' },
      warning: { bg: 'bg-amber-50',  border: 'border-amber-300', text: 'text-amber-800', icon: '⚠️' },
      danger:  { bg: 'bg-red-50',    border: 'border-red-300',   text: 'text-red-800',   icon: '🚨' },
      success: { bg: 'bg-green-50',  border: 'border-green-300', text: 'text-green-800', icon: '✅' },
    }
    const c = s[type]
    return (
      <div className={`my-6 p-5 rounded-xl border ${c.bg} ${c.border}`}>
        {title && <p className={`font-bold mb-2 flex items-center gap-2 ${c.text}`}><span>{c.icon}</span>{title}</p>}
        <div className={`text-sm leading-relaxed ${c.text}`}>{children}</div>
      </div>
    )
  },
}

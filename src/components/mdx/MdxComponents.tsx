export const mdxComponents = {
  h2: ({ children, id, ...props }: any) => (
    <h2
      id={id}
      className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-24 group flex items-center gap-2"
      {...props}
    >
      {children}
      {id && (
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity text-xl" aria-hidden>
          #
        </a>
      )}
    </h2>
  ),
  h3: ({ children, id, ...props }: any) => (
    <h3
      id={id}
      className="font-display text-xl font-bold text-slate-800 mt-8 mb-3 scroll-mt-24 group flex items-center gap-2"
      {...props}
    >
      {children}
      {id && (
        <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity" aria-hidden>
          #
        </a>
      )}
    </h3>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="my-6 border-l-4 border-pink-400 pl-5 pr-4 py-3 bg-pink-50 rounded-r-xl italic">
      {children}
    </blockquote>
  ),
}


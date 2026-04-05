'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  author?: string
  category?: string
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  'Haftalık Gebelik Rehberi': { bg: '#fdf0f7', text: '#b03070', border: '#f0c0d8', dot: '#D15398' },
  'Araştırma & Bilim':        { bg: '#eff6ff', text: '#1e4fa5', border: '#bfdbfe', dot: '#3b82f6' },
  'Yüksek Riskli Gebelik':    { bg: '#fff7ed', text: '#9a3412', border: '#fed7aa', dot: '#f97316' },
  'Ultrason & Tanı':          { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0', dot: '#22c55e' },
  'Diğer':                    { bg: '#f8f6ff', text: '#6d28d9', border: '#ddd6fe', dot: '#8b5cf6' },
}

const WEEK_GROUPS = [
  {
    label: '1-12. Hafta',
    color: '#D15398',
    pages: [
      { range: '1-4', title: '1-4. Hafta', desc: 'İmplantasyon ve erken gelişim' },
      { range: '5-8', title: '5-8. Hafta', desc: 'Kalp atışı ve organ gelişimi' },
      { range: '9-12', title: '9-12. Hafta', desc: 'İlk trimester taramaları' },
    ]
  },
  {
    label: '13-28. Hafta',
    color: '#8b5cf6',
    pages: [
      { range: '13-19', title: '13-19. Hafta', desc: 'Hareketler ve detaylı ultrason' },
      { range: '20-24', title: '20-24. Hafta', desc: 'Anomali taraması dönemi' },
      { range: '25-28', title: '25-28. Hafta', desc: 'Hızlı büyüme ve şeker testi' },
    ]
  },
  {
    label: '29-40. Hafta',
    color: '#f97316',
    pages: [
      { range: '29-32', title: '29-32. Hafta', desc: 'Akciğer olgunlaşması' },
      { range: '33-36', title: '33-36. Hafta', desc: 'Doğuma hazırlık' },
      { range: '37-40', title: '37-40. Hafta', desc: 'Term dönem ve doğum' },
    ]
  },
]

export default function BlogClientPage({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [searchQuery, setSearchQuery] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  const categories = ['Tümü', ...Array.from(new Set(posts.map(p => p.category || 'Diğer')))]

  const filtered = posts.filter(p => {
    const cat = activeCategory === 'Tümü' || (p.category || 'Diğer') === activeCategory
    const q = searchQuery.toLowerCase()
    const match = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    return cat && match
  })

  const grouped = categories
    .filter(c => c !== 'Tümü')
    .map(cat => ({
      cat,
      posts: filtered.filter(p => (p.category || 'Diğer') === cat)
    }))
    .filter(g => g.posts.length > 0)

  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(130deg,#0f0e2a 0%,#1e1458 40%,#2e195e 70%,#180f3a 100%)',
        padding: '64px 24px 72px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 70% at 80% 50%,rgba(216,112,175,.2) 0%,transparent 65%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease'
          }}>
            <span style={{
              display: 'inline-block', background: 'rgba(209,83,152,.2)', color: '#f0a8cc',
              border: '1px solid rgba(209,83,152,.3)', borderRadius: '30px',
              padding: '6px 18px', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px'
            }}>
              📚 Bilgi Merkezi
            </span>
            <h1 style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900,
              color: '#fff', marginBottom: '16px', letterSpacing: '-1px'
            }}>
              Gebelik <span style={{ color: '#D870AF' }}>Rehberi</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#b8b5d8', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              Hafta hafta gebelik takibi, uzman makaleleri ve kanıta dayalı bilgiler
            </p>

            {/* ARAMA */}
            <div style={{ position: 'relative', maxWidth: '460px', margin: '0 auto' }}>
              <span style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                fontSize: '18px', pointerEvents: 'none'
              }}>🔍</span>
              <input
                type="text"
                placeholder="Yazı ara... (örn: bulantı, ultrason)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%', padding: '14px 16px 14px 46px',
                  borderRadius: '50px', border: '1.5px solid rgba(255,255,255,.2)',
                  background: 'rgba(255,255,255,.1)', color: '#fff',
                  fontSize: '15px', outline: 'none',
                  backdropFilter: 'blur(8px)', boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #f0edf8',
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center'
        }}>
          {[
            { icon: '📝', val: posts.length, lbl: 'Makale' },
            { icon: '🗂️', val: categories.length - 1, lbl: 'Kategori' },
            { icon: '🤰', val: 9, lbl: 'Haftalık Rehber' },
          ].map(({ icon, val, lbl }) => (
            <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>{icon}</span>
              <span style={{ fontWeight: 800, fontSize: '20px', color: '#0f0e2a' }}>{val}</span>
              <span style={{ fontSize: '13px', color: '#888' }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* KATEGORİ FİLTRE */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat
            const col = CATEGORY_COLORS[cat] || CATEGORY_COLORS['Diğer']
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 20px', borderRadius: '30px', cursor: 'pointer',
                  fontSize: '13px', fontWeight: isActive ? 700 : 500,
                  border: isActive ? `2px solid ${col.dot}` : '1.5px solid #e5e0f5',
                  background: isActive ? col.bg : '#fff',
                  color: isActive ? col.text : '#666',
                  transition: 'all .2s',
                  boxShadow: isActive ? `0 4px 16px ${col.dot}33` : 'none'
                }}>
                {cat === 'Tümü' ? `✨ ${cat}` : cat}
                <span style={{
                  marginLeft: '6px', fontSize: '11px', fontWeight: 700,
                  background: isActive ? col.dot : '#eee',
                  color: isActive ? '#fff' : '#999',
                  borderRadius: '20px', padding: '1px 7px'
                }}>
                  {cat === 'Tümü' ? posts.length : posts.filter(p => (p.category || 'Diğer') === cat).length}
                </span>
              </button>
            )
          })}
        </div>

        {/* HAFTALIK TAKVİM */}
        {(activeCategory === 'Tümü' || activeCategory === 'Haftalık Gebelik Rehberi') && !searchQuery && (
          <div style={{
            background: 'linear-gradient(135deg,#fdf0f7 0%,#f3eeff 100%)',
            borderRadius: '20px', border: '1.5px solid #f0c0d8',
            padding: '28px', marginBottom: '48px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px' }}>🗓️</span>
              <div>
                <h2 style={{
                  fontFamily: 'Playfair Display, Georgia, serif',
                  fontSize: '22px', fontWeight: 800, color: '#0f0e2a', margin: 0
                }}>Hafta Hafta Gebelik Takvimi</h2>
                <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>
                  Gebeliğinizin hangi haftasındasınız?
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
              {WEEK_GROUPS.map(grp => (
                <div key={grp.label} style={{
                  background: '#fff', borderRadius: '14px',
                  border: '1.5px solid #f0edf8', padding: '16px'
                }}>
                  <div style={{
                    fontSize: '12px', fontWeight: 800, color: grp.color,
                    letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px'
                  }}>{grp.label}</div>
                  {grp.pages.map(page => (
                    <Link key={page.range} href={`/hafta/${page.range}`} style={{ textDecoration: 'none' }}>
                      <div style={{
                        padding: '10px 12px', borderRadius: '10px', marginBottom: '6px',
                        background: '#fdf8ff', border: '1px solid #f0edf8',
                        transition: 'all .2s', cursor: 'pointer'
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.background = `${grp.color}12`;
                          (e.currentTarget as HTMLDivElement).style.borderColor = grp.color;
                          (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.background = '#fdf8ff';
                          (e.currentTarget as HTMLDivElement).style.borderColor = '#f0edf8';
                          (e.currentTarget as HTMLDivElement).style.transform = 'none';
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f0e2a', lineHeight: 1.3 }}>
                          {page.title}
                        </div>
                        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '3px' }}>
                          {page.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SONUÇ YOK */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#aaa' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#555' }}>Sonuç bulunamadı</p>
            <p style={{ fontSize: '14px' }}>&quot;{searchQuery}&quot; için yazı yok. Farklı bir kelime deneyin.</p>
          </div>
        )}

        {/* KATEGORİ GRUPLARI */}
        {!searchQuery && activeCategory === 'Tümü' ? (
          grouped.map(({ cat, posts: catPosts }, gi) => {
            const col = CATEGORY_COLORS[cat] || CATEGORY_COLORS['Diğer']
            if (cat === 'Haftalık Gebelik Rehberi') return null
            return (
              <div key={cat} style={{
                marginBottom: '48px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${gi * 0.1}s`
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'
                }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: col.dot, flexShrink: 0
                  }} />
                  <h2 style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '20px', fontWeight: 800, color: '#0f0e2a', margin: 0
                  }}>{cat}</h2>
                  <div style={{
                    height: '1px', flex: 1, background: col.border
                  }} />
                  <span style={{
                    fontSize: '12px', color: col.text, background: col.bg,
                    border: `1px solid ${col.border}`, borderRadius: '20px',
                    padding: '3px 10px', fontWeight: 700
                  }}>{catPosts.length} yazı</span>
                </div>
                <PostGrid posts={catPosts} colColor={col} />
              </div>
            )
          })
        ) : (
          <div>
            {filtered.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '13px', color: '#888' }}>
                  {filtered.length} yazı bulundu
                  {searchQuery && ` — "${searchQuery}" için`}
                </span>
              </div>
            )}
            <PostGrid posts={filtered} colColor={CATEGORY_COLORS[activeCategory] || CATEGORY_COLORS['Diğer']} />
          </div>
        )}
      </div>
    </div>
  )
}

function PostGrid({ posts, colColor }: { posts: Post[]; colColor: any }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: '20px'
    }}>
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} colColor={colColor} index={i} />
      ))}
    </div>
  )
}

function PostCard({ post, colColor, index }: { post: Post; colColor: any; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 60)
    return () => clearTimeout(t)
  }, [index])

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff', borderRadius: '20px',
          border: hovered ? `1.5px solid ${colColor.dot}` : '1.5px solid #f0ecf9',
          overflow: 'hidden', cursor: 'pointer',
          transition: 'all .25s',
          transform: visible ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(16px)',
          opacity: visible ? 1 : 0,
          boxShadow: hovered ? `0 12px 32px ${colColor.dot}22` : 'none'
        }}
      >
        <div style={{
          height: '6px',
          background: hovered
            ? `linear-gradient(90deg,${colColor.dot},${colColor.border})`
            : colColor.border,
          transition: 'all .3s'
        }} />

        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{
                fontSize: '11px', fontWeight: 700,
                background: colColor.bg, color: colColor.text,
                border: `1px solid ${colColor.border}`,
                padding: '3px 9px', borderRadius: '20px'
              }}>{tag}</span>
            ))}
          </div>

          <h3 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '17px', fontWeight: 800,
            color: hovered ? colColor.dot : '#0f0e2a',
            lineHeight: 1.35, marginBottom: '10px',
            letterSpacing: '-0.2px',
            transition: 'color .2s',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>{post.title}</h3>

          <p style={{
            fontSize: '13px', color: '#777', lineHeight: 1.7,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>{post.excerpt}</p>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderTop: '1px solid #f5f3ff', paddingTop: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: `linear-gradient(135deg,#D15398,#D870AF)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 700, color: '#fff', flexShrink: 0
              }}>
                {(post.author || 'D').charAt(0)}
              </div>
              <span style={{ fontSize: '11px', color: '#888', fontWeight: 500 }}>
                {post.author?.split(' ').slice(-1)[0] || 'Kement'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#bbb' }}>
              <time>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

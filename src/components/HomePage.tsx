 'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

/* ─── Animasyon hook'u ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── Sayaç animasyonu ─── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const { ref, visible } = useInView()
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(target / 60)
    const t = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(t) }
      else setVal(start)
    }, 20)
    return () => clearInterval(t)
  }, [visible, target])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── Tip yazısı animasyonu ─── */
function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[idx]
    const t = setTimeout(() => {
      if (!del) {
        setTxt(w.slice(0, txt.length + 1))
        if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1800)
      } else {
        setTxt(w.slice(0, txt.length - 1))
        if (txt.length - 1 === 0) { setDel(false); setIdx((idx + 1) % words.length) }
      }
    }, del ? 45 : 90)
    return () => clearTimeout(t)
  }, [txt, del, idx, words])
  return (
    <span style={{ color: '#D870AF' }}>
      {txt}<span style={{ borderRight: '3px solid #D870AF', marginLeft: '2px', animation: 'blink 1s infinite' }} />
    </span>
  )
}

/* ─── Servis kartı ─── */
function ServiceCard({ icon, title, desc, color, delay, href }: any) {
  const { ref, visible } = useInView()
  const [hov, setHov] = useState(false)
  return (
    <Link href={href || '#'} style={{ textDecoration: 'none', display: 'block' }}>
      <div ref={ref} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          background: '#fff', borderRadius: '20px',
          border: hov ? `2px solid ${color}` : '2px solid #f0ecf9',
          padding: '28px 24px', cursor: 'pointer', transition: 'all .3s',
          transform: visible ? (hov ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(30px)',
          opacity: visible ? 1 : 0, transitionDelay: `${delay}s`,
          boxShadow: hov ? `0 16px 40px ${color}22` : 'none'
        }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: `${color}18`, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '28px', marginBottom: '16px',
          transition: 'transform .3s', transform: hov ? 'scale(1.1) rotate(-5deg)' : 'scale(1)'
        }}>{icon}</div>
        <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', marginBottom: '10px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.7, margin: 0 }}>{desc}</p>
        <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color, display: 'flex', alignItems: 'center', gap: '4px', opacity: hov ? 1 : 0, transition: 'opacity .2s' }}>Daha fazla →</div>
      </div>
    </Link>
  )
}

/* ─── Yorum kartı ─── */
function TestimonialCard({ text, name, week, delay }: any) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{
      background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9',
      padding: '24px', transition: 'all .5s',
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      opacity: visible ? 1 : 0, transitionDelay: `${delay}s`
    }}>
      <div style={{ fontSize: '32px', color: '#D15398', marginBottom: '12px', lineHeight: 1 }}>"</div>
      <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '16px' }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, background: 'linear-gradient(135deg,#D15398,#D870AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, color: '#fff' }}>{name.charAt(0)}</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f0e2a' }}>{name}</div>
          <div style={{ fontSize: '11px', color: '#aaa' }}>{week}</div>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: '14px', color: '#f59e0b' }}>★★★★★</div>
      </div>
    </div>
  )
}

/* ─── Süreç adımı ─── */
function StepCard({ num, icon, title, desc, delay }: any) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{
      textAlign: 'center', padding: '8px', transition: 'all .5s', transitionDelay: `${delay}s`,
      transform: visible ? 'translateY(0)' : 'translateY(24px)', opacity: visible ? 1 : 0
    }}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 16px', background: 'linear-gradient(135deg,#D15398,#D870AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', boxShadow: '0 8px 24px rgba(209,83,152,.35)' }}>{icon}</div>
      <div style={{ fontSize: '11px', fontWeight: 800, color: '#D15398', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Adım {num}</div>
      <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  )
}

/* ─── Blog kartı ─── */
function BlogCard({ post, delay }: any) {
  const { ref, visible } = useInView()
  const [hov, setHov] = useState(false)
  const colors: Record<string, string> = { 'Haftalık Rehber': '#D15398', 'Araştırma': '#3b82f6', 'Yüksek Riskli': '#f97316', 'Ultrason': '#22c55e' }
  const tag = post.tags[0] || ''
  const c = Object.entries(colors).find(([k]) => tag.includes(k))?.[1] || '#8b5cf6'
  return (
    <div ref={ref} style={{ transition: 'all .5s', transitionDelay: `${delay}s`, transform: visible ? 'translateY(0)' : 'translateY(24px)', opacity: visible ? 1 : 0 }}>
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
        <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{ background: '#fff', borderRadius: '20px', border: hov ? `2px solid ${c}` : '1.5px solid #f0ecf9', overflow: 'hidden', transition: 'all .25s', transform: hov ? 'translateY(-4px)' : 'translateY(0)', boxShadow: hov ? `0 12px 32px ${c}22` : 'none' }}>
          <div style={{ height: '6px', background: hov ? `linear-gradient(90deg,${c},${c}88)` : '#f0ecf9', transition: 'all .3s' }} />
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {post.tags.slice(0, 2).map((t: string) => (
                <span key={t} style={{ fontSize: '11px', fontWeight: 700, color: c, background: `${c}15`, border: `1px solid ${c}33`, padding: '3px 9px', borderRadius: '20px' }}>{t}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 800, color: hov ? c : '#0f0e2a', lineHeight: 1.35, marginBottom: '8px', transition: 'color .2s', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.title}</h3>
            <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.7, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f3ff', paddingTop: '11px', fontSize: '11px', color: '#bbb' }}>
              <span style={{ fontWeight: 600, color: '#888' }}>{post.author?.split(' ').slice(-1)[0]}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ─── SSS ─── */
function FaqItem({ q, a, delay }: any) {
  const [open, setOpen] = useState(false)
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{
      background: '#fff', borderRadius: '16px', border: open ? '2px solid #D15398' : '1.5px solid #f0ecf9',
      marginBottom: '12px', overflow: 'hidden', transition: 'all .3s', transitionDelay: `${delay}s`,
      transform: visible ? 'translateY(0)' : 'translateY(16px)', opacity: visible ? 1 : 0,
      boxShadow: open ? '0 8px 24px rgba(209,83,152,.12)' : 'none'
    }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', gap: '16px' }}>
        <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '16px', fontWeight: 700, color: '#0f0e2a' }}>{q}</span>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0, background: open ? '#D15398' : '#f8f6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: open ? '#fff' : '#D15398', transition: 'all .3s', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </button>
      {open && <div style={{ padding: '0 22px 18px', fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{a}</div>}
    </div>
  )
}

/* ─── Section Title ─── */
function SectionTitle({ eyebrow, title, sub, left = false }: any) {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{ textAlign: left ? 'left' : 'center', maxWidth: left ? 'none' : '600px', margin: left ? '0' : '0 auto', transition: 'all .6s', transform: visible ? 'translateY(0)' : 'translateY(20px)', opacity: visible ? 1 : 0 }}>
      <div style={{ fontSize: '11px', fontWeight: 800, color: '#D15398', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '12px' }}>{eyebrow}</div>
      <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 900, color: '#0f0e2a', lineHeight: 1.2, marginBottom: '14px', letterSpacing: '-0.5px' }}>{title}</h2>
      {sub && <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.7 }}>{sub}</p>}
    </div>
  )
}

/* ─── About Card ─── */
function AboutCard() {
  const { ref, visible } = useInView()
  return (
    <div ref={ref} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: '24px', padding: '36px', transition: 'all .7s', transform: visible ? 'translateX(0)' : 'translateX(-30px)', opacity: visible ? 1 : 0 }}>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 20px', background: 'linear-gradient(135deg,#D15398,#D870AF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>👩‍⚕️</div>
      <div style={{ textAlign: 'center' }}>
        {[{ val: 10, suf: '+', label: 'Yıl Deneyim' }, { val: 500, suf: '+', label: 'Hasta' }, { val: 98, suf: '%', label: 'Memnuniyet' }].map(({ val, suf, label }) => (
          <div key={label} style={{ display: 'inline-block', margin: '0 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '28px', fontWeight: 900, color: '#fff' }}>{val}{suf}</div>
            <div style={{ fontSize: '11px', color: '#b8b5d8' }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {['ISUOG Üyesi', 'FMF Fellowship', 'Harvard Observer'].map(tag => (
          <span key={tag} style={{ fontSize: '11px', fontWeight: 700, color: '#D15398', background: 'rgba(209,83,152,.15)', border: '1px solid rgba(209,83,152,.3)', padding: '4px 12px', borderRadius: '20px' }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   ANA SAYFA
══════════════════════════════════════════════════════ */
export default function HomePage({ posts }: { posts: any[] }) {
  const [heroVisible, setHeroVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const featuredPosts = posts.slice(0, 3)

  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif' }}>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .trimester-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header style={{
        background: scrollY > 20 ? 'rgba(255,255,255,.95)' : '#fff',
        borderBottom: '1px solid #f0edf8', padding: '0 24px', height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
        backdropFilter: scrollY > 20 ? 'blur(12px)' : 'none', transition: 'all .3s',
        boxShadow: scrollY > 20 ? '0 2px 20px rgba(0,0,0,.06)' : 'none'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,#1B1B45,#D15398)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🤰</div>
          <div>
            <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', lineHeight: 1.1 }}>Fetal <span style={{ color: '#D15398' }}>Uzman</span></div>
            <div style={{ fontSize: '9px', color: '#aaa', letterSpacing: '0.5px' }}>Gebelikte Güvenli Takip</div>
          </div>
        </Link>
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {[['/', 'Ana Sayfa'], ['/blog', 'Blog'], ['/hizmetler', 'Hizmetler'], ['/danismanlik', 'Danışmanlık'], ['#sss', 'SSS']].map(([href, label]) => (
            <Link key={href} href={href} style={{ fontSize: '14px', color: '#555', textDecoration: 'none', padding: '7px 14px', borderRadius: '22px', transition: 'all .2s', fontWeight: 500 }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#D15398'; (e.target as HTMLElement).style.background = '#fdf0f7' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#555'; (e.target as HTMLElement).style.background = 'transparent' }}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/danismanlik" style={{ background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontSize: '14px', fontWeight: 700, padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 4px 18px rgba(209,83,152,.4)', whiteSpace: 'nowrap' }}>
          💬 Randevu Al
        </Link>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(130deg,#0f0e2a 0%,#1e1458 35%,#2e195e 60%,#180f3a 100%)', padding: '80px 24px 90px', position: 'relative', overflow: 'hidden' }}>
        {/* Arka plan görsel */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&auto=format&fit=crop&q=40" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,14,42,0.5) 0%, rgba(15,14,42,0.95) 100%)' }} />
        </div>
        {/* Dekoratif daireler */}
        {[{ size: 500, x: '70%', y: '-20%', op: 0.08 }, { size: 300, x: '85%', y: '60%', op: 0.06 }, { size: 200, x: '10%', y: '70%', op: 0.05 }].map((c, i) => (
          <div key={i} style={{ position: 'absolute', width: c.size, height: c.size, borderRadius: '50%', border: '1px solid rgba(209,83,152,.3)', left: c.x, top: c.y, opacity: c.op, animation: `pulse ${3 + i}s ease-in-out infinite`, pointerEvents: 'none' }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 75% 50%,rgba(216,112,175,.2) 0%,transparent 60%)', pointerEvents: 'none' }} />

        <div className="hero-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,.2)', borderRadius: '30px', padding: '8px 18px', fontSize: '13px', color: '#b8b5d8', marginBottom: '28px', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(-16px)', transition: 'all .6s ease' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D15398', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Türkiye'nin Fetal Tıp Platformu
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px,4.5vw,58px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1.5px', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all .7s ease .1s' }}>
              Gebeliğinizde<br />
              <Typewriter words={['doğru bilgiye', 'uzman desteğe', 'güvenli takibe', 'huzura']} />
              <br />ulaşın
            </h1>
            <p style={{ fontSize: '17px', color: '#b8b5d8', lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all .7s ease .2s' }}>
              Gebelik takibi, anomali taraması ve risk yönetimi hakkında kanıta dayalı, anlaşılır bilgi platformu.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'all .7s ease .3s' }}>
              <Link href="/blog" style={{ background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontSize: '15px', fontWeight: 700, padding: '15px 28px', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 8px 28px rgba(209,83,152,.5)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>📚 Blog Yazılarını Oku</Link>
              <Link href="/danismanlik" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', fontSize: '15px', fontWeight: 600, border: '1.5px solid rgba(255,255,255,.25)', padding: '15px 28px', borderRadius: '30px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>💬 Randevu Al</Link>
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap', opacity: heroVisible ? 1 : 0, transition: 'all .7s ease .4s' }}>
              {[{ icon: '🎓', text: 'FMF Fellowship 2025' }, { icon: '🔬', text: 'Kanıta Dayalı' }, { icon: '🔒', text: 'Güvenli Platform' }].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#b8b5d8' }}><span style={{ fontSize: '16px' }}>{icon}</span>{text}</div>
              ))}
            </div>
          </div>

          {/* Hero kart */}
          <div className="hero-card" style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '24px', padding: '32px 28px', backdropFilter: 'blur(12px)', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateX(0)' : 'translateX(40px)', transition: 'all .8s ease .2s' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '48px', animation: 'float 4s ease-in-out infinite' }}>🤰</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#fff', marginTop: '12px' }}>Fetal Uzman</div>
              <div style={{ fontSize: '12px', color: '#b8b5d8', marginTop: '4px' }}>Gebelikte güvenli takip</div>
            </div>
            <div style={{ height: '1px', background: 'rgba(255,255,255,.1)', marginBottom: '16px' }} />
            {[{ icon: '🤰', label: 'Gebelik Takibi', desc: 'Haftalık rehberler' }, { icon: '🔬', label: 'Anomali Taraması', desc: 'Uzman bilgisi' }, { icon: '⚠️', label: 'Risk Yönetimi', desc: 'Erken müdahale' }, { icon: '💬', label: 'Danışmanlık', desc: 'Online görüşme' }].map(({ icon, label, desc }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.06)', cursor: 'pointer' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(209,83,152,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{label}</div>
                  <div style={{ fontSize: '11px', color: '#b8b5d8' }}>{desc}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,.3)' }}>›</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAYAÇLAR ── */}
      <section style={{ background: '#0f0e2a', padding: '40px 24px' }}>
        <div className="stats-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
          {[{ val: 500, suf: '+', label: 'Mutlu Anne Adayı', icon: '🤰' }, { val: 2025, suf: '', label: 'Fellowship Başlangıcı', icon: '🎓' }, { val: 50, suf: '+', label: 'Uzman Makale', icon: '📝' }, { val: 98, suf: '%', label: 'Memnuniyet Oranı', icon: '⭐' }].map(({ val, suf, label, icon }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '36px', fontWeight: 900, color: '#fff', lineHeight: 1 }}><Counter target={val} suffix={suf} /></div>
              <div style={{ fontSize: '12px', color: '#b8b5d8', marginTop: '6px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GÖRSEL BANNER ── */}
      <section style={{ padding: '60px 24px 0', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ borderRadius: '28px', overflow: 'hidden', position: 'relative', height: '280px' }}>
          <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&auto=format&fit=crop&q=80" alt="Online danışmanlık" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,14,42,0.92) 45%, transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px' }}>
            <p style={{ color: '#D15398', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Neden Online Danışmanlık?</p>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: '#fff', maxWidth: '420px', lineHeight: 1.2, marginBottom: '14px' }}>Evinizin konforunda uzman görüşü</h3>
            <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '15px', maxWidth: '340px', lineHeight: 1.7 }}>Ultrason sonuçlarınızı, test raporlarınızı paylaşın — birlikte değerlendirelim.</p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/danismanlik" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontSize: '14px', fontWeight: 700, padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(209,83,152,.5)' }}>Randevu Al →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HİZMETLER ── */}
      <section id="hizmetler" style={{ padding: '80px 24px', background: '#f8f6ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionTitle eyebrow="Hizmetlerimiz" title="Size Nasıl Yardımcı Olabiliriz?" sub="Gebeliğinizin her aşamasında yanınızdayız" />
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              { icon: '🗓️', title: 'Haftalık Gebelik Takibi', href: '/hizmetler/haftalik-gebelik-takibi', color: '#D15398', delay: 0, desc: '1. haftadan 40. haftaya her haftanın rehberi. Bebeğinizin gelişimi, anne değişimleri ve yapılacaklar.' },
              { icon: '🔬', title: 'Anomali Taraması', href: '/hizmetler/anomali-taramasi', color: '#8b5cf6', delay: 0.1, desc: 'NT ölçümü, kombine test, ayrıntılı ultrasonografi ve genetik taramalar hakkında kapsamlı bilgiler.' },
              { icon: '⚠️', title: 'Yüksek Riskli Gebelik', href: '/hizmetler/yuksek-riskli-gebelik', color: '#f97316', delay: 0.2, desc: 'Preeklampsi, gestasyonel diyabet, erken doğum riski ve diğer komplikasyonlar için güncel kılavuzlar.' },
              { icon: '📊', title: 'Fetal Büyüme Takibi', href: '/hizmetler/fetal-buyume-takibi', color: '#22c55e', delay: 0.3, desc: 'Doppler ultrasonografi, biyometri ölçümleri ve fetal büyüme kısıtlılığı yönetimi.' },
              { icon: '🧬', title: 'Genetik Danışmanlık', href: '/hizmetler/genetik-danismanlik', color: '#3b82f6', delay: 0.4, desc: 'NIPT, amniyosentez, CVS gibi prenatal genetik testler ve sonuçların yorumlanması.' },
              { icon: '💬', title: 'Online Danışmanlık', href: '/danismanlik', color: '#ec4899', delay: 0.5, desc: 'WhatsApp veya video görüşme ile uzman görüşü. Randevu sistemi ve esnek saatler.' },
            ].map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── TRİMESTER REHBERİ ── */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionTitle eyebrow="Haftalık Rehber" title="Gebeliğinizin Hangi Haftasındasınız?" sub="Her haftanın rehberini okuyun, süreci anlayın" />
          <div className="trimester-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              { label: '1-12. Hafta', sub: 'İlk Trimester', color: '#D15398', bg: '#fdf0f7', desc: 'Döllenme, implantasyon, kalp atışı, NT taraması', icon: '🌱' },
              { label: '13-27. Hafta', sub: 'İkinci Trimester', color: '#8b5cf6', bg: '#f3eeff', desc: 'Anomali taraması, cinsiyet, ilk hareketler, GDM testi', icon: '🌸' },
              { label: '28-40. Hafta', sub: 'Üçüncü Trimester', color: '#f97316', bg: '#fff7ed', desc: 'Doğum hazırlığı, NST, GBS testi, doğum belirtileri', icon: '🌟' },
            ].map((item) => {
              const { ref, visible } = useInView()
              return (
                <div key={item.label} ref={ref} style={{ background: item.bg, borderRadius: '20px', border: `2px solid ${item.color}22`, padding: '28px', transition: 'all .5s', transform: visible ? 'translateY(0)' : 'translateY(24px)', opacity: visible ? 1 : 0 }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: item.color, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.sub}</div>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7, marginBottom: '16px' }}>{item.desc}</p>
                  <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: item.color, textDecoration: 'none', background: '#fff', border: `1.5px solid ${item.color}33`, padding: '8px 16px', borderRadius: '20px' }}>Rehberleri Oku →</Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SON YAZILAR ── */}
      <section style={{ padding: '80px 24px', background: '#f8f6ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <SectionTitle eyebrow="Blog" title="Son Yazılar" sub="Kanıta dayalı, anlaşılır gebelik bilgisi" left />
            <Link href="/blog" style={{ fontSize: '14px', fontWeight: 700, color: '#D15398', textDecoration: 'none', border: '1.5px solid #D15398', padding: '10px 22px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>Tümünü Gör →</Link>
          </div>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {featuredPosts.map((p, i) => <BlogCard key={p.slug} post={p} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA ── */}
      <section id="hakkimizda" style={{ padding: '80px 24px', background: 'linear-gradient(130deg,#0f0e2a 0%,#1e1458 50%,#2e195e 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Arka plan görsel */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1200&auto=format&fit=crop&q=40" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 80% at 80% 50%,rgba(216,112,175,.15) 0%,transparent 60%)' }} />
        </div>
        <div className="two-col" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <AboutCard />
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#D15398', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Hakkımda</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px,3vw,38px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>Dr. Mervenur Kement</h2>
            <p style={{ fontSize: '15px', color: '#b8b5d8', lineHeight: 1.85, marginBottom: '16px' }}>
              Kadın Hastalıkları ve Doğum Uzmanıyım. Uzmanlığımı Ankara Bilkent Şehir Hastanesi'nde tamamladım. 2020 yılında Harvard Medical School bünyesindeki Brigham and Women's Hospital'da yüksek riskli ultrason ve maternal-fetal tıp gözlem programına katıldım.
            </p>
            <p style={{ fontSize: '15px', color: '#b8b5d8', lineHeight: 1.85, marginBottom: '32px' }}>
              2025 yılında King's College London'da Prof. Kypros Nicolaides liderliğindeki FMF Fetal Medicine Fellowship programına başladım. 3 çocuk annesi olarak hem tıbbi hem kişisel deneyimimi hastalarımla paylaşıyorum.
            </p>
            {[{ icon: '🇬🇧', text: "FMF Fellowship — King's College London, 2025" }, { icon: '🇺🇸', text: 'Harvard Medical School Observer, 2020' }, { icon: '🏥', text: 'Uzmanlık — Ankara Bilkent Şehir Hastanesi, 2021' }].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '14px', color: '#b8b5d8' }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YORUMLAR ── */}
      <section style={{ padding: '80px 24px', background: '#f8f6ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionTitle eyebrow="Hasta Yorumları" title="Anneler Ne Diyor?" sub="Gerçek deneyimler, gerçek yorumlar" />
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginTop: '48px' }}>
            {[
              { text: 'NT taraması sonucumu çok endişeyle bekliyordum. Dr. Kement her şeyi çok net açıkladı, hem bilgi hem moral verdi.', name: 'Zeynep A.', week: '14. hafta danışmanlığı', delay: 0 },
              { text: 'Gestasyonel diyabet tanısı aldığımda ne yapacağımı bilemedim. Bu platform sayesinde hem hastalığı anladım hem de nasıl yönetmem gerektiğini öğrendim.', name: 'Fatma K.', week: '26. hafta danışmanlığı', delay: 0.1 },
              { text: 'Yüksek riskli gebeliğim vardı ve çok korkuyordum. Tüm sorularıma sabırla yanıt verildi. Şimdi sağlıklı bir bebeğim var!', name: 'Ayşe M.', week: '38. hafta, doğum sonrası', delay: 0.2 },
            ].map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section id="sss" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <SectionTitle eyebrow="SSS" title="Sık Sorulan Sorular" sub="Merak ettiğiniz her şey burada" />
          <div style={{ marginTop: '48px' }}>
            {[
              { q: 'Online danışmanlık nasıl çalışıyor?', a: 'WhatsApp veya web sitesi üzerinden randevu alıyorsunuz. Ödeme sonrası Google Meet üzerinden yüz yüze görüşme yapıyoruz.', delay: 0 },
              { q: 'NT taraması ne zaman yapılır?', a: '11. haftanın 0. günü ile 13. haftanın 6. günü arasında yapılır. Kombine test kapsamında PAPP-A ve serbest β-hCG kan testleri ile birlikte değerlendirilir.', delay: 0.05 },
              { q: 'Gestasyonel diyabet taraması zorunlu mu?', a: '24-28. haftalar arasında tüm gebelere 50 gram glukoz challenge testi önerilir. Yüksek risk grubunda daha erken tarama yapılabilir.', delay: 0.1 },
              { q: 'Aspirin ne zaman ve kimler kullanmalı?', a: 'Preeklampsi risk faktörleri olan gebelerde 11-16. haftalar arasında başlanan düşük doz aspirin preeklampsi riskini önemli ölçüde azaltır. Risk değerlendirmesi için doktorunuza danışın.', delay: 0.15 },
              { q: 'Bu platform tıbbi tavsiye veriyor mu?', a: 'Bu platform genel bilgilendirme amaçlıdır. Kişisel tıbbi tavsiye, tanı veya tedavi yerine geçmez. Kişiselleştirilmiş değerlendirme için danışmanlık hizmetimizden faydalanabilirsiniz.', delay: 0.2 },
            ].map(item => <FaqItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(130deg,#0f0e2a 0%,#1e1458 50%,#2e195e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(209,83,152,.2) 0%,transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '48px', marginBottom: '20px', animation: 'float 3s ease-in-out infinite' }}>🤰</div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 900, color: '#fff', marginBottom: '16px' }}>Gebeliğinizde Yalnız Değilsiniz</h2>
          <p style={{ fontSize: '16px', color: '#b8b5d8', lineHeight: 1.8, marginBottom: '36px' }}>Sorularınız mı var? Endişeleriniz mi var?<br />Uzman danışmanlıkla doğru bilgiye ulaşın.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/danismanlik" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontSize: '15px', fontWeight: 700, padding: '15px 32px', borderRadius: '30px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(209,83,152,.4)' }}>💬 Randevu Al</Link>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,.1)', color: '#fff', fontSize: '15px', fontWeight: 700, border: '1.5px solid rgba(255,255,255,.25)', padding: '15px 32px', borderRadius: '30px', textDecoration: 'none' }}>📚 Blog Yazılarını Oku</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#07071a', padding: '56px 24px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,.06)', marginBottom: '28px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg,#1B1B45,#D15398)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🤰</div>
                <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '16px', fontWeight: 800, color: '#fff' }}>Fetal <span style={{ color: '#D15398' }}>Uzman</span></div>
              </div>
              <p style={{ fontSize: '13px', color: '#6e6a98', lineHeight: 1.75, maxWidth: '240px', marginBottom: '20px' }}>Gebelik sürecinde kanıta dayalı, anlaşılır bilgi ve uzman danışmanlığı sunan güvenilir platform.</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[{ href: 'https://instagram.com/fetaluzman', icon: '📷' }, { href: 'mailto:gebelikdanismanim@gmail.com', icon: '✉️' }, { href: 'https://tiktok.com/@fetaluzman', icon: '🎵' }].map(s => (
                  <a key={s.href} href={s.href} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', textDecoration: 'none' }}>{s.icon}</a>
                ))}
              </div>
            </div>
            {[
              { title: 'Platform', links: [['/', 'Ana Sayfa'], ['/blog', 'Blog'], ['#hakkimizda', 'Hakkımızda'], ['#sss', 'SSS']] },
              { title: 'Hizmetler', links: [['/danismanlik', 'Online Danışmanlık'], ['/hizmetler', 'Gebelik Takibi'], ['/hizmetler', 'Anomali Taraması'], ['/hizmetler', 'Risk Yönetimi']] },
              { title: 'İletişim', links: [['mailto:gebelikdanismanim@gmail.com', 'E-posta'], ['https://instagram.com/fetaluzman', 'Instagram'], ['https://tiktok.com/@fetaluzman', 'TikTok'], ['/danismanlik', 'Randevu Al']] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px' }}>{col.title}</h4>
                {col.links.map(([href, label]) => (
                  <a key={label} href={href} style={{ display: 'block', fontSize: '13px', color: '#6e6a98', textDecoration: 'none', marginBottom: '10px' }}>{label}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: '#3d3a6a' }}>© 2025 FetalUzman · Dr. Mervenur Kement</span>
            <span style={{ fontSize: '11px', color: '#3d3a6a', maxWidth: '400px', textAlign: 'right', lineHeight: 1.5 }}>Bu platform genel bilgilendirme amaçlıdır. Tıbbi tanı veya tedavi yerine geçmez.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

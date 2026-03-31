'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [threshold])
  return { ref, v }
}

export function Fade({ children, delay = 0, dir = 'up' }: any) {
  const { ref, v } = useInView()
  const transforms: any = { up: 'translateY(32px)', left: 'translateX(-32px)', right: 'translateX(32px)', scale: 'scale(0.95)' }
  return (
    <div ref={ref} style={{
      transition: `all 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      opacity: v ? 1 : 0,
      transform: v ? 'none' : transforms[dir] || transforms.up
    }}>{children}</div>
  )
}

export function Callout({ type, title, children }: any) {
  const cfg: any = {
    info:    { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: 'ℹ️' },
    warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', icon: '⚠️' },
    success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' },
    danger:  { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🚨' },
  }
  const c = cfg[type] || cfg.info
  return (
    <div style={{ margin: '20px 0', padding: '18px 22px', borderRadius: '16px', background: c.bg, border: `1.5px solid ${c.border}` }}>
      <div style={{ fontWeight: 800, color: c.text, marginBottom: '8px', fontSize: '15px' }}>{c.icon} {title}</div>
      <div style={{ fontSize: '14px', color: c.text, lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}

export function InfoCard({ icon, title, items, color, delay = 0 }: any) {
  const { ref, v } = useInView()
  return (
    <div ref={ref} style={{
      background: '#fff', borderRadius: '20px',
      border: `2px solid ${color}22`, padding: '28px',
      transition: `all 0.6s ease ${delay}s`,
      opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(24px)',
      boxShadow: `0 8px 32px ${color}11`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>{icon}</div>
        <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', margin: 0 }}>{title}</h3>
      </div>
      <ul style={{ margin: 0, paddingLeft: '18px' }}>
        {items.map((item: string, i: number) => (
          <li key={i} style={{ fontSize: '14px', color: '#555', lineHeight: 1.85, marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}

export function WeekBadge({ week, title, desc, color }: any) {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: '20px', borderRadius: '18px', cursor: 'default',
        background: h ? `${color}12` : '#fafafa',
        border: `2px solid ${h ? color : '#f0edf8'}`,
        transition: 'all .25s',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h ? `0 10px 28px ${color}22` : 'none'
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: h ? color : `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, color: h ? '#fff' : color, transition: 'all .25s', flexShrink: 0 }}>{week}. Hf</div>
        <span style={{ fontWeight: 800, fontSize: '15px', color: '#0f0e2a' }}>{title}</span>
      </div>
      <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.75, margin: 0 }}>{desc}</p>
    </div>
  )
}

export function SectionTitle({ title, sub }: any) {
  return (
    <Fade>
      <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 900, color: '#0f0e2a', marginBottom: '8px', letterSpacing: '-0.5px' }}>{title}</h2>
      {sub && <p style={{ color: '#888', fontSize: '15px', marginBottom: '32px', lineHeight: 1.6 }}>{sub}</p>}
    </Fade>
  )
}

interface WeekNav { label: string; href: string; active?: boolean }
interface WeekLayoutProps {
  trimester: string
  weekRange: string
  emoji: string
  subtitle: string
  color: string
  navItems: WeekNav[]
  prevHref?: string
  nextHref?: string
  nextLabel?: string
  children: React.ReactNode
}

export default function WeekLayout({ trimester, weekRange, emoji, subtitle, color, navItems, prevHref, nextHref, nextLabel, children }: WeekLayoutProps) {
  const [heroV, setHeroV] = useState(false)
  useEffect(() => { setTimeout(() => setHeroV(true), 80) }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes pulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
        *{box-sizing:border-box}
        table{width:100%;border-collapse:collapse;margin:16px 0;font-size:14px}
        th{background:#f8f6ff;padding:10px 14px;text-align:left;font-weight:700;color:#0f0e2a;border-bottom:2px solid #e8e4f8}
        td{padding:10px 14px;border-bottom:1px solid #f0edf8;color:#555}
        ul{padding-left:20px;margin:10px 0}
        li{margin-bottom:6px;line-height:1.75}
        p{margin-bottom:14px;line-height:1.8}
        strong{color:#0f0e2a}
      `}</style>

      {/* HEADER */}
      <header style={{ background: '#fff', borderBottom: '1px solid #f0edf8', padding: '0 32px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,.04)' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', textDecoration: 'none' }}>
          Fetal <span style={{ color: '#D15398' }}>Uzman</span>
        </Link>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/blog" style={{ fontSize: '13px', color: '#666', textDecoration: 'none', padding: '7px 14px', borderRadius: '20px' }}>Blog</Link>
          {nextHref && (
            <Link href={nextHref} style={{ fontSize: '13px', color: color, textDecoration: 'none', padding: '8px 16px', borderRadius: '20px', border: `1.5px solid ${color}`, fontWeight: 700 }}>
              {nextLabel || 'Sonraki'} →
            </Link>
          )}
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg,#0f0e2a 0%,#1e1458 45%,${color}55 100%)`, padding: '72px 32px 80px', position: 'relative', overflow: 'hidden' }}>
        {[{ s: 500, x: '65%', y: '-30%' }, { s: 300, x: '80%', y: '50%' }, { s: 200, x: '5%', y: '60%' }].map((c, i) => (
          <div key={i} style={{ position: 'absolute', width: c.s, height: c.s, borderRadius: '50%', border: `1px solid ${color}44`, left: c.x, top: c.y, animation: `pulse ${3 + i}s ease-in-out infinite`, pointerEvents: 'none' }} />
        ))}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${color}30`, border: `1px solid ${color}50`, borderRadius: '30px', padding: '6px 18px', fontSize: '12px', color: '#f0d0e8', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '20px', opacity: heroV ? 1 : 0, transition: 'all .6s' }}>
              🌱 {trimester}
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(38px,5vw,60px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: '16px', letterSpacing: '-1.5px', opacity: heroV ? 1 : 0, transform: heroV ? 'none' : 'translateY(24px)', transition: 'all .7s .1s' }}>
              {weekRange}. Hafta
            </h1>
            <p style={{ fontSize: '17px', color: '#b8b5d8', lineHeight: 1.75, marginBottom: '0', maxWidth: '500px', opacity: heroV ? 1 : 0, transition: 'all .7s .2s' }}>{subtitle}</p>
          </div>
          <div style={{ fontSize: '110px', animation: 'float 4s ease-in-out infinite', opacity: heroV ? 1 : 0, transition: 'opacity .8s .2s', textAlign: 'center' as const }}>{emoji}</div>
        </div>

        {/* Nav */}
        <div style={{ maxWidth: '900px', margin: '36px auto 0', display: 'flex', gap: '8px', flexWrap: 'wrap', opacity: heroV ? 1 : 0, transition: 'all .7s .3s' }}>
          {navItems.map(item => (
            <Link key={item.label} href={item.href} style={{
              padding: '8px 18px', borderRadius: '22px', textDecoration: 'none', fontSize: '13px', fontWeight: 700,
              background: item.active ? color : 'rgba(255,255,255,.1)',
              color: item.active ? '#fff' : 'rgba(255,255,255,.65)',
              border: item.active ? 'none' : '1px solid rgba(255,255,255,.15)',
              transition: 'all .2s'
            }}>{item.label}</Link>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 80px' }}>
        {children}

        {/* Next */}
        {nextHref && (
          <Fade delay={0.1}>
            <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'flex-end' }}>
              <Link href={nextHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: `linear-gradient(135deg,${color},${color}bb)`, color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 32px', borderRadius: '30px', textDecoration: 'none', boxShadow: `0 8px 24px ${color}44` }}>
                {nextLabel} →
              </Link>
            </div>
          </Fade>
        )}
      </div>

      <footer style={{ background: '#0f0e2a', padding: '32px', textAlign: 'center' as const }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>Fetal <span style={{ color: '#D15398' }}>Uzman</span></Link>
        <p style={{ fontSize: '12px', color: '#3d3a6a', marginTop: '8px', margin: '8px 0 0' }}>Bu sayfa genel bilgilendirme amaçlıdır. Tıbbi tanı veya tedavi yerine geçmez. · Kaynaklar: ACOG, ISUOG, WHO, FMF</p>
      </footer>
    </div>
  )
}

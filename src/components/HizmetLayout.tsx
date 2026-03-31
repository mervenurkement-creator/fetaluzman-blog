import Link from 'next/link'

const SERVICES = [
  { slug: 'haftalik-gebelik-takibi', label: 'Haftalık Gebelik Takibi', icon: '🗓️' },
  { slug: 'anomali-taramasi', label: 'Anomali Taraması', icon: '🔬' },
  { slug: 'yuksek-riskli-gebelik', label: 'Yüksek Riskli Gebelik', icon: '⚠️' },
  { slug: 'fetal-buyume-takibi', label: 'Fetal Büyüme Takibi', icon: '📊' },
  { slug: 'genetik-danismanlik', label: 'Genetik Danışmanlık', icon: '🧬' },
  { slug: 'online-danismanlik', label: 'Online Danışmanlık', icon: '💬' },
]

export default function HizmetLayout({ title, subtitle, icon, color, category, sourceText, children }: any) {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #f0edf8', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', textDecoration: 'none' }}>
          Fetal <span style={{ color: '#D15398' }}>Uzman</span>
        </Link>
        <nav style={{ display: 'flex', gap: '4px' }}>
          {([['/', 'Ana Sayfa'], ['/blog', 'Blog'], ['/#hizmetler', 'Hizmetler']] as [string,string][]).map(([href, label]) => (
            <Link key={href} href={href} style={{ fontSize: '14px', color: '#555', textDecoration: 'none', padding: '7px 14px', borderRadius: '22px' }}>{label}</Link>
          ))}
        </nav>
        <Link href="/#danismanlik" style={{ background: '#D15398', color: '#fff', fontSize: '14px', fontWeight: 700, padding: '10px 22px', borderRadius: '30px', textDecoration: 'none' }}>💬 Danışmanlık</Link>
      </header>

      <div style={{ background: `linear-gradient(130deg,#0f0e2a 0%,#1e1458 40%,${color}33 100%)`, padding: '64px 32px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 80% at 80% 50%,${color}22 0%,transparent 65%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Link href="/" style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Ana Sayfa</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,.7)' }}>{title}</span>
          </div>
          <div style={{ fontSize: '56px', marginBottom: '16px' }}>{icon}</div>
          <div style={{ fontSize: '12px', fontWeight: 800, color: color, letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: '12px' }}>{category}</div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '-1px' }}>{title}</h1>
          <p style={{ fontSize: '17px', color: '#b8b5d8', lineHeight: 1.7, marginBottom: '20px', maxWidth: '600px' }}>{subtitle}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,.5)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '20px', padding: '6px 14px' }}>
            📚 {sourceText}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>
        <main style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '48px' }}>
          <style>{`
            table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 15px; }
            th { background: #f8f6ff; padding: 10px 14px; text-align: left; font-weight: 700; color: #0f0e2a; border-bottom: 2px solid #e8e4f8; }
            td { padding: 10px 14px; border-bottom: 1px solid #f0edf8; color: #555; }
            ul { padding-left: 20px; margin: 12px 0; }
            li { margin-bottom: 8px; line-height: 1.7; }
            p { margin-bottom: 14px; }
            strong { color: #0f0e2a; }
          `}</style>
          {children}
        </main>

        <aside style={{ position: 'sticky', top: '88px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #f0ecf9', padding: '20px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase' as const, marginBottom: '14px' }}>Diğer Hizmetler</h3>
            {SERVICES.filter(s => s.label !== title).map(s => (
              <Link key={s.slug} href={`/hizmetler/${s.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f5f3ff', textDecoration: 'none' }}>
                <span style={{ fontSize: '18px' }}>{s.icon}</span>
                <span style={{ fontSize: '13px', color: '#555', fontWeight: 500 }}>{s.label}</span>
              </Link>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg,#0f0e2a,#2e195e)', borderRadius: '16px', padding: '24px', textAlign: 'center' as const }}>
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>💬</div>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Sorunuz mu var?</h3>
            <p style={{ fontSize: '13px', color: '#b8b5d8', lineHeight: 1.6, marginBottom: '16px' }}>Online danışmanlık ile uzman görüşü alın</p>
            <a href="mailto:dr.mervenur@fetaluzman.com" style={{ display: 'block', background: '#D15398', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '12px', borderRadius: '12px', textDecoration: 'none' }}>
              📧 E-posta Gönder
            </a>
          </div>
        </aside>
      </div>

      <footer style={{ background: '#0f0e2a', padding: '32px', textAlign: 'center' as const }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>
          Fetal <span style={{ color: '#D15398' }}>Uzman</span>
        </Link>
        <p style={{ fontSize: '12px', color: '#3d3a6a', marginTop: '10px' }}>© 2026 FetalUzman · Bu sayfa genel bilgilendirme amaçlıdır.</p>
      </footer>
    </div>
  )
}

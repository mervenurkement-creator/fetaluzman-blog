export const metadata = {
  title: 'Online Danışmanlık — Yakında | Fetal Uzman',
  description: 'Online danışmanlık hizmeti çok yakında başlıyor.',
}

import Link from 'next/link'

export default function DanismanlikPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #f0edf8', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', textDecoration: 'none' }}>
          Fetal <span style={{ color: '#D15398' }}>Uzman</span>
        </Link>
        <Link href="/" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', padding: '7px 14px', borderRadius: '22px', border: '1px solid #e5e0f5' }}>
          ← Ana Sayfa
        </Link>
      </header>

      {/* İçerik */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>

          {/* Animasyonlu ikon */}
          <div style={{ fontSize: '80px', marginBottom: '24px', animation: 'float 3s ease-in-out infinite' }}>
            🩺
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(209,83,152,.1)', color: '#D15398', border: '1px solid rgba(209,83,152,.3)', borderRadius: '30px', padding: '6px 18px', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Çok Yakında
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: '#0f0e2a', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-1px' }}>
            Online Danışmanlık<br />
            <span style={{ color: '#D15398' }}>Hizmete Giriyor</span>
          </h1>

          <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Gebeliğinizle ilgili tüm sorularınız için uzman danışmanlık hizmeti çok yakında başlıyor.
            Bildirim almak için e-posta adresinizi bırakın.
          </p>

          {/* E-posta formu */}
          <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '32px', marginBottom: '32px', boxShadow: '0 8px 32px rgba(209,83,152,.08)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', marginBottom: '8px' }}>
              📬 Beni Haberdar Et
            </h3>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>
              Hizmet başladığında size e-posta gönderelim.
            </p>
            <form action={`mailto:dr.mervenur@fetaluzman.com`} method="get" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input
                type="email"
                name="subject"
                placeholder="E-posta adresiniz"
                required
                style={{ flex: 1, minWidth: '200px', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e0f5', fontSize: '15px', outline: 'none', fontFamily: 'system-ui, sans-serif' }}
              />
              <button type="submit" style={{ background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '12px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Gönder
              </button>
            </form>
          </div>

          {/* Mevcut iletişim */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:dr.mervenur@fetaluzman.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0f0e2a', fontWeight: 600, fontSize: '14px', padding: '12px 22px', borderRadius: '30px', textDecoration: 'none', border: '1.5px solid #f0ecf9', boxShadow: '0 4px 16px rgba(0,0,0,.05)' }}>
              📧 dr.mervenur@fetaluzman.com
            </a>
            <a href="https://instagram.com/fetaluzman" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff', fontWeight: 600, fontSize: '14px', padding: '12px 22px', borderRadius: '30px', textDecoration: 'none' }}>
              📷 @fetaluzman
            </a>
          </div>

          {/* Geri dön */}
          <div style={{ marginTop: '40px' }}>
            <Link href="/" style={{ fontSize: '14px', color: '#aaa', textDecoration: 'none' }}>
              ← Ana sayfaya dön
            </Link>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>

      <footer style={{ background: '#0f0e2a', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#3d3a6a', margin: 0 }}>© 2026 FetalUzman · Tüm hakları saklıdır</p>
      </footer>
    </div>
  )
}

export const metadata = {
  title: 'Randevu ve Değerlendirme | Fetal Uzman',
  description: 'Gebeliğinizle ilgili sorularınız için bize ulaşın. Online danışmanlık hizmeti çok yakında.',
}
import Link from 'next/link'

export default function DanismanlikPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f6ff', fontFamily: 'system-ui, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>

      <header style={{ background: '#fff', borderBottom: '1px solid #f0edf8', padding: '0 32px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', textDecoration: 'none' }}>
          Fetal <span style={{ color: '#D15398' }}>Uzman</span>
        </Link>
        <Link href="/" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', padding: '7px 14px', borderRadius: '22px', border: '1px solid #e5e0f5' }}>
          ← Ana Sayfa
        </Link>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
        <div style={{ maxWidth: '600px', textAlign: 'center', width: '100%' }}>

          <div style={{ fontSize: '80px', marginBottom: '24px', animation: 'float 3s ease-in-out infinite' }}>🩺</div>

          <div style={{ display: 'inline-block', background: 'rgba(209,83,152,.1)', color: '#D15398', border: '1px solid rgba(209,83,152,.3)', borderRadius: '30px', padding: '6px 18px', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
            Çok Yakında
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px,5vw,48px)', fontWeight: 900, color: '#0f0e2a', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-1px' }}>
            Online Danışmanlık<br />
            <span style={{ color: '#D15398' }}>Yakında Hizmetinizde</span>
          </h1>

          <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.85, marginBottom: '40px' }}>
            Gebeliğinizle ilgili her sorunuz için yakında online randevu ve değerlendirme hizmetimiz başlıyor.
            Şu an için aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>

          {/* İletişim kartları */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
            <a href="mailto:gebelikdanismanim@gmail.com" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
              background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9',
              padding: '24px 16px', textDecoration: 'none',
              transition: 'all .2s', boxShadow: '0 4px 16px rgba(0,0,0,.04)'
            }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#fdf0f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>📧</div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f0e2a' }}>E-posta Gönder</div>
              <div style={{ fontSize: '12px', color: '#D15398', fontWeight: 600 }}>gebelikdanismanim<br />@gmail.com</div>
            </a>

            <a href="tel:+905444876393" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
              background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9',
              padding: '24px 16px', textDecoration: 'none',
              transition: 'all .2s', boxShadow: '0 4px 16px rgba(0,0,0,.04)'
            }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}>📞</div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f0e2a' }}>Bize Ulaşın</div>
              <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 600 }}>Randevu ve<br />değerlendirme için</div>
            </a>
          </div>

          {/* Instagram */}
          <a href="https://instagram.com/fetaluzman" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff',
            fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '30px',
            textDecoration: 'none', marginBottom: '32px',
            boxShadow: '0 6px 20px rgba(209,83,152,.3)'
          }}>
            📷 Instagram: @fetaluzman
          </a>

          {/* Bilgi bırak formu */}
          <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '28px', boxShadow: '0 8px 32px rgba(209,83,152,.06)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 800, color: '#0f0e2a', marginBottom: '8px' }}>
              📬 Hizmet Başladığında Haberdar Ol
            </h3>
            <p style={{ fontSize: '13px', color: '#888', marginBottom: '16px' }}>
              Online randevu sistemi kurulur kurulmaz size bildireceğiz.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input type="email" placeholder="E-posta adresiniz"
                style={{ flex: 1, minWidth: '200px', padding: '12px 16px', borderRadius: '12px', border: '1.5px solid #e5e0f5', fontSize: '14px', outline: 'none', fontFamily: 'system-ui, sans-serif' }} />
              <a href="mailto:gebelikdanismanim@gmail.com?subject=Bildirim%20Talebi&body=Merhaba%2C%20online%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hizmeti%20ba%C5%9Flad%C4%B1%C4%9F%C4%B1nda%20haberdar%20olmak%20istiyorum." style={{
                background: 'linear-gradient(135deg,#D15398,#D870AF)', color: '#fff',
                fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '12px',
                textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center'
              }}>Gönder</a>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/" style={{ fontSize: '14px', color: '#aaa', textDecoration: 'none' }}>← Ana sayfaya dön</Link>
          </div>
        </div>
      </main>

      <footer style={{ background: '#0f0e2a', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#3d3a6a', margin: 0 }}>© 2026 FetalUzman · Tüm hakları saklıdır</p>
      </footer>
    </div>
  )
}

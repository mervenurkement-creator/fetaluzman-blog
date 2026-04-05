export const metadata = {
  title: 'Online Danışmanlık | Fetal Uzman',
  description: 'Fetal tıp uzmanından online danışmanlık alın. Video görüşme, WhatsApp gebelik paketi ve daha fazlası.',
}
import Link from 'next/link'
import FaqSection from './FaqSection'

const checkSvg = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export default function DanismanlikPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: '#1B1B45' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeDown { from { opacity:0; transform:translateY(-16px) } to { opacity:1; transform:translateY(0) } }
        @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-8px) } }
        .dn-btn-outline { display:inline-flex; align-items:center; gap:8px; padding:14px 32px; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600; text-decoration:none; transition:all .35s cubic-bezier(.4,0,.2,1); border:2px solid #D15398; background:transparent; color:#D15398; cursor:pointer }
        .dn-btn-outline:hover { background:#D15398; color:#fff }
        .dn-btn-filled { display:inline-flex; align-items:center; gap:8px; padding:14px 32px; border-radius:50px; font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600; text-decoration:none; transition:all .35s cubic-bezier(.4,0,.2,1); border:none; background:linear-gradient(135deg,#D15398,#D870AF); color:#fff; cursor:pointer; box-shadow:0 4px 20px rgba(209,83,152,.3) }
        .dn-btn-filled:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(209,83,152,.4) }
        .dn-step-card { background:#fff; border-radius:16px; padding:40px 28px 36px; text-align:center; box-shadow:0 4px 32px rgba(27,27,69,.08); transition:all .35s cubic-bezier(.4,0,.2,1); position:relative; overflow:hidden }
        .dn-step-card:hover { transform:translateY(-6px); box-shadow:0 8px 48px rgba(27,27,69,.14) }
        .dn-price-card { background:#fff; border:2px solid #e8e8f0; border-radius:16px; padding:40px 28px; text-align:center; transition:all .35s cubic-bezier(.4,0,.2,1); position:relative }
        .dn-price-card:hover { transform:translateY(-4px); box-shadow:0 8px 48px rgba(27,27,69,.14) }
        .dn-price-card.featured { border-color:#D15398; box-shadow:0 0 60px rgba(209,83,152,.2) }
        .dn-benefit-item { background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.08); border-radius:10px; padding:32px 24px; backdrop-filter:blur(8px); transition:all .35s cubic-bezier(.4,0,.2,1) }
        .dn-benefit-item:hover { background:rgba(255,255,255,.1); transform:translateY(-3px) }
        .dn-faq-item { border-bottom:1px solid #e8e8f0 }
        .dn-faq-btn { width:100%; display:flex; align-items:center; justify-content:space-between; padding:20px 0; background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:16px; font-weight:600; color:#1B1B45; text-align:left; transition:color .3s }
        .dn-faq-btn:hover { color:#D15398 }
        .dn-faq-answer { max-height:0; overflow:hidden; transition:max-height .4s ease }
        .dn-faq-item.open .dn-faq-answer { max-height:300px }
        .dn-faq-item.open .dn-faq-chevron { transform:rotate(45deg) }
        @media (max-width:900px) {
          .dn-steps-grid { grid-template-columns:1fr !important }
          .dn-pricing-grid { grid-template-columns:1fr !important; max-width:400px !important }
          .dn-benefit-grid { grid-template-columns:1fr !important }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <section style={{
        background: 'linear-gradient(160deg, #1B1B45 0%, #2D2A5C 40%, #3a2d6b 70%, #1B1B45 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-50%', right: '-30%', width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(209,83,152,0.12) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-40%', left: '-20%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(216,112,175,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none'
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(209,83,152,0.15)', border: '1px solid rgba(209,83,152,0.3)',
          color: '#D870AF', fontSize: 13, fontWeight: 600, letterSpacing: 1.5,
          textTransform: 'uppercase' as const, padding: '8px 20px', borderRadius: 40, marginBottom: 28,
          animation: 'fadeDown 0.8s ease-out'
        }}>
          ● Online Danışmanlık
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700,
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: '#F3F3F9',
          lineHeight: 1.15, marginBottom: 20, animation: 'fadeDown 0.8s ease-out 0.1s both'
        }}>
          Uzman{' '}
          <span style={{
            background: 'linear-gradient(135deg, #D15398, #D870AF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Fetal Tıp</span>
          <br />Danışmanlığı
        </h1>

        <p style={{
          color: '#9e9eb8', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.65,
          animation: 'fadeDown 0.8s ease-out 0.2s both'
        }}>
          Gebeliğinizle ilgili endişelerinize uzaktan, güvenli ve kişiselleştirilmiş uzman desteği alın. Tüm süreç tamamen online gerçekleşir.
        </p>

        <a href="mailto:gebelikdanismanim@gmail.com?subject=Danışmanlık%20Talebi"
          className="dn-btn-filled"
          style={{ animation: 'fadeDown 0.8s ease-out 0.3s both' }}>
          Danışmanlık Başlat →
        </a>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section style={{ padding: '80px 24px', background: '#f7f7fb', textAlign: 'center' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#D15398', marginBottom: 14 }}>
            Nasıl Çalışır?
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#1B1B45', marginBottom: 16 }}>
            3 Kolay Adımda Danışmanlık
          </h2>
          <p style={{ color: '#6b6b8d', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.6 }}>
            Uzman görüşü almak artık çok kolay. Aşağıdaki adımları takip ederek online danışmanlık sürecinizi başlatın.
          </p>

          <div className="dn-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                num: '1', title: 'Paketinizi Seçin',
                desc: 'İhtiyacınıza uygun danışmanlık paketini belirleyin ve e-posta ile başvurun.',
                icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
              },
              {
                num: '2', title: 'Belgelerinizi Paylaşın',
                desc: 'Gebelik bilgilerinizi, ultrason raporlarınızı ve sorularınızı güvenli şekilde gönderin.',
                icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="m9 15 3-3 3 3"/></svg>
              },
              {
                num: '3', title: 'Uzman Görüşü Alın',
                desc: 'Google Meet üzerinden yüz yüze görüşme veya WhatsApp ile sürekli destek alın.',
                icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              }
            ].map((step) => (
              <div key={step.num} className="dn-step-card">
                <div style={{
                  width: 56, height: 56, margin: '0 auto 20px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.3rem',
                  color: '#fff', background: 'linear-gradient(135deg, #D15398, #D870AF)',
                  boxShadow: '0 4px 16px rgba(209,83,152,.3)'
                }}>
                  {step.num}
                </div>
                <div style={{ margin: '0 auto 16px' }}>{step.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#1B1B45', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: '#6b6b8d', fontSize: '0.92rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#D15398', marginBottom: 14 }}>
            Danışmanlık Ücretleri
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#1B1B45', marginBottom: 16 }}>
            Şeffaf Fiyatlandırma
          </h2>
          <p style={{ color: '#6b6b8d', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.6 }}>
            İhtiyacınıza uygun danışmanlık paketini seçin. Gizli maliyet yok.
          </p>

          <div className="dn-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1060, margin: '0 auto' }}>

            {/* Online Danışmanlık */}
            <div className="dn-price-card">
              <div style={{
                width: 52, height: 52, margin: '0 auto 16px', background: 'rgba(209,83,152,0.15)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 8-6 4 6 4V8Z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.3rem', color: '#1B1B45', marginBottom: 8 }}>
                Online Danışmanlık
              </h3>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '2.4rem', color: '#D15398', margin: '12px 0 4px' }}>
                ₺750
              </div>
              <div style={{ fontSize: '0.85rem', color: '#9e9eb8', marginBottom: 20 }}>tek seferlik ücret</div>
              <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 28, padding: 0 }}>
                {[
                  '30 dakika Google Meet görüşmesi',
                  'Ultrason ve tarama yorumlama',
                  'Kişiselleştirilmiş takip önerileri',
                  'Görüşme sonrası özet rapor'
                ].map((f) => (
                  <li key={f} style={{ padding: '8px 0', fontSize: '0.92rem', color: '#6b6b8d', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    {checkSvg} {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:gebelikdanismanim@gmail.com?subject=Online%20Danışmanlık%20Talebi&body=Merhaba%2C%0A%0AOnline%20danışmanlık%20(₺750)%20almak%20istiyorum.%0A%0AAdım:%0AGebelik%20haftası:%0ASorularım:" className="dn-btn-outline">
                Başvur
              </a>
            </div>

            {/* WhatsApp Aylık */}
            <div className="dn-price-card">
              <div style={{
                width: 52, height: 52, margin: '0 auto 16px', background: 'rgba(209,83,152,0.15)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.3rem', color: '#1B1B45', marginBottom: 8 }}>
                WhatsApp Gebelik Paketi
              </h3>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '2.4rem', color: '#D15398', margin: '12px 0 4px' }}>
                ₺3.000
              </div>
              <div style={{ fontSize: '0.85rem', color: '#9e9eb8', marginBottom: 20 }}>aylık</div>
              <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 28, padding: 0 }}>
                {[
                  'Sınırsız WhatsApp mesajlaşma',
                  'Aklınıza takılan her soruyu sorun',
                  'Ultrason fotoğrafı yorumlama',
                  'Mesai saatleri içinde hızlı yanıt'
                ].map((f) => (
                  <li key={f} style={{ padding: '8px 0', fontSize: '0.92rem', color: '#6b6b8d', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    {checkSvg} {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:gebelikdanismanim@gmail.com?subject=WhatsApp%20Aylık%20Paket%20Talebi&body=Merhaba%2C%0A%0AWhatsApp%20Aylık%20Gebelik%20Paketi%20(₺3.000%2Fay)%20almak%20istiyorum.%0A%0AAdım:%0AGebelik%20haftası:" className="dn-btn-outline">
                Başvur
              </a>
            </div>

            {/* Gebelik Boyunca */}
            <div className="dn-price-card featured">
              <div style={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #D15398, #D870AF)', color: '#fff',
                fontSize: 12, fontWeight: 700, letterSpacing: 1,
                textTransform: 'uppercase' as const, padding: '5px 18px', borderRadius: 20
              }}>
                En Avantajlı
              </div>
              <div style={{
                width: 52, height: 52, margin: '0 auto 16px', background: 'rgba(209,83,152,0.15)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.3rem', color: '#1B1B45', marginBottom: 8 }}>
                Gebelik Boyunca Paket
              </h3>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '2.4rem', color: '#D15398', margin: '12px 0 4px' }}>
                ₺9.000
              </div>
              <div style={{ fontSize: '0.85rem', color: '#9e9eb8', marginBottom: 20 }}>tüm gebelik boyunca · 3 ay fiyatına</div>
              <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 28, padding: 0 }}>
                {[
                  'Aylık paketteki tüm özellikler',
                  'Doğuma kadar kesintisiz destek',
                  'Haftalık gebelik takip rehberliği',
                  'Öncelikli yanıt süresi'
                ].map((f) => (
                  <li key={f} style={{ padding: '8px 0', fontSize: '0.92rem', color: '#6b6b8d', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    {checkSvg} {f}
                  </li>
                ))}
              </ul>
              <a href="mailto:gebelikdanismanim@gmail.com?subject=Gebelik%20Boyunca%20Paket%20Talebi&body=Merhaba%2C%0A%0AGebelik%20Boyunca%20Paket%20(₺9.000)%20almak%20istiyorum.%0A%0AAdım:%0AGebelik%20haftası:" className="dn-btn-filled">
                Başvur
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEDEN BIZ ═══ */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(160deg, #1B1B45 0%, #2D2A5C 40%, #3a2d6b 70%, #1B1B45 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#D870AF', marginBottom: 14 }}>
            Neden Biz?
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#F3F3F9', marginBottom: 16 }}>
            Güvenilir Uzman Desteği
          </h2>
          <p style={{ color: '#9e9eb8', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.6 }}>
            Her karar önemli. Doğru bilgi ve uzman rehberliğiyle gebelik sürecinizde yanınızdayız.
          </p>

          <div className="dn-benefit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { title: 'Gizlilik & Güvenlik', desc: 'Tüm bilgileriniz gizli tutulur ve yalnızca danışmanlık amacıyla kullanılır.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg> },
              { title: 'Hızlı Dönüş', desc: 'Görüşme en kısa sürede planlanır, WhatsApp mesajlarınız mesai saatleri içinde yanıtlanır.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> },
              { title: 'Kanıta Dayalı Tıp', desc: 'Güncel kılavuzlar ve bilimsel kanıtlar ışığında kişiselleştirilmiş değerlendirme.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
              { title: 'Kişisel Yaklaşım', desc: 'Her gebelik farklıdır. Size özel, anlayışlı ve detaylı bir danışmanlık deneyimi.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
              { title: 'Tamamen Online', desc: 'Evinizin konforunda, yolculuk yapmadan, bekleme süresi olmadan danışmanlık alın.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
              { title: 'İkinci Görüş', desc: 'Aldığınız tanı veya tedavi planı hakkında bağımsız bir uzman değerlendirmesi.', icon: <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D870AF" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg> }
            ].map((b) => (
              <div key={b.title} className="dn-benefit-item">
                <div style={{ marginBottom: 16 }}>{b.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', color: '#F3F3F9', marginBottom: 8 }}>{b.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#9e9eb8', lineHeight: 1.55 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section style={{ background: '#f7f7fb', textAlign: 'center', padding: '80px 24px' }}>
        <div style={{
          maxWidth: 640, margin: '0 auto', background: '#fff', borderRadius: 16,
          padding: '48px 40px', boxShadow: '0 4px 32px rgba(27,27,69,.08)'
        }}>
          <div style={{
            width: 64, height: 64, margin: '0 auto 20px', background: 'rgba(209,83,152,0.15)',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.6rem', color: '#1B1B45', marginBottom: 12 }}>
            Danışmanlık İçin Bize Yazın
          </h3>
          <p style={{ color: '#6b6b8d', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 28 }}>
            Danışmanlık talebinizi, gebelik bilgilerinizi ve sorularınızı aşağıdaki e-posta adresine gönderin. En kısa sürede size dönüş yapacağız.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#f7f7fb', padding: '14px 24px', borderRadius: 10,
            fontSize: '1rem', fontWeight: 600, color: '#1B1B45', marginBottom: 24
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            gebelikdanismanim@gmail.com
          </div>
          <br />
          <a href="mailto:gebelikdanismanim@gmail.com?subject=Online%20Danışmanlık%20Talebi&body=Merhaba%2C%0A%0ADanışmanlık%20almak%20istiyorum.%0A%0AAdım:%0AGebelik%20haftası:%0ASorularım:" className="dn-btn-filled" style={{ marginTop: 8 }}>
            E-posta Gönder →
          </a>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: '80px 24px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#D15398', marginBottom: 14 }}>
            Sık Sorulan Sorular
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#1B1B45', marginBottom: 48 }}>
            Merak Ettikleriniz
          </h2>

          <FaqSection />
        </div>
      </section>
    </div>
  )
}

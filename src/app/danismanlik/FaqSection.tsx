'use client'

import { useState } from 'react'

const faqData = [
  { q: 'Online danışmanlık nasıl gerçekleşir?', a: 'E-posta ile danışmanlık talebinizi iletirsiniz. Gebelik bilgilerinizi ve ultrason raporlarınızı paylaşmanızın ardından, Google Meet üzerinden video görüşme ile uzman değerlendirmesi alırsınız.' },
  { q: 'WhatsApp gebelik paketi nasıl çalışır?', a: 'Paket aktif olduktan sonra uzman WhatsApp numaranız paylaşılır. Gebeliğiniz boyunca aklınıza takılan soruları, ultrason fotoğraflarınızı ve tahlil sonuçlarınızı mesai saatleri içinde sorabilirsiniz.' },
  { q: 'Hangi durumlarda danışmanlık alabilirim?', a: 'Riskli gebelik takibi, anomali tarama sonuçları, ikili/üçlü test yorumları, ultrason bulguları, fetal anomaliler ve tedavi planları hakkında ikinci görüş gibi konularda danışmanlık alabilirsiniz.' },
  { q: 'Ne kadar sürede yanıt alırım?', a: 'Video görüşme için uygun zaman dilimi birlikte belirlenir. WhatsApp paketinde mesai saatleri içinde yanıt verilir.' },
  { q: 'Ödeme nasıl yapılır?', a: 'Danışmanlık talebiniz onaylandıktan sonra ödeme bilgileri e-posta ile iletilir. Havale/EFT veya online ödeme seçenekleri mevcuttur.' },
  { q: 'Bilgilerim gizli tutulur mu?', a: 'Evet, tüm kişisel ve tıbbi bilgileriniz kesinlikle gizli tutulur. Bilgileriniz yalnızca danışmanlık sürecinde kullanılır ve üçüncü kişilerle paylaşılmaz.' }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
      {faqData.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} style={{ borderBottom: '1px solid #e8e8f0' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600,
                color: isOpen ? '#D15398' : '#1B1B45', textAlign: 'left',
                transition: 'color .3s'
              }}
            >
              {item.q}
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D15398" strokeWidth="2"
                style={{ flexShrink: 0, transition: 'transform .3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div style={{
              maxHeight: isOpen ? 300 : 0,
              overflow: 'hidden',
              transition: 'max-height .4s ease'
            }}>
              <p style={{ color: '#6b6b8d', fontSize: '0.92rem', lineHeight: 1.65, paddingBottom: 16 }}>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'

export const metadata = { title: '1–4. Hafta: Gebeliğin Başlangıcı | Fetal Uzman' }

const NAV = [
  { label: '1–4. Hafta', href: '/hafta/1-4', active: true },
  { label: '5–8. Hafta', href: '/hafta/5-8' },
  { label: '9–12. Hafta', href: '/hafta/9-12' },
]

export default function Page() {
  return (
    <WeekLayout trimester="Birinci Trimester" weekRange="1–4" emoji="🥚" color="#D15398"
      subtitle="Döllenme, implantasyon ve ilk hormonal değişimler. Yeni bir hayatın sessiz başlangıcı."
      navItems={NAV} nextHref="/hafta/5-8" nextLabel="5–8. Hafta: İlk Kalp Atışı">

      <SectionTitle title="Bebeğinizin Gelişimi" sub="Haftadan haftaya neler oluyor?" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '56px' }}>
        <Fade delay={0.1}><WeekBadge week={1} color="#D15398" title="Menstrüel Faz" desc="Vücut ovülasyona hazırlanır. FSH hormonu folikülleri uyarır. Teknik olarak henüz gebe sayılırsınız — döllenme gerçekleşmemiştir." /></Fade>
        <Fade delay={0.15}><WeekBadge week={2} color="#D15398" title="Ovülasyon" desc="LH dalgasıyla dominant folikül patlar, yumurta serbest kalır. Döllenme için pencere 12–24 saattir. Spermler 3–5 gün yaşayabilir." /></Fade>
        <Fade delay={0.2}><WeekBadge week={3} color="#D15398" title="Döllenme & Bölünme" desc="Sperm yumurtayı döller → zigot oluşur. Fallop tüpünde ilerlerken hızla bölünür: 2→4→8 hücre → morula → blastosist." /></Fade>
        <Fade delay={0.25}><WeekBadge week={4} color="#D15398" title="İmplantasyon" desc="Blastosist rahim duvarına gömülür. hCG salgılanmaya başlar. 4. haftanın sonunda gebelik testi pozitife döner." /></Fade>
      </div>

      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '32px', marginBottom: '56px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px' }}>📈 hCG Seviyeleri — Haftalara Göre</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '20px' }}>
            {[{ h: '4. Hafta', r: '5–50 mIU/mL', pct: 8 }, { h: '5. Hafta', r: '200–7000 mIU/mL', pct: 35 }, { h: '6. Hafta', r: '2.000–32.000', pct: 65 }, { h: '8. Hafta', r: '20.000–100.000', pct: 90 }].map(({ h, r, pct }) => (
              <div key={h} style={{ textAlign: 'center' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '8px' }}>
                  <div style={{ width: '36px', borderRadius: '8px 8px 0 0', background: 'linear-gradient(180deg,#D870AF,#D15398)', height: `${pct}%`, transition: 'height 1s ease' }} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f0e2a' }}>{h}</div>
                <div style={{ fontSize: '11px', color: '#888', lineHeight: 1.4 }}>{r}</div>
              </div>
            ))}
          </div>
          <Callout type="info" title="hCG Neden Önemli?">
            Sağlıklı gebelikte hCG her <strong>48–72 saatte iki katına</strong> çıkar. Yavaş yükselen veya düşen hCG, ektopik gebelik veya düşük tehdidini işaret edebilir — doktorunuzu bilgilendirin.
          </Callout>
        </div>
      </Fade>

      <SectionTitle title="Annede Neler Hissedilir?" sub="Bu belirtiler tamamen normal — hepsinin hormonal açıklaması var." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '56px' }}>
        {[
          { icon: '🩸', label: 'İmplantasyon Kanaması', desc: 'Pembe/kahverengi hafif lekelenme, 1–2 gün sürer. Adet değil.', color: '#D15398' },
          { icon: '🤱', label: 'Meme Hassasiyeti', desc: 'Progesteron etkisiyle meme dokusu değişir. Destekleyici sütyen önerilir.', color: '#8b5cf6' },
          { icon: '😴', label: 'Aşırı Yorgunluk', desc: 'Vücut bebek için yoğun enerji harcıyor. Dinlenin, suçluluk duymayın.', color: '#3b82f6' },
          { icon: '🚽', label: 'Sık İdrara Çıkma', desc: 'Böbrekler kan filtresini artırıyor. Gebeliğin en erken belirtilerinden.', color: '#22c55e' },
          { icon: '🤢', label: 'Erken Bulantı', desc: 'Bazı annelerde 4. haftadan başlar. Küçük sık öğünler yardımcı olur.', color: '#f97316' },
          { icon: '👃', label: 'Koku Hassasiyeti', desc: 'hCG etkisiyle koku alma keskinleşir. Rahatsız edici kokulardan uzak durun.', color: '#ec4899' },
        ].map(({ icon, label, desc, color }, i) => (
          <Fade key={label} delay={i * 0.07}>
            <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #f0ecf9', padding: '20px', height: '100%' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f0e2a', marginBottom: '6px' }}>{label}</div>
              <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{desc}</div>
            </div>
          </Fade>
        ))}
      </div>

      <SectionTitle title="🏥 Doktor Randevunuzda" sub="İlk obstetri ziyaretinizde neler beklenir? (Genellikle 6–8. haftaya planlanır)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="🔬" title="Kan Testleri" color="#3b82f6" delay={0.1} items={['Kan grubu ve Rh faktörü', 'Tam kan sayımı (anemi)', 'Rubella IgG bağışıklığı', 'Hepatit B yüzey antijeni (HBsAg)', 'HIV ve sifiliz (VDRL)', 'Toksoplazmoz IgG/IgM', 'TSH — tiroid fonksiyonu']} />
        <InfoCard icon="💊" title="Hemen Başlayın" color="#D15398" delay={0.15} items={['<strong>Folik asit 400–800 mcg/gün</strong> — en kritik adım!', 'D vitamini 600–1000 IU/gün', 'İyot içeren gebelik vitamini', 'Mevcut tüm ilaçları doktorunuzla gözden geçirin', 'Bitkisel ürünler dahil her şeyi bildirin']} />
        <InfoCard icon="🚫" title="Kaçınılacaklar" color="#f97316" delay={0.2} items={['Sigara ve pasif içicilik (güvenli sınır yok)', 'Alkol (güvenli sınır yok)', 'Çiğ et, çiğ yumurta, pastörize edilmemiş süt', 'Yüksek cıvalı balıklar (kılıç, köpek balığı)', 'Kafein &gt; 200 mg/gün', 'Sıcak banyo/sauna (&gt;38°C)']} />
        <InfoCard icon="📋" title="Doktorunuza Söyleyin" color="#8b5cf6" delay={0.25} items={['Son adet tarihiniz ve düzenliliği', 'Önceki gebelikler ve komplikasyonlar', 'Kronik hastalıklarınız', 'Ailede genetik hastalık öyküsü', 'Mesleki maruziyet (kimyasal, radyasyon)','Kullandığınız tüm ilaç ve takviyeler']} />
      </div>

      <Callout type="success" title="En Önemli Adım: Folik Asit">
        ACOG ve WHO önerisine göre folik asit gebelikten en az <strong>1 ay önce</strong> başlanmalıdır. Nöral tüp defekti riski <strong>%70 oranında azalır</strong>. Önceki gebelikte nöral tüp defekti varsa doz <strong>4 mg/gün</strong>e çıkarılır.
      </Callout>
    </WeekLayout>
  )
}

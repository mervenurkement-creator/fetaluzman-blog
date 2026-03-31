import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'

export const metadata = { title: '5–8. Hafta: İlk Kalp Atışı | Fetal Uzman' }

const NAV = [
  { label: '1–4. Hafta', href: '/hafta/1-4' },
  { label: '5–8. Hafta', href: '/hafta/5-8', active: true },
  { label: '9–12. Hafta', href: '/hafta/9-12' },
]

export default function Page() {
  return (
    <WeekLayout trimester="Birinci Trimester" weekRange="5–8" emoji="💓" color="#ec4899"
      subtitle="Bebeğinizin kalbi atmaya başlıyor! Organ taslakları oluşuyor, bulantılar zirveye ulaşıyor."
      navItems={NAV} nextHref="/hafta/9-12" nextLabel="9–12. Hafta: NT Taraması">

      <SectionTitle title="Bebeğinizin Gelişimi" sub="Embriyonik dönemin en kritik aşaması — tüm organların taslakları oluşuyor." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <Fade delay={0.1}><WeekBadge week={5} color="#ec4899" title="Kalp Tüpü Oluşuyor" desc="Nöral tüp kapanır. İlkel kalp tüpü şekilleniyor. Boy ~2 mm. Beyin ve omurilik gelişimi başlar." /></Fade>
        <Fade delay={0.15}><WeekBadge week={6} color="#ec4899" title="İlk Kalp Atışı! 💓" desc="Bebeğin kalbi atmaya başlıyor: 100–160 atım/dakika. Transvajinal ultrasonla görülebilir. Boy ~4 mm." /></Fade>
        <Fade delay={0.2}><WeekBadge week={7} color="#ec4899" title="El–Ayak Tomurcukları" desc="El ve ayak tomurcukları belirginleşiyor. Göz, burun, kulak gelişimi. Beyin hızla büyüyor. Boy ~10 mm." /></Fade>
        <Fade delay={0.25}><WeekBadge week={8} color="#ec4899" title="Tüm Organlar Taslak" desc="Major organların hepsi taslak halinde mevcut. Artık fetus dönemi başlamak üzere. Boy ~16 mm, ağırlık ~1 g." /></Fade>
      </div>

      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '32px', marginBottom: '56px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 800, color: '#0f0e2a', marginBottom: '16px' }}>💓 Fetal Kalp Atışı — Normal Değerler</h3>
          <table>
            <thead><tr><th>Hafta</th><th>Normal Kalp Hızı</th><th>Klinik Not</th></tr></thead>
            <tbody>
              <tr><td>6. hafta</td><td>90–110 atım/dk</td><td>İlk görülebilen kalp atışı</td></tr>
              <tr><td>7. hafta</td><td>110–130 atım/dk</td><td>Hız artıyor</td></tr>
              <tr><td>8. hafta</td><td>150–170 atım/dk</td><td>Zirve dönemi</td></tr>
              <tr><td>9–10. hafta</td><td>140–160 atım/dk</td><td>Stabil döneme giriş</td></tr>
            </tbody>
          </table>
          <Callout type="warning" title="Ne Zaman Endişelenilmeli?">
            6+0 haftada kalp atışı &lt;90 atım/dk (bradikardi) veya ultrasonla görülememesi durumunda 1 hafta sonra kontrol ultrasonografisi önerilir. Tek başına bradikardi kötü prognoz göstergesi olabilir.
          </Callout>
        </div>
      </Fade>

      <SectionTitle title="Annede Neler Hissedilir?" sub="Bu dönem bulantının zirveye ulaştığı dönemdir — yalnız değilsiniz." />
      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #fce8f3', padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', marginBottom: '16px' }}>🤢 Gebelik Bulantısı — Kanıta Dayalı Yönetim</h3>
          <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Bulantı ve kusma gebelerin <strong>%70–80'ini</strong> etkiler. "Sabah bulantısı" yanlış bir isimdir — gün boyunca her an olabilir. Genellikle 12–14. haftada azalır.
          </p>
          <table>
            <thead><tr><th>Müdahale</th><th>Kanıt Düzeyi</th><th>Uygulama</th></tr></thead>
            <tbody>
              <tr><td>B6 vitamini (piridoksin)</td><td>⭐⭐⭐ Yüksek</td><td>10–25 mg günde 3 kez (ACOG 1. basamak)</td></tr>
              <tr><td>Zencefil</td><td>⭐⭐⭐ Yüksek</td><td>250 mg kapsül günde 4 kez veya çay</td></tr>
              <tr><td>Küçük sık öğünler</td><td>⭐⭐ Orta</td><td>3 büyük yerine 5–6 küçük öğün</td></tr>
              <tr><td>Soğuk yiyecekler</td><td>⭐⭐ Orta</td><td>Sıcak yiyecekler koku nedeniyle tetikler</td></tr>
              <tr><td>Antihistaminikler</td><td>⭐⭐⭐ Yüksek</td><td>Doktor önerisiyle — güvenli</td></tr>
            </tbody>
          </table>
          <Callout type="danger" title="Hiperemezis Gravidarum — Acil Durum">
            Günde &gt;3 kez kusma, %5'ten fazla kilo kaybı, idrar renginin koyulaşması, yiyecek-sıvı alamamak — bu bulgular varsa hemen doktora başvurun. IV sıvı ve ilaç tedavisi gerekebilir.
          </Callout>
        </div>
      </Fade>

      <SectionTitle title="🏥 Doktor Randevunuzda" sub="6–8. hafta ilk obstetri muayenesinde neler yapılır?" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="🔊" title="Ultrasonografi" color="#ec4899" delay={0.1} items={['Gebelik kesesinin rahim içinde olduğunun doğrulanması', 'Ektopik gebelik dışlanması (kritik!)', 'Fetal kalp atışının görülmesi', 'CRL ile gestasyon yaşı doğrulaması', 'Tekil/ikiz/çoğul gebelik ayrımı']} />
        <InfoCard icon="🔬" title="Kan Testleri" color="#3b82f6" delay={0.15} items={['Kan grubu ve Rh faktörü', 'Tam kan sayımı', 'Rubella IgG', 'Hepatit B yüzey antijeni', 'HIV, sifiliz (VDRL)', 'Toksoplazmoz IgG/IgM', 'TSH (tiroid fonksiyon testleri)', 'İdrar kültürü (asemptomatik bakteriüri)']} />
        <InfoCard icon="🦷" title="Diş Sağlığı" color="#22c55e" delay={0.2} items={['Gebelikte diş eti hastalığı (gingivitis) sıklaşır', 'Progesteron diş etlerini yumuşatır', 'Preterm doğum ile diş eti hastalığı ilişkisi bildirilmiştir', 'Diş hekimi kontrolü erken dönemde yapılmalı', 'Anestezi ve röntgen 2. trimesterde daha uygun']} />
        <InfoCard icon="⚠️" title="Tiroid ve Gebelik" color="#f97316" delay={0.25} items={['TSH idealdir &lt; 2.5 mIU/L ilk trimesterde', 'Hipotiroidizm fetal nörolojik gelişimi bozar', 'Hipertiroidi gebeliği komplike edebilir', 'Mevcut tiroid hastalığı varsa dozu gözden geçirin', 'TPO antikoru pozitifliği izlemi gerektirir']} />
      </div>

      <Callout type="success" title="Bu Dönemde İyi Haberler">
        8. haftada kalp atışı görülen bir gebelikte düşük riski <strong>%3'ün altına</strong> düşer (genel popülasyonda). Kalp atışı sağlıklı şekilde devam etmesi en güçlü güvencedir.
      </Callout>
    </WeekLayout>
  )
}

import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '37–40. Hafta: Doğum Yaklaşıyor | Fetal Uzman' }
const NAV = [{ label: '33–36. Hafta', href: '/hafta/33-36' }, { label: '37–40. Hafta', href: '/hafta/37-40', active: true }]
export default function Page() {
  return (
    <WeekLayout trimester="Üçüncü Trimester" weekRange="37–40" emoji="👶" color="#ec4899"
      subtitle="Term gebelik — her şey hazır! Doğum belirtilerini tanıyın, hastaneye ne zaman gitmelisiniz?"
      navItems={NAV} nextHref="/blog" nextLabel="Blog Yazılarına Dön">
      <SectionTitle title="Bebeğinizin Gelişimi" sub="Term gebelik — tam olgunluk!" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.1}><WeekBadge week={37} color="#ec4899" title="Term Gebelik!" desc="37. haftadan itibaren term (zamanında). Vücut yağı ~%15. Baş pelvis girişine yerleşiyor." /></Fade>
        <Fade delay={0.15}><WeekBadge week={38} color="#ec4899" title="Tam Olgunluk" desc="Tüm organlar tam olgunlaşmış. Verniks azalıyor. Boy ~49.8 cm, ~3.0 kg." /></Fade>
        <Fade delay={0.2}><WeekBadge week={39} color="#ec4899" title="İdeal Doğum Haftası" desc="ACOG'un elektif sezaryen için önerdiği minimum hafta. Boy ~50.7 cm, ~3.3 kg." /></Fade>
        <Fade delay={0.25}><WeekBadge week={40} color="#ec4899" title="Hesaplanan Tarih" desc="Hesaplanan doğum tarihi! Gebelerin yalnızca %5'i tam bu tarihte doğurur — bu tamamen normal." /></Fade>
      </div>
      <SectionTitle title="🚨 Doğum Belirtileri" sub="Gerçek doğum mu, Braxton-Hicks mi? Nasıl ayırt edilir?" />
      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '28px', marginBottom: '32px' }}>
          <table>
            <thead><tr><th>Özellik</th><th>Gerçek Doğum</th><th>Braxton-Hicks</th></tr></thead>
            <tbody>
              <tr><td>Düzenlilik</td><td>✅ Düzenli, sıklaşır</td><td>❌ Düzensiz</td></tr>
              <tr><td>Şiddet</td><td>✅ Giderek artar</td><td>❌ Değişmez</td></tr>
              <tr><td>Yürümekle</td><td>✅ Artar</td><td>❌ Azalır/geçer</td></tr>
              <tr><td>Konum</td><td>✅ Bel + karın</td><td>❌ Sadece karın</td></tr>
              <tr><td>Uyku sırasında</td><td>✅ Uyandırır</td><td>❌ Uyandırmaz</td></tr>
            </tbody>
          </table>
        </div>
      </Fade>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="⏱️" title="5-1-1 Kuralı — Hastaneye Git" color="#ec4899" delay={0.1} items={['Kasılmalar 5 dakikada bir', 'Her kasılma 1 dakika sürüyor', 'Bu durum 1 saattir devam ediyor', '→ Hastaneye gitme zamanı!', 'İkinci doğumda daha hızlı ilerleme bekleyin — daha erken gidin']} />
        <InfoCard icon="🚨" title="HEMEN Hastaneye — Acil" color="#ef4444" delay={0.15} items={['Su kesiği (amniyotik sıvı akışı)', 'Vajinal kanama (herhangi miktarda)', 'Bebek hareketlerinin durması', 'Şiddetli baş ağrısı + görme bozukluğu', 'Sağ üst karın ağrısı', 'Nöbet geçirme']} />
        <InfoCard icon="⏱️" title="Doğum Aşamaları" color="#8b5cf6" delay={0.2} items={['1. Evre: Serviks 0→10 cm açılma (en uzun)', 'Latent faz: 0–6 cm, yavaş', 'Aktif faz: 6–10 cm, hızlı', '2. Evre: İtme — bebek doğuyor', '3. Evre: Plasenta doğumu (5–30 dk)', 'Epidural: Aktif fazda (4–5 cm) en uygun']} />
        <InfoCard icon="🤱" title="Doğum Sonrası İlk Saatler" color="#22c55e" delay={0.25} items={['Skin-to-skin (ten tene temas) — ilk 1 saat kritik', 'İlk emzirme: Mümkün olduğunca erken', 'K vitamini enjeksiyonu (yenidoğan)', 'Hepatit B aşısı ilk doz', 'İşitme taraması', 'Topuk kanı (metabolik tarama)']} />
      </div>
      <Callout type="success" title="41. Hafta Geçtiyse">
        41. haftada indüksiyon değerlendirmesi başlanır. 42. haftaya kadar beklenmez — postterm gebelikte plasental yetmezlik riski artar. Doktorunuzla indüksiyon seçeneklerini önceden konuşun.
      </Callout>
    </WeekLayout>
  )
}

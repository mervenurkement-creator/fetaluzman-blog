import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '33–36. Hafta: Doğuma Hazırlık | Fetal Uzman' }
const NAV = [{ label: '29–32. Hafta', href: '/hafta/29-32' }, { label: '33–36. Hafta', href: '/hafta/33-36', active: true }, { label: '37–40. Hafta', href: '/hafta/37-40' }]
export default function Page() {
  return (
    <WeekLayout trimester="Üçüncü Trimester" weekRange="33–36" emoji="🎒" color="#22c55e"
      subtitle="Akciğerler olgunlaşıyor, bebek baş aşağı dönüyor. GBS testi ve doğum çantası hazırlığı."
      navItems={NAV} nextHref="/hafta/37-40" nextLabel="37–40. Hafta">
      <SectionTitle title="Bebeğinizin Gelişimi" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.1}><WeekBadge week={33} color="#22c55e" title="Kemikler Sertleşiyor" desc="Kemikler sertleşiyor, kafatası esnek kalmaya devam ediyor (doğum kanalı için). Vücut yağı %6–8." /></Fade>
        <Fade delay={0.15}><WeekBadge week={34} color="#22c55e" title="Akciğerler Hazır" desc="34. haftada doğum olursa solunum sıklıkla destekle mümkün. Boy ~45 cm, ~2.1 kg." /></Fade>
        <Fade delay={0.2}><WeekBadge week={35} color="#22c55e" title="Yağ Birikimi" desc="Vücut yağı %15'e çıkıyor. Tombul, pembe görünüm kazanıyor. Boy ~46.2 cm, ~2.4 kg." /></Fade>
        <Fade delay={0.25}><WeekBadge week={36} color="#22c55e" title="Geç Preterm" desc="36. haftada doğan bebek 'geç preterm'. Kısa destekle genellikle iyi. Boy ~47.4 cm, ~2.6 kg." /></Fade>
      </div>
      <SectionTitle title="🏥 35–37. Hafta Kritik Testler" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="🦠" title="GBS Kültürü (35–37. Hafta)" color="#22c55e" delay={0.1} items={['Grup B Streptokok vajinal/rektal sürüntü — tüm gebelere', 'GBS pozitif: Doğumda IV ampisilin', 'Neonatal GBS hastalığı %80 azalır', 'Alerji varsa alternatif antibiyotik planlanır', 'Sonuç 5–7 gün içinde gelir']} />
        <InfoCard icon="🎒" title="Doğum Çantası" color="#8b5cf6" delay={0.15} items={['Kimlik, sağlık kartı, gebelik takip dosyası', 'Rahat pijama ve terlik', 'Lohusa pedi ve sütyen', 'Bebek kıyafetleri (0–3 ay, 2–3 takım)', 'Kundak, battaniye', 'Araba koltuğu — taburculuk için zorunlu!']} />
        <InfoCard icon="📋" title="Doğum Planı" color="#f97316" delay={0.2} items={['Doğum yöntemi tercihleri (normal/sezaryen)', 'Epidural tercihini önceden belirtin', 'Doğumda yanınızda olacak kişi', 'Emzirme planı', 'Göbek bağı geç kesme tercihiniz', 'Bebek ile odada kalma isteğiniz']} />
        <InfoCard icon="🔄" title="36. Hafta Kontrolleri" color="#D15398" delay={0.25} items={['Serviks değerlendirmesi (açılma, silinme)', 'Bebek baş düzeyi (engagement)', 'Haftalık veya iki haftada bir NST', 'Büyüme ultrasonografisi', 'Doğum planınızı doktorunuzla paylaşın']} />
      </div>
      <Callout type="info" title="Sezaryen Kararı Ne Zaman?">
        Elektif sezaryen genellikle <strong>39. haftada</strong> planlanır — öncesi akciğer olgunluğu açısından risk oluşturabilir. Makat prezantasyon, plasenta previa veya önceki sezaryen endikasyon oluşturabilir. 36. hafta öncesinde kararı netleştirin.
      </Callout>
    </WeekLayout>
  )
}

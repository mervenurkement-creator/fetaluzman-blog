import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '29–32. Hafta: Üçüncü Trimester | Fetal Uzman' }
const NAV = [{ label: '25–28. Hafta', href: '/hafta/25-28' }, { label: '29–32. Hafta', href: '/hafta/29-32', active: true }, { label: '33–36. Hafta', href: '/hafta/33-36' }]
export default function Page() {
  return (
    <WeekLayout trimester="Üçüncü Trimester" weekRange="29–32" emoji="🌟" color="#D15398"
      subtitle="Son düzlük! Bebek hızla kilo alıyor, akciğerler olgunlaşıyor. NST ve prezantasyon değerlendirmesi."
      navItems={NAV} nextHref="/hafta/33-36" nextLabel="33–36. Hafta">
      <SectionTitle title="Bebeğinizin Gelişimi" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.1}><WeekBadge week={29} color="#D15398" title="Kemik İliği" desc="Kemik iliği artık kan üretiyor. Kas tonusu artar. Boy ~38.6 cm, ~1.15 kg." /></Fade>
        <Fade delay={0.15}><WeekBadge week={30} color="#D15398" title="Hızlı Büyüme" desc="Her hafta 200–250 g kilo alıyor. Göz hareketi başlıyor. Boy ~39.9 cm, ~1.3 kg." /></Fade>
        <Fade delay={0.2}><WeekBadge week={31} color="#D15398" title="Tüm Duyular Aktif" desc="Görme, işitme, tat, koku, dokunma — hepsi çalışıyor. Boy ~41.1 cm, ~1.5 kg." /></Fade>
        <Fade delay={0.25}><WeekBadge week={32} color="#D15398" title="Akciğerler Hazır" desc="Akciğerler büyük ölçüde olgunlaşmış. Baş aşağı dönüyor. Boy ~42.4 cm, ~1.7 kg." /></Fade>
      </div>
      <SectionTitle title="🏥 Doktor Randevunuzda" sub="28–32. hafta büyüme ultrasonografisi ve fetal izlem." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="📊" title="Büyüme Ultrasonografisi" color="#D15398" delay={0.1} items={['Biyometri: BPD, HC, AC, FL ölçümleri', 'Tahmini fetal ağırlık — persentil değerlendirmesi', 'Amniyotik sıvı indeksi (AFI)', 'Plasenta lokalizasyonu', 'Prezantasyon: Baş mı, makat mı?', 'Umbilikal arter Doppler (yüksek riskli olgularda)']} />
        <InfoCard icon="❤️" title="NST (Non-Stres Test)" color="#ef4444" delay={0.15} items={['Yüksek riskli gebeliklerde 32. haftadan başlanır', 'Fetal kalp hızı + kasılma monitörizasyonu', 'Reaktif NST: 20 dk içinde ≥2 hız artışı, ≥15 atım, ≥15 sn', 'Non-reaktif: Biyofizik profil veya Doppler eklenir', 'Test süresi 20–40 dakika, tok karnına yapın']} />
        <InfoCard icon="🔄" title="Makat Prezantasyon" color="#8b5cf6" delay={0.2} items={['32. haftaya kadar %25 bebek makat pozisyonunda', 'Büyük çoğunluğu kendiliğinden döner', '36. haftaya kadar dönmezse ECV değerlendirilebilir', 'ECV başarı oranı %50–60', 'ECV öncesi NST ve ultrason şart']} />
        <InfoCard icon="🚨" title="Erken Doğum Belirtileri" color="#f97316" delay={0.25} items={['Saatte 4+ düzenli kasılma → HEMEN hastaneye', 'Vajinal kanama', 'Su gelmesi (seröz, şeffaf akıntı)', 'Pelvik baskı veya aşağıya basınç', 'Şiddetli bel ağrısı + kasılma birlikteliği']} />
      </div>
      <Callout type="success" title="Kick Count — Bebek Hareketi Takibi">
        28. haftadan itibaren günlük bebek hareketlerini sayın. <strong>2 saatte 10 hareket</strong> beklenir. Kahvaltıdan sonra sol yana yatarak sayın. 10 harekete ulaşamıyorsanız hemen doktorunuzu arayın.
      </Callout>
    </WeekLayout>
  )
}

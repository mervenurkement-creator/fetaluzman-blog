import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '20–24. Hafta: Anomali Taraması ve GDM | Fetal Uzman' }
const NAV = [{ label: '13–19. Hafta', href: '/hafta/13-19' }, { label: '20–24. Hafta', href: '/hafta/20-24', active: true }, { label: '25–28. Hafta', href: '/hafta/25-28' }]
export default function Page() {
  return (
    <WeekLayout trimester="İkinci Trimester" weekRange="20–24" emoji="🔭" color="#f97316"
      subtitle="Gebeliğin tam ortasında kritik testler! Ayrıntılı anomali ultrasonografisi ve gestasyonel diyabet taraması."
      navItems={NAV} nextHref="/hafta/25-28" nextLabel="25–28. Hafta">
      <SectionTitle title="Bebeğinizin Gelişimi" sub="Gebeliğin tam ortasındayız." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.08}><WeekBadge week={20} color="#f97316" title="Gebeliğin Ortası!" desc="Boy ~25.6 cm, ~300 g. Yutma hareketleri tam. Bebek neredeyse sürekli hareket ediyor." /></Fade>
        <Fade delay={0.12}><WeekBadge week={21} color="#f97316" title="Kaşlar Beliriyor" desc="Kaş ve kirpikler belirginleşiyor. Tat alma gelişiyor. Boy ~26.7 cm, ~360 g." /></Fade>
        <Fade delay={0.16}><WeekBadge week={22} color="#f97316" title="Dudak Hareketleri" desc="Seslere tepki veriyor. Deri kıvrımları oluşuyor. Boy ~27.8 cm, ~430 g." /></Fade>
        <Fade delay={0.2}><WeekBadge week={23} color="#f97316" title="Akciğerler Hazırlıkta" desc="Sürfaktan üretimi başladı. Parmak izleri tamamlandı. Boy ~28.9 cm, ~500 g." /></Fade>
        <Fade delay={0.24}><WeekBadge week={24} color="#f97316" title="Viabilite Eşiği! 🎯" desc="Modern tıpla %50–70 hayatta kalma. Boy ~30 cm, ~600 g. Kritik hafta." /></Fade>
      </div>
      <Callout type="danger" title="24. Hafta — Viabilite Eşiği">
        24. haftadan itibaren prematüre bebek yoğun bakım desteğiyle hayatta kalabilir. Bu nedenle 24. haftadan sonra erken doğum belirtilerine karşı çok dikkatli olunmalıdır.
      </Callout>
      <SectionTitle title="🏥 Anomali Ultrasonografisi (18–22. Hafta)" sub="ISUOG standartlarına göre sistematik fetal anatomi değerlendirmesi." />
      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '2px solid #f9731622', padding: '28px', marginBottom: '32px' }}>
          <table>
            <thead><tr><th>Sistem</th><th>Değerlendirilen Yapılar</th></tr></thead>
            <tbody>
              <tr><td><strong>Baş ve Beyin</strong></td><td>BPD, HC, lateral ventriküller (&lt;10 mm), serebellum, cisterna magna</td></tr>
              <tr><td><strong>Yüz</strong></td><td>Orbita, burun, dudak-damak bütünlüğü</td></tr>
              <tr><td><strong>Kalp</strong></td><td>4 odacık görünümü, çıkış yolları, ritim</td></tr>
              <tr><td><strong>Toraks</strong></td><td>Akciğer ekojenitesi, diyafragma bütünlüğü</td></tr>
              <tr><td><strong>Karın</strong></td><td>Mide, bağırsak, karaciğer, karın duvarı bütünlüğü</td></tr>
              <tr><td><strong>Böbrekler</strong></td><td>Boyut, renal pelvis (&lt;7 mm), mesane görülmesi</td></tr>
              <tr><td><strong>Omurga</strong></td><td>Vertebra dizisi, spina bifida taraması</td></tr>
              <tr><td><strong>Ekstremiteler</strong></td><td>Uzun kemik uzunlukları, el ve ayak</td></tr>
              <tr><td><strong>Plasenta</strong></td><td>Lokalizasyon, göbek bağı (3 damar)</td></tr>
            </tbody>
          </table>
        </div>
      </Fade>
      <SectionTitle title="GDM Taraması (24–28. Hafta)" sub="Gestasyonel diyabet — erken tanı hayat kurtarır." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="🧪" title="50g Glukoz Challenge Testi (GCT)" color="#f97316" delay={0.1} items={['Açlık gerekmez', '50g glukoz içtikten 1 saat sonra kan şekeri ölçülür', '≥140 mg/dL → 100g OGTT gerekir', 'Yüksek riskli grupta ilk trimesterde başlanabilir']} />
        <InfoCard icon="📊" title="100g OGTT Tanı Kriterleri" color="#ef4444" delay={0.15} items={['Açlık: ≥95 mg/dL', '1. saat: ≥180 mg/dL', '2. saat: ≥155 mg/dL', '3. saat: ≥140 mg/dL', '2+ değer karşılanırsa: GDM tanısı (ACOG 2023)']} />
      </div>
      <Callout type="warning" title="GDM Risk Faktörleri">
        BMI &gt;30, önceki GDM öyküsü, ailede diyabet, &gt;4 kg doğan bebek öyküsü, PKOS — bu faktörler varsa ilk trimesterde tarama başlanabilir.
      </Callout>
    </WeekLayout>
  )
}

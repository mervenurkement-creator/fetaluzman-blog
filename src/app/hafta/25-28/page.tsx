import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '25–28. Hafta: Beyin Gelişimi ve RhoGAM | Fetal Uzman' }
const NAV = [{ label: '20–24. Hafta', href: '/hafta/20-24' }, { label: '25–28. Hafta', href: '/hafta/25-28', active: true }, { label: '29–32. Hafta', href: '/hafta/29-32' }]
export default function Page() {
  return (
    <WeekLayout trimester="İkinci Trimester" weekRange="25–28" emoji="🧠" color="#3b82f6"
      subtitle="Beyin kıvrımları oluşuyor, gözler açılıyor! Rh uyuşmazlığı yönetimi, anemi taraması ve 1 kilogram!"
      navItems={NAV} nextHref="/hafta/29-32" nextLabel="29–32. Hafta">
      <SectionTitle title="Bebeğinizin Gelişimi" sub="Beyin gelişiminin altın çağı." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.1}><WeekBadge week={25} color="#3b82f6" title="Kılcal Damarlar" desc="Şeffaf derinin altından kılcal damarlar görünür. Bebek sesli uyaranlara tepki veriyor. Boy ~34.6 cm, ~660 g." /></Fade>
        <Fade delay={0.15}><WeekBadge week={26} color="#3b82f6" title="Gözler Açılıyor!" desc="Gözkapakları açılmaya başlıyor! Beyin dalgaları görme ve işitme aktivitesini gösteriyor. Boy ~35.6 cm, ~760 g." /></Fade>
        <Fade delay={0.2}><WeekBadge week={27} color="#3b82f6" title="Rüya Görebilir!" desc="Akciğer kapasitesi artar. REM uykusu başlıyor — rüya görebilir! Boy ~36.6 cm, ~875 g." /></Fade>
        <Fade delay={0.25}><WeekBadge week={28} color="#3b82f6" title="1 Kilogram! 🎉" desc="Bebek 1 kg'a ulaştı! Beyin kıvrımları (gyrus) hızla oluşuyor. Boy ~37.6 cm." /></Fade>
      </div>
      <SectionTitle title="🏥 28. Hafta Kritik Ziyareti" sub="Bu ziyarette yapılan işlemler son derece önemlidir." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="💉" title="RhoGAM — Rh Negatif Anneler" color="#ef4444" delay={0.1} items={['Kan grubu Rh negatif ise 28. haftada Anti-D enjeksiyonu', 'Bir sonraki gebelikte hemolitik hastalığı önler', 'Doğumdan sonra 72 saat içinde tekrarlanır', 'Güvenli — bebeğe zararı yok', 'Mutlaka kan grubunuzu önceden öğrenin']} />
        <InfoCard icon="🩸" title="Anemi Taraması" color="#8b5cf6" delay={0.15} items={['Tam kan sayımı tekrarlanır', 'Hb ≥11 g/dL: Normal', 'Hb 10–10.9 g/dL: Hafif anemi → demir artır', 'Hb &lt;10 g/dL: Kapsamlı değerlendirme', 'Demir C vitamini ile alın — emilimi artırır', 'Çay ve kahveden 1 saat önce/sonra alın']} />
        <InfoCard icon="🧠" title="Beyin Gelişimini Destekleyin" color="#3b82f6" delay={0.2} items={['Omega-3 (DHA): Haftada 2 porsiyon yağlı balık', 'Bebeğinizle konuşun, sesli kitap okuyun', 'Stres yönetimi: Kortizol fetal gelişimi etkiler', 'D vitamini eksikliği beyin gelişimini bozar', 'Düzenli hafif egzersiz (yürüyüş, yüzme)']} />
        <InfoCard icon="🌙" title="Uyku Pozisyonu" color="#22c55e" delay={0.25} items={['Sol yana yatmak tercih edilmeli', 'Sırtüstü yatmak vena cava basısı yapabilir', 'Gece dönüp sırtüstü uyumanız normal — fark edince çevirin', 'Gebelik yastığı uyku kalitesini artırır', 'Gündüz kısa uykular (30 dk) enerji verir']} />
      </div>
      <Callout type="info" title="Sol Yana Yatın — Neden?">
        Sol yan pozisyon vena cava inferior'a bası yapmaz, uterin kan akımını optimize eder ve böbrek fonksiyonunu destekler. Araştırmalar sırtüstü uyumanın olumsuz perinatal sonuçlarla ilişkili olabileceğini gösteriyor.
      </Callout>
    </WeekLayout>
  )
}

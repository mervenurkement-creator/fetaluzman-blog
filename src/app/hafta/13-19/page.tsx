import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '13–19. Hafta: İkinci Trimester | Fetal Uzman' }
const NAV = [{ label: '13–19. Hafta', href: '/hafta/13-19', active: true }, { label: '20–24. Hafta', href: '/hafta/20-24' }, { label: '25–28. Hafta', href: '/hafta/25-28' }]
export default function Page() {
  return (
    <WeekLayout trimester="İkinci Trimester" weekRange="13–19" emoji="🌸" color="#8b5cf6"
      subtitle="Bulantılar geride kaldı! İlk hareketler, cinsiyet belirleme ve üçlü test dönemi."
      navItems={NAV} nextHref="/hafta/20-24" nextLabel="20–24. Hafta: Anomali Taraması">
      <SectionTitle title="Bebeğinizin Gelişimi" sub="İkinci trimester — gebeliğin en keyifli dönemi başlıyor." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px', marginBottom: '48px' }}>
        <Fade delay={0.08}><WeekBadge week={13} color="#8b5cf6" title="Parmak İzleri" desc="Parmak izi oluşumu başlıyor! Yüz kasları gelişiyor, bebek yutkunabiliyor. Boy ~7.4 cm, ~23 g." /></Fade>
        <Fade delay={0.12}><WeekBadge week={14} color="#8b5cf6" title="Böbrekler Çalışıyor" desc="Böbrekler aktif olarak idrar üretiyor. Yüz ifadeleri belirginleşiyor. Boy ~8.7 cm, ~43 g." /></Fade>
        <Fade delay={0.16}><WeekBadge week={15} color="#8b5cf6" title="Kemikler Sertleşiyor" desc="Saç ve kaşlar çıkmaya başlıyor. Boy ~10 cm, ~70 g. Bebek büyük miktarda hareket ediyor." /></Fade>
        <Fade delay={0.2}><WeekBadge week={16} color="#8b5cf6" title="Gözler Işığa Tepki" desc="Cinsiyet belirlenebilir! Boy ~11.6 cm, ~100 g. Gözler kapalı ama ışığa tepki veriyor." /></Fade>
        <Fade delay={0.24}><WeekBadge week={17} color="#8b5cf6" title="Yağ Dokusu Oluşuyor" desc="Vücut yağı gelişmeye başlıyor — ısı düzenlemesi için. Refleksler güçleniyor. Boy ~13 cm, ~140 g." /></Fade>
        <Fade delay={0.28}><WeekBadge week={18} color="#8b5cf6" title="Sizi Duyuyor!" desc="İç kulak gelişimi tamamlanıyor. Annenin sesini, müziği duyuyor. Boy ~14.2 cm, ~190 g." /></Fade>
        <Fade delay={0.32}><WeekBadge week={19} color="#8b5cf6" title="Verniks Oluşuyor" desc="Beyaz koruyucu tabaka (verniks) deriye yapışıyor. Boy ~15.3 cm, ~240 g." /></Fade>
      </div>
      <Fade delay={0.1}>
        <div style={{ background: 'linear-gradient(135deg,#f3eeff,#ede9fe)', borderRadius: '20px', border: '2px solid #c4b5fd', padding: '28px', marginBottom: '48px' }}>
          <h3 style={{ fontFamily: 'Playfair Display,Georgia,serif', fontSize: '20px', fontWeight: 800, color: '#0f0e2a', marginBottom: '12px' }}>🎵 Bebeğiniz Artık Sizi Duyuyor!</h3>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8 }}>18. haftadan itibaren bebeğin iç kulakları işlevsel. Annenin sesi ve sık dinlenen müzik doğumdan sonra da tanınır. Bebeğinizle konuşun, sesli kitap okuyun!</p>
        </div>
      </Fade>
      <SectionTitle title="🏥 Doktor Randevunuzda" sub="Bu dönemde yapılması gereken testler." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '32px' }}>
        <InfoCard icon="🧪" title="Üçlü / Dörtlü Test (15–20. Hafta)" color="#8b5cf6" delay={0.1} items={['İlk trimester taraması yapılmamışsa önerilir', 'AFP: Nöral tüp ve karın duvarı defekti', 'hCG ve uE3: Down Sendromu taraması', 'Saptama oranı: %60–70', '15. haftadan önce yapılmaz, 20. haftadan sonra geçersiz']} />
        <InfoCard icon="👶" title="Cinsiyet Ultrasonografisi" color="#ec4899" delay={0.15} items={['15–16. haftadan itibaren belirlenebilir', 'En güvenilir sonuç: 18–20. hafta', 'Bebek pozisyonu sonucu etkileyebilir', 'Yapısal değerlendirme ile birlikte yapılır']} />
        <InfoCard icon="📏" title="Rutin Kontroller" color="#22c55e" delay={0.2} items={['Kan basıncı — preeklampsi taraması', 'İdrar dipstik (protein, glukoz)', 'Fundal yükseklik (16. haftadan itibaren)', 'Doppler ile fetal kalp sesi', 'Kilo alımı değerlendirmesi']} />
        <InfoCard icon="✅" title="Bu Dönemde Yapılacaklar" color="#f97316" delay={0.25} items={['Üçlü testi doktorunuzla değerlendirin', '16. hafta rutin kontrol', 'Diş hekimi kontrolü', 'Sol yana yatmaya alışmaya başlayın', 'Bebek hareketi takibine başlayın', 'Gebelik yastığı alın']} />
      </div>
      <Callout type="success" title="İyi Haberler: En Keyifli Dönem!">
        Bulantı geçiyor, enerji geri döndü, düşük riski dramatik azaldı. Seyahat, hafif egzersiz ve sosyal aktiviteler için ideal dönem!
      </Callout>
    </WeekLayout>
  )
}

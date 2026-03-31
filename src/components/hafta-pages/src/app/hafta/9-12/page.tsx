import WeekLayout, { Fade, Callout, InfoCard, WeekBadge, SectionTitle } from '@/components/WeekLayout'
export const metadata = { title: '9–12. Hafta: NT Taraması | Fetal Uzman' }
const NAV = [{ label: '1–4. Hafta', href: '/hafta/1-4' }, { label: '5–8. Hafta', href: '/hafta/5-8' }, { label: '9–12. Hafta', href: '/hafta/9-12', active: true }]
export default function Page() {
  return (
    <WeekLayout trimester="Birinci Trimester" weekRange="9–12" emoji="🔬" color="#8b5cf6"
      subtitle="Bebek artık fetus! NT ölçümü ve kombine test ile kromozom risk değerlendirmesi — en kritik tarama."
      navItems={NAV} nextHref="/hafta/13-19" nextLabel="13–19. Hafta">
      <SectionTitle title="Bebeğinizin Gelişimi" sub="Embriyonik dönem bitti, fetal dönem başladı." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '48px' }}>
        <Fade delay={0.1}><WeekBadge week={9} color="#8b5cf6" title="Artık Fetus!" desc="Parmaklar belirginleşiyor, dişlerin temeli atılıyor. Boy ~2.3 cm, ağırlık ~2 g. Eklemler hareket edebiliyor." /></Fade>
        <Fade delay={0.15}><WeekBadge week={10} color="#8b5cf6" title="Yüz Şekilleniyor" desc="Tırnak taslakları, dış kulak oluşuyor. Böbrekler idrar üretmeye başlıyor. Boy ~3.1 cm, ağırlık ~4 g." /></Fade>
        <Fade delay={0.2}><WeekBadge week={11} color="#8b5cf6" title="Refleksler Gelişiyor" desc="Bebek dokunmaya tepki veriyor! Cinsiyet organları şekilleniyor (henüz ultrasonla seçilemiyor). Boy ~4.1 cm." /></Fade>
        <Fade delay={0.25}><WeekBadge week={12} color="#8b5cf6" title="Böbrekler Çalışıyor" desc="Böbrekler idrar üretiyor, bebek bu sıvıyı yutabiliyor. 12 cm, 14 gram. Plasenta görevi devraliyor." /></Fade>
      </div>

      <SectionTitle title="🏥 En Kritik Randevu: Kombine Test" sub="11–13+6. haftada yapılan bu test gebeliğin en önemli taramasıdır." />

      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '2px solid #8b5cf622', padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px' }}>📏 NT (Ense Saydamlığı) Ölçümü</h3>
          <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>Bebeğin ense bölgesindeki sıvı birikiminin ultrasonla milimetrik ölçümüdür. <strong>FMF sertifikalı uzman</strong> tarafından yapılmalıdır.</p>
          <table>
            <thead><tr><th>NT Değeri</th><th>Risk Düzeyi</th><th>Önerilen Yaklaşım</th></tr></thead>
            <tbody>
              <tr><td>&lt; 3.0 mm</td><td>✅ Normal</td><td>Rutin takip</td></tr>
              <tr><td>3.0–3.4 mm</td><td>🟡 Hafif artış</td><td>NIPT veya ek değerlendirme</td></tr>
              <tr><td>3.5–4.9 mm</td><td>🟠 Artmış risk</td><td>Genetik danışmanlık, NIPT/invaziv test</td></tr>
              <tr><td>≥ 5.0 mm</td><td>🔴 Yüksek risk</td><td>Kapsamlı değerlendirme, fetal ekokardiyografi</td></tr>
            </tbody>
          </table>
        </div>
      </Fade>

      <Fade delay={0.1}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #f0ecf9', padding: '32px', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 800, color: '#0f0e2a', marginBottom: '16px' }}>🧬 Biyokimyasal Belirteçler</h3>
          <table>
            <thead><tr><th>Belirteç</th><th>Trizomi 21'de</th><th>Trizomi 18/13'te</th><th>Normal</th></tr></thead>
            <tbody>
              <tr><td><strong>PAPP-A</strong></td><td>↓ Düşük (&lt;0.5 MoM)</td><td>↓↓ Çok düşük</td><td>0.5–2.0 MoM</td></tr>
              <tr><td><strong>Serbest β-hCG</strong></td><td>↑ Yüksek (&gt;2.0 MoM)</td><td>↓ Düşük</td><td>0.5–2.0 MoM</td></tr>
            </tbody>
          </table>
          <Callout type="info" title="Ek Ultrason Belirteçleri">
            <strong>Burun kemiği yokluğu</strong> Trizomi 21 riskini ~6 kat artırır. <strong>Ductus venosus A dalgası reversal</strong> ve <strong>triküspit regürgitasyonu</strong> da risk hesabına eklenir. Tüm bu belirteçler birlikte değerlendirildiğinde saptama oranı %95'e çıkar.
          </Callout>
        </div>
      </Fade>

      <Fade delay={0.1}>
        <div style={{ background: 'linear-gradient(135deg,#f3eeff,#ede9fe)', borderRadius: '20px', border: '2px solid #c4b5fd', padding: '32px', marginBottom: '48px' }}>
          <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '22px', fontWeight: 800, color: '#0f0e2a', marginBottom: '16px' }}>📊 Risk Sonucunu Nasıl Yorumlarsınız?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { label: '&lt; 1/100', title: 'Yüksek Risk', desc: 'NIPT veya invaziv test (CVS/amniyosentez) önerilir', color: '#991b1b', bg: '#fef2f2' },
              { label: '1/100–1/1000', title: 'Orta Risk', desc: 'NIPT değerlendirilebilir, doktorunuzla konuşun', color: '#92400e', bg: '#fffbeb' },
              { label: '&gt; 1/1000', title: 'Düşük Risk', desc: 'Rutin antenatal takip önerilir', color: '#166534', bg: '#f0fdf4' },
            ].map(({ label, title, desc, color, bg }) => (
              <div key={title} style={{ background: bg, borderRadius: '14px', padding: '20px', textAlign: 'center' as const }}>
                <div style={{ fontSize: '20px', fontWeight: 900, color, marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: label }} />
                <div style={{ fontWeight: 800, color: '#0f0e2a', marginBottom: '6px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
          <Callout type="warning" title="Önemli Hatırlatma">
            Yüksek risk sonucu <strong>tanı değildir</strong>. Trizomi 21 olan bebeklerin ~%5'i düşük riskli tarama sonucuyla da doğabilir. Karar vermeden önce genetik danışmanlık alın.
          </Callout>
        </div>
      </Fade>

      <SectionTitle title="Annede Neler Hissedilir?" sub="İyi haberler geliyor!" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '48px' }}>
        {[
          { icon: '😊', title: 'Bulantı Azalıyor', desc: 'Çoğu annede 12–14. haftadan sonra bulantılar belirgin şekilde azalır. hCG düzeyi bu dönemde plato yapıyor.', color: '#22c55e' },
          { icon: '⚡', title: 'Enerji Geri Dönüyor', desc: '2. trimester yaklaşırken enerji artışı hissedilir. Bu dönemden yararlanın!', color: '#3b82f6' },
          { icon: '👗', title: 'Bel Kalınlaşıyor', desc: 'Karın henüz belirgin değil ama normal kıyafetler dar gelebilir. Esnek bel bantları pratik çözüm.', color: '#8b5cf6' },
          { icon: '🍽️', title: 'İştah Değişiyor', desc: 'Bulantı azaldıkça iştah artabilir. Besin yoğunluğu yüksek yiyecekleri tercih edin.', color: '#f97316' },
        ].map(({ icon, title, desc, color }, i) => (
          <Fade key={title} delay={i * 0.1}>
            <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #f0ecf9', padding: '22px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#0f0e2a', marginBottom: '6px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{desc}</div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}>
        <InfoCard icon="🫀" title="Preeklampsi Riski Değerlendirmesi" color="#D15398" delay={0.1} items={['11–13+6. haftada uterin arter Doppler yapılabilir', 'MAP (ortalama arteryel basınç) ölçümü', 'PAPP-A düzeyi preeklampsi riski ile de ilişkili', 'Yüksek riskli olgularda &lt;16. haftada aspirin başlanır', 'Aspirin 150 mg/gün gece alımı önerilir (ASPRE çalışması)']} />
        <InfoCard icon="✅" title="Bu Dönemde Yapılacaklar" color="#22c55e" delay={0.15} items={['11–13+6. haftada kombine testi FMF merkezinde yaptırın', 'Preeklampsi risk değerlendirmesini sormayı unutmayın', 'İlk trimester ekranında sorulan tüm soruları cevaplayın', 'Sonuçları genetik danışmanla birlikte değerlendirin', 'Folik asit ve gebelik vitaminine devam edin', '2. trimester anomali taramasını planlamaya başlayın']} />
      </div>
    </WeekLayout>
  )
}

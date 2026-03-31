import HizmetLayout from '@/components/HizmetLayout'
export const metadata = { title: 'Anomali Taraması | Fetal Uzman' }

export default function Page() {
  return (
    <HizmetLayout title="Anomali Taraması" subtitle="NT ölçümü, kombine test ve ayrıntılı ultrasonografi" icon="🔬" color="#8b5cf6" category="Prenatal Tanı" sourceText="ISUOG, FMF, ACOG, ACMG Guidelines">

      <Section title="Prenatal Tarama Nedir?">
        <p>Prenatal tarama, gebelik sırasında bebeğin belirli genetik durumlar veya yapısal anomaliler açısından riskini değerlendirmek amacıyla yapılan testlerdir. <strong>Tarama testleri tanı koydurmaz</strong> — olasılık hesaplar. Yüksek risk sonucunda tanısal testler (NIPT, amniyosentez, CVS) önerilir.</p>
      </Section>

      <Section title="1. Trimester Kombine Testi (11–13+6. Hafta)">
        <p>FMF protokolüne göre üç bileşenden oluşur:</p>
        <SubSection title="Ense Saydamlığı (NT) Ölçümü">
          <p>Bebeğin ense bölgesindeki sıvı birikiminin ultrasonla ölçümüdür.</p>
          <ul>
            <li>Normal: <strong>{"< 3.0 mm"}</strong> (ya da {"<"} 95. persentil)</li>
            <li>NT ≥ 3.5 mm: Kardiyak anomali ve genetik sendrom riski artar</li>
            <li>NT ≥ 6 mm: Fetal hidrops, Noonan sendromu açısından değerlendirilmeli</li>
          </ul>
          <Callout type="info" title="Kalite Kriterleri">
            NT ölçümü FMF sertifikalı uzman tarafından, CRL 45–84 mm arasındayken, sagittal kesitte nötral pozisyonda alınmalıdır.
          </Callout>
        </SubSection>

        <SubSection title="Biyokimyasal Belirteçler">
          <table>
            <thead><tr><th>Belirteç</th><th>Trizomi 21</th><th>Trizomi 18/13</th></tr></thead>
            <tbody>
              <tr><td>PAPP-A</td><td>↓ Düşük</td><td>↓↓ Çok düşük</td></tr>
              <tr><td>Serbest β-hCG</td><td>↑ Yüksek</td><td>↓ Düşük</td></tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="Ek Ultrason Belirteçleri">
          <ul>
            <li><strong>Burun kemiği yokluğu:</strong> Trizomi 21 olgularının %60–70'inde</li>
            <li><strong>Ductus venosus A dalgası reversal:</strong> Kalp defekti ve anöploidi ile ilişkili</li>
            <li><strong>Triküspit regürgitasyonu:</strong> Trizomi 21'de daha sık</li>
          </ul>
          <Callout type="success" title="Kombine Test Etkinliği">
            NT + biyokimya + ek belirteçler birlikte kullanıldığında Trizomi 21 için <strong>%95 saptama oranı</strong> ve %2.5 yanlış pozitiflik sağlanır (FMF, 2023).
          </Callout>
        </SubSection>
      </Section>

      <Section title="18–22. Hafta Ayrıntılı Anomali Ultrasonografisi">
        <p>ISUOG Basic Examination (2023) standartlarına göre sistematik fetal anatomi değerlendirmesi yapılır.</p>

        <SubSection title="İncelenen Yapılar">
          <table>
            <thead><tr><th>Sistem</th><th>Değerlendirilen</th></tr></thead>
            <tbody>
              <tr><td>Baş ve beyin</td><td>BPD, HC, lateral ventriküller, cerebellum, cisterna magna, corpus callosum</td></tr>
              <tr><td>Yüz</td><td>Orbita, burun, dudak-damak bütünlüğü</td></tr>
              <tr><td>Boyun</td><td>Kistik higroma, boyun kitlesi</td></tr>
              <tr><td>Kalp</td><td>4 odacık görünümü, çıkış yolları, ritim</td></tr>
              <tr><td>Toraks</td><td>Akciğer ekojenitesi, diyafragma bütünlüğü</td></tr>
              <tr><td>Karın</td><td>Mide, bağırsak, karaciğer, karın duvarı bütünlüğü</td></tr>
              <tr><td>Böbrekler</td><td>Böbrek boyutu, pelvis genişliği, mesane</td></tr>
              <tr><td>Omurga</td><td>Vertebra dizisi, spina bifida taraması</td></tr>
              <tr><td>Ekstremiteler</td><td>Uzun kemik uzunlukları, el/ayak</td></tr>
              <tr><td>Plasenta ve göbek bağı</td><td>Plasenta lokalizasyonu, göbek bağı damarları</td></tr>
            </tbody>
          </table>
        </SubSection>
      </Section>

      <Section title="Prenatal Genetik Testler">
        <SubSection title="NIPT (Non-İnvaziv Prenatal Test)">
          <p>Anne kanındaki serbest fetal DNA analizi ile yapılır. 10. haftadan itibaren uygulanabilir.</p>
          <ul>
            <li>Trizomi 21, 18, 13 için <strong>saptama oranı &gt;%99</strong></li>
            <li>Düşük yanlış pozitiflik oranı (~%0.1)</li>
            <li><strong>Tarama testidir, tanı değildir</strong> — pozitif NIPT invaziv test gerektirir</li>
          </ul>
          <Callout type="warning" title="NIPT Sınırlamaları">
            Çoğul gebeliklerde, plasenta mozaikliğinde ve maternal malignite varlığında NIPT yorumu güçtür. Düşük fetal fraksiyon (&lt;4%) yanlış sonuç riskini artırır.
          </Callout>
        </SubSection>

        <SubSection title="Koryonik Villüs Biyopsisi (CVS)">
          <p>10–13. haftada plasenta dokusu alınarak gerçekleştirilen invaziv testtir.</p>
          <ul>
            <li>İşlem kayıp riski: <strong>%0.5–1</strong></li>
            <li>Sonuç süresi: 2–3 gün (hızlı FISH), 2–3 hafta (kültür)</li>
          </ul>
        </SubSection>

        <SubSection title="Amniyosentez">
          <p>Genellikle 15–20. haftada amniyotik sıvıdan fetal hücre alınmasıdır.</p>
          <ul>
            <li>İşlem kayıp riski: <strong>%0.1–0.3</strong></li>
            <li>Altın standart tanı testi</li>
            <li>Sonuç süresi: 7–14 gün</li>
          </ul>
        </SubSection>
      </Section>

      <Sources items={[
        'ISUOG Practice Guidelines: Performance of First-Trimester Fetal Ultrasound Scan (2023)',
        'ISUOG Basic Training Ultrasound Curriculum (2014)',
        'FMF: Screening for Chromosomal Abnormalities at 11–13 Weeks (2023)',
        'ACMG Practice Guidelines: Prenatal Screening and Diagnosis (2023)',
        'ACOG Practice Bulletin No. 226: Cell-Free DNA Screening (2020)',
      ]} />
    </HizmetLayout>
  )
}
function Section({ title, children }: any) { return (<section style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '26px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f0ecf9' }}>{title}</h2><div style={{ fontSize: '16px', lineHeight: 1.85, color: '#444' }}>{children}</div></section>) }
function SubSection({ title, children }: any) { return (<div style={{ marginBottom: '24px' }}><h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#1a1840', marginBottom: '12px' }}>{title}</h3><div>{children}</div></div>) }
function Callout({ type, title, children }: any) { const s: any = { info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: 'ℹ️' }, warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', icon: '⚠️' }, danger: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🚨' }, success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' } }; const c = s[type]; return (<div style={{ margin: '20px 0', padding: '16px 20px', borderRadius: '12px', background: c.bg, border: `1.5px solid ${c.border}` }}><div style={{ fontWeight: 700, color: c.text, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}><span>{c.icon}</span>{title}</div><div style={{ fontSize: '15px', color: c.text, lineHeight: 1.7 }}>{children}</div></div>) }
function Sources({ items }: any) { return (<div style={{ marginTop: '60px', padding: '24px', background: '#f8f6ff', borderRadius: '16px', border: '1px solid #e8e4f8' }}><h4 style={{ fontSize: '13px', fontWeight: 800, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>📚 Kaynaklar</h4><ul style={{ margin: 0, paddingLeft: '20px' }}>{items.map((s: string) => <li key={s} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>{s}</li>)}</ul><p style={{ fontSize: '12px', color: '#aaa', marginTop: '12px', marginBottom: 0 }}>Bu sayfa genel bilgilendirme amaçlıdır.</p></div>) }

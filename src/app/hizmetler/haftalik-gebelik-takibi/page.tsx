import HizmetLayout from '@/components/HizmetLayout'

export const metadata = {
  title: 'Haftalık Gebelik Takibi | Fetal Uzman',
  description: 'Gebeliğin 1. haftasından 40. haftasına kadar haftalık takip rehberi. ACOG ve ISUOG kılavuzlarına dayalı bilgiler.',
}

export default function Page() {
  return (
    <HizmetLayout
      title="Haftalık Gebelik Takibi"
      subtitle="1. haftadan 40. haftaya kanıta dayalı rehberlik"
      icon="🗓️"
      color="#D15398"
      category="Gebelik Takibi"
      sourceText="ACOG Practice Bulletin, ISUOG Guidelines, WHO Antenatal Care"
    >

      <Section title="Gebelik Takibi Neden Önemlidir?">
        <p>
          Düzenli antenatal (doğum öncesi) takip, anne ve bebek sağlığı açısından en temel koruyucu önlemlerden biridir.
          Dünya Sağlık Örgütü (WHO) 2016 kılavuzu, tüm gebelere en az <strong>8 antenatal ziyaret</strong> önermektedir.
          Bu ziyaretler; komplikasyonların erken tespitini, gerekli taramaların zamanında yapılmasını
          ve anne adayının gebelik süreci hakkında bilgilendirilmesini kapsar.
        </p>
      </Section>

      <Section title="Trimesterlere Göre Takip Takvimi">
        <SubSection title="🌱 Birinci Trimester (1–13. Hafta)">
          <p>Bu dönemde yapılması önerilen başlıca değerlendirmeler şunlardır:</p>
          <ul>
            <li><strong>İlk obstetri muayenesi:</strong> Gebelik konfirmasyonu, kan grubu, tam kan sayımı, rubella/toksoplazmoz/hepatit B/HIV taramaları</li>
            <li><strong>11–13+6. hafta kombine testi:</strong> Ense saydamlığı (NT) ölçümü + PAPP-A + serbest β-hCG ile trizomi 21, 18 ve 13 için risk hesabı</li>
            <li><strong>Burun kemiği değerlendirmesi:</strong> Trizomi 21 taramasında ek belirteç</li>
            <li><strong>Uterin arter Doppler:</strong> Yüksek riskli olgularda preeklampsi riski değerlendirmesi</li>
          </ul>
          <Callout type="info" title="ISUOG Önerisi">
            11–13+6. hafta ultrasonografisi deneyimli ellerde, FMF (Fetal Medicine Foundation) protokolüne uygun şekilde yapılmalıdır. NT ölçümü için kalite kriterleri belirlenmiştir.
          </Callout>
        </SubSection>

        <SubSection title="🌸 İkinci Trimester (14–27. Hafta)">
          <ul>
            <li><strong>15–20. hafta üçlü/dörtlü test:</strong> NTD ve Down Sendromu için ek tarama (kombine test yapılmamışsa)</li>
            <li><strong>18–22. hafta ayrıntılı anomali ultrasonografisi:</strong> Fetal anatominin sistematik değerlendirmesi — ISUOG Basic Examination standartlarına göre</li>
            <li><strong>Plasenta lokalizasyonu:</strong> Plasenta previa taraması</li>
            <li><strong>24–28. hafta gestasyonel diyabet taraması:</strong> 50g GCT (eşik değer ≥140 mg/dL ise 100g OGTT)</li>
            <li><strong>Kan sayımı ve idrar kültürü</strong></li>
          </ul>
        </SubSection>

        <SubSection title="🌟 Üçüncü Trimester (28–40. Hafta)">
          <ul>
            <li><strong>28. hafta:</strong> Rh negatif annelere anti-D immünoglobulin (RhoGAM), anemi taraması</li>
            <li><strong>28–32. hafta:</strong> Fetal büyüme ultrasonografisi, prezantasyon değerlendirmesi</li>
            <li><strong>35–37. hafta:</strong> Grup B Streptokok (GBS) vajinal/rektal kültür</li>
            <li><strong>36. haftadan itibaren:</strong> Haftalık izlem, serviks değerlendirmesi, non-stres test (NST) gerekirse</li>
            <li><strong>41. hafta:</strong> Postterm gebelik yönetimi — indüksiyon veya yoğunlaştırılmış fetal izlem</li>
          </ul>
          <Callout type="warning" title="Önemli">
            Üçüncü trimesterde bebeğin hareketleri azalırsa veya durursa hemen doktorunuzu arayın ya da acil servise başvurun. Günde en az 10 hareket beklenir.
          </Callout>
        </SubSection>
      </Section>

      <Section title="Rutin Antenatal Testler">
        <table>
          <thead><tr><th>Test</th><th>Zamanlama</th><th>Amaç</th></tr></thead>
          <tbody>
            <tr><td>Kan grubu + indirekt Coombs</td><td>İlk ziyaret</td><td>Rh uyuşmazlığı</td></tr>
            <tr><td>Tam kan sayımı</td><td>İlk ziyaret, 28. hafta</td><td>Anemi taraması</td></tr>
            <tr><td>Rubella IgG</td><td>İlk ziyaret</td><td>Bağışıklık durumu</td></tr>
            <tr><td>Hepatit B yüzey antijeni</td><td>İlk ziyaret</td><td>Anneden bebeğe geçiş riski</td></tr>
            <tr><td>HIV</td><td>İlk ziyaret</td><td>Vertikal geçişin önlenmesi</td></tr>
            <tr><td>İdrar kültürü</td><td>İlk ziyaret</td><td>Asemptomatik bakteriüri</td></tr>
            <tr><td>50g GCT</td><td>24–28. hafta</td><td>GDM taraması</td></tr>
            <tr><td>GBS kültürü</td><td>35–37. hafta</td><td>Neonatal GBS hastalığı önleme</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="Kilo Alımı Önerileri">
        <p>ACOG ve IOM (Institute of Medicine) kılavuzlarına göre gebelikte önerilen kilo alımı:</p>
        <table>
          <thead><tr><th>Gebelik Öncesi VKİ</th><th>Önerilen Toplam Kilo</th><th>2-3. Trimester Haftalık</th></tr></thead>
          <tbody>
            <tr><td>{"<18.5 (Zayıf)"}</td><td>12.5–18 kg</td><td>0.5 kg/hafta</td></tr>
            <tr><td>18.5–24.9 (Normal)</td><td>11.5–16 kg</td><td>0.4 kg/hafta</td></tr>
            <tr><td>25–29.9 (Fazla kilolu)</td><td>7–11.5 kg</td><td>0.3 kg/hafta</td></tr>
            <tr><td>{">30 (Obez)"}</td><td>5–9 kg</td><td>0.2 kg/hafta</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="Folik Asit ve Vitamin Takviyesi">
        <p>
          Nöral tüp defektlerinin önlenmesi için gebelikten en az <strong>1 ay önce</strong> başlanarak
          ilk trimester boyunca <strong>günde 400–800 mcg folik asit</strong> alınması önerilmektedir
          (ACOG Committee Opinion). Nöral tüp defekti öyküsü olanlar için doz 4 mg/gün'e çıkarılır.
        </p>
        <Callout type="success" title="Demir ve D Vitamini">
          WHO, tüm gebelere günde 30–60 mg elemental demir ve 600 IU D vitamini önermektedir.
          D vitamini eksikliği preeklampsi, GDM ve düşük doğum ağırlığı ile ilişkilendirilmiştir.
        </Callout>
      </Section>

      <Sources items={[
        'ACOG Practice Bulletin No. 230: Preterm Labor (2021)',
        'ISUOG Practice Guidelines: Performance of First-Trimester Fetal Ultrasound Scan (2013, updated 2023)',
        'WHO Recommendations on Antenatal Care for a Positive Pregnancy Experience (2016)',
        'IOM/NRC: Weight Gain During Pregnancy: Reexamining the Guidelines (2009)',
        'ACOG Committee Opinion 804: Physical Activity and Exercise During Pregnancy (2020)',
      ]} />
    </HizmetLayout>
  )
}

function Section({ title, children }: any) {
  return (
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '26px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f0ecf9' }}>
        {title}
      </h2>
      <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#444' }}>{children}</div>
    </section>
  )
}

function SubSection({ title, children }: any) {
  return (
    <div style={{ marginBottom: '24px', paddingLeft: '0' }}>
      <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#1a1840', marginBottom: '12px' }}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

function Callout({ type, title, children }: any) {
  const s: any = {
    info:    { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: 'ℹ️' },
    warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', icon: '⚠️' },
    danger:  { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🚨' },
    success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' },
  }
  const c = s[type]
  return (
    <div style={{ margin: '20px 0', padding: '16px 20px', borderRadius: '12px', background: c.bg, border: `1.5px solid ${c.border}` }}>
      <div style={{ fontWeight: 700, color: c.text, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{c.icon}</span>{title}
      </div>
      <div style={{ fontSize: '15px', color: c.text, lineHeight: 1.7 }}>{children}</div>
    </div>
  )
}

function Sources({ items }: any) {
  return (
    <div style={{ marginTop: '60px', padding: '24px', background: '#f8f6ff', borderRadius: '16px', border: '1px solid #e8e4f8' }}>
      <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>📚 Kaynaklar</h4>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {items.map((s: string) => <li key={s} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>{s}</li>)}
      </ul>
      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '12px', marginBottom: 0 }}>
        Bu sayfa genel bilgilendirme amaçlıdır. Kişisel tıbbi tavsiye için doktorunuza danışın.
      </p>
    </div>
  )
}

import HizmetLayout from '@/components/HizmetLayout'
export const metadata = { title: 'Fetal Büyüme Takibi | Fetal Uzman' }
export default function Page() {
  return (
    <HizmetLayout title="Fetal Büyüme Takibi" subtitle="Doppler ultrasonografi ve biyometri değerlendirmesi" icon="📊" color="#22c55e" category="Fetal İzlem" sourceText="ISUOG, ACOG, Perinatal Society Guidelines">

      <Section title="Fetal Büyüme Kısıtlılığı (FGR) Nedir?">
        <p>Fetal büyüme kısıtlılığı (FGR), bebeğin genetik büyüme potansiyelini gerçekleştirememesi durumudur. Tahmini fetal ağırlık (EFW) veya karın çevresi (AC) {"<"}10. persentil olduğunda tanımlanır. Plasental yetmezlik, genetik nedenler veya enfeksiyon ile ilişkili olabilir.</p>
        <Callout type="warning" title="Neden Önemli?">
          FGR, perinatal mortalite ve morbiditenin önde gelen nedenidir. Erken tanı ve uygun izlem ile bebeğin zamanında doğurtulması hayat kurtarıcıdır.
        </Callout>
      </Section>

      <Section title="Fetal Biyometri">
        <SubSection title="Temel Ölçümler">
          <table>
            <thead><tr><th>Ölçüm</th><th>Kısaltma</th><th>Klinik Önemi</th></tr></thead>
            <tbody>
              <tr><td>Biparietal çap</td><td>BPD</td><td>Kafa gelişimi, gestasyon yaşı</td></tr>
              <tr><td>Baş çevresi</td><td>HC</td><td>Beyin büyümesi</td></tr>
              <tr><td>Karın çevresi</td><td>AC</td><td>Karaciğer glikojeni, nutrisyon durumu</td></tr>
              <tr><td>Femur uzunluğu</td><td>FL</td><td>Uzun kemik gelişimi</td></tr>
              <tr><td>Tahmini fetal ağırlık</td><td>EFW</td><td>Hadlock formülü ile hesaplama</td></tr>
            </tbody>
          </table>
        </SubSection>
      </Section>

      <Section title="Doppler Ultrasonografi">
        <SubSection title="Umbilikal Arter Doppler">
          <p>Plasental direnç ile ilişkilidir. PI artar → plasental yetmezlik şüphesi.</p>
          <ul>
            <li><strong>Normal:</strong> Sürekli ileri diyastolik akım</li>
            <li><strong>AEDF (Absent End-Diastolic Flow):</strong> Acil değerlendirme gerektirir</li>
            <li><strong>REDF (Reversed EDF):</strong> Çok yüksek perinatal mortalite riski — hızlı karar gerektirir</li>
          </ul>
          <Callout type="danger" title="REDF Varsa">
            Umbilikal arterde ters diyastolik akım, fetal asidoz ile güçlü biçimde ilişkilidir. İleri gestasyon yaşına (≥34 hafta) göre doğum kararı verilmesi gerekebilir.
          </Callout>
        </SubSection>
        <SubSection title="Orta Serebral Arter (MCA) Doppler">
          <p>Serebral vazodilatasyon (beyin koruma refleksi) takibinde kullanılır.</p>
          <ul>
            <li>MCA PSV {">"} 1.5 MoM → Fetal anemi şüphesi (alloimmünizasyon olgularında)</li>
            <li>CPR (Cerebroplacental ratio) = MCA PI / UA PI {"<"} 1 → Artmış kötü perinatal sonuç riski</li>
          </ul>
        </SubSection>
        <SubSection title="Ductus Venosus (DV) Doppler">
          <p>Kardiyak fonksiyonun son izlem parametresidir. A dalgası reversal → kardiyak yetmezlik, doğum kararı.</p>
        </SubSection>
      </Section>

      <Section title="FGR Yönetim Algoritması">
        <p>ISUOG (2020) ve Perinatal Society kılavuzlarına göre:</p>
        <ul>
          <li><strong>EFW 3–10. persentil:</strong> 2 haftada bir büyüme ultrasonografisi + haftalık Doppler</li>
          <li><strong>EFW {"<"} 3. persentil:</strong> Haftada iki Doppler, NST, biyofizik profil</li>
          <li><strong>AEDF:</strong> Hospitalizasyon değerlendirmesi, betametazon, yoğun izlem</li>
          <li><strong>REDF veya DV reversal:</strong> 26–28. haftadan itibaren doğum kararı</li>
        </ul>
      </Section>

      <Sources items={[
        'ISUOG Practice Guidelines: Role of Ultrasound in Screening the Low-Risk Pregnant Woman for Fetal Structural Anomalies and Placenta (2020)',
        'ISUOG Practice Guidelines: Diagnosis and Management of Small-for-Gestational-Age Fetus and Fetal Growth Restriction (2020)',
        'ACOG Practice Bulletin No. 204: Fetal Growth Restriction (2019)',
        'Salomon LJ et al. ISUOG Practice Guidelines: Ultrasound Assessment of Fetal Biometry and Growth (2019)',
      ]} />
    </HizmetLayout>
  )
}
function Section({ title, children }: any) { return (<section style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '26px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f0ecf9' }}>{title}</h2><div style={{ fontSize: '16px', lineHeight: 1.85, color: '#444' }}>{children}</div></section>) }
function SubSection({ title, children }: any) { return (<div style={{ marginBottom: '24px' }}><h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#1a1840', marginBottom: '12px' }}>{title}</h3><div>{children}</div></div>) }
function Callout({ type, title, children }: any) { const s: any = { info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: 'ℹ️' }, warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', icon: '⚠️' }, danger: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🚨' }, success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' } }; const c = s[type]; return (<div style={{ margin: '20px 0', padding: '16px 20px', borderRadius: '12px', background: c.bg, border: `1.5px solid ${c.border}` }}><div style={{ fontWeight: 700, color: c.text, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}><span>{c.icon}</span>{title}</div><div style={{ fontSize: '15px', color: c.text, lineHeight: 1.7 }}>{children}</div></div>) }
function Sources({ items }: any) { return (<div style={{ marginTop: '60px', padding: '24px', background: '#f8f6ff', borderRadius: '16px', border: '1px solid #e8e4f8' }}><h4 style={{ fontSize: '13px', fontWeight: 800, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>📚 Kaynaklar</h4><ul style={{ margin: 0, paddingLeft: '20px' }}>{items.map((s: string) => <li key={s} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>{s}</li>)}</ul></div>) }

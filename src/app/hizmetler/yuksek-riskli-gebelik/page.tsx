import HizmetLayout from '@/components/HizmetLayout'
export const metadata = { title: 'Yüksek Riskli Gebelik | Fetal Uzman' }
export default function Page() {
  return (
    <HizmetLayout title="Yüksek Riskli Gebelik" subtitle="Preeklampsi, GDM ve komplikasyon yönetimi" icon="⚠️" color="#f97316" category="Maternal-Fetal Tıp" sourceText="ACOG, NICE, ISSHP, ADA Guidelines">
      <Section title="Yüksek Riskli Gebelik Nedir?">
        <p>Anne veya bebek için normal gebeliğe kıyasla artmış komplikasyon riski taşıyan gebeliklerdir. Pregestasyonel hastalıklar, gebeliğe özgü durumlar veya fetal faktörler bu riskleri oluşturabilir.</p>
      </Section>

      <Section title="Preeklampsi">
        <p>Gebeliğin 20. haftasından sonra ortaya çıkan <strong>hipertansiyon + organ hasarı</strong> ile tanımlanan sendromdur. Maternal mortalite ve morbiditenin önde gelen nedenlerindendir.</p>

        <SubSection title="Tanı Kriterleri (ISSHP 2022)">
          <p>Sistolik KB ≥140 mmHg veya diyastolik KB ≥90 mmHg, en az 4 saat arayla iki ölçümde + aşağıdakilerden en az biri:</p>
          <ul>
            <li>Proteinüri (≥300 mg/24s veya protein/kreatinin ≥0.3)</li>
            <li>Trombositopeni (&lt;100.000/μL)</li>
            <li>Renal yetmezlik (kreatinin &gt;1.1 mg/dL)</li>
            <li>Karaciğer fonksiyon bozukluğu (AST/ALT 2× normal)</li>
            <li>Pulmoner ödem</li>
            <li>Yeni başlayan baş ağrısı veya görme bozukluğu</li>
          </ul>
          <Callout type="danger" title="Acil Bulgular">
            Sistolik KB ≥160 mmHg, şiddetli baş ağrısı, görme bozukluğu, epigastrik ağrı veya nöbet varsa HEMEN hastaneye başvurun.
          </Callout>
        </SubSection>

        <SubSection title="Aspirin Profilaksisi">
          <p>ASPRE çalışması (Rolnik et al., NEJM 2017) ve Cochrane meta-analizlerine göre:</p>
          <ul>
            <li><strong>Doz:</strong> 150 mg/gün (Türkiye'de genellikle 100 mg)</li>
            <li><strong>Başlama:</strong> 11–16. haftalar arası (ne kadar erken, o kadar etkili)</li>
            <li><strong>Bitiş:</strong> 36. hafta</li>
            <li><strong>Alım zamanı:</strong> Gece yatmadan önce (etkinliği artırır)</li>
          </ul>
          <Callout type="info" title="Kimler Aday?">
            Önceki gebelikte preeklampsi, kronik HT, böbrek hastalığı, diyabet, SLE/AFS — bu yüksek risk faktörlerinden biri varsa aspirin önerilir. Orta risk faktörlerinde (ilk gebelik, obezite, ileri yaş, aile öyküsü) iki veya daha fazlası varsa yine önerilir.
          </Callout>
        </SubSection>
      </Section>

      <Section title="Gestasyonel Diyabet (GDM)">
        <SubSection title="Tarama ve Tanı">
          <p><strong>ACOG (2023)</strong> ve <strong>ADA (2024)</strong> kılavuzlarına göre:</p>
          <ul>
            <li>24–28. haftada tüm gebelere <strong>50g GCT</strong> (açlık gerekmez)</li>
            <li>1 saat sonra glukoz ≥140 mg/dL → <strong>100g OGTT</strong> (Carpenter-Coustan kriterleri)</li>
            <li>OGTT eşik değerleri: açlık ≥95, 1.s ≥180, 2.s ≥155, 3.s ≥140 mg/dL — iki veya daha fazlası karşılanırsa tanı</li>
          </ul>
        </SubSection>

        <SubSection title="GDM Yönetimi">
          <ul>
            <li><strong>İlk adım:</strong> Tıbbi beslenme tedavisi + egzersiz (2 hafta)</li>
            <li><strong>Hedef glukozlar:</strong> Açlık &lt;95, postprandiyal 1.s &lt;140, 2.s &lt;120 mg/dL</li>
            <li><strong>İlaç tedavisi:</strong> Hedeflere ulaşılamazsa insülin (tercih edilen) veya metformin</li>
            <li><strong>Fetal izlem:</strong> 32. haftadan itibaren NST, ultrasonla büyüme takibi</li>
          </ul>
          <Callout type="warning" title="Doğum Sonrası">
            GDM olan annelerin %50'sinde 10 yıl içinde Tip 2 DM gelişir. Doğumdan 4–12 hafta sonra 75g OGTT ile tekrar değerlendirilmelidir.
          </Callout>
        </SubSection>
      </Section>

      <Section title="Erken Doğum Riski">
        <p>Doğumların yaklaşık <strong>%10'u pretermdir</strong> (&lt;37. hafta). Mortalite ve uzun dönem morbiditenin en önemli nedenidir.</p>
        <SubSection title="Progesteron Profilaksisi">
          <ul>
            <li><strong>Endikasyon:</strong> Önceki spontan preterm doğum öyküsü veya servikal uzunluk &lt;25 mm</li>
            <li><strong>Vajinal progesteron:</strong> 16–36. haftalarda 200 mg/gün (FIGO önerisi)</li>
            <li><strong>17-OHPC:</strong> Tekrarlayan preterm doğumda IM enjeksiyon</li>
          </ul>
        </SubSection>
        <SubSection title="Servikal Serklaj">
          <p>Servikal yetmezlik olgularında veya ikinci trimesterde servikal kısalma saptananlarda değerlendirilir. ACOG Practice Bulletin No. 234 (2021) kriterlerine göre karar verilir.</p>
        </SubSection>
        <Callout type="danger" title="Acil Bulgu">
          Saatte 4'ten fazla düzenli kasılma, vajinal kanama veya su gelmesi durumunda HEMEN hastaneye başvurun.
        </Callout>
      </Section>

      <Sources items={[
        'ISSHP: The Classification, Diagnosis and Management of the Hypertensive Disorders of Pregnancy (2022)',
        'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia (2020)',
        'ADA Standards of Care in Diabetes — Section 15: Management of Diabetes in Pregnancy (2024)',
        'ACOG Practice Bulletin No. 234: Cerclage for the Management of Cervical Insufficiency (2021)',
        'Rolnik DL et al. Aspirin versus Placebo in Pregnancies at High Risk for Preterm Preeclampsia. NEJM 2017',
      ]} />
    </HizmetLayout>
  )
}
function Section({ title, children }: any) { return (<section style={{ marginBottom: '48px' }}><h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '26px', fontWeight: 800, color: '#0f0e2a', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f0ecf9' }}>{title}</h2><div style={{ fontSize: '16px', lineHeight: 1.85, color: '#444' }}>{children}</div></section>) }
function SubSection({ title, children }: any) { return (<div style={{ marginBottom: '24px' }}><h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#1a1840', marginBottom: '12px' }}>{title}</h3><div>{children}</div></div>) }
function Callout({ type, title, children }: any) { const s: any = { info: { bg: '#eff6ff', border: '#bfdbfe', text: '#1e40af', icon: 'ℹ️' }, warning: { bg: '#fffbeb', border: '#fde68a', text: '#92400e', icon: '⚠️' }, danger: { bg: '#fef2f2', border: '#fecaca', text: '#991b1b', icon: '🚨' }, success: { bg: '#f0fdf4', border: '#bbf7d0', text: '#166534', icon: '✅' } }; const c = s[type]; return (<div style={{ margin: '20px 0', padding: '16px 20px', borderRadius: '12px', background: c.bg, border: `1.5px solid ${c.border}` }}><div style={{ fontWeight: 700, color: c.text, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}><span>{c.icon}</span>{title}</div><div style={{ fontSize: '15px', color: c.text, lineHeight: 1.7 }}>{children}</div></div>) }
function Sources({ items }: any) { return (<div style={{ marginTop: '60px', padding: '24px', background: '#f8f6ff', borderRadius: '16px', border: '1px solid #e8e4f8' }}><h4 style={{ fontSize: '13px', fontWeight: 800, color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>📚 Kaynaklar</h4><ul style={{ margin: 0, paddingLeft: '20px' }}>{items.map((s: string) => <li key={s} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>{s}</li>)}</ul></div>) }

"use client";

import { useEffect, useRef, useState } from "react";

const CAL_LINK = "https://cal.eu/fetaluzman";

export default function DanismanlikPage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      id: 1,
      name: "Hızlı Danışmanlık",
      duration: "20 dakika",
      price: "499",
      priceNote: undefined,
      description: "Sorularınız için hızlı uzman görüşü, Kısa bir süre bu fiyata",
      features: [
        "Google Meet görüşmesi",
        "Soru odaklı değerlendirme",
        "Ultrason / test sonucu yorumu",
        "Yönlendirme ve öneri",
      ],
      highlighted: false,
      badge: null as string | null,
      calLink: "https://cal.eu/fetaluzman/15min",
    },
    {
      id: 2,
      name: "Rapor Danışmanlığı",
      duration: "Yazılı rapor",
      price: "750",
      priceNote: undefined,
      description: "Ultrason / test sonucunuzu paylaşın, yazılı değerlendirme raporu hazırlayalım",
      features: [
        "Dosya/görüntü paylaşımı",
        "Detaylı yazılı değerlendirme",
        "Yol haritası ve öneriler",
        "Sonraki adımlar planı",
      ],
      highlighted: false,
      badge: null as string | null,
      calLink: "https://cal.eu/fetaluzman/30min",
    },
    {
      id: 3,
      name: "Aylık WhatsApp Paketi",
      duration: "1 ay",
      price: "3.000",
      priceNote: "1 görüşme dahil",
      description: "Bir ay kesintisiz WhatsApp desteği + 1 görüşme",
      features: [
        "1 ay WhatsApp danışmanlığı",
        "1 adet Google Meet görüşmesi",
        "Ultrason fotoğrafı yorumlama",
        "Mesai saatleri içinde hızlı yanıt",
        "Takip ve yönlendirme",
      ],
      highlighted: true,
      badge: "En Popüler" as string | null,
      calLink: "https://cal.eu/fetaluzman/aylik-whatsapp-paketi",
    },
    {
      id: 4,
      name: "Gebelik Boyunca Paket",
      duration: "Tüm gebelik",
      price: "9.000",
      priceNote: "1 görüşme dahil",
      description: "Gebelik boyunca WhatsApp danışma hattı + 1 görüşme",
      features: [
        "Gebelik boyunca WhatsApp hattı",
        "1 adet Google Meet görüşmesi",
        "Ultrason fotoğrafı yorumlama",
        "Öncelikli yanıt süresi",
        "Doğuma kadar tam destek",
      ],
      highlighted: false,
      badge: null as string | null,
      calLink: "https://cal.eu/fetaluzman/gebelik-boyunca-paket",
    },
  ];

  const credentials = [
    { icon: "🏥", label: "Uzmanlık", value: "Kadın Hastalıkları ve Doğum — Ankara Bilkent Şehir Hastanesi, 2021" },
    { icon: "🇺🇸", label: "Gözlem Programı", value: "Brigham & Women's Hospital / Harvard Medical School, 2020" },
    { icon: "🇬🇧", label: "Fellowship", value: "King's College London, Fetal Medicine — Prof. K. Nicolaides, 2025" },
    { icon: "📋", label: "Üyelikler", value: "TJOD, AIUM, ISUOG" },
    { icon: "🔬", label: "Eğitim", value: "FMF Courses — 9 modül (2025)..." },
  ];

  const publications = [
    {
      journal: "Journal of Obstetrics and Gynaecology, 2023",
      title: "İnfertilite süresi ve folikül boyutunun gebelik başarısına etkisi",
    },
    {
      journal: "AJOG Global Reports, 2022",
      title: "Makine öğrenmesi ile uterin dehisans tahmini",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(209,83,152,0.18) 0%, transparent 70%), #0a0a1a",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&auto=format&fit=crop&q=60"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(10,10,26,0.5) 0%, rgba(10,10,26,0.97) 100%)" }}
          />
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D15398 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1B1B45 0%, transparent 70%)", filter: "blur(30px)" }} />

        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D15398]/30 bg-[#D15398]/10 text-[#D15398] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D15398] animate-pulse" />
            Online Danışmanlık — Randevu Açık
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Gebeliğinizde{" "}
            <span style={{ background: "linear-gradient(135deg, #D15398 0%, #e87fc0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              uzman
            </span>{" "}
            desteği
          </h1>

          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Kadın Doğum Uzmanı", "FMF Fellowship — Londra"].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-white/5 text-white/70">
                {badge}
              </span>
            ))}
          </div>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #D15398 0%, #b8407e 100%)", boxShadow: "0 0 40px rgba(209,83,152,0.3)" }}
          >
            Randevu Al
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── GÖRSEL BANNER ── */}
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden relative" style={{ height: 240 }}>
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1400&auto=format&fit=crop&q=80"
            alt="Online danışmanlık"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-center px-8 md:px-14"
            style={{ background: "linear-gradient(to right, rgba(10,10,26,0.92) 50%, transparent 100%)" }}
          >
            <p className="text-[#D15398] text-xs font-semibold mb-2 tracking-widest uppercase">Neden Online Danışmanlık?</p>
            <h3 className="text-xl md:text-3xl font-bold text-white max-w-sm leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Evinizin konforunda<br />uzman görüşü
            </h3>
            <p className="text-white/55 text-sm mt-3 max-w-xs hidden md:block">
              Ultrason sonuçlarınızı, test raporlarınızı paylaşın — birlikte değerlendirelim.
            </p>
          </div>
        </div>
      </section>

      {/* ── PAKETLER ── */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Danışmanlık Paketleri
          </h2>
          <p className="text-white/50">Gizli maliyet yok. İhtiyacınıza uygun paketi seçin.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className="relative rounded-2xl p-6 flex flex-col"
              style={{
                background: pkg.highlighted
                  ? "linear-gradient(145deg, rgba(209,83,152,0.2) 0%, rgba(27,27,69,0.6) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: pkg.highlighted ? "1px solid rgba(209,83,152,0.5)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: pkg.highlighted ? "0 0 60px rgba(209,83,152,0.15)" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${0.15 + i * 0.1}s, transform 0.7s ease ${0.15 + i * 0.1}s`,
              }}
            >
              {pkg.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #D15398, #b8407e)" }}
                >
                  {pkg.badge}
                </div>
              )}

              <div className="mb-4">
                <p className="text-white/40 text-xs mb-1">{pkg.duration}</p>
                <h3 className="text-base font-bold mb-1.5 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {pkg.name}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed">{pkg.description}</p>
              </div>

              <div className="mb-5">
                <span className="text-3xl font-bold text-white">₺{pkg.price}</span>
                {pkg.priceNote && <p className="text-white/40 text-xs mt-1">{pkg.priceNote}</p>}
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/65">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#D15398" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={pkg.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={
                  pkg.highlighted
                    ? { background: "linear-gradient(135deg, #D15398 0%, #b8407e 100%)", color: "white", boxShadow: "0 0 30px rgba(209,83,152,0.4)" }
                    : { border: "1px solid rgba(209,83,152,0.4)", color: "#D15398" }
                }
              >
                Randevu Al →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÖZGEÇMİŞ ── */}
      <section className="px-4 py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8 rounded-2xl overflow-hidden" style={{ maxHeight: 300 }}>
                <img
                  src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&auto=format&fit=crop&q=80"
                  alt="Kadın doğum uzmanı"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#D15398] text-xs font-semibold tracking-widest uppercase mb-4 block">Hakkımda</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Dr. Mervenur Kement
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 text-sm">
                Kadın Hastalıkları ve Doğum Uzmanıyım. Uzmanlığımı Ankara Bilkent Şehir
                Hastanesi'nde tamamladım. 2020 yılında Harvard Medical School bünyesindeki
                Brigham and Women's Hospital'da yüksek riskli ultrason ve maternal-fetal tıp
                gözlem programına katıldım.
              </p>
              <p className="text-white/60 leading-relaxed mb-4 text-sm">
                2025 yılında King's College London'da Prof. Kypros Nicolaides liderliğindeki
                FMF Fetal Medicine Fellowship programına başladım. 3 çocuk annesi olarak hem
                tıbbi hem kişisel deneyimimi hastalarımla paylaşıyorum.
              </p>
              <p className="text-white/60 leading-relaxed italic text-sm">
                "Doktor olarak biliyordum. Anne olunca anladım. Uluslarası standartlarda, anne inceliği ile değerlendirme için yanınızdayım."
              </p>
            </div>

            <div className="space-y-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{c.label}</p>
                    <p className="text-white/85 text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-base font-semibold mb-5 text-white/80">Bilimsel Yayınlar</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {publications.map((p) => (
                <div
                  key={p.title}
                  className="p-5 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-[#D15398] text-xs mb-2">{p.journal}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="px-4 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Sık Sorulan Sorular
        </h2>
        <div className="space-y-3">
          {[
            { q: "Görüşme nasıl gerçekleşiyor?", a: "Randevunuzu onayladıktan sonra Google Meet linki e-postanıza iletilir. Ultrason görüntülerinizi veya test sonuçlarınızı görüşme öncesi paylaşabilirsiniz." },
            { q: "WhatsApp paketi nasıl çalışıyor?", a: "1 ay boyunca mesai saatleri içinde sorularınızı WhatsApp üzerinden iletebilirsiniz. Paket ayrıca 1 adet Google Meet görüşmesi de içermektedir." },
            { q: "Ödemeyi nasıl yapacağım?", a: "Randevu alırken online ödeme yapabilirsiniz. iyzico altyapısıyla güvenli kart ile ödeme kabul edilmektedir." },
            { q: "İkinci görüş için başvurabilir miyim?", a: "Evet. Başka bir merkezdeki bulguları veya test sonuçlarını benimle paylaşabilir, bağımsız uzman görüşü alabilirsiniz." },
            { q: "Acil durumda ne yapmalıyım?", a: "Acil tıbbi durumlarda lütfen en yakın sağlık kuruluşuna başvurun. Online danışmanlık acil tıbbi müdahalenin yerini tutmaz." },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <summary
                className="flex items-center justify-between px-5 py-4 cursor-pointer text-white/80 text-sm font-medium hover:text-white transition-colors list-none"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {item.q}
                <svg className="w-4 h-4 text-[#D15398] transition-transform group-open:rotate-180 flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 py-4 text-white/55 text-sm leading-relaxed" style={{ background: "rgba(255,255,255,0.02)" }}>
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-20 text-center">
        <div
          className="max-w-2xl mx-auto rounded-3xl p-10 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(209,83,152,0.15) 0%, rgba(27,27,69,0.4) 100%)",
            border: "1px solid rgba(209,83,152,0.2)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Sorunuz mu var?
          </h2>
          <p className="text-white/50 mb-8 text-sm">Yalnız değilsiniz. Randevunuzu alın, birlikte konuşalım.</p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #D15398 0%, #b8407e 100%)", boxShadow: "0 0 50px rgba(209,83,152,0.35)" }}
          >
            Randevu Al
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

import { LogoMark } from "@/components/Logo";

// Uygulama ekranlarının sade HTML maketleri (gerçek ekran görüntüsü değil; renkler ve yerleşim uygulamayla aynı).

export function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[260px] h-[540px] shrink-0 rounded-[2.6rem] bg-ink p-2.5 shadow-[0_30px_80px_rgba(30,32,31,0.28)] ${className}`}>
      <div className="relative w-full h-full rounded-[2.1rem] bg-paper overflow-hidden text-ink">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-ink z-20" />
        {children}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: number }) {
  const tabs = ["Sporlar", "Harita", "Paylaş", "Bildirim", "Profil"];
  return (
    <div className="absolute bottom-0 inset-x-0 h-14 bg-paper border-t border-stone flex items-center justify-around px-2 z-10">
      {tabs.map((t, i) => (
        <span key={t} className={`flex flex-col items-center gap-1 text-[9px] font-medium ${i === active ? "text-ink" : "text-muted"}`}>
          <span className={`w-5 h-5 rounded-md ${i === 2 ? "bg-ink rounded-full" : i === active ? "bg-olive" : "bg-stone"}`} />
          {t}
        </span>
      ))}
    </div>
  );
}

export function MapScreen() {
  const pins: [number, number, string][] = [[30, 22, "#1F5D78"], [62, 30, "#2F5B45"], [45, 40, "#2E3130"], [75, 48, "#1F5D78"], [20, 52, "#2F5B45"], [55, 18, "#2E3130"], [38, 60, "#1F5D78"]];
  return (
    <Phone>
      <div className="absolute inset-0 bg-[#E8E4D8]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 35 C20 30 35 45 55 38 S85 25 100 32 V0 H0Z" fill="#CFE1E6" />
          <path d="M0 70 C25 62 45 78 70 66 S95 60 100 64" stroke="#D9CFBF" strokeWidth="1.2" fill="none" />
          <path d="M10 0 C15 30 30 50 25 100" stroke="#D9CFBF" strokeWidth="0.8" fill="none" />
        </svg>
        {pins.map(([x, y, c], i) => (
          <span key={i} className="absolute w-4 h-4 rounded-full border-[2.5px] border-white shadow" style={{ left: `${x}%`, top: `${y}%`, background: c }} />
        ))}
      </div>
      <div className="absolute top-10 inset-x-3 flex gap-1.5 overflow-hidden z-10">
        {["Tümü", "Yelken", "Hiking", "Kamp"].map((t, i) => (
          <span key={t} className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold shadow-sm ${i === 0 ? "bg-ink text-paper" : "bg-paper"}`}>{t}</span>
        ))}
      </div>
      <div className="absolute bottom-14 inset-x-0 h-[46%] bg-paper rounded-t-3xl shadow-[0_-8px_24px_rgba(0,0,0,0.12)] px-4 pt-2.5 z-10">
        <div className="mx-auto w-9 h-1 rounded-full bg-stone mb-3" />
        <p className="text-[11px] font-semibold mb-2">Bu bölgede 7 yer</p>
        {[["Belgrad Ormanı · Neşet Suyu", "Hiking · Kolay · 6 km"], ["Hedef Yelken", "Yelken · Eğitim"], ["Ormanlı Sahili", "Yamaç Paraşütü · Tandem"]].map(([a, b]) => (
          <div key={a} className="flex gap-2.5 items-center py-2 border-b border-stone/70">
            <span className="w-10 h-10 rounded-xl bg-surface shrink-0" />
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold truncate">{a}</span>
              <span className="block text-[10px] text-text-secondary">{b}</span>
            </span>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </Phone>
  );
}

export function ShareScreen() {
  return (
    <Phone>
      <div className="px-4 pt-11">
        <p className="text-[10px] text-muted">Faaliyet raporu</p>
        <p className="heading-section text-lg">Ne yaptın?</p>
        <div className="mt-3 flex gap-1.5 flex-wrap">
          {["Yelken", "Kano", "Hiking", "Dalış"].map((t, i) => (
            <span key={t} className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${i === 0 ? "bg-[#E0F2FE] text-[#0369A1]" : "bg-surface text-text-secondary"}`}>{t}</span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["#9DB7C2", "#C9B79F", "#B8C3A8"].map((c) => <span key={c} className="aspect-square rounded-xl" style={{ background: c }} />)}
        </div>
        {[["Yelken okulu / kulüp", "Ayvalık Sailing Academy"], ["Ne yaptın?", "Eğitim"], ["Rüzgâr", "Orta"], ["Suda geçen süre", "2–4 saat"]].map(([l, v]) => (
          <div key={l} className="mt-2 rounded-xl border border-stone bg-white/70 px-3 py-2">
            <span className="block text-[9px] text-muted uppercase tracking-wider">{l}</span>
            <span className="block text-[11px] font-semibold">{v}</span>
          </div>
        ))}
        <div className="mt-2 rounded-xl border border-stone bg-white/70 px-3 py-2 h-14 text-[10px] text-text-secondary">
          İlk gün rüzgâr tam kıvamındaydı; bumba uyarısını üç kez duydum…
        </div>
        <span className="mt-3 block rounded-full bg-ink text-paper text-center text-[11px] font-semibold py-2.5">Paylaş</span>
      </div>
      <TabBar active={2} />
    </Phone>
  );
}

export function NotificationScreen() {
  const items = [
    ["Hafta sonu fırsatı", "Cumartesi Şile'de rüzgâr hafif, hava açık. Kano için iyi bir gün.", "Perşembe 19:00"],
    ["Deniz seni takip etmeye başladı", "Profilini ziyaret et.", "2 sa"],
    ["Ece yeni bir rapor paylaştı", "Kaçkar'da ilk zirve denemesi", "Dün"],
    ["İlgi alanı özeti", "Yakınına 2 yeni yürüyüş rotası eklendi.", "Pazartesi"],
  ];
  return (
    <Phone>
      <div className="px-4 pt-11">
        <p className="heading-section text-lg mb-3">Bildirimler</p>
        {items.map(([t, b, d], i) => (
          <div key={t} className={`flex gap-2.5 py-3 border-b border-stone/70 ${i === 0 ? "bg-surface -mx-4 px-4" : ""}`}>
            <span className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${i === 0 ? "bg-gold" : "bg-olive"}`}>
              <LogoMark className="h-3 w-auto text-paper" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold">{t}</span>
              <span className="block text-[10px] text-text-secondary leading-snug">{b}</span>
              <span className="block text-[9px] text-muted mt-0.5">{d}</span>
            </span>
          </div>
        ))}
      </div>
      <TabBar active={3} />
    </Phone>
  );
}

export function ProfileScreen() {
  return (
    <Phone>
      <div className="px-4 pt-11">
        <div className="flex items-center gap-3">
          <span className="w-14 h-14 rounded-full bg-olive text-paper flex items-center justify-center heading-section text-xl">D</span>
          <span>
            <span className="block font-semibold text-sm">Deniz</span>
            <span className="block text-[10px] text-text-secondary">Yelken · Kano · Hiking</span>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 text-center">
          {[["12", "Rapor"], ["148", "Takipçi"], ["96", "Takip"]].map(([n, l]) => (
            <span key={l}><span className="block font-semibold text-sm">{n}</span><span className="block text-[9px] text-text-secondary">{l}</span></span>
          ))}
        </div>
        <span className="mt-4 block rounded-full border border-ink text-center text-[11px] font-semibold py-2">Takip et</span>
        <p className="mt-4 text-[10px] font-semibold text-muted uppercase tracking-wider">Zaman çizelgesi</p>
        {[["Eki 2026", "Yedigöller hafta sonu kampı", "#ECFCCB"], ["Eyl 2026", "Ölüdeniz tandem uçuşu", "#EDE9FE"], ["Ağu 2026", "Kekova deniz kanosu", "#D1FAE5"]].map(([d, t, c]) => (
          <div key={t} className="flex gap-2.5 items-center mt-2.5">
            <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
            <span className="flex-1 rounded-xl px-3 py-2" style={{ background: c }}>
              <span className="block text-[9px] text-text-secondary">{d}</span>
              <span className="block text-[11px] font-semibold">{t}</span>
            </span>
          </div>
        ))}
      </div>
      <TabBar active={4} />
    </Phone>
  );
}

// Site iki dilli: Türkçe kökte (/sporlar/…), İngilizce /en altında (/en/sporlar/…). Adres parçaları her iki dilde aynıdır,
// yalnızca önek değişir; böylece dil değiştirici her sayfanın karşılığını bulur.
// Rehber, rapor ve işletme metinleri Türkçedir; İngilizce sayfalarda arayüz çevrilir, içerik için not gösterilir.

export type Lang = "tr" | "en";
export const LANGS: Lang[] = ["tr", "en"];

/** Türkçe yolu verilen dile çevirir: localePath("en", "/sporlar/") → "/en/sporlar/" */
export const localePath = (lang: Lang, path: string) => (lang === "en" ? `/en${path === "/" ? "/" : path}` : path);

export const langFromPath = (pathname: string | null | undefined): Lang =>
  pathname === "/en" || pathname?.startsWith("/en/") ? "en" : "tr";

/** Yalnızca Türkçe olan sayfalar (yasal metinler, e-posta onayı) */
const TR_ONLY = ["/gizlilik/", "/kvkk/", "/kullanim-kosullari/", "/hesap-silme/", "/confirmed/", "/gorsel-kaynaklari/"];

/** Geçerli sayfanın diğer dildeki adresi; karşılığı yoksa o dilin ana sayfası. */
export function switchPath(pathname: string, target: Lang): string {
  const base = langFromPath(pathname) === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  if (target === "en" && TR_ONLY.some((p) => base.startsWith(p))) return "/en/";
  return localePath(target, base);
}

export const SPORT_NAMES_EN: Record<string, string> = {
  "Yelken": "Sailing",
  "Kano": "Kayaking",
  "Dağcılık": "Mountaineering",
  "Yamaç Paraşütü": "Paragliding",
  "Dalış": "Diving",
  "Kampçılık": "Camping",
  "Hiking": "Hiking",
  "Atlı Binicilik": "Horse riding",
};

export const sportName = (name: string, lang: Lang) => (lang === "en" ? SPORT_NAMES_EN[name] ?? name : name);

/** Katalogda sık geçen kısa değerler (zorluk, hizmet) */
const VALUES_EN: Record<string, string> = {
  "Kolay": "Easy", "Orta": "Moderate", "Kolay–orta": "Easy–moderate", "Zor": "Hard", "Orta–zor": "Moderate–hard",
  "Eğitim": "Lessons", "Rehberli tur": "Guided tour", "Kiralama": "Rental", "Ders": "Lessons",
  "Doğa turu": "Nature ride", "Çocuk / pony": "Kids / pony", "Halka": "Loop", "Tek yön": "One way", "Gidiş–dönüş": "Out and back",
};
export const valueText = (value: string, lang: Lang) => (lang === "en" ? VALUES_EN[value] ?? value : value);

/** Faaliyet raporu alan etiketleri (anahtar → İngilizce) */
const REPORT_FIELDS_EN: Record<string, string> = {
  date: "Date", location: "Place", activity: "Activity", boat: "Boat type", wind: "Wind", duration: "Duration",
  water: "Water", kayak: "Kayak type", guided: "Guided?", difficulty: "Difficulty", summit: "Summit?", team: "With",
  flight: "Flight type", conditions: "Conditions", diveType: "Dive type", depth: "Max depth", visibility: "Visibility",
  temp: "Water temperature", nights: "Nights", stay: "Stayed in", weather: "Weather", distance: "Distance", level: "Level",
};
export const reportFieldLabel = (key: string, trLabel: string | null, lang: Lang) =>
  lang === "en" ? REPORT_FIELDS_EN[key] ?? trLabel : trLabel;

export const locale = (lang: Lang) => (lang === "en" ? "en-GB" : "tr-TR");

export const dict = {
  tr: {
    nav: { sports: "Sporlar", places: "İşletmeler & Rotalar", map: "Harita", reports: "Faaliyet Raporları", finder: "Ne yapsam?", app: "Uygulama", cta: "Uygulamayı keşfet", menu: "Menüyü aç/kapat", home: "Ana sayfa" },
    footer: { blurb: "Türkiye'de doğa ve macera sporlarını keşfet, nereden başlayacağını öğren, deneyimini paylaş.", soon: "Mobil uygulama yakında →", explore: "Keşfet", legal: "Yasal", disclaimer: "Bilgiler işletmelerin kendi beyanıdır; gitmeden önce teyit edin." },
    promo: { eyebrow: "Unbound App · Yakında", title: "Daha fazlası mobil uygulamada", text: "Kendi faaliyet raporlarını fotoğraflarla paylaş, sporcuları takip et, beğendiğin raporları kaydet, hafta sonu havası uygun olduğunda bildirim al. Hepsi cebinde, çevrimdışı rehberlerle birlikte.", discover: "Uygulamayı keşfet →", soon: "Yakında" },
    chips: { beginner: "Yeni başlayanlara uygun", tandem: "Tandem", tandemLong: "Tandem hizmeti var", nearIstanbul: "İstanbul'a yakın" },
    card: { places: "mekan", guide: "başlangıç rehberi", tandemOffered: "Tandem uçuş yayımlanmış" },
    explorer: { search: "İşletme, rota, il veya ilçe ara", allSports: "Tüm sporlar", allRegions: "Tüm iller", near: "İstanbul ve çevresi", list: "Liste", map: "Harita", results: "sonuç", onMap: "haritada {n} konum (bazı alanlar kesin konum yayımlamıyor)", none: "Bu filtrelere uyan bir yer bulunamadı.", reset: "Filtreleri temizle", more: "Daha fazla göster", view: "Görünüm", sport: "Spor", region: "İl" },
    map: { label: "Harita", open: "Rehberi aç →", you: "Senin konumun" },
    reports: { all: "Tümü", filter: "Spora göre filtrele", error: "Raporlar şu an yüklenemiyor. Biraz sonra tekrar deneyin.", empty: "Henüz rapor yok.", firstOne: "İlk raporu uygulamadan sen paylaşabilirsin.", more: "Daha fazla rapor", loading: "Yükleniyor…", likes: "beğeni", sample: "Örnek hesap", official: "Doğrulanmış resmi hesap", anonymous: "Unbound kullanıcısı", notFound: "Bu rapor bulunamadı ya da yayından kaldırılmış.", backAll: "Tüm raporlar", photo: "Fotoğraf", openGuide: "rehberini aç →", place: "Yer" },
    guideNote: null as string | null,
  },
  en: {
    nav: { sports: "Sports", places: "Places & Routes", map: "Map", reports: "Activity Reports", finder: "What should I do?", app: "App", cta: "Discover the app", menu: "Toggle menu", home: "Home" },
    footer: { blurb: "Discover outdoor and adventure sports in Turkey, learn where to start and share your experience.", soon: "Mobile app coming soon →", explore: "Explore", legal: "Legal (Turkish)", disclaimer: "Details are as published by the businesses; confirm before you go." },
    promo: { eyebrow: "Unbound App · Coming soon", title: "There's more in the mobile app", text: "Share your own activity reports with photos, follow other athletes, save the reports you like and get a heads-up when the weekend weather looks good. All in your pocket, with guides that work offline.", discover: "Discover the app →", soon: "Coming soon" },
    chips: { beginner: "Beginner friendly", tandem: "Tandem", tandemLong: "Tandem flights offered", nearIstanbul: "Near Istanbul" },
    card: { places: "places", guide: "beginner guide", tandemOffered: "Tandem flights offered" },
    explorer: { search: "Search businesses, routes, provinces", allSports: "All sports", allRegions: "All provinces", near: "Istanbul area", list: "List", map: "Map", results: "results", onMap: "{n} on the map (some sites don't publish an exact location)", none: "No places match these filters.", reset: "Clear filters", more: "Show more", view: "View", sport: "Sport", region: "Province" },
    map: { label: "Map", open: "Open guide →", you: "Your location" },
    reports: { all: "All", filter: "Filter by sport", error: "Reports can't be loaded right now. Please try again shortly.", empty: "No reports yet.", firstOne: "You can share the first one from the app.", more: "More reports", loading: "Loading…", likes: "likes", sample: "Sample account", official: "Verified official account", anonymous: "Unbound user", notFound: "This report wasn't found or has been removed.", backAll: "All reports", photo: "Photo", openGuide: "Open the guide →", place: "Place" },
    guideNote: "Guides and reports are written in Turkish. Your browser's translate feature gives a quick English version." as string | null,
  },
};

export type Dict = (typeof dict)["tr"];
export const t = (lang: Lang): Dict => dict[lang];

import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { SportCard } from "@/components/site/SportCard";
import { PlaceCard } from "@/components/site/PlaceCard";
import { ReportFeed } from "@/components/site/ReportFeed";
import { AppPromo } from "@/components/site/AppPromo";
import { businessCount, places, provinceCount, sports, summarize } from "@/lib/catalog";
import { localePath, type Lang } from "@/i18n";

const COPY = {
  tr: {
    eyebrow: "Doğa ve macera sporları rehberi",
    title: ["Sınırlarının", "ötesine geç."],
    lead: "Yelkenden yamaç paraşütüne, kamptan dağcılığa: nereden başlayacağını öğren, sana uygun işletmeyi ve rotayı bul, gidenlerin raporlarını oku.",
    ctaPlaces: "İşletme ve rotaları keşfet", ctaFinder: "Ne yapsam? Bana öner",
    stats: ["spor", "işletme ve rota", "işletme iletişimi", "il"],
    sportsEyebrow: "Sporlar", sportsTitle: "Bir spor seç, gerisini birlikte çözelim.", allSports: "Tüm sporlar →",
    howEyebrow: "Nasıl çalışır?", howTitle: "İlk adımdan faaliyet raporuna.",
    steps: [
      ["Keşfet", "Sekiz spor, yüzlerce işletme ve rota. Haritada ya da listede, bölgeye ve seviyene göre süz."],
      ["Öğren", "Her sporun samimi bir başlangıç rehberi var: ilk gün ne olur, çantaya ne konur, kayıtta ne sorulur."],
      ["Git", "Her yerin rehberinde ulaşım, ücret, ekipman ve güvenlik başlıkları; işletmenin telefonu ve sitesi tek dokunuşta."],
      ["Paylaş", "Döndüğünde faaliyet raporunu yaz. Senden sonra gidecekler, rehberde yazmayan ayrıntıyı senden öğrenir."],
    ],
    featEyebrow: "İlk deneyim için", featTitle: "İstanbul'a yakın, yeni başlayanlara uygun.", seeAll: "Tümünü gör →",
    mapEyebrow: "Harita", mapTitle: "Yakınında ne var?", mapText: "Tüm işletme ve rotalar, spora göre renkli işaretlerle tek haritada.",
    finderEyebrow: "Ne yapsam?", finderTitle: "Üç soru, sana özel öneri.", finderText: "Zorluk, yol süresi ve ortam tercihine göre katalogdan sıralı öneriler.",
    finderChips: ["Görece kolay", "3 saate kadar", "Suda"],
    reportsEyebrow: "Faaliyet raporları", reportsTitle: "Sahadan son notlar.", allReports: "Tüm raporlar →",
  },
  en: {
    eyebrow: "Outdoor & adventure sports guide",
    title: ["Go beyond", "your bounds."],
    lead: "From sailing to paragliding, camping to mountaineering: learn where to start, find the right business or route for you, and read reports from people who've been there.",
    ctaPlaces: "Explore places & routes", ctaFinder: "What should I do? Suggest",
    stats: ["sports", "places & routes", "with business contacts", "provinces"],
    sportsEyebrow: "Sports", sportsTitle: "Pick a sport, we'll figure out the rest together.", allSports: "All sports →",
    howEyebrow: "How it works", howTitle: "From first step to activity report.",
    steps: [
      ["Discover", "Eight sports, hundreds of businesses and routes. Filter by region and level, on the map or in a list."],
      ["Learn", "Every sport has a friendly beginner guide: what the first day is like, what to pack, what to ask when booking."],
      ["Go", "Each place has a guide on getting there, prices, gear and safety, with the business's phone and website one tap away."],
      ["Share", "Write an activity report when you're back. Whoever goes next learns the details no guide mentions."],
    ],
    featEyebrow: "For your first time", featTitle: "Close to Istanbul, beginner friendly.", seeAll: "See all →",
    mapEyebrow: "Map", mapTitle: "What's near you?", mapText: "Every business and route on one map, colour-coded by sport.",
    finderEyebrow: "What should I do?", finderTitle: "Three questions, tailored suggestions.", finderText: "Ranked suggestions from the catalogue based on effort, travel time and setting.",
    finderChips: ["Fairly easy", "Up to 3 hours", "On water"],
    reportsEyebrow: "Activity reports", reportsTitle: "Latest notes from the field.", allReports: "All reports →",
  },
};

export function HomeView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const href = (p: string) => localePath(lang, p);
  // Her spordan bir tane, sonra kalan yerlerle 6'ya tamamla.
  const pool = places.filter((p) => p.beginnerFriendly && p.nearIstanbul && p.image && p.sections.length);
  const firstOfSport = pool.filter((p, i) => pool.findIndex((q) => q.sport === p.sport) === i);
  const featured = [...firstOfSport, ...pool.filter((p) => !firstOfSport.includes(p))].slice(0, 6).map((p) => summarize(p, lang));
  const stats = [sports.length, places.length, businessCount, provinceCount];

  return (
    <SiteShell lang={lang}>
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 sm:pt-28 sm:pb-32">
          <p className="text-meta text-olive mb-5">{c.eyebrow}</p>
          <h1 className="heading-display text-5xl sm:text-7xl lg:text-[5.5rem] text-ink max-w-3xl">{c.title[0]}<br />{c.title[1]}</h1>
          <p className="mt-7 text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed">{c.lead}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href={href("/mekanlar/")} className="btn-primary">{c.ctaPlaces}</Link>
            <Link href={href("/ne-yapsam/")} className="btn-secondary bg-paper/60">{c.ctaFinder}</Link>
          </div>
          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {stats.map((n, i) => (
              <div key={c.stats[i]}>
                <dt className="sr-only">{c.stats[i]}</dt>
                <dd className="heading-section text-3xl sm:text-4xl text-ink">{n}</dd>
                <dd className="text-sm text-text-secondary">{c.stats[i]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-meta text-olive mb-3">{c.sportsEyebrow}</p>
            <h2 className="heading-section text-4xl sm:text-5xl text-ink">{c.sportsTitle}</h2>
          </div>
          <Link href={href("/sporlar/")} className="text-sm font-semibold text-ink hover:text-olive">{c.allSports}</Link>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {sports.map((s) => <SportCard key={s.slug} sport={s} lang={lang} />)}
        </div>
      </section>

      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-meta text-gold mb-3">{c.howEyebrow}</p>
          <h2 className="heading-section text-4xl sm:text-5xl max-w-2xl">{c.howTitle}</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.map(([title, text], i) => (
              <li key={title} className="border-t border-paper/15 pt-6">
                <span className="text-gold font-semibold">0{i + 1}</span>
                <h3 className="heading-section text-2xl mt-2">{title}</h3>
                <p className="mt-3 text-paper/65 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-meta text-olive mb-3">{c.featEyebrow}</p>
            <h2 className="heading-section text-4xl sm:text-5xl text-ink">{c.featTitle}</h2>
          </div>
          <Link href={href("/mekanlar/")} className="text-sm font-semibold text-ink hover:text-olive">{c.seeAll}</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PlaceCard key={p.slug} place={p} lang={lang} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid gap-5 lg:grid-cols-2">
        <Link href={href("/harita/")} className="group card-hover relative overflow-hidden rounded-[2rem] bg-surface p-8 sm:p-10 min-h-72 flex flex-col justify-end">
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            {([[60,70,"#1F5D78"],[120,110,"#2F5B45"],[200,60,"#2E3130"],[260,140,"#1F5D78"],[320,90,"#2F5B45"],[90,170,"#2E3130"],[180,190,"#1F5D78"],[300,200,"#2E3130"],[350,50,"#2F5B45"],[230,100,"#2E3130"]] as [number, number, string][]).map(([x, y, col], i) => (
              <circle key={i} cx={x} cy={y} r="7" fill={col} stroke="#fff" strokeWidth="3" />
            ))}
          </svg>
          <div className="relative">
            <p className="text-meta text-olive mb-2">{c.mapEyebrow}</p>
            <h3 className="heading-section text-3xl text-ink">{c.mapTitle}</h3>
            <p className="mt-2 text-text-secondary max-w-sm">{c.mapText}</p>
          </div>
        </Link>
        <Link href={href("/ne-yapsam/")} className="group card-hover relative overflow-hidden rounded-[2rem] bg-olive text-paper p-8 sm:p-10 min-h-72 flex flex-col justify-end">
          <div className="absolute top-8 right-8 flex flex-col gap-2 items-end opacity-80" aria-hidden="true">
            {c.finderChips.map((x) => <span key={x} className="rounded-full bg-paper/15 px-3 py-1 text-sm">{x}</span>)}
          </div>
          <p className="text-meta text-gold mb-2">{c.finderEyebrow}</p>
          <h3 className="heading-section text-3xl">{c.finderTitle}</h3>
          <p className="mt-2 text-paper/75 max-w-sm">{c.finderText}</p>
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-meta text-olive mb-3">{c.reportsEyebrow}</p>
            <h2 className="heading-section text-4xl sm:text-5xl text-ink">{c.reportsTitle}</h2>
          </div>
          <Link href={href("/raporlar/")} className="text-sm font-semibold text-ink hover:text-olive">{c.allReports}</Link>
        </div>
        <ReportFeed lang={lang} limit={6} />
      </section>

      <AppPromo lang={lang} />
    </SiteShell>
  );
}

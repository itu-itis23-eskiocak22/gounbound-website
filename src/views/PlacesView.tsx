import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { PlacesExplorer } from "@/components/site/PlacesExplorer";
import { AppPromo } from "@/components/site/AppPromo";
import { businessCount, places, provinceCount, sports, summarize } from "@/lib/catalog";
import type { Lang } from "@/i18n";

export const PLACES_COPY = {
  tr: { eyebrow: "İşletmeler & Rotalar", title: "Gideceğin yeri bul, gitmeden önce bil.", meta: "Yelken okulları, kano işletmeleri, yamaç paraşütü alanları, kamp alanları, yürüyüş rotaları ve binicilik çiftlikleri: araştırılmış rehberlerle.",
    lead: `${provinceCount} ilde ${places.length} yer, bunların ${businessCount}'ünde işletme iletişim bilgisi. Her kayıt ulaşım, ücret, ekipman ve güvenlik başlıklarıyla araştırılmış bir rehber içerir.` },
  en: { eyebrow: "Places & Routes", title: "Find where to go, know before you go.", meta: "Sailing schools, kayak outfitters, paragliding sites, campsites, hiking routes and riding stables in Turkey, each with a researched guide.",
    lead: `${places.length} places across ${provinceCount} provinces, ${businessCount} with business contact details. Each one comes with a researched guide on getting there, prices, gear and safety.` },
};

export function PlacesView({ lang }: { lang: Lang }) {
  const c = PLACES_COPY[lang];
  return (
    <SiteShell lang={lang}>
      <PageHeader eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageHeader>
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <PlacesExplorer lang={lang} places={places.map((p) => summarize(p, lang))} sports={sports.map((s) => s.name)} />
      </section>
      <AppPromo lang={lang} />
    </SiteShell>
  );
}

import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { ReportFeed } from "@/components/site/ReportFeed";
import { AppPromo } from "@/components/site/AppPromo";
import { ContentNote } from "@/components/site/ContentNote";
import { places, sports } from "@/lib/catalog";
import type { Lang } from "@/i18n";
import { ReportDetail } from "./ReportDetail";

export const REPORTS_COPY = {
  tr: { eyebrow: "Faaliyet raporları", title: "Sahadan, yaşayanların ağzından.", meta: "Sporcuların paylaştığı faaliyet raporları: nereye gittiler, nasıl geçti, nelere dikkat etmeli.",
    lead: "Sporcular yaptıkları faaliyeti spora özel bilgilerle (rüzgâr, zorluk, süre, görüş…) ve fotoğraflarla paylaşır. Rehberde yazmayan küçük ayrıntılar çoğu zaman burada.",
    promoTitle: "Senin raporun da burada olsun", promoText: "Faaliyet raporu paylaşmak, beğenmek ve sporcuları takip etmek mobil uygulamada. Raporun yayınlandığı anda burada ve uygulamada herkes görebilir.",
    detailTitle: "Faaliyet Raporu", detailPromoTitle: "Beğen, kaydet, takip et", detailPromoText: "Raporları beğenmek, yazarını takip etmek ve kendi raporunu paylaşmak mobil uygulamada." },
  en: { eyebrow: "Activity reports", title: "Straight from the field.", meta: "Activity reports shared by athletes: where they went, how it went and what to watch out for.",
    lead: "Athletes share what they did with sport-specific details (wind, difficulty, duration, visibility…) and photos. The small details no guide mentions are usually here.",
    promoTitle: "Get your report on here too", promoText: "Sharing activity reports, liking them and following athletes happens in the mobile app. Once your report is published, everyone can see it here and in the app.",
    detailTitle: "Activity report", detailPromoTitle: "Like, save, follow", detailPromoText: "Liking reports, following their authors and sharing your own happens in the mobile app." },
};

export function ReportsView({ lang }: { lang: Lang }) {
  const c = REPORTS_COPY[lang];
  return (
    <SiteShell lang={lang}>
      <PageHeader eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageHeader>
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ContentNote lang={lang} className="mb-6" />
        <ReportFeed lang={lang} sportOptions={sports.map((s) => s.name)} limit={12} paginate readQuery />
      </section>
      <AppPromo lang={lang} title={c.promoTitle} text={c.promoText} />
    </SiteShell>
  );
}

// Rapor kimliği ?id= ile gelir; rapor istemcide canlı olarak okunur (yeni raporlar için yeniden derleme gerekmez).
export function ReportPageView({ lang }: { lang: Lang }) {
  const c = REPORTS_COPY[lang];
  const meta = {
    sports: sports.map((s) => ({ name: s.name, slug: s.slug, placeLabel: s.placeLabel, fields: s.reportFields })),
    places: Object.fromEntries(places.filter((p) => p.dbId).map((p) => [p.dbId!, p.slug])),
  };
  return (
    <SiteShell lang={lang}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <ContentNote lang={lang} className="mb-6" />
        <ReportDetail meta={meta} lang={lang} />
      </div>
      <AppPromo lang={lang} title={c.detailPromoTitle} text={c.detailPromoText} />
    </SiteShell>
  );
}

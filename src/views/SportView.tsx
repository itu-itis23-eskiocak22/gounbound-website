import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { GuideAccordion } from "@/components/site/GuideAccordion";
import { PlacesExplorer } from "@/components/site/PlacesExplorer";
import { ReportFeed } from "@/components/site/ReportFeed";
import { AppPromo } from "@/components/site/AppPromo";
import { ContentNote } from "@/components/site/ContentNote";
import { formatDate, placesOfSport, summarize, type Sport } from "@/lib/catalog";
import { localePath, reportFieldLabel, sportName, type Lang } from "@/i18n";

export function sportMetaTitle(sport: Sport, lang: Lang) {
  return lang === "en" ? `${sportName(sport.name, lang)} in Turkey: beginner guide, businesses and routes`
    : `${sport.name}: başlangıç rehberi, işletmeler ve rotalar`;
}
export function sportMetaDescription(sport: Sport, lang: Lang) {
  return lang === "en"
    ? `How to start ${sportName(sport.name, lang).toLowerCase()} in Turkey: a beginner guide, ${sport.placeCount} researched places and activity reports.`
    : sport.beginnerGuide.summary.slice(0, 158);
}

export function SportView({ sport, lang }: { sport: Sport; lang: Lang }) {
  const name = sportName(sport.name, lang);
  const list = placesOfSport(sport.name).map((p) => summarize(p, lang));
  const guide = sport.beginnerGuide;
  const en = lang === "en";
  const fields = sport.reportFields.map((f) => reportFieldLabel(f.key, f.label, lang)).join('", "');
  const c = en ? {
    crumbs: "Sports", guideBtn: "Beginner guide", placesBtn: `${list.length} places & routes`, reportsBtn: "Activity reports",
    guideEyebrow: "For beginners", guideTitle: `How to get started with ${name.toLowerCase()}`, reviewed: "Last reviewed",
    placesEyebrow: "Places & routes", placesTitle: `Where can you go ${name.toLowerCase()}?`,
    reportsEyebrow: "From the community", reportsTitle: `Latest ${name.toLowerCase()} reports`, allReports: "All reports →",
    empty: `No ${name.toLowerCase()} reports yet.`,
    promoTitle: `Keep your ${name.toLowerCase()} log in the app`,
    promoText: `When you share a ${name.toLowerCase()} report in the app you fill in sport-specific fields like "${fields || "date and place"}". Together with your photos and notes it's added to your profile timeline.`,
  } : {
    crumbs: "Sporlar", guideBtn: "Başlangıç rehberi", placesBtn: `${list.length} işletme ve rota`, reportsBtn: "Faaliyet raporları",
    guideEyebrow: "Yeni başlayanlar için", guideTitle: `${sport.name}'a nereden başlamalı?`, reviewed: "Son gözden geçirme",
    placesEyebrow: "İşletmeler & rotalar", placesTitle: `${sport.name} için nereye gidebilirsin?`,
    reportsEyebrow: "Topluluktan", reportsTitle: `Son ${sport.name.toLocaleLowerCase("tr-TR")} raporları`, allReports: "Tüm raporlar →",
    empty: `Henüz ${sport.name} raporu yok.`,
    promoTitle: `${sport.name} günlüğünü uygulamada tut`,
    promoText: `Uygulamada ${sport.name.toLocaleLowerCase("tr-TR")} raporu paylaşırken "${fields || "tarih ve yer"}" gibi spora özel alanları doldurursun; fotoğrafların ve notlarınla birlikte profilinde zaman çizelgesine eklenir.`,
  };

  return (
    <SiteShell lang={lang}>
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={sport.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-12 sm:pt-40 sm:pb-16 text-paper">
          <nav className="text-sm text-paper/70 mb-4" aria-label="Breadcrumb"><Link href={localePath(lang, "/sporlar/")} className="hover:text-paper">{c.crumbs}</Link> / {name}</nav>
          <h1 className="heading-display text-5xl sm:text-7xl">{name}</h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#rehber" className="rounded-full bg-paper text-ink px-4 py-2 font-semibold">{c.guideBtn}</a>
            <a href="#mekanlar" className="rounded-full border border-paper/40 px-4 py-2 font-semibold hover:bg-paper/10">{c.placesBtn}</a>
            <a href="#raporlar" className="rounded-full border border-paper/40 px-4 py-2 font-semibold hover:bg-paper/10">{c.reportsBtn}</a>
          </div>
          {sport.imageCaption && <p className="mt-8 text-xs text-paper/50">{sport.imageCaption}</p>}
        </div>
      </section>

      <section id="rehber" className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-meta text-olive mb-3">{c.guideEyebrow}</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-ink">{c.guideTitle}</h2>
          <p lang="tr" className="mt-5 text-text-secondary leading-relaxed">{guide.summary}</p>
          <p className="mt-4 text-xs text-muted">{c.reviewed}: {formatDate(guide.reviewedAt)}</p>
        </div>
        <div className="lg:col-span-8" lang="tr">
          <ContentNote lang={lang} className="mb-4" />
          <GuideAccordion sections={guide.sections} />
        </div>
      </section>

      <section id="mekanlar" className="bg-surface/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-meta text-olive mb-3">{c.placesEyebrow}</p>
          <h2 className="heading-section text-3xl sm:text-4xl text-ink mb-8">{c.placesTitle}</h2>
          <PlacesExplorer lang={lang} places={list} sports={[sport.name]} initialSport={sport.name} lockSport />
        </div>
      </section>

      <section id="raporlar" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-meta text-olive mb-3">{c.reportsEyebrow}</p>
            <h2 className="heading-section text-3xl sm:text-4xl text-ink">{c.reportsTitle}</h2>
          </div>
          <Link href={localePath(lang, `/raporlar/?spor=${encodeURIComponent(sport.name)}`)} className="text-sm font-semibold text-ink hover:text-olive">{c.allReports}</Link>
        </div>
        <ReportFeed lang={lang} sport={sport.name} limit={6} emptyText={c.empty} />
      </section>

      <AppPromo lang={lang} title={c.promoTitle} text={c.promoText} />
    </SiteShell>
  );
}

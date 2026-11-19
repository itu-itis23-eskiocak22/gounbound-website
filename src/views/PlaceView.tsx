import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { GuideAccordion } from "@/components/site/GuideAccordion";
import { PlacesMap } from "@/components/site/PlacesMap";
import { ReportFeed } from "@/components/site/ReportFeed";
import { PlaceCard, Chip } from "@/components/site/PlaceCard";
import { SportBadge } from "@/components/site/SportBadge";
import { AppPromo } from "@/components/site/AppPromo";
import { ContentNote } from "@/components/site/ContentNote";
import { formatDate, placesOfSport, summarize, type Place } from "@/lib/catalog";
import { localePath, sportName, t, valueText, type Lang } from "@/i18n";

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export function placeMetaTitle(place: Place, lang: Lang) {
  const where = [place.district, place.region].filter(Boolean).join(", ");
  return `${place.name}${where ? ` — ${where}` : ""} (${sportName(place.sport, lang)})`;
}
export function placeMetaDescription(place: Place, lang: Lang) {
  if (lang === "en") {
    const where = [place.district, place.region].filter(Boolean).join(", ");
    return `${sportName(place.sport, lang)}${where ? ` in ${where}` : ""}: ${place.name}. Getting there, prices, gear, safety and activity reports.`;
  }
  return (place.summary ?? `${place.sport} için ${place.name} rehberi.`).slice(0, 158);
}

const LABELS = {
  tr: { operator: "İşletme", address: "Adres", difficulty: "Zorluk", distance: "Mesafe", duration: "Süre", routeShape: "Rota tipi", start: "Başlangıç", flight: "Uçuş durumu", pilot: "Pilot seviyesi", altitude: "Rakım", camping: "Kamp tipi", season: "Sezon", services: "Hizmetler", price: "Ücret",
    crumbs: "İşletmeler & Rotalar", call: "Ara", website: "Web sitesi ↗", guide: "Gitmeden önce rehber", researched: "Araştırma tarihi",
    disclaimer: "Hizmet bilgileri bağlantılı kaynakların beyanıdır. Saat, ücret, izin ve rota koşullarını gitmeden teyit edin. Örnek planlar hazırlık önerisidir; canlı saha raporu değildir.",
    noGuide: "Bu nokta için ayrıntılı rehber hazırlanıyor. Aşağıdaki faaliyet raporlarına göz atabilir ya da uygulamadan ilk raporu sen paylaşabilirsin.",
    pin: "Haritadaki işaret yaklaşık konumdur; kesin buluşma noktasını işletmeden alın.", directions: "Yol tarifi al ↗",
    activities: "Burada yapılan faaliyetler", similar: "Benzer yerler", noReports: (n: string) => `${n} için henüz rapor yok.`,
    promoTitle: "Rehberi cebinde taşı", promoText: "Uygulamada bu rehber çevrimdışı da açılır. Gittiğinde faaliyet raporunu fotoğraflarla paylaş, benzer yerleri haritada keşfet." },
  en: { operator: "Operator", address: "Address", difficulty: "Difficulty", distance: "Distance", duration: "Duration", routeShape: "Route type", start: "Start", flight: "Flight status", pilot: "Pilot level", altitude: "Altitude", camping: "Camp type", season: "Season", services: "Services", price: "Price",
    crumbs: "Places & Routes", call: "Call", website: "Website ↗", guide: "Before you go", researched: "Researched",
    disclaimer: "Service details are as published by the linked sources. Confirm opening hours, prices, permits and route conditions before you go. Sample plans are suggestions, not live field reports.",
    noGuide: "A detailed guide for this spot is in the works. Have a look at the activity reports below, or share the first one from the app.",
    pin: "The map pin is approximate; get the exact meeting point from the business.", directions: "Get directions ↗",
    activities: "Activities here", similar: "Similar places", noReports: (n: string) => `No reports for ${n} yet.`,
    promoTitle: "Take the guide with you", promoText: "In the app this guide opens offline too. Share your activity report with photos once you've been, and find similar places on the map." },
};

export function PlaceView({ place, lang }: { place: Place; lang: Lang }) {
  const L = LABELS[lang];
  const c = t(lang).chips;
  const where = [place.district, place.region].filter(Boolean).join(", ");
  const nearby = placesOfSport(place.sport)
    .filter((p) => p.slug !== place.slug && (place.region ? p.region === place.region : true))
    .slice(0, 3).map((p) => summarize(p, lang));
  const v = (x?: string | null) => (x ? valueText(x, lang) : x);

  const facts: [string, string | undefined | null][] = [
    [L.operator, place.operator], [L.address, place.address], [L.difficulty, v(place.difficulty)],
    [L.distance, place.distanceLabel], [L.duration, place.durationLabel], [L.routeShape, v(place.routeShape)], [L.start, place.start],
    [L.flight, place.flightStatus], [L.pilot, place.pilotLevel], [L.altitude, place.altitude], [L.camping, place.campingStatus],
    [L.season, place.season], [L.services, place.services.map((s) => valueText(s, lang)).join(", ") || null], [L.price, place.priceLabel],
  ];
  const shownFacts = facts.filter(([, x]) => x);

  return (
    <SiteShell lang={lang}>
      <article>
        <header className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
          <nav className="text-sm text-text-secondary mb-5" aria-label="Breadcrumb">
            <Link href={localePath(lang, "/mekanlar/")} className="hover:text-ink">{L.crumbs}</Link>
            {" / "}
            <Link href={localePath(lang, `/sporlar/${place.sportSlug}/`)} className="hover:text-ink">{sportName(place.sport, lang)}</Link>
          </nav>
          <div className="grid gap-8 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <SportBadge sport={place.sport} lang={lang} />
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-ink mt-4">{place.name}</h1>
              {where && <p className="mt-3 text-lg text-text-secondary">{where}</p>}
              <div className="mt-5 flex flex-wrap gap-2">
                {place.beginnerFriendly && <Chip>{c.beginner}</Chip>}
                {place.tandemAvailable && <Chip>{c.tandemLong}</Chip>}
                {place.nearIstanbul && <Chip>{c.nearIstanbul}</Chip>}
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              {place.phone && <a href={telHref(place.phone)} className="btn-primary">{L.call} · {place.phone}</a>}
              {place.website?.startsWith("https://") && <a href={place.website} target="_blank" rel="noopener noreferrer" className="btn-secondary">{L.website}</a>}
            </div>
          </div>
          {place.image && (
            <figure className="mt-10">
              <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={place.image} alt="" className="w-full h-full object-cover" />
              </div>
              {place.imageCaption && <figcaption className="mt-2 text-xs text-muted">{place.imageCaption}</figcaption>}
            </figure>
          )}
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContentNote lang={lang} className="mb-6" />
            <div lang="tr">
              {place.summary && <p className="text-lg leading-relaxed text-ink/90">{place.summary}</p>}
              {place.highlights?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">{place.highlights.map((h) => <Chip key={h}>{h}</Chip>)}</div>
              ) : null}
              {/* Rehberli kayıtlarda bu maddeler ilk bölümde zaten var; yalnızca rehber yoksa göster. */}
              {!place.sections.length && place.facts?.length ? (
                <ul className="mt-6 grid gap-2">
                  {place.facts.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.95rem] text-text-secondary"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-olive shrink-0" />{f}</li>
                  ))}
                </ul>
              ) : null}
            </div>

            {place.sections.length > 0 ? (
              <section className="mt-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h2 className="heading-section text-2xl sm:text-3xl text-ink">{L.guide}</h2>
                  {place.reviewedAt && <span className="text-xs text-muted">{L.researched}: {formatDate(place.reviewedAt)}</span>}
                </div>
                <p className="text-sm text-text-secondary mb-5">{L.disclaimer}</p>
                <div lang="tr"><GuideAccordion sections={place.sections} /></div>
              </section>
            ) : !place.summary ? (
              <div className="rounded-3xl bg-surface p-6 text-text-secondary">{L.noGuide}</div>
            ) : null}
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-6">
            {shownFacts.length > 0 && (
              <dl className="rounded-3xl bg-white/70 border border-stone p-6 grid gap-4">
                {shownFacts.map(([k, x]) => (
                  <div key={k}><dt className="text-meta text-muted">{k}</dt><dd className="mt-1 text-[0.95rem] text-ink">{x}</dd></div>
                ))}
              </dl>
            )}
            {place.lat != null && (
              <div>
                <PlacesMap lang={lang} places={[summarize(place, lang)]} single className="h-72" />
                <p className="mt-2 text-xs text-muted leading-relaxed">{lang === "tr" && place.coordinateNote ? place.coordinateNote : L.pin}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`} target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-semibold text-ink hover:text-olive">{L.directions}</a>
              </div>
            )}
          </aside>
        </div>

        <section className="bg-surface/60 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h2 className="heading-section text-2xl sm:text-3xl text-ink mb-8">{L.activities}</h2>
            <ReportFeed lang={lang} locationIds={place.dbId ? [place.dbId] : []} limit={6} emptyText={L.noReports(place.name)} />
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16">
            <h2 className="heading-section text-2xl sm:text-3xl text-ink mb-8">{L.similar}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{nearby.map((p) => <PlaceCard key={p.slug} place={p} lang={lang} />)}</div>
          </section>
        )}
      </article>
      <AppPromo lang={lang} title={L.promoTitle} text={L.promoText} />
    </SiteShell>
  );
}

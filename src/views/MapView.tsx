import { SiteShell } from "@/components/site/SiteShell";
import { PlacesExplorer } from "@/components/site/PlacesExplorer";
import { places, sports, summarize } from "@/lib/catalog";
import { markerColor } from "@/lib/sportStyle";
import type { Lang } from "@/i18n";

export const MAP_COPY = {
  tr: { eyebrow: "Harita", title: "Yakınında ne var?", meta: "Türkiye genelindeki doğa sporu işletmeleri, uçuş alanları, kamp alanları ve yürüyüş rotaları haritada.", legend: ["Su sporları", "Kara ve doğa", "Kamp ve hava"] },
  en: { eyebrow: "Map", title: "What's near you?", meta: "Outdoor sports businesses, flying sites, campsites and hiking routes across Turkey on one map.", legend: ["Water sports", "Land & nature", "Camping & air"] },
};
const SAMPLES = ["Yelken", "Hiking", "Kampçılık"];

export function MapView({ lang }: { lang: Lang }) {
  const c = MAP_COPY[lang];
  return (
    <SiteShell lang={lang}>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-meta text-olive mb-2">{c.eyebrow}</p>
          <h1 className="heading-display text-4xl sm:text-5xl text-ink">{c.title}</h1>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm text-text-secondary">
          {c.legend.map((label, i) => (
            <li key={label} className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: markerColor(SAMPLES[i]) }} />{label}</li>
          ))}
        </ul>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <PlacesExplorer lang={lang} places={places.map((p) => summarize(p, lang))} sports={sports.map((s) => s.name)} initialView="map" />
      </section>
    </SiteShell>
  );
}

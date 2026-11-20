// Uygulamanın kataloğu (MyCrossApp → `npm run web:sync`). Bu dosya yalnızca sunucu bileşenlerinde,
// yani derleme anında kullanılır; tarayıcıya yalnızca sayfaların ihtiyaç duyduğu kısımlar gönderilir.
import catalog from "@/data/catalog.json";
import { t, valueText, type Lang } from "@/i18n";

export type GuideSection = { title: string; body: string };

export type Sport = {
  slug: string;
  name: string;
  image: string;
  beginnerGuide: { summary: string; reviewedAt: string; sections: GuideSection[] };
  reportFields: { key: string; label: string }[];
  placeLabel: string;
  placeCount: number;
};

export type Place = {
  slug: string;
  dbId: number | null;
  name: string;
  sport: string;
  sportSlug: string;
  region: string | null;
  district: string | null;
  lat: number | null;
  lng: number | null;
  image: string | null;
  summary: string | null;
  reviewedAt: string | null;
  sections: GuideSection[];
  priceLabel: string | null;
  beginnerFriendly: boolean | null;
  nearIstanbul: boolean | null;
  tandemAvailable: boolean | null;
  services: string[];
  difficulty?: string;
  distanceLabel?: string;
  durationLabel?: string;
  flightStatus?: string;
  pilotLevel?: string;
  campingStatus?: string;
  phone?: string;
  website?: string;
  address?: string;
  operator?: string;
  season?: string;
  altitude?: string;
  highlights?: string[];
  facts?: string[];
  coordinateNote?: string;
  start?: string;
  routeShape?: string;
};

/** Liste, filtre ve harita için hafif kayıt (tarayıcıya gönderilir). */
export type PlaceSummary = Pick<Place,
  "slug" | "name" | "sport" | "sportSlug" | "region" | "district" | "lat" | "lng" | "image" |
  "beginnerFriendly" | "nearIstanbul" | "tandemAvailable" | "difficulty"> & { tagline: string | null; dbId: number | null };

const data = catalog as unknown as { generatedAt: string; sports: Sport[]; places: Place[] };

export const CATALOG_DATE = data.generatedAt;
export const sports = data.sports;
export const places = data.places;

export const getSport = (slug: string) => sports.find((s) => s.slug === slug);
export const getSportByName = (name: string) => sports.find((s) => s.name === name);
export const getPlace = (slug: string) => places.find((p) => p.slug === slug);
export const placesOfSport = (name: string) => places.filter((p) => p.sport === name);

/** Kart altındaki tek satırlık kısa açıklama. İngilizcede yalnızca çevrilebilen kısa değerler gösterilir. */
export function taglineOf(p: Place, lang: Lang = "tr"): string | null {
  if (p.difficulty) {
    return lang === "en" ? valueText(p.difficulty, lang)
      : [p.difficulty, p.distanceLabel, p.durationLabel].filter(Boolean).join(" · ");
  }
  if (p.sport === "Yamaç Paraşütü") return p.tandemAvailable ? t(lang).card.tandemOffered : lang === "en" ? null : p.flightStatus ?? null;
  if (p.services.length) return p.services.map((s) => valueText(s, lang)).join(" · ");
  if (p.campingStatus && lang === "tr") return p.campingStatus;
  return null;
}

export function summarize(p: Place, lang: Lang = "tr"): PlaceSummary {
  return {
    slug: p.slug, name: p.name, sport: p.sport, sportSlug: p.sportSlug, region: p.region, district: p.district,
    lat: p.lat, lng: p.lng, image: p.image, beginnerFriendly: p.beginnerFriendly, nearIstanbul: p.nearIstanbul,
    tandemAvailable: p.tandemAvailable, difficulty: p.difficulty, tagline: taglineOf(p, lang), dbId: p.dbId,
  };
}

/** İşletmesi olan (telefon/web sitesi yayımlanmış) kayıt sayısı. */
export const businessCount = places.filter((p) => p.phone || p.website || p.operator).length;
export const provinceCount = new Set(places.map((p) => p.region).filter(Boolean)).size;

export const formatDate = (iso: string) => iso.split("-").reverse().join(".");

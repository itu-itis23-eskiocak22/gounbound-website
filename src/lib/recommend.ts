// Uygulamadaki src/data/activityRecommendation.ts ve src/lib/geo.ts'in web karşılığı (aynı kurallar).
import type { PlaceSummary } from "./catalog";
import { ENVIRONMENT } from "./sportStyle";
import { locale, type Lang } from "@/i18n";

export type Effort = "relaxed" | "challenging";
export type Travel = "upTo1h" | "upTo3h" | "any";
export type Environment = "land" | "water" | "air" | "any";
export type Coords = { lat: number; lng: number };

export const ISTANBUL: Coords = { lat: 41.0082, lng: 28.9784 };

const toRad = (d: number) => (d * Math.PI) / 180;
export function distanceKm(a: Coords, b: Coords) {
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

/** Kuş uçuşu mesafeden araçla yol süresi: yol ~%35 uzun, ilk 20 km 45 km/s, sonrası 95 km/s, +10 dk. */
export function driveHours(a: Coords, b: Coords) {
  const road = distanceKm(a, b) * 1.35;
  const city = Math.min(road, 20);
  return 0.15 + city / 45 + Math.max(0, road - 20) / 95;
}

const HIKING_EFFORT: Record<string, 1 | 2 | 3> = { "Kolay": 1, "Kolay–orta": 1, "Orta": 2, "Orta–zor": 3, "Zor": 3 };

function effortLevel(p: PlaceSummary): 1 | 2 | 3 {
  switch (p.sport) {
    case "Hiking": return HIKING_EFFORT[p.difficulty ?? ""] ?? 2;
    case "Kampçılık": return 1;
    case "Dağcılık": return 3;
    case "Yamaç Paraşütü": return p.tandemAvailable ? 2 : 3;
    case "Yelken":
    case "Kano": return p.beginnerFriendly ? 1 : 2;
    default: return 2;
  }
}

const MAX_HOURS: Record<Travel, number> = { upTo1h: 1, upTo3h: 3, any: Infinity };

export type Recommendation = { place: PlaceSummary; hours: number | null; reason: string };

export function recommend(places: PlaceSummary[], prefs: { effort: Effort; travel: Travel; environment: Environment }, origin: Coords, limit = 12, lang: Lang = "tr"): Recommendation[] {
  const max = MAX_HOURS[prefs.travel];
  const target = prefs.effort === "relaxed" ? 1 : 3;
  return places
    .flatMap((place) => {
      if (prefs.environment !== "any" && ENVIRONMENT[place.sport] !== prefs.environment) return [];
      const level = effortLevel(place);
      const score = Math.abs(level - target);
      if (score > 1) return [];
      const hours = place.lat != null && place.lng != null ? driveHours(origin, { lat: place.lat, lng: place.lng }) : null;
      if (hours === null ? max !== Infinity : hours > max) return [];
      const en = lang === "en";
      const effortLabel = level === 1 ? (en ? "Relaxed pace" : "Rahat tempo") : level === 2 ? (en ? "Moderate pace" : "Orta tempo") : (en ? "Challenging" : "Zorlayıcı");
      const reason = hours === null ? effortLabel
        : `${effortLabel} · ~${Math.max(0.5, Math.round(hours * 2) / 2).toLocaleString(locale(lang))} ${en ? "h drive" : "saat yol"}`;
      return [{ place, hours, score, reason }];
    })
    .sort((a, b) => a.score - b.score || (a.hours ?? Infinity) - (b.hours ?? Infinity))
    .slice(0, limit)
    .map(({ place, hours, reason }) => ({ place, hours, reason }));
}

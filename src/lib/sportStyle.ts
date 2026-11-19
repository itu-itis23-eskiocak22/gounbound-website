// Uygulamadaki src/data/sportColors.ts ile aynı renkler (kart rozetleri ve harita işaretleri).
export const SPORT_COLORS: Record<string, { bg: string; text: string }> = {
  "Yelken": { bg: "#E0F2FE", text: "#0369A1" },
  "Kano": { bg: "#D1FAE5", text: "#047857" },
  "Dağcılık": { bg: "#FEF3C7", text: "#B45309" },
  "Yamaç Paraşütü": { bg: "#EDE9FE", text: "#6D28D9" },
  "Dalış": { bg: "#CFFAFE", text: "#0E7490" },
  "Kampçılık": { bg: "#ECFCCB", text: "#4D7C0F" },
  "Hiking": { bg: "#E0EDDA", text: "#23492F" },
  "Atlı Binicilik": { bg: "#F5E6D8", text: "#8A4B1F" },
};

export const sportColor = (name: string | null | undefined) =>
  SPORT_COLORS[name ?? ""] ?? { bg: "#EFE9E2", text: "#4F5243" };

/** Haritada su (mavi), kara (yeşil), kamp ve hava (koyu) grupları. */
const WATER = "#1F5D78";
const LAND = "#2F5B45";
const DARK = "#2E3130";
const MARKER: Record<string, string> = {
  "Yelken": WATER, "Kano": WATER, "Dalış": WATER,
  "Dağcılık": LAND, "Hiking": LAND, "Atlı Binicilik": LAND,
  "Kampçılık": DARK, "Yamaç Paraşütü": DARK,
};
export const markerColor = (name: string) => MARKER[name] ?? DARK;

export const ENVIRONMENT: Record<string, "land" | "water" | "air"> = {
  "Hiking": "land", "Kampçılık": "land", "Dağcılık": "land", "Atlı Binicilik": "land",
  "Yelken": "water", "Kano": "water", "Dalış": "water",
  "Yamaç Paraşütü": "air",
};

// Faaliyet raporları canlı olarak Supabase'den okunur (yalnızca yayımlanmış raporlar, herkese açık anon anahtar).
import { locale, t, type Lang } from "@/i18n";

// Uygulamadaki experienceService ile aynı sorgu. Yazma işlemi yok: rapor paylaşmak uygulamaya özel.

export type Report = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  sport_type: string | null;
  location_id: number | null;
  sport_data: Record<string, unknown> | null;
  likes: number;
  created_at: string;
  profiles: { full_name: string | null; avatar_url: string | null; is_official?: boolean | null; is_sample?: boolean | null } | null;
  locations: { id: number; name: string; type: string } | null;
};

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const reportsConfigured = Boolean(URL && KEY);

const SELECT =
  "id,title,description,image_url,sport_type,location_id,sport_data,likes,created_at," +
  "profiles:profile_cards!experiences_user_id_fkey(full_name,avatar_url,is_official,is_sample)," +
  "locations(id,name,type)";

async function query(params: URLSearchParams): Promise<Report[]> {
  if (!URL || !KEY) throw new Error("Raporlar şu an yüklenemiyor.");
  params.set("select", SELECT);
  params.set("status", "eq.approved");
  const res = await fetch(`${URL}/rest/v1/experiences?${params}`, {
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
  });
  if (!res.ok) throw new Error("Raporlar şu an yüklenemiyor.");
  return res.json();
}

export function fetchReports({ sport, locationIds, limit = 24, offset = 0 }: {
  sport?: string; locationIds?: number[]; limit?: number; offset?: number;
} = {}) {
  const params = new URLSearchParams({ order: "created_at.desc", limit: String(limit), offset: String(offset) });
  if (sport) params.set("sport_type", `eq.${sport}`);
  if (locationIds?.length) params.set("location_id", `in.(${locationIds.join(",")})`);
  return query(params);
}

export async function fetchReport(id: string): Promise<Report | null> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const rows = await query(new URLSearchParams({ id: `eq.${id}`, limit: "1" }));
  return rows[0] ?? null;
}

/** Rapordaki fotoğraflar (birden fazla fotoğraf sport_data.photos içinde tutulur). */
export function reportPhotos(r: Report): string[] {
  const photos = r.sport_data?.photos;
  const list = Array.isArray(photos) && photos.length ? (photos as string[]) : r.image_url ? [r.image_url] : [];
  return list.filter((u) => typeof u === "string" && u.startsWith("https://"));
}

export const reportDate = (iso: string, lang: Lang = "tr") =>
  new Date(iso).toLocaleDateString(locale(lang), { day: "numeric", month: "long", year: "numeric" });

export const authorName = (r: Report, lang: Lang = "tr") => r.profiles?.full_name?.trim() || t(lang).reports.anonymous;

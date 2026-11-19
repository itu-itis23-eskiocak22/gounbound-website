// Supabase'in herkese açık (publishable) bağlantı bilgisi. Tarayıcıda kullanılmak üzere tasarlanmıştır ve mobil
// uygulamada da gömülüdür; yetkiler veritabanındaki RLS kurallarıyla korunur (site yalnızca yayımlanmış raporları okur).
// Gizli anahtarlar (service_role / sb_secret_) ASLA buraya yazılmaz.
// NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY ortam değişkenleri tanımlıysa onlar kullanılır.
export const SUPABASE_PUBLIC = {
  url: "https://uqahtiurqnmvujpynhyo.supabase.co",
  publishableKey: "sb_publishable_V76qRxxF4JVJMukddG7SJA_MXlfR70W",
};

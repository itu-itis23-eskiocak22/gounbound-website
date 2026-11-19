# gounbound.app — Unbound web sitesi

Next.js (App Router) ile statik dışa aktarım (`output: "export"`), Cloudflare Pages'te yayınlanır. Dil: Türkçe.

## Sayfalar

| Yol | İçerik | Veri |
|---|---|---|
| `/` | Ana sayfa | Katalog + canlı raporlar |
| `/sporlar/`, `/sporlar/<spor>/` | 8 spor, başlangıç rehberi, o sporun işletme/rotaları ve raporları | Katalog + canlı raporlar |
| `/mekanlar/`, `/mekanlar/<yer>/` | İşletme ve rotalar: arama, filtre, liste/harita; her yer için rehber sayfası | Katalog + canlı raporlar |
| `/harita/` | Tüm yerler haritada (Leaflet + OpenStreetMap) | Katalog |
| `/raporlar/`, `/raporlar/rapor/?id=` | Faaliyet raporu akışı ve detayı | Canlı (Supabase) |
| `/ne-yapsam/` | Uygulamadaki "ya da biz bulalım" öneri motoru | Katalog |
| `/uygulama/` | Mobil uygulamanın tanıtımı (yakında) | — |
| `/gizlilik/`, `/kvkk/`, `/kullanim-kosullari/`, `/hesap-silme/` | Yasal metinler | `src/legal` |

Web sitesinde hesap/profil yoktur; paylaşma, beğeni ve takip yalnızca uygulamadadır.

## Diller (TR / EN)

- Türkçe kökte (`/sporlar/…`), İngilizce `/en` altında (`/en/sporlar/…`); yol parçaları iki dilde aynıdır.
  Üst menüdeki TR/EN anahtarı aynı sayfanın karşılığına gider (sorgu parametreleri korunur).
- Her dilin kendi kök düzeni var: `src/app/(tr)/layout.tsx` ve `src/app/en/layout.tsx` (statik HTML'de doğru `<html lang>`).
  404 için `src/app/global-not-found.tsx`.
- Sayfa içerikleri `src/views/*View.tsx` içinde; rota dosyaları yalnızca `lang` verir. Arayüz metinleri `src/i18n/index.ts`.
- Rehberler, işletme bilgileri ve raporlar Türkçedir; İngilizce sayfalarda arayüz çevrilir ve içerik için not gösterilir.
- Yasal metinler yalnızca Türkçedir.

## Veri

- **Katalog** (`src/data/catalog.json`): otomatik üretilir, elle düzenlenmez. Uygulama reposunda (`MyCrossApp`)
  `npm run web:sync` çalıştır; uygulamadaki rehberli katalog ile bulut veritabanındaki lokasyonları birleştirip buraya yazar.
  Katalog değişince sync → build → yayın.
- **Faaliyet raporları** tarayıcıda canlı okunur (yalnızca yayımlanmış raporlar). Yeni rapor için yeniden derleme gerekmez.
  Gereken ortam değişkenleri (herkese açık anon anahtar; `.env.local` yerelde, Cloudflare Pages → Settings → Environment variables yayında):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Yasal metinler** (`src/legal`): uygulama reposunda `npm run legal:sync`.

## Geliştirme

```bash
npm run dev     # http://localhost:3000
npm run build   # statik çıktı: out/
npm run lint
```

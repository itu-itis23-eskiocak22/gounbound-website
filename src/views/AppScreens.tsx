import type { Lang } from "@/i18n";

// Uygulamanın gerçek ekran görüntüleri (iOS simülatörü, yerel test verisi). Dosyalar: public/app-screens/*.jpg
export type ScreenKey = "home" | "map" | "guide" | "share-pick" | "share-form" | "notifications" | "profile" | "login";

const CAPTIONS: Record<ScreenKey, Record<Lang, string>> = {
  home: { tr: "Ana ekran: sana en yakın rota ve bölgendeki tercihler", en: "Home: the nearest route and what people around you pick" },
  map: { tr: "Harita: spora göre renkli işaretler ve bölgedeki yerler", en: "Map: colour-coded pins and places in view" },
  guide: { tr: "Yer rehberi: adres, telefon ve kaynaklı bilgiler", en: "Place guide: address, phone and sourced details" },
  "share-pick": { tr: "Faaliyet raporu: önce sporunu seç", en: "Activity report: pick your sport first" },
  "share-form": { tr: "Spora özel rapor formu", en: "Sport-specific report form" },
  notifications: { tr: "Bildirimler: hava fırsatı, yeni yerler, takip", en: "Notifications: weather windows, new places, follows" },
  profile: { tr: "Profil: ilgi alanları, hedefler, zaman çizelgesi", en: "Profile: interests, goals and timeline" },
  login: { tr: "Giriş: e-posta, Google ya da misafir", en: "Sign in: email, Google or guest" },
};

export const screenCaption = (key: ScreenKey, lang: Lang) => CAPTIONS[key][lang];

/** Telefon çerçevesi içinde gerçek ekran görüntüsü. */
export function PhoneShot({ screen, lang, className = "", priority = false }: { screen: ScreenKey; lang: Lang; className?: string; priority?: boolean }) {
  return (
    <div className={`relative w-[260px] shrink-0 rounded-[2.6rem] bg-ink p-2.5 shadow-[0_30px_80px_rgba(30,32,31,0.28)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/app-screens/${screen}.jpg`}
        alt={screenCaption(screen, lang)}
        width={640}
        height={1391}
        loading={priority ? "eager" : "lazy"}
        className="block w-full h-auto rounded-[2.1rem]"
      />
    </div>
  );
}

const GALLERY: ScreenKey[] = ["login", "home", "map", "guide", "share-pick", "share-form", "notifications", "profile"];

/** Tüm ekranların yatay kaydırılan galerisi. */
export function ScreenGallery({ lang }: { lang: Lang }) {
  return (
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:-mx-8 sm:px-8">
      {GALLERY.map((s) => (
        <figure key={s} className="snap-start shrink-0 w-[220px]">
          <PhoneShot screen={s} lang={lang} className="!w-[220px] !rounded-[2.2rem] !p-2" />
          <figcaption className="mt-4 text-sm text-text-secondary leading-snug">{screenCaption(s, lang)}</figcaption>
        </figure>
      ))}
    </div>
  );
}

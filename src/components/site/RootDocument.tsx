import { fontClasses } from "@/lib/fonts";
import type { Lang } from "@/i18n";

const DESCRIPTION: Record<Lang, string> = {
  tr: "Türkiye'de yelken, kano, dağcılık, yamaç paraşütü, dalış, kamp, hiking ve atlı binicilik: başlangıç rehberleri, işletmeler, rotalar ve sporcuların faaliyet raporları.",
  en: "Sailing, kayaking, mountaineering, paragliding, diving, camping, hiking and horse riding in Turkey: beginner guides, businesses, routes and activity reports from athletes.",
};
export const siteDescription = (lang: Lang) => DESCRIPTION[lang];

/** Her dilin kök düzeni bunu kullanır: <html lang> statik HTML'de doğru dilde üretilir. */
export function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: "Unbound", url: "https://gounbound.app", inLanguage: lang, description: DESCRIPTION[lang] };
  return (
    <html lang={lang} className={`${fontClasses} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

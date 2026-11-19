import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { AppPromo } from "@/components/site/AppPromo";
import { places, summarize } from "@/lib/catalog";
import type { Lang } from "@/i18n";
import { ActivityFinder } from "./ActivityFinder";

export const FINDER_COPY = {
  tr: { eyebrow: "Ne yapsam?", title: "Karar veremedin mi? Biz bulalım.", meta: "Üç soruya cevap ver, sana uygun doğa sporu ve yeri yol süresine göre önerelim.",
    lead: "Ne kadar zorlanmak istediğini, ne kadar yol gidebileceğini ve nerede olmak istediğini söyle; katalogdan sana en uygun yerleri sıralayalım.",
    promoTitle: "Hafta sonu havası uygunsa haber verelim", promoText: "Uygulama, ilgi alanlarına ve kaba konumuna göre hafta sonu tahminine bakar; uygun bir fırsat varsa Perşembe akşamı bildirim gönderir." },
  en: { eyebrow: "What should I do?", title: "Can't decide? Let us pick.", meta: "Answer three questions and get outdoor sports and places in Turkey suggested by travel time.",
    lead: "Tell us how hard you want to push, how far you can travel and where you want to be; we'll rank the best matches from the catalogue.",
    promoTitle: "We'll tell you when the weekend looks good", promoText: "The app checks the weekend forecast against your interests and approximate location, and sends a heads-up on Thursday evening if there's a good window." },
};

export function FinderView({ lang }: { lang: Lang }) {
  const c = FINDER_COPY[lang];
  return (
    <SiteShell lang={lang}>
      <PageHeader eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageHeader>
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ActivityFinder lang={lang} places={places.map((p) => summarize(p, lang))} />
      </section>
      <AppPromo lang={lang} title={c.promoTitle} text={c.promoText} />
    </SiteShell>
  );
}

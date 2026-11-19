import { SiteShell } from "@/components/site/SiteShell";
import { PageHeader } from "@/components/site/PageHeader";
import { SportCard } from "@/components/site/SportCard";
import { AppPromo } from "@/components/site/AppPromo";
import { sports } from "@/lib/catalog";
import type { Lang } from "@/i18n";

export const SPORTS_COPY = {
  tr: { eyebrow: "Sporlar", title: "Hangi maceraya başlamak istersin?", lead: "Her spor için samimi bir başlangıç rehberi, araştırılmış işletme ve rotalar ve o sporu yapanların faaliyet raporları.", meta: "Sekiz doğa ve macera sporu için başlangıç rehberleri, işletmeler, rotalar ve faaliyet raporları." },
  en: { eyebrow: "Sports", title: "Which adventure do you want to start?", lead: "A friendly beginner guide for every sport, researched businesses and routes, and activity reports from the people who do it.", meta: "Beginner guides, businesses, routes and activity reports for eight outdoor and adventure sports in Turkey." },
};

export function SportsView({ lang }: { lang: Lang }) {
  const c = SPORTS_COPY[lang];
  return (
    <SiteShell lang={lang}>
      <PageHeader eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageHeader>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sports.map((s) => <SportCard key={s.slug} sport={s} lang={lang} large />)}
      </section>
      <AppPromo lang={lang} />
    </SiteShell>
  );
}

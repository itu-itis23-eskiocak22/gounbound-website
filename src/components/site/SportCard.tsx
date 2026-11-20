import Link from "next/link";
import type { Sport } from "@/lib/catalog";
import { localePath, sportName, t, type Lang } from "@/i18n";

export function SportCard({ sport, lang = "tr", large = false }: { sport: Sport; lang?: Lang; large?: boolean }) {
  const c = t(lang).card;
  return (
    <Link href={localePath(lang, `/sporlar/${sport.slug}/`)}
      className={`group relative block overflow-hidden rounded-3xl bg-ink ${large ? "aspect-[4/5]" : "aspect-[4/5] sm:aspect-[4/3]"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sport.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-paper">
        <h3 className="heading-section text-xl sm:text-2xl">{sportName(sport.name, lang)}</h3>
        <p className="text-sm text-paper/80 mt-1">{sport.placeCount} {c.places}<span className="hidden sm:inline"> · {c.guide}</span></p>
      </div>
    </Link>
  );
}

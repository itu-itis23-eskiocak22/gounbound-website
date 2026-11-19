import Link from "next/link";
import type { PlaceSummary } from "@/lib/catalog";
import { localePath, t, type Lang } from "@/i18n";
import { SportBadge } from "./SportBadge";

export function PlaceCard({ place, lang = "tr" }: { place: PlaceSummary; lang?: Lang }) {
  const where = [place.district, place.region].filter(Boolean).join(", ");
  const c = t(lang).chips;
  return (
    <Link href={localePath(lang, `/mekanlar/${place.slug}/`)} className="group card-hover flex flex-col rounded-3xl bg-white/70 border border-stone overflow-hidden">
      <div className="relative aspect-[16/10] bg-surface overflow-hidden">
        {place.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={place.image} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        )}
        <SportBadge sport={place.sport} lang={lang} className="absolute top-3 left-3 shadow-sm" />
      </div>
      <div className="p-5 flex flex-col gap-1.5 flex-1">
        <h3 className="font-semibold text-ink leading-snug">{place.name}</h3>
        {where && <p className="text-sm text-text-secondary">{where}</p>}
        {place.tagline && <p className="text-sm text-text-secondary/90 line-clamp-2">{place.tagline}</p>}
        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
          {place.beginnerFriendly && <Chip>{c.beginner}</Chip>}
          {place.tandemAvailable && <Chip>{c.tandem}</Chip>}
          {place.nearIstanbul && <Chip>{c.nearIstanbul}</Chip>}
        </div>
      </div>
    </Link>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-surface px-2.5 py-1 text-[0.72rem] font-medium text-text-secondary">{children}</span>;
}

import Link from "next/link";
import { authorName, reportDate, reportPhotos, type Report } from "@/lib/reports";
import { SportBadge } from "./SportBadge";
import { localePath, t, type Lang } from "@/i18n";

export function AuthorTag({ report, lang = "tr" }: { report: Report; lang?: Lang }) {
  const name = authorName(report, lang);
  const d = t(lang).reports;
  return (
    <span className="inline-flex items-center gap-2 min-w-0">
      <span className="w-7 h-7 shrink-0 rounded-full bg-olive text-paper text-xs font-semibold flex items-center justify-center">
        {name.charAt(0).toLocaleUpperCase("tr-TR")}
      </span>
      <span className="truncate font-medium text-ink">{name}</span>
      {report.profiles?.is_official && (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-[#10B981]" fill="currentColor" aria-label={d.official}>
          <path d="M12 2l2.4 2.1 3.2-.3.9 3.1 2.8 1.6-1 3 1 3-2.8 1.6-.9 3.1-3.2-.3L12 22l-2.4-2.1-3.2.3-.9-3.1L2.7 15.5l1-3-1-3 2.8-1.6.9-3.1 3.2.3L12 2zm-1.2 13.6 5.6-5.6-1.4-1.4-4.2 4.2-2-2-1.4 1.4 3.4 3.4z" />
        </svg>
      )}
      {report.profiles?.is_sample && <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-[0.65rem] text-text-secondary">{d.sample}</span>}
    </span>
  );
}

export function ReportCard({ report, lang = "tr" }: { report: Report; lang?: Lang }) {
  const photo = reportPhotos(report)[0];
  const place = report.locations?.name ?? (typeof report.sport_data?.location === "string" ? report.sport_data.location : null);
  return (
    <Link href={localePath(lang, `/raporlar/rapor/?id=${report.id}`)} className="group card-hover flex flex-col rounded-3xl bg-white/70 border border-stone overflow-hidden">
      {photo ? (
        <div className="aspect-[16/10] bg-surface overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        </div>
      ) : null}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-3">
          {report.sport_type ? <SportBadge sport={report.sport_type} lang={lang} /> : <span />}
          <span className="text-xs text-text-secondary">{reportDate(report.created_at, lang)}</span>
        </div>
        <h3 lang="tr" className="font-semibold text-ink leading-snug text-[1.05rem]">{report.title}</h3>
        {place && <p className="text-sm text-text-secondary -mt-1">{place}</p>}
        {report.description && <p className="text-sm text-text-secondary line-clamp-3 leading-relaxed">{report.description}</p>}
        <div className="mt-auto pt-3 flex items-center justify-between gap-3 text-sm border-t border-stone/70">
          <AuthorTag report={report} lang={lang} />
          <span className="shrink-0 inline-flex items-center gap-1 text-text-secondary" aria-label={`${report.likes} ${t(lang).reports.likes}`}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.3 4.5 7 4.5c2 0 3.6 1.1 5 2.8 1.4-1.7 3-2.8 5-2.8 3.7 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z" strokeLinejoin="round" /></svg>
            {report.likes}
          </span>
        </div>
      </div>
    </Link>
  );
}

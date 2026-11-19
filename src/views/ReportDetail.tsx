"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchReport, reportDate, reportPhotos, type Report } from "@/lib/reports";
import { AuthorTag } from "@/components/site/ReportCard";
import { SportBadge } from "@/components/site/SportBadge";
import { localePath, reportFieldLabel, sportName, t, type Lang } from "@/i18n";

type Meta = { sports: { name: string; slug: string; placeLabel: string; fields: { key: string; label: string }[] }[]; places: Record<number, string> };

export function ReportDetail({ meta, lang = "tr" }: { meta: Meta; lang?: Lang }) {
  const rd = t(lang).reports;
  const href = (p: string) => localePath(lang, p);
  const [report, setReport] = useState<Report | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [photo, setPhoto] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id") ?? "";
    fetchReport(id).then((r) => {
      setReport(r);
      if (r) document.title = `${r.title} | Unbound`;
    }).catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <Message lang={lang} text={rd.error} />;
  if (report === undefined) return <div className="h-96 rounded-3xl bg-surface animate-pulse" aria-busy="true" />;
  if (report === null) return <Message lang={lang} text={rd.notFound} />;

  const sport = meta.sports.find((s) => s.name === report.sport_type);
  const photos = reportPhotos(report);
  const data = (report.sport_data ?? {}) as Record<string, unknown>;
  const trLabel = (key: string) =>
    key === "date" ? "Tarih" : key === "location" ? sport?.placeLabel ?? "Yer" : sport?.fields.find((f) => f.key === key)?.label ?? null;
  const label = (key: string) => { const l = trLabel(key); return l ? reportFieldLabel(key, l, lang) : null; };
  const details = Object.entries(data)
    .filter(([k, v]) => k !== "photos" && v !== null && v !== "" && label(k))
    .map(([k, v]) => {
      let text = String(v);
      if (k === "date" && /^\d{4}-\d{2}-\d{2}$/.test(text)) text = text.split("-").reverse().join(".");
      if (k === "distance") text = `${text} km`;
      return { k, label: label(k)!, text };
    });
  const placeSlug = report.location_id ? meta.places[report.location_id] : undefined;

  return (
    <article>
      <nav className="text-sm text-text-secondary mb-6" aria-label="Konum">
        <Link href={href("/raporlar/")} className="hover:text-ink">{t(lang).nav.reports}</Link>
        {sport && <> / <Link href={href(`/sporlar/${sport.slug}/`)} className="hover:text-ink">{sportName(sport.name, lang)}</Link></>}
      </nav>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {report.sport_type && <SportBadge sport={report.sport_type} lang={lang} />}
        <span className="text-sm text-text-secondary">{reportDate(report.created_at, lang)}</span>
      </div>
      <h1 lang="tr" className="heading-display text-3xl sm:text-5xl text-ink">{report.title}</h1>
      <div className="mt-6 flex items-center justify-between gap-4 pb-6 border-b border-stone">
        <AuthorTag report={report} lang={lang} />
        <span className="text-sm text-text-secondary">{report.likes} {rd.likes}</span>
      </div>

      {photos.length > 0 && (
        <div className="mt-8">
          <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[photo]} alt={`${rd.photo} ${photo + 1}`} className="w-full h-full object-cover" />
          </div>
          {photos.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {photos.map((p, i) => (
                <button key={p} onClick={() => setPhoto(i)} aria-label={`${rd.photo} ${i + 1}`}
                  className={`w-20 h-14 shrink-0 rounded-xl overflow-hidden border-2 ${i === photo ? "border-ink" : "border-transparent opacity-70"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {details.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {details.map((d) => (
            <div key={d.k} className="rounded-2xl bg-white/70 border border-stone p-4">
              <dt className="text-meta text-muted">{d.label}</dt>
              <dd className="mt-1 font-medium text-ink">
                {d.k === "location" && placeSlug ? <Link className="underline underline-offset-4" href={href(`/mekanlar/${placeSlug}/`)}>{d.text}</Link> : d.text}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {report.description && (
        <div lang="tr" className="mt-8 text-[1.05rem] leading-relaxed text-ink/90 whitespace-pre-line">{report.description}</div>
      )}

      {placeSlug && !details.some((d) => d.k === "location") && (
        <Link href={href(`/mekanlar/${placeSlug}/`)} className="btn-secondary mt-8">{report.locations?.name} · {rd.openGuide}</Link>
      )}
    </article>
  );
}

function Message({ text, lang }: { text: string; lang: Lang }) {
  return (
    <div className="rounded-3xl bg-surface p-8 text-center">
      <p className="text-text-secondary">{text}</p>
      <Link href={localePath(lang, "/raporlar/")} className="btn-secondary mt-4">{t(lang).reports.backAll}</Link>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { fetchReports, type Report } from "@/lib/reports";
import { ReportCard } from "./ReportCard";
import { t, sportName, type Lang } from "@/i18n";

type Props = {
  lang?: Lang;
  sport?: string;
  locationIds?: number[];
  limit?: number;
  /** Spor seçici gösterilsin mi (yalnızca rapor akışı sayfasında) */
  sportOptions?: string[];
  emptyText?: string;
  paginate?: boolean;
  /** ?spor= parametresini başlangıç filtresi olarak oku */
  readQuery?: boolean;
};

type Result = { key: string; reports: Report[]; hasMore: boolean; error: string | null };

export function ReportFeed({ lang = "tr", sport, locationIds, limit = 6, sportOptions, emptyText, paginate = false, readQuery = false }: Props) {
  // undefined = henüz URL okunmadı (readQuery), null = tüm sporlar
  const [selected, setSelected] = useState<string | null | undefined>(readQuery ? undefined : sport ?? null);
  const [result, setResult] = useState<Result | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const d = t(lang).reports;
  const noLocations = locationIds !== undefined && locationIds.length === 0;
  const key = `${selected}|${locationIds?.join(",") ?? ""}|${limit}`;

  // Statik sayfada URL yalnızca tarayıcıda okunabildiğinden hidrasyondan sonra bir kez uygulanır.
  useEffect(() => {
    if (!readQuery) return;
    const s = new URLSearchParams(window.location.search).get("spor");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelected(s && sportOptions?.includes(s) ? s : null);
  }, [readQuery, sportOptions]);

  useEffect(() => {
    if (selected === undefined || noLocations) return;
    let cancelled = false;
    fetchReports({ sport: selected ?? undefined, locationIds, limit: limit + 1 })
      .then((rows) => { if (!cancelled) setResult({ key, reports: rows.slice(0, limit), hasMore: rows.length > limit, error: null }); })
      .catch((e: Error) => { if (!cancelled) setResult({ key, reports: [], hasMore: false, error: e.message }); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, noLocations]);

  const current = noLocations ? { key, reports: [], hasMore: false, error: null } : result?.key === key ? result : null;

  const loadMore = async () => {
    if (!current) return;
    setLoadingMore(true);
    try {
      const rows = await fetchReports({ sport: selected ?? undefined, locationIds, limit: limit + 1, offset: current.reports.length });
      setResult({ ...current, reports: [...current.reports, ...rows.slice(0, limit)], hasMore: rows.length > limit });
    } catch (e) {
      setResult({ ...current, error: (e as Error).message });
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div>
      {sportOptions && (
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap" role="tablist" aria-label={d.filter}>
          {[null, ...sportOptions].map((s) => (
            <button key={s ?? "all"} role="tab" aria-selected={(selected ?? null) === s} onClick={() => setSelected(s)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${(selected ?? null) === s ? "bg-ink text-paper border-ink" : "border-stone text-text-secondary hover:border-ink hover:text-ink"}`}>
              {s ? sportName(s, lang) : d.all}
            </button>
          ))}
        </div>
      )}

      {current?.error ? (
        <p className="rounded-2xl bg-surface px-5 py-6 text-text-secondary">{d.error}</p>
      ) : !current ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: Math.min(limit, 3) }).map((_, i) => <div key={i} className="h-64 rounded-3xl bg-surface animate-pulse" />)}
        </div>
      ) : current.reports.length === 0 ? (
        <p className="rounded-2xl bg-surface px-5 py-6 text-text-secondary">
          {emptyText ?? d.empty} {d.firstOne}
        </p>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {current.reports.map((r) => <ReportCard key={r.id} report={r} lang={lang} />)}
          </div>
          {paginate && current.hasMore && (
            <div className="mt-10 text-center">
              <button onClick={loadMore} disabled={loadingMore} className="btn-secondary disabled:opacity-50">
                {loadingMore ? d.loading : d.more}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

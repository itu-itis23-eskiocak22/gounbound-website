"use client";

import { useEffect, useMemo, useState } from "react";
import type { PlaceSummary } from "@/lib/catalog";
import { PlaceCard } from "./PlaceCard";
import { PlacesMap } from "./PlacesMap";
import { sportName, t, type Lang } from "@/i18n";

const NEAR = "near-istanbul";
const PAGE = 24;

type Props = {
  lang?: Lang;
  places: PlaceSummary[];
  sports: string[];
  initialSport?: string;
  /** Spor sayfasında spor seçici gizlenir */
  lockSport?: boolean;
  initialView?: "list" | "map";
};

/** Uygulamadaki rota ekranlarının çoklu filtresi: arama, spor, bölge ve özellikler. */
export function PlacesExplorer({ lang = "tr", places, sports, initialSport, lockSport = false, initialView = "list" }: Props) {
  const d = t(lang).explorer;
  const c = t(lang).chips;
  const [sport, setSport] = useState<string | undefined>(initialSport);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [beginner, setBeginner] = useState(false);
  const [tandem, setTandem] = useState(false);
  const [view, setView] = useState<"list" | "map">(initialView);
  const filterKey = [sport, region, search, beginner, tandem].join("|");
  // Filtre değişince sayfalama başa döner: gösterilen adet, ait olduğu filtreyle birlikte tutulur.
  const [paging, setPaging] = useState({ key: filterKey, shown: PAGE });
  const shown = paging.key === filterKey ? paging.shown : PAGE;

  // Bağlantıyla gelen ?spor= ve ?gorunum=harita parametreleri. Statik sayfada URL yalnızca tarayıcıda
  // okunabildiğinden hidrasyondan sonra bir kez uygulanır (sunucu çıktısıyla uyumsuzluk olmaması için).
  useEffect(() => {
    if (lockSport) return;
    const q = new URLSearchParams(window.location.search);
    const s = q.get("spor");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (s && sports.includes(s)) setSport(s);
    if (q.get("gorunum") === "harita") setView("map");
  }, [lockSport, sports]);

  const regions = useMemo(() => {
    const pool = places.filter((p) => !sport || p.sport === sport);
    const counts = new Map<string, number>();
    pool.forEach((p) => p.region && counts.set(p.region, (counts.get(p.region) ?? 0) + 1));
    // Alfabetik: 50'yi aşan il listesinde aranan şehir kolayca bulunsun; adet seçenekte gösterilir.
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], "tr"));
  }, [places, sport]);

  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase("tr-TR");
    return places.filter((p) =>
      (!sport || p.sport === sport) &&
      (!region || (region === NEAR ? p.nearIstanbul === true : p.region === region)) &&
      (!beginner || p.beginnerFriendly === true) &&
      (!tandem || p.tandemAvailable === true) &&
      (!q || `${p.name} ${p.region ?? ""} ${p.district ?? ""} ${p.tagline ?? ""}`.toLocaleLowerCase("tr-TR").includes(q)));
  }, [places, sport, region, beginner, tandem, search]);

  const showTandem = !sport || sport === "Yamaç Paraşütü";
  const hasNear = places.some((p) => (!sport || p.sport === sport) && p.nearIstanbul);
  const located = filtered.filter((p) => p.lat != null).length;

  const reset = () => { if (!lockSport) setSport(undefined); setRegion(""); setSearch(""); setBeginner(false); setTandem(false); };

  return (
    <div>
      <div className="rounded-3xl bg-white/70 border border-stone p-4 sm:p-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 md:flex gap-3">
          <label className="relative col-span-2 md:flex-1">
            <span className="sr-only">{d.search}</span>
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" strokeLinecap="round" /></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={d.search}
              type="search" enterKeyHint="search"
              className="w-full rounded-full bg-paper border border-stone pl-12 pr-4 py-3 text-base outline-none focus:border-ink" />
          </label>
          {!lockSport && (
            <Select value={sport ?? ""} onChange={(v) => { setSport(v || undefined); setRegion(""); }} label={d.sport}>
              <option value="">{d.allSports}</option>
              {sports.map((s) => <option key={s} value={s}>{sportName(s, lang)}</option>)}
            </Select>
          )}
          <Select value={region} onChange={setRegion} label={d.region} className={`md:max-w-[240px] ${lockSport ? "col-span-2" : ""}`}>
            <option value="">{d.allRegions}</option>
            {hasNear && <option value={NEAR}>{d.near}</option>}
            {regions.map(([r, n]) => <option key={r} value={r}>{r} ({n})</option>)}
          </Select>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle on={beginner} set={setBeginner}>{c.beginner}</Toggle>
          {showTandem && <Toggle on={tandem} set={setTandem}>{c.tandemLong}</Toggle>}
          <div className="ml-auto flex shrink-0 rounded-full bg-surface p-1" role="tablist" aria-label={d.view}>
            {(["list", "map"] as const).map((v) => (
              <button key={v} role="tab" aria-selected={view === v} onClick={() => setView(v)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium ${view === v ? "bg-ink text-paper" : "text-text-secondary"}`}>
                {v === "list" ? d.list : d.map}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 mb-5 text-sm text-text-secondary" aria-live="polite">
        <strong className="text-ink">{filtered.length}</strong> {d.results}
        {view === "map" && filtered.length !== located && <> · {d.onMap.replace("{n}", String(located))}</>}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-3xl bg-surface p-8 text-center">
          <p className="text-text-secondary">{d.none}</p>
          <button onClick={reset} className="btn-secondary mt-4">{d.reset}</button>
        </div>
      ) : view === "map" ? (
        <PlacesMap lang={lang} places={filtered} className="h-[60vh] min-h-[360px] md:h-[65vh] md:min-h-[420px]" />
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, shown).map((p) => <PlaceCard key={p.slug} place={p} lang={lang} />)}
          </div>
          {shown < filtered.length && (
            <div className="mt-10 text-center">
              <button onClick={() => setPaging({ key: filterKey, shown: shown + PAGE })} className="btn-secondary">
                {d.more} ({filtered.length - shown})
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Toggle({ on, set, children }: { on: boolean; set: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={on} onClick={() => set(!on)}
      className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${on ? "bg-olive text-paper border-olive" : "border-stone text-text-secondary hover:border-ink hover:text-ink"}`}>
      {children}
    </button>
  );
}

/** Yerel seçici; mobilde telefonun kendi listesi açılır. Ok işareti kenara yapışmasın diye özel çizilir. */
function Select({ value, onChange, label, className = "", children }: { value: string; onChange: (v: string) => void; label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`relative min-w-0 ${className}`}>
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}
        className="w-full appearance-none truncate rounded-full bg-paper border border-stone pl-4 pr-10 py-3 text-base outline-none focus:border-ink">
        {children}
      </select>
      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </label>
  );
}

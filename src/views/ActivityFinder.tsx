"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PlaceSummary } from "@/lib/catalog";
import { ISTANBUL, recommend, type Coords, type Effort, type Environment, type Travel } from "@/lib/recommend";
import { SportBadge } from "@/components/site/SportBadge";
import { PlacesMap } from "@/components/site/PlacesMap";
import { localePath, type Lang } from "@/i18n";

type Q<T> = { title: string; options: { value: T; label: string; hint?: string }[] };

const QUESTIONS = {
  tr: {
    effort: { title: "Nasıl bir gün istiyorsun?", options: [
      { value: "relaxed", label: "Görece kolay", hint: "Keyifli, rahat tempo" },
      { value: "challenging", label: "Zorlayıcı", hint: "Kendimi sınamak istiyorum" }] } as Q<Effort>,
    travel: { title: "Ne kadar yol gidebilirsin?", options: [
      { value: "upTo1h", label: "1 saate kadar", hint: "Yakınlarda olsun" },
      { value: "upTo3h", label: "3 saate kadar", hint: "Günübirlik kaçamak" },
      { value: "any", label: "Fark etmez", hint: "Değerse uzağa da giderim" }] } as Q<Travel>,
    env: { title: "Nerede olmak istersin?", options: [
      { value: "land", label: "Karada" }, { value: "water", label: "Suda" }, { value: "air", label: "Havada" }, { value: "any", label: "Fark etmez" }] } as Q<Environment>,
    origin: "Başlangıç noktası", center: "İstanbul merkez", centerDenied: "İstanbul merkez (konum izni verilmedi)", mine: "Konumun",
    locating: "Konum alınıyor…", useMine: "Konumumu kullan", privacy: "Konumun yalnızca tarayıcında yol süresini tahmin etmek için kullanılır, hiçbir yere gönderilmez.",
    prompt: "Üç soruyu cevapla, sana uygun yerleri yol süresine göre sıralayalım.",
    none: "Bu tercihlere uyan bir yer bulamadık. Yol süresini artırmayı ya da \"Fark etmez\" seçeneğini dene.",
    estimate: "Yol süreleri kuş uçuşu mesafeden yapılan kaba tahminlerdir; gerçek süre trafik ve güzergâha göre değişir.",
  },
  en: {
    effort: { title: "What kind of day do you want?", options: [
      { value: "relaxed", label: "Fairly easy", hint: "Fun, relaxed pace" },
      { value: "challenging", label: "Challenging", hint: "I want to push myself" }] } as Q<Effort>,
    travel: { title: "How far can you travel?", options: [
      { value: "upTo1h", label: "Up to 1 hour", hint: "Somewhere close" },
      { value: "upTo3h", label: "Up to 3 hours", hint: "A day trip" },
      { value: "any", label: "Doesn't matter", hint: "I'll go far if it's worth it" }] } as Q<Travel>,
    env: { title: "Where do you want to be?", options: [
      { value: "land", label: "On land" }, { value: "water", label: "On water" }, { value: "air", label: "In the air" }, { value: "any", label: "Doesn't matter" }] } as Q<Environment>,
    origin: "Starting point", center: "Central Istanbul", centerDenied: "Central Istanbul (location not allowed)", mine: "Your location",
    locating: "Getting location…", useMine: "Use my location", privacy: "Your location is only used in your browser to estimate travel time and is never sent anywhere.",
    prompt: "Answer the three questions and we'll rank places that suit you by travel time.",
    none: "Nothing matches these preferences. Try a longer travel time or \"Doesn't matter\".",
    estimate: "Travel times are rough estimates from straight-line distance; real times depend on traffic and route.",
  },
};

export function ActivityFinder({ places, lang = "tr" }: { places: PlaceSummary[]; lang?: Lang }) {
  const c = QUESTIONS[lang];
  const [effort, setEffort] = useState<Effort | null>(null);
  const [travel, setTravel] = useState<Travel | null>(null);
  const [environment, setEnvironment] = useState<Environment | null>(null);
  const [origin, setOrigin] = useState<Coords>(ISTANBUL);
  const [originLabel, setOriginLabel] = useState(c.center);
  const [locating, setLocating] = useState(false);

  const done = effort && travel && environment;
  const resultsRef = useRef<HTMLDivElement>(null);
  const wasDone = useRef(false);
  // Telefonda sonuçlar soruların altında, ekran dışında kalır: üç soru ilk kez tamamlanınca sonuçlara kaydır.
  useEffect(() => {
    if (done && !wasDone.current && window.matchMedia("(max-width: 1023px)").matches) {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    wasDone.current = Boolean(done);
  }, [done]);
  const results = useMemo(
    () => (done ? recommend(places, { effort, travel, environment }, origin, 12, lang) : []),
    [done, effort, travel, environment, origin, places, lang]);

  const locate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => { setOrigin({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setOriginLabel(c.mine); setLocating(false); },
      () => { setLocating(false); setOriginLabel(c.centerDenied); },
      { maximumAge: 600000, timeout: 10000 });
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5 min-w-0 flex flex-col gap-8">
        <Question q={c.effort} value={effort} set={setEffort} n={1} />
        <Question q={c.travel} value={travel} set={setTravel} n={2} />
        <Question q={c.env} value={environment} set={setEnvironment} n={3} />
        <div className="rounded-2xl bg-surface p-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="text-text-secondary">{c.origin}: <strong className="text-ink">{originLabel}</strong></span>
          <button onClick={locate} disabled={locating} className="font-semibold text-ink underline underline-offset-4 disabled:opacity-50">
            {locating ? c.locating : c.useMine}
          </button>
        </div>
        <p className="text-xs text-muted -mt-4">{c.privacy}</p>
      </div>

      <div ref={resultsRef} className="lg:col-span-7 min-w-0 scroll-mt-20" aria-live="polite">
        {!done ? (
          <div className="h-full min-h-72 rounded-3xl border-2 border-dashed border-stone flex items-center justify-center p-8 text-center text-text-secondary">
            {c.prompt}
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-3xl bg-surface p-8 text-center text-text-secondary">
            {c.none}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <PlacesMap lang={lang} places={results.map((r) => r.place)} origin={origin} className="h-72" />
            <ol className="flex flex-col gap-3">
              {results.map((r, i) => (
                <li key={r.place.slug}>
                  <Link href={localePath(lang, `/mekanlar/${r.place.slug}/`)} className="card-hover flex gap-3 sm:gap-4 items-center rounded-2xl bg-white/70 border border-stone p-3 pr-4 sm:pr-5">
                    <span className="w-5 sm:w-8 shrink-0 text-center heading-section text-xl text-muted">{i + 1}</span>
                    {r.place.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={r.place.image} alt="" className="w-16 h-14 sm:w-20 sm:h-16 rounded-xl object-cover shrink-0" loading="lazy" />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink truncate">{r.place.name}</span>
                      <span className="block text-sm text-text-secondary truncate">{[r.place.district, r.place.region].filter(Boolean).join(", ")}</span>
                      <span className="block text-sm text-olive-dark mt-0.5">{r.reason}</span>
                    </span>
                    <span className="hidden sm:block shrink-0"><SportBadge sport={r.place.sport} lang={lang} /></span>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted">{c.estimate}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Question<T extends string>({ q, value, set, n }: { q: Q<T>; value: T | null; set: (v: T) => void; n: number }) {
  return (
    <fieldset className="min-w-0">
      <legend className="font-semibold text-ink mb-3"><span className="text-muted mr-2">{n}.</span>{q.title}</legend>
      <div className="grid grid-cols-2 gap-2">
        {q.options.map((o) => (
          <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => set(o.value)}
            className={`min-w-0 break-words text-left rounded-2xl border px-4 py-3 transition-colors ${value === o.value ? "bg-ink text-paper border-ink" : "bg-white/60 border-stone hover:border-ink"}`}>
            <span className="block font-semibold">{o.label}</span>
            {o.hint && <span className={`block text-xs mt-0.5 ${value === o.value ? "text-paper/70" : "text-text-secondary"}`}>{o.hint}</span>}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

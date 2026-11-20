"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import type { Map as LeafletMap, LayerGroup } from "leaflet";
import type { PlaceSummary } from "@/lib/catalog";
import { markerColor } from "@/lib/sportStyle";
import { localePath, sportName, t, type Lang } from "@/i18n";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

type Props = {
  lang?: Lang;
  places: PlaceSummary[];
  className?: string;
  /** Tek mekan detayında yakın zoom */
  single?: boolean;
  /** Ek nokta (ör. kullanıcının konumu) */
  origin?: { lat: number; lng: number } | null;
};

/** OpenStreetMap üzerinde spora göre renkli işaretler; uygulamadaki harita ekranının web karşılığı. */
export function PlacesMap({ lang = "tr", places, className = "h-[480px]", single = false, origin = null }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const layer = useRef<LayerGroup | null>(null);
  const d = t(lang).map;
  const located = places.filter((p) => p.lat != null && p.lng != null);
  const key = located.map((p) => p.slug).join("|") + (origin ? `@${origin.lat},${origin.lng}` : "");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !el.current) return;
      if (!map.current) {
        map.current = L.map(el.current, { scrollWheelZoom: false, attributionControl: true }).setView([39.0, 35.0], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map.current);
        map.current.on("focus", () => map.current?.scrollWheelZoom.enable());
        map.current.on("blur", () => map.current?.scrollWheelZoom.disable());
      }
      layer.current?.remove();
      const group = L.layerGroup().addTo(map.current);
      layer.current = group;
      const bounds: [number, number][] = [];
      for (const p of located) {
        const icon = L.divIcon({ className: "", html: `<div class="unbound-pin" style="background:${markerColor(p.sport)}"></div>`, iconSize: [18, 18], iconAnchor: [9, 9] });
        const where = [p.district, p.region].filter(Boolean).join(", ");
        L.marker([p.lat!, p.lng!], { icon, title: p.name }).addTo(group).bindPopup(
          `<div style="min-width:180px"><div style="font-size:11px;font-weight:600;color:${markerColor(p.sport)};text-transform:uppercase;letter-spacing:.06em">${esc(sportName(p.sport, lang))}</div>` +
          `<div style="font-weight:600;font-size:14px;margin:2px 0 2px">${esc(p.name)}</div>` +
          (where ? `<div style="color:#5F605A;font-size:12px">${esc(where)}</div>` : "") +
          (single ? "" : `<a href="${localePath(lang, `/mekanlar/${encodeURIComponent(p.slug)}/`)}" style="display:inline-block;margin-top:8px;font-weight:600;color:#1E201F">${d.open}</a>`) +
          `</div>`);
        bounds.push([p.lat!, p.lng!]);
      }
      if (origin) {
        L.circleMarker([origin.lat, origin.lng], { radius: 8, color: "#fff", weight: 3, fillColor: "#D7BB95", fillOpacity: 1 })
          .addTo(group).bindPopup(d.you);
        bounds.push([origin.lat, origin.lng]);
      }
      if (single && bounds.length === 1) map.current.setView(bounds[0], 11);
      else if (bounds.length) map.current.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 });
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, single, lang]);

  // Kutu boyutu değişince (telefon döndürme, adres çubuğu, liste↔harita geçişi) Leaflet karoları yeniden hesaplasın.
  useEffect(() => {
    if (!el.current || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => map.current?.invalidateSize({ pan: false }));
    ro.observe(el.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => () => { map.current?.remove(); map.current = null; }, []);

  return <div ref={el} className={`w-full rounded-3xl overflow-hidden border border-stone z-0 ${className}`} role="region" aria-label={d.label} tabIndex={0} />;
}

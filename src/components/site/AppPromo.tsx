import Link from "next/link";
import { LogoMark } from "../Logo";
import { localePath, t, type Lang } from "@/i18n";

export function StoreBadges({ dark = false, lang = "tr" }: { dark?: boolean; lang?: Lang }) {
  const soon = t(lang).promo.soon;
  const base = dark ? "border-paper/25 text-paper" : "border-ink/20 text-ink";
  return (
    <div className="flex flex-wrap gap-3">
      {[
        { label: "App Store", sub: soon, icon: <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z" /> },
        { label: "Google Play", sub: soon, icon: <path d="M4.6 2.8 13.9 12l-9.3 9.2c-.36-.2-.6-.6-.6-1.07V3.87c0-.47.24-.87.6-1.07zm10.4 10.3 2.3 2.3-10.6 6 8.3-8.3zm3.4-3.4 2.53 1.45c.72.42.72 1.3 0 1.72L18.4 14.3 15.9 12l2.5-2.3zM6.7 2.6l10.6 6-2.3 2.3-8.3-8.3z" /> },
      ].map((s) => (
        <span key={s.label} className={`inline-flex items-center gap-3 rounded-2xl border px-4 py-2.5 ${base}`} aria-label={`${s.label} — ${soon}`}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">{s.icon}</svg>
          <span className="leading-tight">
            <span className="block text-[0.65rem] uppercase tracking-wider opacity-60">{s.sub}</span>
            <span className="block font-semibold">{s.label}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

/** Sayfa sonlarındaki "daha fazlası uygulamada" bandı. */
export function AppPromo({ lang = "tr", title, text }: { lang?: Lang; title?: string; text?: string }) {
  const p = t(lang).promo;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 my-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-paper px-6 py-12 sm:px-12 sm:py-14">
        <LogoMark className="absolute -right-10 -bottom-12 h-64 w-auto text-paper/[0.05]" />
        <div className="relative max-w-2xl">
          <p className="text-meta text-gold mb-4">{p.eyebrow}</p>
          <h2 className="heading-section text-3xl sm:text-4xl">{title ?? p.title}</h2>
          <p className="mt-4 text-paper/70 leading-relaxed">
            {text ?? p.text}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <StoreBadges dark lang={lang} />
            <Link href={localePath(lang, "/uygulama/")} className="text-gold hover:text-paper font-semibold text-sm">{p.discover}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
